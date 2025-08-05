// AnimatedCamera.jsx
import { useThree, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function AnimatedCamera({ start, onComplete }) {
  const { camera } = useThree();

  const initialPosition = new THREE.Vector3(50, 200, 50);
  const targetPosition = new THREE.Vector3(50, 25, 50);

  const isAnimating = useRef(false);
  const hasAnimated = useRef(false); // ✅ protección contra reinicio

  useEffect(() => {
    if (start && !hasAnimated.current) {
      camera.position.copy(initialPosition);
      camera.lookAt(0, 0, 0);
      isAnimating.current = true;
    }
  }, [start, camera]);

  useFrame(() => {
    if (!isAnimating.current || hasAnimated.current) return;

    camera.position.lerp(targetPosition, 0.02);
    camera.lookAt(0, 0, 0);

    if (camera.position.distanceTo(targetPosition) < 0.1) {
      camera.position.copy(targetPosition);
      camera.lookAt(0, 0, 0);
      isAnimating.current = false;
    if (onComplete) onComplete();
    }
  });

  return null;
}

export default AnimatedCamera;
