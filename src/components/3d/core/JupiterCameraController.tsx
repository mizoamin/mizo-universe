/**
 * Jupiter Camera Controller Component — Cinematic transitions between views
 *
 * Uses GSAP for butter-smooth camera animations between:
 *   - Jupiter Orbit (see all moons)
 *   - Moon Approach (zoom to specific moon's zone)
 *   - Panel View (up close for UI interaction)
 *   - Return to orbit
 *
 * Coordinates with SpatialPanel display/hide logic.
 */

"use client";

import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { CAMERA_PRESETS, MOON_CONFIG } from "@/config/jupiterConfig";
import * as THREE from "three";

type CameraView = "jupiter-orbit" | "moon-approach" | "panel-view" | "idle";

interface JupiterCameraControllerProps {
  /** Which moon is currently selected (null = orbit view) */
  selectedMoonId: string | null;

  /** Called when camera arrives at destination */
  onArrived?: (view: CameraView) => void;
}

export default function JupiterCameraController({
  selectedMoonId,
  onArrived,
}: JupiterCameraControllerProps) {
  const { camera } = useThree();
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const lastViewRef = useRef<CameraView>("idle");

  useEffect(() => {
    if (!camera) return;

    // Kill any active animation
    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        onArrived?.(lastViewRef.current);
      },
    });

    if (!selectedMoonId) {
      // Return to Jupiter orbit view
      lastViewRef.current = "jupiter-orbit";
      const preset = CAMERA_PRESETS.jupiterOrbit;

      timeline.to(
        camera.position,
        {
          x: preset.position.x,
          y: preset.position.y,
          z: preset.position.z,
          duration: preset.duration,
          ease: "power2.inOut",
        },
        0
      );

      timeline.to(
        camera,
        {
          fov: preset.fov,
          duration: preset.duration,
          ease: "power2.inOut",
          onUpdate() {
            (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
          },
        },
        0
      );
    } else {
      // Zoom to moon: first approach, then panel
      const moon = MOON_CONFIG.find((m) => m.id === selectedMoonId);
      if (!moon) return;

      // Phase 1: Approach moon orbital zone
      const approachPreset = CAMERA_PRESETS.moonApproach(selectedMoonId);
      lastViewRef.current = "moon-approach";

      timeline.to(
        camera.position,
        {
          x: approachPreset.position.x,
          y: approachPreset.position.y,
          z: approachPreset.position.z,
          duration: approachPreset.duration,
          ease: "power2.inOut",
        },
        0
      );

      timeline.to(
        camera,
        {
          fov: approachPreset.fov,
          duration: approachPreset.duration,
          ease: "power2.inOut",
          onUpdate() {
            (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
          },
        },
        0
      );

      // Phase 2: Move to panel view (500ms after moon approach starts)
      const panelPreset = CAMERA_PRESETS.panelView(selectedMoonId);
      lastViewRef.current = "panel-view";

      timeline.to(
        camera.position,
        {
          x: panelPreset.position.x,
          y: panelPreset.position.y,
          z: panelPreset.position.z,
          duration: panelPreset.duration,
          ease: "power2.inOut",
        },
        approachPreset.duration - 0.2
      );

      timeline.to(
        camera,
        {
          fov: panelPreset.fov,
          duration: panelPreset.duration,
          ease: "power2.inOut",
          onUpdate() {
            (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
          },
        },
        approachPreset.duration - 0.2
      );
    }

    // Ensure camera always looks at Jupiter origin
    const updateLookAt = setInterval(() => {
      camera.lookAt(0, 0, 0);
    }, 16);

    activeTimelineRef.current = timeline;

    return () => {
      clearInterval(updateLookAt);
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }
    };
  }, [selectedMoonId, camera, onArrived]);

  return null; // Camera controller is logic-only
}
