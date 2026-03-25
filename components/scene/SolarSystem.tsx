"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "./Sun";
import Stars from "./Stars";
import Planet from "./Planet";

/**
 * Planet configuration – purely static data, no user-supplied input.
 * initialAngle distributes planets evenly around the Sun at start.
 */
const TWO_PI = Math.PI * 2;
const PLANETS = [
  { id: "mercury", orbitRadius: 10, size: 0.4, speed: 0.02,  color: "#b5b5b5", initialAngle: 0 * (TWO_PI / 8) },
  { id: "venus",   orbitRadius: 15, size: 0.9, speed: 0.015, color: "#e8cda0", initialAngle: 1 * (TWO_PI / 8) },
  { id: "earth",   orbitRadius: 20, size: 1,   speed: 0.01,  color: "#4fc3f7", initialAngle: 2 * (TWO_PI / 8) },
  { id: "mars",    orbitRadius: 28, size: 0.6, speed: 0.008, color: "#c1440e", initialAngle: 3 * (TWO_PI / 8) },
  { id: "jupiter", orbitRadius: 45, size: 3.5, speed: 0.004, color: "#c88b3a", initialAngle: 4 * (TWO_PI / 8) },
  { id: "saturn",  orbitRadius: 65, size: 2.8, speed: 0.003, color: "#e4d191", initialAngle: 5 * (TWO_PI / 8) },
  { id: "uranus",  orbitRadius: 82, size: 1.8, speed: 0.002, color: "#7de8e8", initialAngle: 6 * (TWO_PI / 8), axialTilt: 1.7 },
  { id: "neptune", orbitRadius: 98, size: 1.7, speed: 0.001, color: "#5b5ddf", initialAngle: 7 * (TWO_PI / 8) },
] as const;

/**
 * SolarSystem – the main R3F canvas holding the entire 3D scene.
 *
 * Security notes:
 *  - All scene content is static / code-defined; no user input is rendered.
 *  - No dangerouslySetInnerHTML anywhere in the scene graph.
 *  - OrbitControls allows only orbit/zoom – no script injection surface.
 */
export default function SolarSystem() {
  return (
    <Canvas
      camera={{ position: [0, 60, 120], fov: 55 }}
      style={{ background: "#000008" }}
      aria-label="Interactive 3D solar system"
    >
      <Stars />
      <Sun />
      {PLANETS.map((p) => (
        <Planet
          key={p.id}
          orbitRadius={p.orbitRadius}
          size={p.size}
          speed={p.speed}
          color={p.color}
          initialAngle={p.initialAngle}
          axialTilt={"axialTilt" in p ? p.axialTilt : 0}
        />
      ))}
      <OrbitControls enablePan={false} maxDistance={200} minDistance={15} />
    </Canvas>
  );
}
