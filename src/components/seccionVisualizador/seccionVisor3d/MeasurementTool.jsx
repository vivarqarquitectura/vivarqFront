import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export default function MeasurementTool() {
  const { camera, gl, scene } = useThree();

  const [points, setPoints] = useState([]);
  const [line, setLine] = useState(null);
  const [distance, setDistance] = useState(null);

  const handleClick = (event) => {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // plano horizontal
    const intersectPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersectPoint);

    setPoints((prev) => {
      const newPoints = [...prev, intersectPoint.clone()];
      if (newPoints.length === 2) {
        const dist = newPoints[0].distanceTo(newPoints[1]);
        setDistance(dist.toFixed(2));
      }
      return newPoints;
    });
  };

  // Dibuja la línea cuando hay dos puntos
  useEffect(() => {
    if (points.length === 2) {
      const material = new THREE.LineBasicMaterial({ color: 'red' });
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const newLine = new THREE.Line(geometry, material);
      scene.add(newLine);
      setLine(newLine);

      // Reinicia el estado después de un breve tiempo para permitir nuevas mediciones
      setTimeout(() => {
        setPoints([]);
        setDistance(null);
        scene.remove(newLine);
        newLine.geometry.dispose();
        newLine.material.dispose();
      }, 2000); // 2 segundos para mostrar la medida antes de reiniciar
    }
  }, [points, scene]);

  // Limpia todo al desmontarse
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.style.cursor = 'crosshair';
    gl.domElement.addEventListener('click', handleClick);

    return () => {
      gl.domElement.removeEventListener('click', handleClick);
      canvas.style.cursor = 'default';
      setPoints([]);
      setLine(null);
      setDistance(null);
    };
  }, [gl]);

  return (
    <>
      {points.length === 2 && distance && (
        <Html position={points[1]}>
          <div
            style={{
              background: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              border: '1px solid black',
              fontSize: '12px',
            }}
          >
            {distance} m
          </div>
        </Html>
      )}
    </>
  );
}