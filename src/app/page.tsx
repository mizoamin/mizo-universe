"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import IntroPortal from "@/components/ui/IntroPortal";
import NavigationHUD from "@/components/ui/NavigationHUD";
import CinematicHUD from "@/components/ui/CinematicHUD";
import { useDeviceStore } from "@/engine/deviceStore";
import { useAudioStore } from "@/engine/useAudioStore";
import { useExperience } from "@/engine/experienceStore";

// 🚀 Dynamic import — entire 3D canvas loads only after intro completes
// Prevents R3F + Three.js (~500KB) from blocking First Contentful Paint
const UniverseCanvas = dynamic(
  () => import("@/components/3d/core/UniverseCanvas"),
  { ssr: false },
);

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isHandoffActive, setIsHandoffActive] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const handoffTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initDeviceProfile = useDeviceStore((s) => s.initDeviceProfile);
  const startAmbientLoop = useAudioStore((s) => s.startAmbientLoop);
  const stopAmbientLoop = useAudioStore((s) => s.stopAmbientLoop);

  // Initialize device detection once on mount
  useEffect(() => {
    initDeviceProfile();
  }, [initDeviceProfile]);

  useEffect(() => {
    if (isIntroComplete) {
      startAmbientLoop();
      return;
    }
    stopAmbientLoop();
  }, [isIntroComplete, startAmbientLoop, stopAmbientLoop]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setIsReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const setMode = useExperience((s) => s.setMode);
  const mode = useExperience((s) => s.mode);
  const handleIntroIgnition = () => {
    setIsIntroComplete(true);
    setIsHandoffActive(true);
    setMode("cinematic");

    if (handoffTimerRef.current) clearTimeout(handoffTimerRef.current);
    handoffTimerRef.current = setTimeout(() => {
      setIsHandoffActive(false);
      handoffTimerRef.current = null;
    }, isReducedMotion ? 220 : 900);
  };

  useEffect(() => {
    return () => {
      if (handoffTimerRef.current) clearTimeout(handoffTimerRef.current);
    };
  }, []);

  return (
    <main className="w-screen h-screen relative overflow-hidden bg-black">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 3D Canvas Layer (z-0) — Canonical R3F Universe Scene */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <UniverseCanvas isIntroComplete={isIntroComplete} />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Navigation HUD (z-9999) — Planet radar + warp triggers */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {isIntroComplete && !isHandoffActive && mode !== "cinematic" && <NavigationHUD />}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Cinematic HUD (z-100) — Grand Tour overlay with nav + planet info */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isIntroComplete && !isHandoffActive && mode === "cinematic" && (
          <CinematicHUD />
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 2D UI Layer (z-10) — Intro Portal (Pre-Intro Phase Only) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {!isIntroComplete && (
        <div className="absolute inset-0 z-10">
          <IntroPortal onEnter={handleIntroIgnition} />
        </div>
      )}

      {/* Cinematic bridge layer: smooth Intro → Universe handoff */}
      {isHandoffActive && (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(190,220,255,0.18) 0%, rgba(6,14,26,0.7) 42%, rgba(0,0,0,0.96) 100%)",
            backdropFilter: isReducedMotion ? "blur(0px)" : "blur(8px)",
            WebkitBackdropFilter: isReducedMotion ? "blur(0px)" : "blur(8px)",
            animation: isReducedMotion
              ? "handoff-fade-reduced 220ms linear forwards"
              : "handoff-fade 900ms ease-out forwards",
          }}
          aria-hidden="true"
        >
          <div className="w-full h-full flex items-center justify-center">
            <span
              style={{
                color: "rgba(220,236,255,0.82)",
                fontSize: "11px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                textShadow: "0 0 22px rgba(172,214,255,0.4)",
                animation: isReducedMotion
                  ? "handoff-text-reduced 220ms linear forwards"
                  : "handoff-text 900ms ease-out forwards",
              }}
            >
              Entering The Universe
            </span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes handoff-fade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes handoff-fade-reduced {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes handoff-text {
          0% {
            opacity: 0.75;
            transform: translateY(0px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-6px) scale(1.02);
          }
        }

        @keyframes handoff-text-reduced {
          0% {
            opacity: 0.7;
            transform: translateY(0px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>
    </main>
  );
}
