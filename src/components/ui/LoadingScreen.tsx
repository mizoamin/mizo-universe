"use client";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

/**
 * U-05: Three.js asset loading indicator.
 * Uses drei's useProgress store (works outside Canvas context).
 * Self-manages visibility: fades out 600ms after progress reaches 100.
 */
export default function LoadingScreen() {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(t);
    }
  }, [active, progress]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black pointer-events-none select-none"
      style={{
        opacity: !active && progress >= 100 ? 0 : 1,
        transition: "opacity var(--duration-slow) var(--ease-out-cubic)",
      }}
    >
      {/* Progress bar */}
      <div
        className="rounded-full overflow-hidden mb-6 bg-white/10"
        style={{
          width: "12rem",
          height: "2px",
        }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${progress}%`,
            backgroundColor: "var(--color-accent-prime)",
            boxShadow: "0 0 12px var(--color-accent-prime)",
            transitionDuration: "var(--duration-fast)",
            transitionTimingFunction: "var(--ease-out-cubic)",
          }}
        />
      </div>
      <p
        className="font-light uppercase"
        style={{
          color: "var(--color-text-muted)",
          fontSize: "var(--text-body-xs)",
          letterSpacing: "var(--tracking-cinematic)",
          fontWeight: "var(--font-weight-light)",
        }}
      >
        Loading Universe
      </p>
    </div>
  );
}
