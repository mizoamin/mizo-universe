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
      <div className="fixed inset-0 z-[99999999] pointer-events-none">
        <div className="absolute inset-0 bg-black animate-in fade-in duration-300 fill-mode-forwards" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999999] pointer-events-none flex items-center justify-center">
      {/* Cinematic white flash — warp speed visual */}
      <div className="absolute inset-0 bg-white animate-in fade-in duration-500 fill-mode-forwards" />
      {/* Dramatic pulse overlay */}
      <div className="absolute inset-0 opacity-20 bg-black mix-blend-overlay animate-pulse" />
    </div>
  );
}