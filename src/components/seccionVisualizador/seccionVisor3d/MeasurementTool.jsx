import React, { useState, useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';
import * as THREE from 'three';

function MeasurementTool({ active = false, unitScale = 1, onMeasure }) {
  const { gl, camera, scene } = useThree();

  /* ---------- Estado (solo lo que necesita re-render) ------------------- */
  const [currentPoints, setCurrentPoints] = useState([]); // 0 ó 1 punto
  const [measurements, setMeasurements] = useState([]);   // cotas definitivas

  /* ---------- Refs para lógica por frame -------------------------------- */
  const pointerNdc   = useRef({ x: 0, y: 0 });
  const raycaster    = useRef(new THREE.Raycaster());
  const hoverRef     = useRef(null);
  const previewRef   = useRef(null);
  const textsRef     = useRef([]);

  const markAsHelper = (obj) => {
    if (!obj) return;
    obj.userData.isHelper = true;
    if (Array.isArray(obj.children)) obj.children.forEach(markAsHelper);
  };

  const getHitPoint = () => {
    raycaster.current.setFromCamera(pointerNdc.current, camera);
    const hits = raycaster.current.intersectObjects(scene.children, true);
    const valid = hits.find((h) => !h.object.userData.isHelper);
    return valid ? valid.point.clone() : null;
  };

  useEffect(() => {
    if (!active) return;
    const handleMove = (e) => {
      const rect = gl.domElement.getBoundingClientRect();
      pointerNdc.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    gl.domElement.addEventListener('pointermove', handleMove);
    return () => gl.domElement.removeEventListener('pointermove', handleMove);
  }, [active, gl]);

  useEffect(() => {
    if (!active) return;
    const handleClick = (e) => {
      if (e.target !== gl.domElement) return;
      const point = getHitPoint();
      if (!point) return;

      setCurrentPoints((prev) => {
        if (prev.length === 0) return [point];
        if (prev.length === 1) {
          const p0 = prev[0], p1 = point;
          const dist = p0.distanceTo(p1) * unitScale;
          const mid  = p0.clone().add(p1).multiplyScalar(0.5);
          setMeasurements((m) => [...m, { p0, p1, dist, mid }]);
          if (onMeasure) onMeasure(dist);
          return [];
        }
        return [];
      });
    };

    gl.domElement.addEventListener('click', handleClick);
    return () => gl.domElement.removeEventListener('click', handleClick);
  }, [active, camera, gl, scene, unitScale, onMeasure]);

  useFrame(() => {
    const hitPoint = getHitPoint();

    /* Mover círculo de hover */
    if (hoverRef.current) {
      if (hitPoint) {
        hoverRef.current.visible = true;
        hoverRef.current.position.copy(hitPoint);
      } else {
        hoverRef.current.visible = false;
      }
    }

    /* Línea preview */
    if (currentPoints.length === 1 && previewRef.current) {
      if (hitPoint) {
        const pos = previewRef.current.geometry.attributes.position.array;
        pos[0] = currentPoints[0].x;
        pos[1] = currentPoints[0].y;
        pos[2] = currentPoints[0].z;
        pos[3] = hitPoint.x;
        pos[4] = hitPoint.y;
        pos[5] = hitPoint.z;
        previewRef.current.geometry.attributes.position.needsUpdate = true;
        previewRef.current.visible = true;
      } else {
        previewRef.current.visible = false;
      }
    }

    /* Texto mirando a cámara */
    textsRef.current.forEach((t) => t && t.quaternion.copy(camera.quaternion));
  });

  if (!active) return null;

  return (
    <>
      {/* -------------- Mediciones definitivas con círculos -------------- */}
      {measurements.map((m, idx) => (
        <group
          key={idx}
          onUpdate={markAsHelper}
          raycast={() => null}
        >
          {/* Línea principal */}
          <Line
            points={[
              [m.p0.x, m.p0.y, m.p0.z],
              [m.p1.x, m.p1.y, m.p1.z],
            ]}
            color="yellow"
            linewidth={2}
            toneMapped={false}
            depthTest={false}
            depthWrite={false}
            renderOrder={999}
          />

          {/* Círculos en extremos */}
          {[m.p0, m.p1].map((pos, i) => (
            <mesh
              key={i}
              position={pos}
              raycast={() => null}
            >
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial
                color="yellow"
                depthTest={false}
                depthWrite={false}
              />
            </mesh>
          ))}

          {/* Etiqueta de distancia */}
          <Text
            ref={(el) => (textsRef.current[idx] = el)}
            position={m.mid}
            fontSize={0.5}
            color="black"
            outlineWidth={0.1}
            outlineColor="white"
            anchorX="center"
            anchorY="middle"
            depthTest={false}
            depthWrite={false}
            renderOrder={999}
            billboard
            distanceFactor={8}
          >
            {m.dist.toFixed(2)} m
          </Text>
        </group>
      ))}

      {/* ------------- Círculo azul hover (inmutable) ---------------- */}
      <group
        ref={(el) => {
          hoverRef.current = el;
          markAsHelper(el);
        }}
        visible={false}
        raycast={() => null}
      >
        <mesh>
          <circleGeometry args={[0.05, 32]} />
          <meshBasicMaterial
            color="#87CEFA"
            transparent
            opacity={0.5}
            depthWrite={false}
          />
        </mesh>
        <lineLoop>
          <circleGeometry args={[0.05, 64]} /> {/* Modificador de yamaño y suvizador del circulo */}
          <lineBasicMaterial color="blue" />
        </lineLoop>
      </group>

      {/* ----------- Línea preview discontinua sin círculos --------- */}
      <line
        ref={(el) => {
          previewRef.current = el;
          markAsHelper(el);
        }}
        visible={false}
        raycast={() => null}
      >
        <bufferGeometry
          attributes={{
            position: new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3),
          }}
        />
        <lineDashedMaterial
          color="cyan"
          dashSize={0.1}
          gapSize={0.1}
          linewidth={1}
          depthTest={false}
          depthWrite={false}
        />
      </line>
    </>
  );
}

export default MeasurementTool;
