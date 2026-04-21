/**
 * CinematicHUD — Premium 2D overlay for the Grand Tour cinematic mode.
 *
 * Renders entirely outside the R3F Canvas (pure DOM/React), so:
 * - Navigation buttons dispatch CustomEvent('cinematic-navigate') which CinematicMode listens to
 * - No raycasting, no OrbitControls conflicts
 * - Framer Motion for all entrance / exit / content-swap animations
 *
 * Planet identity comes from experienceStore.cinematicPlanetIndex → PLANET_ORDER → planetsData
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useExperience } from "@/engine/experienceStore";
import { planetsData, type PlanetId } from "@/config/planetMetadata";

/* ─── Planet order MUST match PLANET_SKINS in CinematicMode.tsx ─────── */
const PLANET_ORDER: PlanetId[] = [
  "legacy", "ventures", "odyssey", "vision", "voice",
  "videogram", "shield", "library", "contact", "identity",
];

const PLANET_RIM_COLORS: Record<PlanetId, string> = {
  legacy:    "#ffb347",
  ventures:  "#ffe066",
  odyssey:   "#7fdfff",
  vision:    "#00fff7",
  voice:     "#7d3cff",
  videogram: "#ff00e6",
  shield:    "#ffd700",
  library:   "#f8f8ff",
  contact:   "#00bfff",
  identity:  "#c0c0c0",
};

/* ─── Motion variants ─────────────────────────────────────────────────── */
const nameVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    filter: "blur(8px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  }),
};

const hudVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
};

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function CinematicHUD() {
  const router = useRouter();
  const cinematicPlanetIndex = useExperience((s) => s.cinematicPlanetIndex);
  const setMode = useExperience((s) => s.setMode);

  const [direction, setDirection] = useState(0);
  const prevIndexRef = useRef(cinematicPlanetIndex);

  useEffect(() => {
    const diff = cinematicPlanetIndex - prevIndexRef.current;
    // Handle wrap-around (e.g., 9→0 is forward, 0→9 is backward)
    if (diff === 0) return;
    const dir = Math.abs(diff) > PLANET_ORDER.length / 2 ? -Math.sign(diff) : Math.sign(diff);
    setDirection(dir);
    prevIndexRef.current = cinematicPlanetIndex;
  }, [cinematicPlanetIndex]);

  const planetId = PLANET_ORDER[cinematicPlanetIndex];
  const planet = planetsData[planetId];
  const rimColor = PLANET_RIM_COLORS[planetId] ?? "#ffffff";

  const navigate = (dir: 1 | -1) => {
    window.dispatchEvent(
      new CustomEvent("cinematic-navigate", { detail: { dir } })
    );
  };

  const jumpTo = (targetIndex: number) => {
    window.dispatchEvent(
      new CustomEvent("cinematic-jump", { detail: { targetIndex } })
    );
  };

  const enterPlanet = () => {
    if (!planet) return;
    setMode("free");
    router.push(planet.routePath);
  };

  const exitCinematic = () => setMode("free");

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col justify-between select-none"
      variants={hudVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* ── TOP BAR ────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        {/* Exit button */}
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-1)",
            borderRadius: "var(--radius-full)",
            borderWidth: "1px",
            borderColor: "rgba(255,255,255,0.1)",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "var(--space-1) var(--space-2)",
            fontSize: "var(--text-body-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            cursor: "pointer",
            transition: `all var(--duration-moderate) var(--ease-out-cubic)`,
            pointerEvents: "auto",
          }}
          onClick={exitCinematic}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Exit Grand Tour"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Exit Tour
        </button>

        {/* Grand Tour label */}
        <span
          className="text-[10px] uppercase tracking-[0.55em] font-mono"
          style={{ color: rimColor, opacity: 0.55 }}
        >
          Grand Tour · Mizo Universe
        </span>

        {/* Counter */}
        <span className="font-mono text-[11px] tracking-widest text-white/30">
          {String(cinematicPlanetIndex + 1).padStart(2, "0")} /{" "}
          {String(PLANET_ORDER.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── CENTRE: PLANET IDENTITY ──────────────────────────────────── */}
      <div className="relative flex flex-col items-center gap-2">
        {/* Left arrow */}
        <button
          className="pointer-events-auto absolute -left-2 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/5 active:scale-90 md:left-6"
          onClick={() => navigate(-1)}
          aria-label="Previous planet"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 15L7 10L13 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Planet name + subtitle */}
        <div className="relative overflow-hidden text-center" style={{ minHeight: "7rem" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={planetId}
              custom={direction}
              variants={nameVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center gap-2"
            >
              {/* Tagline */}
              <span
                style={{
                  fontSize: "var(--text-body-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.45em",
                  fontFamily: "monospace",
                  color: rimColor,
                  opacity: 0.7,
                }}
              >
                {planet?.ui.title ?? ""}
              </span>

              {/* Planet name — large cinematic headline */}
              <h2
                style={{
                  fontSize: "clamp(3rem, 8vw, 5rem)",
                  fontWeight: "var(--font-weight-black)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-cinematic)",
                  color: "var(--color-text-primary)",
                  fontFamily: "'Arial Black', sans-serif",
                  textShadow: `0 0 40px ${rimColor}55, 0 2px 24px rgba(0,0,0,0.8)`,
                }}
              >
                {planet?.name ?? ""}
              </h2>

              {/* Description */}
              <p
                style={{
                  maxWidth: "20rem",
                  textAlign: "center",
                  fontSize: "var(--text-body-xs)",
                  lineHeight: "var(--line-height-body)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {planet?.ui.description ?? ""}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <button
          className="pointer-events-auto absolute -right-2 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/5 active:scale-90 md:right-6"
          onClick={() => navigate(1)}
          aria-label="Next planet"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 15L13 10L7 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── BOTTOM: NAV DOTS + ENTER BUTTON ──────────────────────────── */}
      <div className="flex flex-col items-center gap-4 pb-8 md:pb-10">
        {/* Enter Planet CTA */}
        <button
          className="pointer-events-auto group relative overflow-hidden rounded-full border px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.04] active:scale-95"
          style={{
            borderColor: `${rimColor}55`,
            background: `linear-gradient(135deg, ${rimColor}18 0%, transparent 100%)`,
            boxShadow: `0 0 24px ${rimColor}22`,
          }}
          onClick={enterPlanet}
          aria-label={`Enter ${planet?.name} planet`}
        >
          <span
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: `linear-gradient(135deg, ${rimColor}28 0%, ${rimColor}08 100%)` }}
          />
          <span className="relative flex items-center gap-2">
            Enter {planet?.name}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke={rimColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {/* Navigation dots */}
        <div className="pointer-events-auto flex items-center gap-2">
          {PLANET_ORDER.map((id, i) => (
            <button
              key={id}
              onClick={() => jumpTo(i)}
              aria-label={`Go to ${planetsData[id].name}`}
              style={{
                width: i === cinematicPlanetIndex ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === cinematicPlanetIndex ? PLANET_RIM_COLORS[id] : "rgba(255,255,255,0.2)",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Hint text */}
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">
          Swipe · Scroll · Arrow keys
        </span>
      </div>
    </motion.div>
  );
}
