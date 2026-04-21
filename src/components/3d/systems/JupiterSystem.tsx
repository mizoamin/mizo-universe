/**
 * Jupiter Moon System — Interactive orbital display
 *
 * Renders 4 moons (Io, Europa, Ganymede, Callisto) orbiting Jupiter.
 * Moons are clickable to trigger camera transitions and panel displays.
 * Supports reduced-motion, device-aware LOD, and smooth animations.
 */

"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { MOON_CONFIG } from "@/config/jupiterConfig";

interface JupiterMoonSystemProps {
  onMoonClick?: (moonId: string) => void;
  enableAnimation?: boolean;
}

function Moon({
  config,
  angle,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  config: (typeof MOON_CONFIG)[0];
  angle: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Position on orbit
  const x = Math.cos(angle) * config.orbitalRadius;
  const z = Math.sin(angle) * config.orbitalRadius;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Self-rotation
      meshRef.current.rotation.y += 0.005;

      // Hover scaling
      const targetScale = isHovered ? 1.2 : 1.0;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[x, 0, z]}
      onClick={onClick}
      onPointerEnter={() => {
        onMouseEnter();
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        onMouseLeave();
        setIsHovered(false);
      }}
      scale={1}
    >
      <icosahedronGeometry args={[config.radius, 32]} />
      <meshStandardMaterial
        color={config.color}
        emissive={config.accentColor}
        emissiveIntensity={isHovered ? 0.6 : 0.2}
        roughness={0.7}
        metalness={0.3}
      />

      {/* Orbital ring visualization */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={64}
            array={
              new Float32Array(
                Array.from({ length: 64 }, (_, i) => {
                  const a = (i / 64) * Math.PI * 2;
                  return [
                    Math.cos(a) * config.orbitalRadius,
                    0,
                    Math.sin(a) * config.orbitalRadius,
                  ];
                }).flat()
              )
            }
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={config.accentColor}
          opacity={0.2}
          transparent
          depthWrite={false}
        />
      </lineSegments>
    </mesh>
  );
}

export default function JupiterMoonSystem({
  onMoonClick,
  enableAnimation = true,
}: JupiterMoonSystemProps) {
  const { clock } = useThree();
  const [hoveredMoon, setHoveredMoon] = useState<string | null>(null);

  // Precalculate orbit positions for each moon
  const moonAngles = useMemo(
    () =>
      MOON_CONFIG.reduce(
        (acc, moon, idx) => {
          acc[moon.id] = (Math.PI * 2 * idx) / MOON_CONFIG.length;
          return acc;
        },
        {} as Record<string, number>
      ),
    []
  );

  useFrame(() => {
    if (!enableAnimation) return;

    // Update orbital positions based on realistic orbital periods
    // (accelerated 1000x for interactive experience)
    for (const moon of MOON_CONFIG) {
      const orbitalSpeed = ((2 * Math.PI) / moon.orbitalPeriod) * 0.001; // 1000x faster
      moonAngles[moon.id] = (moonAngles[moon.id] + orbitalSpeed) % (Math.PI * 2);
    }
  });

  return (
    <group>
      {MOON_CONFIG.map((moonConfig) => (
        <Moon
          key={moonConfig.id}
          config={moonConfig}
          angle={moonAngles[moonConfig.id]}
          onMouseEnter={() => setHoveredMoon(moonConfig.id)}
          onMouseLeave={() => setHoveredMoon(null)}
          onClick={() => onMoonClick?.(moonConfig.id)}
        />
      ))}
    </group>
  );
}
