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
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-white/60 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-white/30 text-xs tracking-[0.4em] uppercase font-light">
        Loading Universe
      </p>
    </div>
  );
}
