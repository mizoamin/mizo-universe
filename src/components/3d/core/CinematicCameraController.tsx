"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useExperience } from "../../../engine/experienceStore";
import { useDeviceStore } from "../../../engine/deviceStore";

type Props = {
  focusTarget: THREE.Vector3 | null;
};

export default function CinematicCameraController({ focusTarget }: Props) {
  const mode = useExperience((state) => state.mode);
  const tier = useDeviceStore((state) => state.tier);
  const { camera, controls } = useThree();
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // 📍 Pre-allocated vectors (reused every frame, no GC pressure)
  const defaultCameraPos = useRef(new THREE.Vector3(0, 80, 160));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const parallaxTarget = useRef(new THREE.Vector3(0, 0, 0));
  const idealCameraPosition = useRef(new THREE.Vector3(0, 0, 0));
  const isReturning = useRef(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setIsReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useFrame((state, delta) => {
    if (!controls) return;
    const orbit = controls as any;
    const cam = camera as THREE.PerspectiveCamera;

    const motionBudget =
      tier === "mobile"
        ? { parallax: 8, hoverX: 0.55, hoverY: 0.35, baseSmooth: 0.00045 }
        : tier === "tablet"
          ? { parallax: 11, hoverX: 0.8, hoverY: 0.55, baseSmooth: 0.0003 }
          : { parallax: 15, hoverX: 1.2, hoverY: 0.8, baseSmooth: 0.0001 };
    
    // 🧠 Frame-rate independent lerp
    const smoothFactor = 1 - Math.pow(motionBudget.baseSmooth, delta);
    const t = state.clock.getElapsedTime();

    // ==========================================
    // 🌌 Mode: FREE (God View & Parallax)
    // ==========================================
    if (mode === "free" || !focusTarget) {
      orbit.enabled = true;

      // Safe return to center
      if (isReturning.current) {
        cam.position.lerp(defaultCameraPos.current, smoothFactor);
        if (cam.position.distanceTo(defaultCameraPos.current) < 5) {
          isReturning.current = false;
        }
      }

      // Parallax effect (mutate pre-allocated vector)
      parallaxTarget.current.set(
        state.pointer.x * motionBudget.parallax,
        state.pointer.y * motionBudget.parallax,
        0
      );
      currentLookAt.current.lerp(parallaxTarget.current, smoothFactor * 0.2);
      orbit.target.copy(currentLookAt.current);

      // Return FOV to home
      const targetFov = 40;
      const nextFov = THREE.MathUtils.lerp(cam.fov, targetFov, smoothFactor);
      if (Math.abs(nextFov - cam.fov) > 0.01) {
        cam.fov = nextFov;
        cam.updateProjectionMatrix();
      }
    } 
    // ==========================================
    // 🚀 Mode: APPROACH / ISOLATION / ENTER (Cinematic Focus)
    // ==========================================
    else {
      orbit.enabled = false;
      isReturning.current = true;

      // Calculate ideal camera position (mutate pre-allocated vector)
      idealCameraPosition.current.set(
        focusTarget.x,
        focusTarget.y + 2,
        focusTarget.z + 18
      );

      // Drone hover effect for isolation/enter states
      if ((mode === "isolation" || mode === "enter") && !isReducedMotion) {
        idealCameraPosition.current.x += Math.sin(t * 0.8) * motionBudget.hoverX;
        idealCameraPosition.current.y += Math.cos(t * 0.5) * motionBudget.hoverY;
        const nextFov = THREE.MathUtils.lerp(cam.fov, 28, smoothFactor);
        if (Math.abs(nextFov - cam.fov) > 0.01) {
          cam.fov = nextFov;
          cam.updateProjectionMatrix();
        }
      } 
      // Warp speed FOV expansion for approach
      else if (mode === "approach") {
        const targetFov = isReducedMotion ? 52 : 65;
        const nextFov = THREE.MathUtils.lerp(cam.fov, targetFov, smoothFactor);
        if (Math.abs(nextFov - cam.fov) > 0.01) {
          cam.fov = nextFov;
          cam.updateProjectionMatrix();
        }
      } else if (mode === "isolation" || mode === "enter") {
        // Reduced-motion path: preserve focus without micro-hover drift
        const nextFov = THREE.MathUtils.lerp(cam.fov, 28, smoothFactor);
        if (Math.abs(nextFov - cam.fov) > 0.01) {
          cam.fov = nextFov;
          cam.updateProjectionMatrix();
        }
      }

      // Apply smooth camera interpolation using pre-allocated vectors
      cam.position.lerp(idealCameraPosition.current, smoothFactor);
      currentLookAt.current.lerp(focusTarget, smoothFactor);
      orbit.target.copy(currentLookAt.current);
    }

    // 🔄 تحديث محرك التحكم في النهاية لضمان عدم وجود اهتزازات
    orbit.update();
  });

  return null;
}