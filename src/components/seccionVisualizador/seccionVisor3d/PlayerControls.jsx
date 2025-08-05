// PlayerControls.jsx
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SPEED = 0.1;

export default function PlayerControls() {
  const { camera } = useThree();
  const keysPressed = useRef({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysPressed.current[e.key.toLowerCase()] = true;
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const direction = new THREE.Vector3();

    if (keysPressed.current['w'] || keysPressed.current['arrowup']) direction.z -= SPEED;
    if (keysPressed.current['s'] || keysPressed.current['arrowdown']) direction.z += SPEED;
    if (keysPressed.current['a'] || keysPressed.current['arrowleft']) direction.x -= SPEED;
    if (keysPressed.current['d'] || keysPressed.current['arrowright']) direction.x += SPEED;

    direction.applyEuler(camera.rotation); // mueve en la dirección que mira la cámara
    camera.position.add(direction);
  });

  return null;
}
