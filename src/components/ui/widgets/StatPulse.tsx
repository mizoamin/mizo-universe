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
      className="relative overflow-hidden transition-all"
      style={{
        padding: "var(--space-6)",
        borderRadius: "var(--radius-2xl)",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "var(--blur-glass-sm)",
        boxShadow: "var(--shadow-sm)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDuration: "var(--duration-slow)",
        transitionTimingFunction: "var(--ease-out-cubic)",
      }}
    >
      {/* Pulse glow top border */}
      <div
        className="absolute top-0 left-0 w-full motion-safe:animate-pulse"
        style={{
          height: "2px",
          backgroundColor: accentColor,
          opacity: 0.6,
        }}
      />
      {/* Stat value — dynamic color */}
      <div
        className="font-black tracking-tight mb-2"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: accentColor,
          lineHeight: "var(--line-height-display)",
        }}
      >
        {stat.value}
      </div>
      {/* Stat label — using proper typography hierarchy */}
      <div
        className="font-bold uppercase mb-1"
        style={{
          fontSize: "var(--text-body-sm)",
          letterSpacing: "var(--tracking-hud)",
          color: "var(--color-text-secondary)",
          fontWeight: "var(--font-weight-bold)",
        }}
      >
        {stat.label}
      </div>
      {/* Stat sublabel — muted */}
      {stat.sublabel && (
        <div
          style={{
            fontSize: "var(--text-body-xs)",
            color: "var(--color-text-muted)",
          }}
        >
          {stat.sublabel}
        </div>
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
            className="rounded-full"
            style={{
              backgroundColor: accentColor,
              width: "var(--space-1)",
              height: "var(--space-6)",
            }}
          />
          <h2
            className="font-black uppercase"
            style={{
              fontSize: "var(--text-h2)",
              letterSpacing: "var(--tracking-cinematic)",
              color: "var(--color-text-primary)",
              lineHeight: "var(--line-height-heading)",
              fontWeight: "var(--font-weight-black)",
            }}
          >
            {title}
          </h2>
        </div>
      )}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          gap: "var(--space-4)",
        }}
      >
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
