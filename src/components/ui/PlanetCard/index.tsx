"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExperience } from "../../../engine/experienceStore";
import { getPlanetsArray, PlanetMetadata } from "../../../config/planetMetadata";
import WarpTransition from "../WarpTransition";

/** Convert a hex color to rgb tuple string for CSS rgba() usage */
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0,255,170";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}

export default function PlanetCard() {
  const { mode, activePlanet, resetExperience } = useExperience();
  const [triggerWarp, setTriggerWarp] = useState(false);
  const isVisible = mode === "enter";

  // Resolve full planet data — themeColor, routePath, ui description
  const planetData = getPlanetsArray().find((p: PlanetMetadata) => p.id === activePlanet);
  const accent = planetData?.themeColor ?? "#00ffaa";
  const accentRgb = hexToRgb(accent);
  const targetRoute = planetData?.routePath ?? "/";

  const handleEnterDomain = () => {
    setTriggerWarp(true);
    // WarpTransition fires router.push after its animation delay
    // Reset experience after transition (300ms buffer past warp)
    setTimeout(() => resetExperience(), 1100);
  };

  return (
    <>
      {/* WCAG-compliant warp transition — uses existing WarpTransition system */}
      <WarpTransition triggerWarp={triggerWarp} targetRoute={targetRoute} />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 120, opacity: 0, scale: 0.94 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 120, opacity: 0, scale: 0.94 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              duration: parseFloat(
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--duration-moderate"
                ) || "300"
              ) / 1000,
            }}
            style={{
              position: "absolute",
              bottom: "7%",
              left: "50%",
              x: "-50%",
              width: "min(92vw, 500px)",
              padding: "0",
              borderRadius: "var(--radius-2xl)",
              // Planet-tinted glass border
              border: `1px solid rgba(${accentRgb}, 0.28)`,
              boxShadow: `var(--shadow-xl), inset 0 0 24px rgba(${accentRgb}, 0.05)`,
              color: "white",
              zIndex: 100,
              overflow: "hidden",
              // Deep glassmorphism with enhanced glass surface
              background: `linear-gradient(160deg, var(--color-surface-glass-2) 0%, var(--color-surface-glass-3) 100%)`,
              backdropFilter: "var(--blur-glass-xl)",
              WebkitBackdropFilter: "var(--blur-glass-xl)",
            }}
          >
            {/* ── Planet-tinted top accent line ──────────────────── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "8%",
                right: "8%",
                height: "1.5px",
                background: `linear-gradient(90deg, transparent, rgba(${accentRgb}, 0.9) 40%, rgba(${accentRgb}, 0.9) 60%, transparent)`,
                borderRadius: "var(--radius-sm)",
              }}
            />

            {/* ── Corner scan-line badges ─────────────────────────── */}
            <div
              style={{
                position: "absolute",
                top: "var(--space-4)",
                left: "var(--space-4)",
                width: "12px",
                height: "12px",
                borderTop: `1.5px solid rgba(${accentRgb}, 0.5)`,
                borderLeft: `1.5px solid rgba(${accentRgb}, 0.5)`,
                borderRadius: "2px 0 0 0",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "var(--space-4)",
                right: "var(--space-4)",
                width: "12px",
                height: "12px",
                borderTop: `1.5px solid rgba(${accentRgb}, 0.5)`,
                borderRight: `1.5px solid rgba(${accentRgb}, 0.5)`,
                borderRadius: "0 2px 0 0",
              }}
            />

            {/* ── Card content ──────────────────────────────────── */}
            <div
              style={{
                padding: "var(--space-8) var(--space-6) var(--space-6)",
              }}
            >

              {/* System status badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  marginBottom: "var(--space-6)",
                  fontSize: "var(--text-body-xs)",
                  letterSpacing: "var(--tracking-hud)",
                  color: `rgba(${accentRgb}, 0.9)`,
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.15, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "500%",
                    backgroundColor: accent,
                    boxShadow: `0 0 8px ${accent}`,
                    flexShrink: 0,
                  }}
                />
                SECTOR ONLINE · {(planetData?.id ?? "").toUpperCase() || "UNKNOWN"}
              </div>

              {/* HUD subtitle label */}
              {planetData?.ui.title && (
                <p
                  style={{
                    textAlign: "center",
                    margin: `0 0 var(--space-2)`,
                    fontSize: "var(--text-body-xs)",
                    letterSpacing: "var(--tracking-cinematic)",
                    color: `rgba(${accentRgb}, 0.55)`,
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  {planetData.ui.title}
                </p>
              )}

              {/* Planet name — large cinematic headline */}
              <h2
                style={{
                  margin: `0 0 var(--space-6)`,
                  textAlign: "center",
                  fontSize: "clamp(var(--text-h2), 7vw, var(--text-display-2))",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-cinematic)",
                  fontWeight: "var(--font-weight-black)",
                  lineHeight: "var(--line-height-display)",
                  background: `linear-gradient(135deg, var(--color-text-primary) 0%, ${accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {activePlanet?.replace("-", " ") ?? "UNKNOWN"}
              </h2>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: `rgba(${accentRgb}, 0.4)`,
                  margin: `0 auto var(--space-6)`,
                }}
              />

              {/* Planet description — from metadata, never generic */}
              <p
                style={{
                  textAlign: "center",
                  margin: `0 0 var(--space-8)`,
                  lineHeight: "var(--line-height-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-text-secondary)",
                  letterSpacing: "var(--tracking-normal)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                {planetData?.ui.description ?? "Accessing spatial data. Prepare for entry."}
              </p>

              {/* ── ENTER button — planet-tinted, premium ── */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 32px rgba(${accentRgb}, 0.5), var(--shadow-lg)`,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEnterDomain}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "var(--space-4) 0",
                  borderRadius: "var(--radius-lg)",
                  background: `linear-gradient(135deg, rgba(${accentRgb}, 0.12) 0%, rgba(${accentRgb}, 0.06) 100%)`,
                  color: accent,
                  border: `1px solid rgba(${accentRgb}, 0.45)`,
                  fontWeight: "var(--font-weight-bold)",
                  fontSize: "var(--text-body-xs)",
                  letterSpacing: "var(--tracking-hud)",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  transition: `background var(--duration-fast) var(--ease-out-cubic)`,
                  boxShadow: `0 0 16px rgba(${accentRgb}, 0.18)`,
                }}
              >
                ENTER DOMAIN
              </motion.button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}