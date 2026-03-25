"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";

export interface PlanetProps {
  /** Distance from the sun (orbit radius) */
  orbitRadius: number;
  /** Planet sphere radius */
  size: number;
  /** Orbital speed multiplier */
  speed: number;
  /** Surface color */
  color: string;
  /** Optional emissive tint */
  emissive?: string;
  /** Initial angular offset (radians) so planets don't start aligned */
  initialAngle?: number;
  /** Label shown as an HTML overlay */
  label: string;
}

export default function Planet({
  orbitRadius,
  size,
  speed,
  color,
  emissive = "#000000",
  initialAngle = 0,
  label,
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  // Stable orbit-ring geometry (points on a circle in the XZ plane)
  const orbitPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * orbitRadius, 0, Math.sin(a) * orbitRadius));
    }
    return pts;
  }, [orbitRadius]);

  // Angle stored in a ref — avoids any React re-renders during animation
  const angleRef = useRef(initialAngle);

  useFrame((_state, delta) => {
    // Advance angle
    angleRef.current += delta * speed;

    // Move the group along the orbit
    groupRef.current.position.x = Math.cos(angleRef.current) * orbitRadius;
    groupRef.current.position.z = Math.sin(angleRef.current) * orbitRadius;

    // Self-rotation
    meshRef.current.rotation.y += delta * speed * 2;
  });

  return (
    <>
      {/* Orbit ring (static, not inside the moving group) */}
      <Line
        points={orbitPoints}
        color="#ffffff"
        opacity={0.08}
        transparent
        lineWidth={0.5}
      />

      {/* Planet group — position driven by ref in useFrame */}
      <group ref={groupRef}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={0.3}
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>

        {/* HTML label rendered on top of the planet */}
        <Html
          center
          distanceFactor={20}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <span className="text-white text-xs font-semibold tracking-widest uppercase opacity-70 whitespace-nowrap drop-shadow-md">
            {label}
          </span>
        </Html>
      </group>
    </>
  );
}
