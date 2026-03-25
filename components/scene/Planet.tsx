"use client";

import { useRef, useState } from "react";
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
  /**
   * Optional click handler – supplied by the parent when the `planet-info-panel`
   * Amplitude experiment is in the "treatment" variant.  When absent the planet
   * is not interactive (control behaviour).
   */
  onSelect?: () => void;
}

/**
 * Planet – orbits the origin (Sun) at the given radius.
 *
 * Security notes:
 *  - No dangerouslySetInnerHTML.
 *  - All per-frame mutations use refs so useFrame mutations never trigger React
 *    re-renders (stable R3F performance pattern for this project).
 *  - Color is passed as a validated prop; no user-supplied HTML is rendered.
 *  - The optional onSelect callback is only wired when the experiment treatment
 *    is active, keeping the control variant's surface area identical to before.
 */
export default function Planet({
  orbitRadius,
  size,
  speed,
  color,
  initialAngle,
  axialTilt = 0,
  onSelect,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const angleRef = useRef<number>(initialAngle);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    angleRef.current += speed;
    const x = Math.cos(angleRef.current) * orbitRadius;
    const z = Math.sin(angleRef.current) * orbitRadius;
    meshRef.current.position.set(x, 0, z);
    meshRef.current.rotation.y += 0.01;
  });

  const isInteractive = Boolean(onSelect);

  return (
    <mesh
      ref={meshRef}
      rotation={[axialTilt, 0, 0]}
      onClick={onSelect}
      onPointerOver={isInteractive ? () => setHovered(true) : undefined}
      onPointerOut={isInteractive ? () => setHovered(false) : undefined}
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={hovered ? color : "#000000"}
        emissiveIntensity={hovered ? 0.4 : 0}
      />
    </mesh>
  );
}
