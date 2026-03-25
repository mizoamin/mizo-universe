"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 4_000;

// Generated once at module load — no React re-render concerns
function buildStarGeometry() {
  const positions = new Float32Array(STAR_COUNT * 3);
  const colors = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 100 + Math.random() * 200;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    // Slight color variation: warm-white to blue-white
    const t = Math.random();
    colors[i * 3] = 0.8 + t * 0.2;
    colors[i * 3 + 1] = 0.85 + t * 0.1;
    colors[i * 3 + 2] = 0.9 + t * 0.1;
  }
  return { positions, colors };
}

const { positions: STAR_POSITIONS, colors: STAR_COLORS } = buildStarGeometry();

export default function Stars() {
  const meshRef = useRef<THREE.Points>(null!);

  // Slowly rotate the star field — mutate ref directly, no setState
  useFrame((_state, delta) => {
    meshRef.current.rotation.y += delta * 0.005;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[STAR_POSITIONS, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[STAR_COLORS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}
