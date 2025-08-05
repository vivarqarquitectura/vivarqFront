// Visor3d.jsx
import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import PlayerControls from './PlayerControls.jsx';
import MeasurementTool from './MeasurementTool';
import AnimatedCamera from './AnimatedCamera.jsx';

function Modelo({ visible, onLoaded }) {
  const gltf = useGLTF('/models/epicentro.glb');
  const modelRef = useRef();

  useEffect(() => {
    if (!gltf || !gltf.scene) return;
    const timeout = setTimeout(() => {
      if (modelRef.current) {
        onLoaded(); 
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [gltf, onLoaded]);

  return (
    <primitive ref={modelRef} object={gltf.scene} scale={1} visible={visible} />
  );
}

function Visor3d() {
  const [modeloCargado, setModeloCargado] = useState(false);
  const [mostrarModelo, setMostrarModelo] = useState(false);
  const animacionYaHecha = useRef(false); // ✅ controla que sea una vez

  const [startAnimacion, setStartAnimacion] = useState(false);

  useEffect(() => {
    if (modeloCargado && !animacionYaHecha.current) {
      const mostrarModeloTimer = setTimeout(() => {
        setMostrarModelo(true);
      }, 100);

      const iniciarCamaraTimer = setTimeout(() => {
        setStartAnimacion(true); // activa la animación
        animacionYaHecha.current = true; // ✅ nunca más
      }, 500);

      return () => {
        clearTimeout(mostrarModeloTimer);
        clearTimeout(iniciarCamaraTimer);
      };
    }
  }, [modeloCargado]);

  const handleAnimacionFinalizada = () => {
    animacionYaHecha.current = true;
    setStartAnimacion(false); // ⚠️ importante: resetear
  };

  return (
    <Canvas camera={{ position: [50, 200, 50], fov: 35 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />

      <Suspense fallback={null}>
        <Modelo visible={mostrarModelo} onLoaded={() => setModeloCargado(true)} />
      </Suspense>

      <OrbitControls />
      <PlayerControls />
      {/* <AnimatedCamera start={startAnimacion} onComplete={handleAnimacionFinalizada}/> */}
    </Canvas>
  );
}

export default Visor3d;
