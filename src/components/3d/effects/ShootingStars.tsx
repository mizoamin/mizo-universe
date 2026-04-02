"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ShootingStars() {
  const groupRef = useRef<THREE.Group>(null);

  // 🛑 Gated: Only rotate if geometry exists (prevents wasted per-frame work on empty placeholder)
  useFrame(() => {
    if (groupRef.current && groupRef.current.children.length > 0) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* PLACEHOLDER: Shooting stars geometry will be added in Phase 5 (Texture Engine) */}
      {/* For now, this group is intentionally empty to prevent visual artifacts */}
      {/* When implemented, add particle system or trail geometries here */}
    </group>
  );
}