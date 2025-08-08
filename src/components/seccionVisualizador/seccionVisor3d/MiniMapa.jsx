import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, Suspense } from 'react';
import * as THREE from 'three';
function MiniModelo() {
  const { scene } = useGLTF('/models/5x6.glb');

  // Define el plano de corte horizontal en y = 0.2
  const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1.2);

  // Aplica el plano de corte a todos los materiales del modelo
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.clippingPlanes = [clippingPlane];
      child.material.clipShadows = true;
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={scene} scale={1} />;
}

function TopDownCamera({ mainCameraPosition }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(
      mainCameraPosition[0],
      5, // altura fija
      mainCameraPosition[2]
    );
    camera.up.set(0, 0, -1);
    camera.lookAt(mainCameraPosition[0], 0, mainCameraPosition[2]);
    camera.zoom = 50; // <-- Aumenta este valor para acercar la vista
    camera.updateProjectionMatrix();
  }, [camera, mainCameraPosition]);
  return null;
}

//Funcion para poner un marcador de posicion dentro del minimapa
function CameraMarker({ position, direction }) {
  // Normaliza y escala la dirección para la flecha
  const length = 1.2; // longitud máxima de la dirección
  const coneDistance = 0.4; // distancia deseada del cono al centro (ajusta este valor)

  let dir = [0, 0, 1];
  if (direction) {
    const v = new THREE.Vector3(...direction);
    v.y = 0; // Solo plano XZ
    v.normalize().multiplyScalar(length);
    dir = [v.x, 0, v.z];
  }
  

  return (
    <group>
      {/* Esfera marcador */}
      <mesh position={[position[0], 1.2, position[2]]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#3483fa" />
      </mesh>
      {/* Flecha de dirección */}
      <mesh
        position={[
          position[0] + dir[0] / 2,
          0.2,
          position[2] + dir[2] / 2
        ]}
        rotation={[0, Math.atan2(dir[0], dir[2]), 0]}
      >
        
      <meshStandardMaterial color="#3483fa" /> 
      </mesh>
      {/* Punta de flecha */}
      <mesh
        position={[
          position[0] + dir[0] * (coneDistance / length),
          1.2,
          position[2] + dir[2] * (coneDistance / length)
        ]}
        rotation={[Math.PI / 2, 0, -Math.atan2(dir[0], dir[2])]}
      >
        <coneGeometry args={[0.12, 0.25, 16]} />
        <meshStandardMaterial color="#3483fa" />
      </mesh>
    </group>
  );
}

export default function MiniMapa({ mainCameraPosition, mainCameraDirection }) {
  return (
    <div className="minimapa">
      <Canvas
        orthographic
        style={{ width: 250, height: 150, background: '#fff' }}
        gl={{ localClippingEnabled: true }}
      >
        <Suspense fallback={null}>
          <TopDownCamera mainCameraPosition={mainCameraPosition} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 30, 0]} intensity={1} />
          <MiniModelo />
          <CameraMarker position={mainCameraPosition} direction={mainCameraDirection} />
        </Suspense>
      </Canvas>
    </div>
  );
}