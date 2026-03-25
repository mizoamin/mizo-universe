"use client";

import { memo, useCallback, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "./Sun";
import Stars from "./Stars";
import Planet from "./Planet";
import PlanetInfoPanel from "@/components/PlanetInfoPanel";
import { useExperimentVariant } from "@/components/ExperimentProvider";
import { PLANETS, type PlanetData } from "@/lib/planets";
import { EXPERIMENT_FLAG_PLANET_INFO_PANEL } from "@/lib/experiment";

/**
 * PlanetItem – thin memoised wrapper so the onSelect callback is stable across
 * parent re-renders and Planet never needlessly re-renders.
 */
const PlanetItem = memo(function PlanetItem({
  planet,
  onSelect,
}: {
  planet: PlanetData;
  onSelect?: (p: PlanetData) => void;
}) {
  const handleSelect = useCallback(
    () => onSelect?.(planet),
    [onSelect, planet]
  );
  return (
    <Planet
      orbitRadius={planet.orbitRadius}
      size={planet.size}
      speed={planet.speed}
      color={planet.color}
      initialAngle={planet.initialAngle}
      axialTilt={planet.axialTilt ?? 0}
      onSelect={onSelect ? handleSelect : undefined}
    />
  );
});

/**
 * SolarSystem – the main R3F canvas holding the entire 3D scene.
 *
 * Experiment: `planet-info-panel`
 *  - control   → planets are not clickable (original behaviour).
 *  - treatment → clicking a planet opens an info panel overlay.
 *
 * Security notes:
 *  - All scene content is static / code-defined; no user input is rendered.
 *  - No dangerouslySetInnerHTML anywhere in the scene graph.
 *  - OrbitControls allows only orbit/zoom – no script injection surface.
 */
export default function SolarSystem() {
  const variant = useExperimentVariant(EXPERIMENT_FLAG_PLANET_INFO_PANEL);
  const isTreatment = variant === "treatment";

  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  const handlePlanetSelect = useCallback((planet: PlanetData) => {
    setSelectedPlanet(planet);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedPlanet(null);
  }, []);

  return (
    <>
      <Canvas
        camera={{ position: [0, 60, 120], fov: 55 }}
        style={{ background: "#000008" }}
        aria-label="Interactive 3D solar system"
      >
        <Stars />
        <Sun />
        {PLANETS.map((p) => (
          <PlanetItem
            key={p.id}
            planet={p}
            onSelect={isTreatment ? handlePlanetSelect : undefined}
          />
        ))}
        <OrbitControls enablePan={false} maxDistance={200} minDistance={15} />
      </Canvas>

      {/* Info panel – rendered outside the canvas so it sits above the WebGL layer */}
      {isTreatment && selectedPlanet && (
        <PlanetInfoPanel
          planet={selectedPlanet}
          onClose={handleClose}
        />
      )}

      {/* Hint shown only in the treatment variant */}
      {isTreatment && !selectedPlanet && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-zinc-500 pointer-events-none z-10 select-none">
          Click a planet to learn more
        </p>
      )}
    </>
  );
}
