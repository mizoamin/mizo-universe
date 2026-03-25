"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Stars from "./Stars";
import Sun from "./Sun";
import Planet, { type PlanetProps } from "./Planet";

// Planets represent the three realms of Captain Mizo's universe
const PLANETS: PlanetProps[] = [
  {
    label: "Sports",
    orbitRadius: 6,
    size: 0.6,
    speed: 0.45,
    color: "#e85d04",
    emissive: "#c44d04",
    initialAngle: 0,
  },
  {
    label: "Business",
    orbitRadius: 9.5,
    size: 0.85,
    speed: 0.28,
    color: "#4361ee",
    emissive: "#2a44cc",
    initialAngle: Math.PI * 0.66,
  },
  {
    label: "Technology",
    orbitRadius: 13.5,
    size: 1.1,
    speed: 0.18,
    color: "#06d6a0",
    emissive: "#04a87f",
    initialAngle: Math.PI * 1.33,
  },
];

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <Stars />
      <Sun />
      {PLANETS.map((planet) => (
        <Planet key={planet.label} {...planet} />
      ))}
      <OrbitControls
        enablePan={false}
        minDistance={8}
        maxDistance={60}
        autoRotate
        autoRotateSpeed={0.4}
        enableDamping
        dampingFactor={0.08}
      />
      <Environment preset="night" />
    </>
  );
}

export default function SolarSystem() {
  return (
    <Canvas
      camera={{ position: [0, 18, 32], fov: 50 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <SceneContents />
      </Suspense>
    </Canvas>
  );
}
