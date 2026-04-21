"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAudioStore } from "@/engine/useAudioStore";

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}

export default function WarpTransition({ 
  triggerWarp, 
  targetRoute 
}: { 
  triggerWarp: boolean; 
  targetRoute: string 
}) {
  const router = useRouter();
  const playSfx = useAudioStore((s) => s.playSfx);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isWarping = Boolean(triggerWarp && targetRoute);

  useEffect(() => {
    if (triggerWarp && targetRoute) {
      playSfx("warp");
      // Reduced-motion: faster crossfade (400ms), normal: full warp (800ms)
      const delay = prefersReducedMotion ? 400 : 800;
      const timeout = setTimeout(() => {
        router.push(targetRoute);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [triggerWarp, targetRoute, router, prefersReducedMotion, playSfx]);

  if (!isWarping) return null;

  // W-01: prefers-reduced-motion guard — WCAG 2.3.1 + visionOS compliance
  // Reduced motion: slow dark fade (no strobe). Full motion: cinematic white flash.
  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: "var(--z-overlay)" }}
      >
        <div
          className="absolute inset-0 animate-in fade-in fill-mode-forwards"
          style={{
            backgroundColor: "rgba(0,0,0,1)",
            animationDuration: "var(--duration-moderate)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none flex items-center justify-center"
      style={{ zIndex: "var(--z-overlay)" }}
    >
      {/* Cinematic white flash — warp speed visual */}
      <div
        className="absolute inset-0 animate-in fade-in fill-mode-forwards"
        style={{
          backgroundColor: "rgba(255,255,255,1)",
          animationDuration: "var(--duration-slow)",
        }}
      />
      {/* Dramatic pulse overlay */}
      <div
        className="absolute inset-0 motion-safe:animate-pulse"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          mixBlendMode: "overlay",
          animationDuration: "var(--duration-moderate)",
        }}
      />
    </div>
  );
}