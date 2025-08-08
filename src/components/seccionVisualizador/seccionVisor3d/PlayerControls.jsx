// PlayerControls.jsx
import { useThree, useFrame } from '@react-three/fiber';
import { forwardRef, useEffect, useRef } from 'react';
import {PointerLockControls} from '@react-three/drei';
import * as THREE from 'three';

const SPEED = 2;

export default function PlayerControls({ activo, bloquear, onSalir }) {
  const { camera, gl } = useThree();
  const keysPressed = useRef({});
  const lockControlsRef = useRef();


  useEffect(() => {
    if (!activo) return;

    const handleKeyDown = (e) => {
      keysPressed.current[e.key.toLowerCase()] = true;
      if (e.key === 'ArrowUp') keysPressed.current['w'] = true;
    if (e.key === 'ArrowDown') keysPressed.current['s'] = true;
    if (e.key === 'ArrowLeft') keysPressed.current['a'] = true;
    if (e.key === 'ArrowRight') keysPressed.current['d'] = true;
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key.toLowerCase()] = false;
      if (e.key === 'ArrowUp') keysPressed.current['w'] = false;
    if (e.key === 'ArrowDown') keysPressed.current['s'] = false;
    if (e.key === 'ArrowLeft') keysPressed.current['a'] = false;
    if (e.key === 'ArrowRight') keysPressed.current['d'] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      keysPressed.current = {};
    };
  }, [activo]);

  useFrame((_, delta) => {
    if (!activo) return;
    //console.log('moviendo')
    const direction = new THREE.Vector3();
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();

    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    if (keysPressed.current['w']) direction.add(forward);
    
    
    if (keysPressed.current['s']) direction.sub(forward);

    if (keysPressed.current['a']) direction.sub(right);
    
    if (keysPressed.current['d']) direction.add(right);

    direction.normalize().multiplyScalar(SPEED * delta);
    camera.position.add(direction);

  });

  // Solo hacer lock si se pidió
  useEffect(() => {
    if (bloquear && lockControlsRef.current) {
      lockControlsRef.current.lock();
    }
  }, [bloquear]);


  // ESC → salir
  useEffect(() => {
    const handler = () => {
      if (onSalir) onSalir();
    };
    const current = lockControlsRef.current;
    if (current) {
      current.addEventListener('unlock', handler);
    }
    return () => {
      if (current) current.removeEventListener('unlock', handler);
    };
  }, [onSalir]);


  return <PointerLockControls ref={lockControlsRef} args={[camera, gl.domElement]}/>;
}
