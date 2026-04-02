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
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{
              position: "absolute",
              bottom: "7%",
              left: "50%",
              x: "-50%",
              width: "min(92vw, 500px)",
              padding: "0",
              borderRadius: "20px",
              // Planet-tinted glass border
              border: `1px solid rgba(${accentRgb}, 0.28)`,
              boxShadow: `0 0 60px rgba(${accentRgb}, 0.12), 0 24px 64px rgba(0,0,0,0.7), inset 0 0 24px rgba(${accentRgb}, 0.05)`,
              color: "white",
              zIndex: 100,
              overflow: "hidden",
              // Deep glassmorphism
              background: `linear-gradient(160deg, rgba(8,16,28,0.82) 0%, rgba(0,4,8,0.92) 100%)`,
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
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
                borderRadius: "1px",
              }}
            />

            {/* ── Corner scan-line badges ─────────────────────────── */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "18px",
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
                top: "14px",
                right: "18px",
                width: "12px",
                height: "12px",
                borderTop: `1.5px solid rgba(${accentRgb}, 0.5)`,
                borderRight: `1.5px solid rgba(${accentRgb}, 0.5)`,
                borderRadius: "0 2px 0 0",
              }}
            />

            {/* ── Card content ──────────────────────────────────── */}
            <div style={{ padding: "2.2rem 2rem 2rem" }}>

              {/* System status badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "18px",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  color: `rgba(${accentRgb}, 0.9)`,
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.15, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
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
                    margin: "0 0 8px",
                    fontSize: "10px",
                    letterSpacing: "0.35em",
                    color: `rgba(${accentRgb}, 0.55)`,
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  {planetData.ui.title}
                </p>
              )}

              {/* Planet name — large cinematic headline */}
              <h2
                style={{
                  margin: "0 0 20px",
                  textAlign: "center",
                  fontSize: "clamp(2rem, 7vw, 2.8rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 900,
                  lineHeight: 1,
                  background: `linear-gradient(135deg, #ffffff 0%, ${accent} 100%)`,
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
                  margin: "0 auto 20px",
                }}
              />

              {/* Planet description — from metadata, never generic */}
              <p
                style={{
                  textAlign: "center",
                  margin: "0 0 28px",
                  lineHeight: 1.75,
                  fontSize: "13px",
                  color: "rgba(192,224,255,0.75)",
                  letterSpacing: "0.03em",
                }}
              >
                {planetData?.ui.description ?? "Accessing spatial data. Prepare for entry."}
              </p>

              {/* ── ENTER button — planet-tinted, premium ── */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 32px rgba(${accentRgb}, 0.5), 0 0 8px rgba(${accentRgb}, 0.2)`,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEnterDomain}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "15px 0",
                  borderRadius: "10px",
                  background: `linear-gradient(135deg, rgba(${accentRgb}, 0.12) 0%, rgba(${accentRgb}, 0.06) 100%)`,
                  color: accent,
                  border: `1px solid rgba(${accentRgb}, 0.45)`,
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "0.3em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  transition: "background 0.2s ease",
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