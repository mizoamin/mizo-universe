import React, { Suspense, useRef, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useExperience } from "@/engine/experienceStore";
import { planetsData, PlanetId } from "@/config/planetMetadata";
import * as THREE from "three";
import gsap from "gsap";

// Lazy load heavy assets
const CinematicPlanet = React.lazy(() => import("./CinematicPlanet"));

// Helper: Get next planet id
const planetIds: PlanetId[] = [
  "legacy", "ventures", "odyssey", "identity", "vision", "voice", "videogram", "library", "contact", "shield"
];

export default function CinematicHorizonMode() {
  const { mode, activePlanet, setPlanet } = useExperience();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState<PlanetId>("legacy");
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.SpotLight>(null);

  // Dip-and-Rise Animation
  const changePlanet = useCallback((nextPlanet: PlanetId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const mesh = meshRef.current;
    if (!mesh) return;
    gsap.to(mesh.position, {
      y: -130,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        setCurrentPlanet(nextPlanet);
        gsap.to(mesh.position, {
          y: -55,
          duration: 0.8,
          ease: "back.out(0.8)",
          onComplete: () => setIsTransitioning(false),
        });
      },
    });
  }, [isTransitioning]);

  // Rim Light color update
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.color.set(planetsData[currentPlanet].themeColor);
    }
  });

  // HUD Navigation (first 3 planets for now)
  const navPlanets: PlanetId[] = ["legacy", "ventures", "odyssey"];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
        <Suspense fallback={null}>
          <group>
            <CinematicPlanet ref={meshRef} planetId={currentPlanet} />
            <spotLight
              ref={lightRef}
              position={[0, 0, 40]}
              angle={0.7}
              penumbra={0.8}
              intensity={2.5}
              castShadow
            />
          </group>
        </Suspense>
      </Canvas>
      {/* Bilingual HUD */}
      <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 32 }}>
        {navPlanets.map((pid) => (
          <button
            key={pid}
            disabled={isTransitioning || currentPlanet === pid}
            onClick={() => changePlanet(pid)}
            style={{
              fontSize: 18,
              padding: "12px 24px",
              borderRadius: 8,
              background: currentPlanet === pid ? planetsData[pid].themeColor : "#222",
              color: currentPlanet === pid ? "#111" : "#fff",
              border: "none",
              cursor: isTransitioning ? "not-allowed" : "pointer",
              opacity: isTransitioning ? 0.6 : 1,
              transition: "background 0.3s, color 0.3s",
            }}
          >
            {planetsData[pid].ui.title} / {/* AR label placeholder */}
          </button>
        ))}
      </div>
    </div>
  );
}

// CinematicPlanet.tsx will be created to handle premium PBR materials and Odyssey's custom shader.
