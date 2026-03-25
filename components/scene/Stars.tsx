"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 5000;
const STAR_RADIUS = 300;

/** Generate star positions once at module load time (outside React render). */
function buildStarPositions(count: number, radius: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.5 + Math.random() * 0.5);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

const starPositions = buildStarPositions(STAR_COUNT, STAR_RADIUS);

/**
 * Stars – a randomised particle field that slowly rotates.
 *
 * Security notes:
 *  - Positions are generated once at module load, not during render.
 *  - Uses refs for per-frame mutations (no state re-renders).
 *  - No dangerouslySetInnerHTML.
 */
export default function Stars() {
  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((_state, delta) => {
    pointsRef.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[starPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.4} color="#ffffff" sizeAttenuation />
    </points>
  );
}
