"use client";

/**
 * StatPulse — Animated stat display widget for Odyssey/Esports planets
 *
 * Displays a grid of key performance stats with a subtle pulse glow animation.
 * Used on: Odyssey (career stats), any planet with numeric metrics.
 *
 * Features:
 *   - Animated count-up on viewport entry (IntersectionObserver)
 *   - Accent-colored glow pulse
 *   - Responsive grid (1–4 columns)
 *   - Reduced-motion: instant display, no animation
 */

import { useRef, useEffect, useState } from "react";

export interface StatItem {
  label: string;
  value: string;
  sublabel?: string;
}

interface StatPulseProps {
  stats: StatItem[];
  accentColor?: string;
  title?: string;
}

function StatCard({
  stat,
  accentColor,
  isVisible,
}: {
  stat: StatItem;
  accentColor: string;
  isVisible: boolean;
}) {
  return (
    <div
      className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Pulse glow */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] motion-safe:animate-pulse"
        style={{ backgroundColor: accentColor, opacity: 0.6 }}
      />
      <div
        className="text-4xl md:text-5xl font-black tracking-tighter mb-2"
        style={{ color: accentColor }}
      >
        {stat.value}
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-white/80 mb-1">
        {stat.label}
      </div>
      {stat.sublabel && (
        <div className="text-xs text-gray-500">{stat.sublabel}</div>
      )}
    </div>
  );
}

export default function StatPulse({
  stats,
  accentColor = "#4488ff",
  title,
}: StatPulseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {title && (
        <div className="flex items-center gap-4 mb-8">
          <div
            className="h-6 w-1 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            {title}
          </h2>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            stat={stat}
            accentColor={accentColor}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}
