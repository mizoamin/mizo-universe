"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";

// State management
import { useExperience } from "../../../engine/experienceStore";
import { useDeviceStore } from "../../../engine/deviceStore";

// UI Components
import PlanetCard from "../../ui/PlanetCard";

// 3D Components - Solar System
import TheSolarSystem from "../systems/TheSolarSystem";
import CinematicCameraController from "./CinematicCameraController";
import CinematicMode from "../CinematicMode";

// 3D Components - Jupiter Hub
import Jupiter from "../planets/Jupiter";
import JupiterMoonSystem from "../systems/JupiterSystem";
import SpatialPanel from "../../ui/SpatialPanel";
import JupiterCameraController from "./JupiterCameraController";
import { MOON_CONFIG } from "../../../config/jupiterConfig";

// Effects
import ShootingStars from "../effects/ShootingStars";
import BackgroundStars from "../effects/BackgroundStars";
import PostProcessing from "../effects/PostProcessing";
import LoadingScreen from "../../ui/LoadingScreen";

/**
 * U-03: Derives FOV from viewport aspect ratio and updates on every resize.
 * Lives inside <Canvas> to access useThree(). Returns null (no render output).
 * Aspect → FOV table covers: folded foldable, portrait, near-square inner,
 * standard 16:9, ultrawide, and Apple Vision Pro spatial window.
 */
function CameraFOVAdapter() {
  const { camera, gl } = useThree();

  useEffect(() => {
    function updateFOV() {
      const w = gl.domElement.clientWidth;
      const h = gl.domElement.clientHeight;
      if (h === 0) return;
      const aspect = w / h;

      let fov: number;
      if (aspect < 0.6) fov = 55;       // folded foldable cover (tall portrait)
      else if (aspect < 0.8) fov = 50;  // standard portrait phone
      else if (aspect < 1.3) fov = 45;  // near-square inner foldable unfolded
      else if (aspect < 1.9) fov = 40;  // standard 16:9 landscape / desktop
      else if (aspect < 2.4) fov = 35;  // ultrawide / Vision Pro spatial window
      else fov = 30;                     // extreme-wide spatial display

      const persp = camera as THREE.PerspectiveCamera;
      if (Math.abs(persp.fov - fov) > 0.5) {
        persp.fov = fov;
        persp.updateProjectionMatrix();
      }
    }

    updateFOV();
    window.addEventListener("resize", updateFOV);
    return () => window.removeEventListener("resize", updateFOV);
  }, [camera, gl]);

  return null;
}

type UniverseCanvasProps = {
  isIntroComplete: boolean;
};

export default function UniverseCanvas({ isIntroComplete }: UniverseCanvasProps) {
  const [activePlanet, setActivePlanet] = useState<{
    name: string;
    position: Vector3;
  } | null>(null);
  const [activeMoonId, setActiveMoonId] = useState<string | null>(null);

  const mode = useExperience((state) => state.mode);
  const profile = useDeviceStore((state) => state.profile);
  const resetExperience = useExperience((state) => state.resetExperience);

  const handleReset = () => {
    setActivePlanet(null);
    setActiveMoonId(null);
    resetExperience();
  };

  const setPlanetMoon = (moonId: string | null) => {
    setActiveMoonId(moonId);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100dvw",
        height: "100dvh",
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
      onDoubleClick={handleReset}
    >
      <Canvas
        shadows={profile.shadows ? "soft" : false}
        dpr={profile.dpr}
        camera={{ position: [0, 80, 160], fov: 40, near: 0.1, far: 20000 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
        onPointerMissed={handleReset}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 200, 1000]} />
        <ambientLight intensity={0.15} />

        <Suspense fallback={null}>
          {/* 🌟 BackgroundStars always present, speed changes with intro state */}
          <BackgroundStars
            targetSpeed={isIntroComplete ? 0.05 : 1.0}
            starCount={profile.starCount}
          />

          {/* U-03: Adaptive FOV based on viewport aspect ratio */}
          <CameraFOVAdapter />

          {/* 🛑 CinematicMode or Solar System, only mount after intro */}
          {isIntroComplete && (
            <>
              {/* 🌌 Background void sphere for reset hitbox */}
              <mesh
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
              >
                <sphereGeometry args={[9000, 32, 32]} />
                <meshBasicMaterial
                  side={THREE.BackSide}
                  transparent
                  opacity={0}
                  depthWrite={false}
                />
              </mesh>

              <ShootingStars />

              {/* 🪐 JUPITER HUB MODE */}
              {mode === "jupiter-hub" ? (
                <>
                  {/* Jupiter core + moons + spatial panels */}
                  <ambientLight intensity={0.4} color="#ffffff" />
                  <directionalLight
                    position={[100, 80, 100]}
                    intensity={1.2}
                    color="#ffffff"
                    castShadow
                  />

                  {/* Jupiter planet (procedural shader) */}
                  <Jupiter enableIdleRotation={true} />

                  {/* 4 moons in orbit */}
                  <JupiterMoonSystem
                    onMoonClick={(moonId) => {
                      setPlanetMoon(moonId);
                    }}
                    enableAnimation={true}
                  />

                  {/* Camera controller (cinematic transitions) */}
                  <JupiterCameraController selectedMoonId={activeMoonId} />

                  {/* Floating spatial panels */}
                  {activeMoonId && (
                    <>
                      {MOON_CONFIG.map((moon) => {
                        if (moon.id !== activeMoonId) return null;

                        return (
                          <SpatialPanel
                            key={moon.id}
                            position={[
                              Math.cos(Math.random() * Math.PI * 2) * 20,
                              10,
                              Math.sin(Math.random() * Math.PI * 2) * 20,
                            ]}
                            title={moon.displayName}
                            description={moon.description}
                            accentColor={moon.accentColor}
                            contentSlot={moon.contentSlot}
                            onClose={() => setPlanetMoon(null)}
                            enableParallax={true}
                          />
                        );
                      })}
                    </>
                  )}
                </>
              ) : mode === "cinematic" ? (
                <CinematicMode />
              ) : (
                <>
                  <CinematicCameraController focusTarget={activePlanet?.position || null} />
                  <TheSolarSystem onPlanetFocus={setActivePlanet} />
                </>
              )}

              {/* 🎬 Global cinematic post-processing stack */}
              {profile.postProcessing && <PostProcessing />}
            </>
          )}
        </Suspense>

        {/* OrbitControls — disabled in cinematic/jupiter-hub mode to avoid conflicts */}
        {isIntroComplete && mode !== "cinematic" && mode !== "jupiter-hub" && (
          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.05}
            minDistance={50}
            maxDistance={800}
            touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }}
          />
        )}
      </Canvas>

      {/* U-05: LoadingScreen auto-shows via useProgress while Three.js loads assets */}
      <LoadingScreen />

      {/* 🃏 2D UI Layer (PlanetCard always mounted, visibility managed by experienceStore) */}
      <PlanetCard />
    </div>
  );
}