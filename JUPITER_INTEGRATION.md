/**
 * JUPITER HUB INTEGRATION GUIDE
 *
 * How to wire up the Jupiter system into the existing UniverseCanvas.
 * Follow this step-by-step for seamless integration.
 */

// ─── STEP 1: Update UniverseCanvas.tsx ─────────────────────────────────────

import Jupiter from "@/components/3d/planets/Jupiter";
import JupiterMoonSystem from "@/components/3d/systems/JupiterSystem";
import JupiterCameraController from "@/hooks/useJupiterCamera";
import SpatialPanel from "@/components/ui/SpatialPanel";
import { useState } from "react";
import { MOON_CONFIG } from "@/config/jupiterConfig";

export default function UniverseCanvas() {
  const [selectedMoon, setSelectedMoon] = useState<string | null>(null);

  const handleMoonClick = (moonId: string) => {
    setSelectedMoon(moonId);
  };

  const handlePanelClose = () => {
    setSelectedMoon(null);
  };

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight
        position={[100, 80, 100]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />

      {/* Jupiter Core (procedural shader-based) */}
      <Jupiter enableIdleRotation={true} />

      {/* Moon Orbital System (4 moons with click detection) */}
      <JupiterMoonSystem
        onMoonClick={handleMoonClick}
        enableAnimation={true}
      />

      {/* Cinematic Camera Controller (smooth GSAP transitions) */}
      <JupiterCameraController
        selectedMoonId={selectedMoon}
        onArrived={(view) => {
          console.log(`Camera arrived at: ${view}`);
        }}
      />

      {/* Spatial Panels for each moon (appears when moon is selected) */}
      {selectedMoon && (
        <>
          {MOON_CONFIG.map((moon) => {
            if (moon.id !== selectedMoon) return null;

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
                onClose={handlePanelClose}
                enableParallax={true}
              />
            );
          })}
        </>
      )}
    </>
  );
}

// ─── STEP 2: Update page.tsx (Root landing) ────────────────────────────────

// Change from old 10-planet system to Jupiter hub:
import UniverseCanvas from "@/components/3d/core/UniverseCanvas";

export default function HomePage() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      {/* 3D Canvas with Jupiter at center */}
      <UniverseCanvas />

      {/* Optional: Overlay HUD (navigation, info) */}
      {/* <NavigationHUD /> */}
    </main>
  );
}

// ─── STEP 3: Update experienceStore (state management) ───────────────────

// Add Jupiter-mode state tracking:
import { create } from "zustand";

interface ExperienceState {
  mode: "free" | "jupiter-hub" | "cinematic";
  setMode: (mode: "free" | "jupiter-hub" | "cinematic") => void;

  selectedMoonId: string | null;
  setSelectedMoonId: (id: string | null) => void;

  // ... existing state
}

export const useExperience = create<ExperienceState>((set) => ({
  mode: "jupiter-hub",
  setMode: (mode) => set({ mode }),

  selectedMoonId: null,
  setSelectedMoonId: (id) => set({ selectedMoonId: id }),

  // ... existing reducers
}));

// ─── STEP 4: Performance Optimization ──────────────────────────────────────

// For low-end devices, use LOD (Level of Detail):

import { useDeviceStore } from "@/engine/deviceStore";

export function JupiterWithLOD() {
  const tier = useDeviceStore((s) => s.tier);

  if (tier === "mobile") {
    return (
      <Jupiter
        enableIdleRotation={true}
        // TODO: Create mobile variant with reduced geometry
      />
    );
  }

  return <Jupiter enableIdleRotation={true} />;
}

// ─── STEP 5: Test Checklist ───────────────────────────────────────────────

/**
 * Before shipping:
 *
 * ✅ Jupiter renders with animated bands + Great Red Spot
 * ✅ Moons orbit and respond to clicks
 * ✅ Camera transitions smoothly between views (no jank)
 * ✅ Spatial panels appear/disappear correctly
 * ✅ Close button hides panels and returns to orbit
 * ✅ Parallax effect on panels follows pointer
 * ✅ Mobile: everything works at 30fps minimum
 * ✅ Reduced-motion: disabled animations work correctly
 * ✅ Lighthouse score > 85
 * ✅ WCAG AA contrast compliance
 * ✅ Touch events work on mobile (tap to select moon)
 * ✅ No console errors or WebGL warnings
 */

// ─── NEXT PHASE (Post-MVP) ────────────────────────────────────────────────

/**
 * After Jupiter hub is stable:
 *
 * 1. Add sound design
 *    - Ambient space hum (Jupiter rotation sound)
 *    - Whoosh on camera transitions
 *    - Click/hover feedback sounds
 *
 * 2. Add section content
 *    - Career: StatPulse widget with basketball stats
 *    - Legacy: ThoughtStream with family quotes
 *    - Vision: ProjectOrbit with tech projects
 *    - Media: Gallery viewer with video/photos
 *
 * 3. Add interactions
 *    - Keyboard navigation (arrow keys between moons)
 *    - Gamepad controller support
 *    - VR/XR mode for Vision Pro (optional)
 *
 * 4. Analytics
 *    - Track moon interactions
 *    - Time spent in each section
 *    - Device performance metrics
 */
