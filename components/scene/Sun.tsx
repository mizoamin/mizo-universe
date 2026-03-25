"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Sun – a self-illuminating sphere at the origin of the solar system.
 *
 * Security notes:
 *  - No dangerouslySetInnerHTML.
 *  - Per-frame self-rotation uses ref mutations only; no React state involved.
 *  - Uses meshStandardMaterial with an emissive property instead of injecting
 *    raw shader code from external sources.
 */
export default function Sun() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <>
      {/* Point light so planets are lit */}
      <pointLight intensity={2} distance={500} decay={1} />
      {/* Ambient fill so the dark sides are not completely black */}
      <ambientLight intensity={0.1} />

      <mesh ref={meshRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FF8C00"
          emissiveIntensity={1.5}
        />
      </mesh>
    </>
  );
}
