"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Sun() {
  const glowRef = useRef<THREE.Mesh>(null!);

  // Animate glow scale — mutate ref directly, no setState
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const s = 1 + 0.04 * Math.sin(t * 1.5);
    glowRef.current.scale.setScalar(s);
  });

  return (
    <group>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FF8C00"
          emissiveIntensity={1.2}
          roughness={0.4}
          metalness={0}
        />
      </mesh>

      {/* Animated glow corona */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.45, 32, 32]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Point light so planets receive sunlight */}
      <pointLight color="#FFF5E0" intensity={4} distance={300} decay={1.5} />
    </group>
  );
}
