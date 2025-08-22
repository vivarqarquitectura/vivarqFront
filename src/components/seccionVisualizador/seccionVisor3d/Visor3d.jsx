// Visor3d.jsx
import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import MeasurementTool from './MeasurementTool.jsx';
import PlayerControls from './PlayerControls.jsx';
import InfoProyecto from '../seccionVisor3d/InfoProyecto.jsx';
import SunSlider from './SunSlider.jsx';
/* import MiniMapa from './MiniMapa.jsx'; */
import ContextLossGuard from './ContextLossGuard.jsx'

//iconos
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaInfo } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";

//Estilos
import '../../../styles/components/seccionVisualizador/seccionVisor3d/enCanvas.css'


function Modelo() {
  const { scene } = useGLTF('./models/5x6.glb');
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={1} />;
}

function CameraTracker({ setMainCameraPosition, setMainCameraDirection }) {
  const { camera } = useThree();
  useFrame(() => {
    setMainCameraPosition([
      camera.position.x,
      camera.position.y,
      camera.position.z,
    ]);
    // Calcula la dirección de la cámara
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    setMainCameraDirection([dir.x, dir.y, dir.z]);
  });
  return null;
}

function Visor3d() {
  /* Estado para medir */
  const [medirActivo, setMedirActivo] = useState(false);
  /* Estado para caminar */
  const [caminarActivo, setCaminarActivo] = useState(false);
  /* Estado para manejar el bloqueo del mouse */
  const [bloqueoMouse, setBloqueoMouse] = useState(false);
  /* Estado que maneja el tipo de iluminación HDRI*/
  const [entorno, setEntorno] = useState('sunset');
  /* Estado que maneja el la orientacion solar*/
  const [sunAzimuth, setSunAzimuth] = useState(45); // Estado para el slider
  /* Estado para  manejar la posición de la cámara*/
  const [mainCameraPosition, setMainCameraPosition] = useState([-5, 1.5, 10]);
  const [mainCameraDirection, setMainCameraDirection] = useState([0, 0, -1]);
  /* Estado para manejar la visibilidad del panel InfoProyectos*/
  const [showInfo, setShowInfo] = useState(false);
  /* Estado para controlar el ContextLoss*/
  const [glKey, setGlKey] = useState(0);


  // Calcula la posición del sol en círculo horizontal
  const sunRadius = 15;
  const sunY = 10;
  const sunX = sunRadius * Math.cos((sunAzimuth * Math.PI) / 180);
  const sunZ = sunRadius * Math.sin((sunAzimuth * Math.PI) / 180);

  //Hook para posicionar la camara al caminar
  const cameraRef = useRef();

  const posicionInicialAlCaminar = [-5, 1.5, 10];
   // Este efecto escucha la tecla ESC
  useEffect(() => {
    const handler = () => {
      setCaminarActivo(false);
      setBloqueoMouse(false);
    };
    document.addEventListener('desactivarCaminar', handler);
    return () => document.removeEventListener('desactivarCaminar', handler);
  }, []);


  return (
    <>
      {/* Botón HTML superpuesto al canvas para medir el modelo */}
      <button className='btnRegla' title='Medir'
        onClick={() => setMedirActivo((prev) => !prev)}>
        {medirActivo ? <FaInfo size={20} /> : <TbRulerMeasure2 size={20} />}
      </button>

      {/* Botón HTML para habilitar la funcionalidad de caminar en el modelo */}
      <button className='btnCaminar' title='Caminar'
      onClick={() => {
        //Posicionamos la camara al inicio cuando hacemos click en el boton caminar
          if (cameraRef.current){
            cameraRef.current.position.set(...posicionInicialAlCaminar);
          }
          setCaminarActivo(true);  // activa PlayerControls
          setTimeout(() => setBloqueoMouse(true), 50); // trigger para lock manual
        }}
        
      >
        {caminarActivo ? <IoIosMan size={20} /> : <FaWalking size={20} />}
      </button>
      {/* Botón HTML para mostrar u ocultar información */}
      <button 
        className='btnInfo' 
        title='Información del proyecto'
        onClick={() => setShowInfo(prev => !prev)}
      >
        <FaInfo size={20} />
      </button>
      
      {/* Funcion para mostrar/ocultar el panel de InfoProyectos */}
      {showInfo && (
        <div className="panelInfo">
          <InfoProyecto />
        </div>
      )}
      
      {/* Funcion para mostrar/ocultar el selector de ambientes */}
      {showInfo && (
        <select 
        className='selectClima'
        onChange={(e) => setEntorno(e.target.value)}
        >
          <option value="forest">Bosque</option>
          <option value="sunset">Atardecer</option>
          <option value="night">Noche</option>
          <option value="city">Ciudad</option>
          <option value="warehouse">Interior Almacén</option>
          <option value="apartment">Interior Apartamento</option>
        </select> 
      )}
      
      {/* Funcion para mostrar/ocultar el Slider de orientación solar */}
      {showInfo && (
          <SunSlider value={sunAzimuth} onChange={setSunAzimuth} />
      )}


      {caminarActivo && (
        <div className='mensajeCaminar'>
          <p>
            Pulsa Escape para salir del modo caminar
          </p>
        </div>
      )}
      
      {/*<MiniMapa 
        mainCameraPosition={mainCameraPosition} 
        mainCameraDirection={mainCameraDirection} 
      /> */}
      <Canvas 
          key={glKey}
          dpr={[1, 1.5]}
          gl={{
              antialias: false,
              powerPreference: 'high-performance',
              preserveDrawingBuffer: false,
              stencil: false,
              alpha: true,
            }}
          shadows={{ type: THREE.PCFSoftShadowMap }}
          camera={{ position: [-5, 1.5, 10], fov: 65 }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
          style={{ background: '#fff' }}
          
      >
        {/* Componente que evita el Context Loss */}
        <ContextLossGuard
          onLost={() => {
            // Re-montar todo el Canvas suele ser la forma más limpia
            setGlKey((k) => k + 1);
          }}
          onRestored={() => {
            // opcional: ocultar toast, etc.
          }}
        />

        {/* Luces y helpers */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[sunX, sunY, sunZ]}
          intensity={1} 
          castShadow // <-- Esta luz proyecta sombras
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <CameraTracker 
          setMainCameraPosition={setMainCameraPosition} 
          setMainCameraDirection={setMainCameraDirection} 
        />
        {/* <axesHelper args={[5]} />  */}
        {/* <gridHelper args={[10, 10]} /> rejilla en el piso*/}


        {/* Modelo 3D */}
        <Suspense fallback={null}>
          <Modelo />
        </Suspense>

        {/* Controles de Caminar */}
        {caminarActivo ? (
          <PlayerControls
            activo={caminarActivo}
            bloquear={bloqueoMouse}
            onSalir={() => {
              setCaminarActivo(false);
              setBloqueoMouse(false);
            }}
          />
        ) : (
          <OrbitControls />
        )}
        {/* Herramienta de medición */}
        <MeasurementTool active={medirActivo} unitScale={1} />

        {/* Si comentamos "background", mantiene la iluminación pero quita el fondo del HDRI*/}
        <Environment preset={entorno}  /* background *//>
        
      </Canvas>
    </>
  );
}

export default Visor3d;
