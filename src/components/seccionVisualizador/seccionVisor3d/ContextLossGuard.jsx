// ContextLossGuard.jsx
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function ContextLossGuard({ onLost, onRestored }) {
  const { gl, invalidate } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleLost = (e) => {
      // Obligatorio: si no haces preventDefault, no habrá 'restored'
      e.preventDefault();
      onLost?.(); // aquí puedes mostrar un toast/spinner
    };

    const handleRestored = () => {
      onRestored?.();
      invalidate(); // fuerza un frame
    };

    canvas.addEventListener('webglcontextlost', handleLost, false);
    canvas.addEventListener('webglcontextrestored', handleRestored, false);
    return () => {
      canvas.removeEventListener('webglcontextlost', handleLost, false);
      canvas.removeEventListener('webglcontextrestored', handleRestored, false);
    };
  }, [gl, invalidate, onLost, onRestored]);

  return null;
}
