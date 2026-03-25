"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlanetProps {
  /** Distance from the Sun in scene units */
  orbitRadius: number;
  /** Radius of the planet sphere */
  size: number;
  /** Revolution speed (radians per frame) */
  speed: number;
  /** Hex color string, e.g. "#4fc3f7" */
  color: string;
  /** Starting angle in radians – supply a deterministic value from the parent */
  initialAngle: number;
  /** Optional axial-tilt in radians */
  axialTilt?: number;
}

/**
 * Planet – orbits the origin (Sun) at the given radius.
 *
 * Security notes:
 *  - No dangerouslySetInnerHTML.
 *  - All per-frame mutations use refs so useFrame mutations never trigger React
 *    re-renders (stable R3F performance pattern for this project).
 *  - Color is passed as a validated prop; no user-supplied HTML is rendered.
 */
export default function Planet({
  orbitRadius,
  size,
  speed,
  color,
  initialAngle,
  axialTilt = 0,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const angleRef = useRef<number>(initialAngle);

  useFrame(() => {
    angleRef.current += speed;
    const x = Math.cos(angleRef.current) * orbitRadius;
    const z = Math.sin(angleRef.current) * orbitRadius;
    meshRef.current.position.set(x, 0, z);
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} rotation={[axialTilt, 0, 0]}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
