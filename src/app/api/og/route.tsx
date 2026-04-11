/**
 * Dynamic OpenGraph Image Generator — /api/og
 *
 * Generates 1200×630 OG images for every planet using Next.js ImageResponse.
 * Usage: /api/og?planet=identity  (or any PlanetId)
 *
 * Replaces the static /images/og-{planet}.jpg placeholders that were
 * referenced in seoConfig.ts but never existed on disk.
 */

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// ─── Planet visual config ────────────────────────────────────────────────────

const PLANET_CONFIG: Record<
  string,
  { title: string; subtitle: string; color: string; glow: string }
> = {
  identity: {
    title: "Core Identity",
    subtitle: "Heritage & Roots — Mizo Amin",
    color: "#ffd4a3",
    glow: "rgba(255,212,163,0.25)",
  },
  legacy: {
    title: "Legacy Archives",
    subtitle: "Basketball Career — Mizo Amin",
    color: "#ffaa00",
    glow: "rgba(255,170,0,0.25)",
  },
  vision: {
    title: "Future Vision",
    subtitle: "AI & Innovation — Mizo Amin",
    color: "#00ffff",
    glow: "rgba(0,255,255,0.2)",
  },
  odyssey: {
    title: "The Odyssey",
    subtitle: "Athletic Journey — Mizo Amin",
    color: "#4488ff",
    glow: "rgba(68,136,255,0.25)",
  },
  ventures: {
    title: "Ventures",
    subtitle: "Business & Entrepreneurship — Mizo Amin",
    color: "#8A2BE2",
    glow: "rgba(138,43,226,0.25)",
  },
  voice: {
    title: "Voice Signals",
    subtitle: "Podcasts & Interviews — Mizo Amin",
    color: "#ff0080",
    glow: "rgba(255,0,128,0.25)",
  },
  videogram: {
    title: "Videogram",
    subtitle: "Smart Cinematic Archive — Mizo Amin",
    color: "#c0c0c0",
    glow: "rgba(192,192,192,0.2)",
  },
  library: {
    title: "Knowledge Library",
    subtitle: "Books & Philosophy — Mizo Amin",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.15)",
  },
  contact: {
    title: "Contact",
    subtitle: "Connect & Collaborate — Mizo Amin",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.2)",
  },
  shield: {
    title: "Shield",
    subtitle: "Privacy & Security — Mizo Amin",
    color: "#aaaaaa",
    glow: "rgba(170,170,170,0.2)",
  },
};

const DEFAULT_CONFIG = {
  title: "MIZO UNIVERSE",
  subtitle: "Athlete · Entrepreneur · Builder",
  color: "#4488ff",
  glow: "rgba(68,136,255,0.25)",
};

// ─── Route handler ────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const planetId = searchParams.get("planet") ?? "";
  const cfg = PLANET_CONFIG[planetId] ?? DEFAULT_CONFIG;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #0a0a1a 50%, #050510 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Starfield dots */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: i % 7 === 0 ? "3px" : "1.5px",
              height: i % 7 === 0 ? "3px" : "1.5px",
              borderRadius: "50%",
              background: "white",
              opacity: 0.3 + (i % 5) * 0.1,
              top: `${(i * 37 + 11) % 100}%`,
              left: `${(i * 53 + 7) % 100}%`,
            }}
          />
        ))}

        {/* Planet glow orb */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${cfg.glow} 0%, transparent 70%)`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Planet ring accent */}
        <div
          style={{
            position: "absolute",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            border: `2px solid ${cfg.color}`,
            opacity: 0.3,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Horizontal separator line top */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "80px",
            right: "80px",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${cfg.color}44, transparent)`,
          }}
        />

        {/* MIZO UNIVERSE brand */}
        <div
          style={{
            position: "absolute",
            top: "28px",
            left: "80px",
            fontSize: "13px",
            letterSpacing: "0.25em",
            color: cfg.color,
            opacity: 0.7,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          MIZO UNIVERSE
        </div>

        {/* Planet name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: cfg.color,
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
            textShadow: `0 0 60px ${cfg.glow}`,
            zIndex: 10,
          }}
        >
          {cfg.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            marginTop: "16px",
            letterSpacing: "0.04em",
            zIndex: 10,
          }}
        >
          {cfg.subtitle}
        </div>

        {/* Horizontal separator line bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${cfg.color}44, transparent)`,
          }}
        />

        {/* URL brand bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "80px",
            fontSize: "13px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          mizoamin.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
