/**
 * NavigationHUD — Glassmorphism radial planet radar overlay
 *
 * Fixed UI overlay that provides:
 * - Planet Radar: radial list of all 10 planets with accent dots
 * - Warp Trigger: click any planet → WarpTransition → route
 * - Current Location: shows active planet based on URL
 * - Audio Toggle: mute/unmute slot (prepared for ambient soundscape)
 * - Locked Planets: non-active planets shown as ENCRYPTED
 *
 * Reads from: planetMetadata.ts, experienceStore, usePathname()
 * Z-layer: z-[9999] (above canvas, below warp transition)
 */
"use client"

import { useState, useCallback, useEffect } from "react"
import { usePathname } from "next/navigation"
import { getPlanetsArray, type PlanetId } from "@/config/planetMetadata"
import { useAudioStore } from "@/engine/useAudioStore"
import { useExperience } from "@/engine/experienceStore"
import WarpTransition from "./WarpTransition"

/* ─── Constants ─────────────────────────────────────────────────────── */

/** Planets that are fully built and wired — rest show as ENCRYPTED */
const ACTIVE_PLANETS: Set<PlanetId> = new Set([
  "identity", "legacy", "vision", "odyssey", "ventures", "voice", "videogram", "library", "contact", "shield",
])

/** Simulated distance values for the radar aesthetic */
const SIMULATED_DISTANCES: Record<PlanetId, string> = {
  identity: "6.0 AU",
  legacy: "9.0 AU",
  vision: "12.0 AU",
  odyssey: "15.0 AU",
  ventures: "18.0 AU",
  voice: "21.0 AU",
  videogram: "24.0 AU",
  library: "27.0 AU",
  contact: "30.0 AU",
  shield: "33.0 AU",
}

/* ─── Component ─────────────────────────────────────────────────────── */

export default function NavigationHUD() {
    // Cinematic/Solar toggle
    const mode = useExperience((s) => s.mode)
    const setMode = useExperience((s) => s.setMode)
    const isCinematic = mode === "cinematic"

    // Toggle handler
    const handleToggleView = () => {
      playSfx("click")
      setMode(isCinematic ? "free" : "cinematic")
    }
  const pathname = usePathname()
  const planets = getPlanetsArray()
  const isMuted = useAudioStore((s) => s.isMuted)
  const toggleMute = useAudioStore((s) => s.toggleMute)
  const playSfx = useAudioStore((s) => s.playSfx)

  const [isOpen, setIsOpen] = useState(false)
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetId | null>(null)
  const [warpTarget, setWarpTarget] = useState<string | null>(null)
  const [triggerWarp, setTriggerWarp] = useState(false)

  // Detect current planet from URL
  const currentPlanetId = planets.find(
    (p) => pathname === p.routePath
  )?.id ?? null

  // Close HUD after warp completes (route change)
  useEffect(() => {
    if (triggerWarp) {
      const timeout = setTimeout(() => {
        setIsOpen(false)
        setTriggerWarp(false)
        setWarpTarget(null)
      }, 900)
      return () => clearTimeout(timeout)
    }
  }, [triggerWarp])

  const handlePlanetClick = useCallback(
    (routePath: string, planetId: PlanetId) => {
      // Don't warp to current page or locked planets
      if (pathname === routePath || !ACTIVE_PLANETS.has(planetId)) return
      playSfx("click")
      setWarpTarget(routePath)
      setTriggerWarp(true)
    },
    [pathname, playSfx]
  )

  const isOnPlanetPage = currentPlanetId !== null
  const isHome = pathname === "/"

  return (
    <>
      {/* ── Warp Transition Layer ──────────────────────────────────── */}
      <WarpTransition
        triggerWarp={triggerWarp}
        targetRoute={warpTarget ?? ""}
      />

      {/* ── HUD Toggle Button (NAV) ─────────────────────────────── */}
      <button
        onClick={() => {
          playSfx("click")
          setIsOpen((prev) => !prev)
        }}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="fixed top-6 right-6 z-[9999] flex items-center gap-2 px-4 py-2.5
                   bg-black/60 backdrop-blur-xl border border-white/10 rounded-full
                   text-white/70 hover:text-white hover:border-white/25
                   transition-all duration-300 select-none group"
      >
        {/* Pulse dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>
        <span className="text-xs font-mono tracking-widest uppercase">
          {isOpen ? "CLOSE" : "NAV"}
        </span>
        {/* Hamburger / X icon */}
        <svg
          className="w-4 h-4 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="2" y1="8" x2="14" y2="8" />
          <line x1="8" y1="2" x2="8" y2="14" />
        </svg>
      </button>

      {/* ── Cinematic/Solar Toggle Button ───────────────────────── */}
      <button
        onClick={handleToggleView}
        aria-label={isCinematic ? "Switch to Map View" : "Switch to Cinematic View"}
        className="fixed top-6 left-6 z-[9999] flex items-center gap-2 px-4 py-2.5
                   bg-black/60 backdrop-blur-xl border border-white/10 rounded-full
                   text-white/70 hover:text-white hover:border-white/25
                   transition-all duration-300 select-none group shadow-lg"
      >
        {isCinematic ? (
          // Eye icon for Cinematic
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z" />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
        ) : (
          // Map icon for Solar System
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V6m6 16V6" />
          </svg>
        )}
        <span className="text-xs font-mono tracking-widest uppercase">
          {isCinematic ? "CINEMATIC VIEW" : "MAP VIEW"}
        </span>
      </button>

      {/* ── HUD Panel ──────────────────────────────────────────────── */}
      {isOpen && (
        <nav
          aria-label="Planet navigation"
          className="fixed top-20 right-6 z-[9999] w-80 max-h-[calc(100dvh-7rem)]
                     overflow-y-auto overscroll-contain
                     bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl
                     shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                     motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4
                     motion-safe:duration-300 relative"
          style={{
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 14%, black 100%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 14%, black 100%)",
          }}
        >
          {/* ── Header ───────────────────────────────────────────── */}
          <div className="px-5 pt-5 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between">
              <h2 className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                System Navigation
              </h2>
              <span className="text-[9px] font-mono text-green-400/60 tracking-wider">
                ONLINE
              </span>
            </div>

            {/* Current Location */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[9px] font-mono text-white/30 tracking-wider">
                LOCATION:
              </span>
              <span className="text-[10px] font-mono text-white/80 tracking-widest uppercase">
                {isOnPlanetPage
                  ? `ORBITING: ${planets.find((p) => p.id === currentPlanetId)?.name ?? "UNKNOWN"}`
                  : isHome
                    ? "FREE ORBIT — GOD VIEW"
                    : "IN TRANSIT"}
              </span>
            </div>
          </div>

          {/* ── Planet Radar List ─────────────────────────────────── */}
          <ul className="px-3 py-2">
            {planets.map((planet) => {
              const isActive = ACTIVE_PLANETS.has(planet.id)
              const isLocked = !isActive
              const isCurrent = planet.id === currentPlanetId
              const isHovered = planet.id === hoveredPlanet

              return (
                <li key={planet.id}>
                  <button
                    onClick={() => handlePlanetClick(planet.routePath, planet.id)}
                    onMouseEnter={() => {
                      setHoveredPlanet(planet.id)
                      if (!isLocked) playSfx("hover")
                    }}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    disabled={isLocked || isCurrent}
                    aria-label={
                      isLocked
                        ? `${planet.name} — encrypted`
                        : isCurrent
                          ? `${planet.name} — current location`
                          : `Warp to ${planet.name}`
                    }
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                      transition-all duration-200 group/planet text-left
                      ${isCurrent
                        ? "border border-white/25 shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                        : isLocked
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-white/5 hover:border hover:border-white/15 cursor-pointer"
                      }`}
                    style={
                      isCurrent
                        ? {
                            background: `linear-gradient(90deg, ${planet.themeColor}22 0%, rgba(255,255,255,0.06) 52%, rgba(255,255,255,0.03) 100%)`,
                            boxShadow: `inset 0 0 0 1px ${planet.themeColor}40, 0 8px 24px ${planet.themeColor}24`,
                          }
                        : undefined
                    }
                  >
                    {/* Accent dot */}
                    <span
                      className="relative flex-shrink-0 w-3 h-3 rounded-full transition-transform duration-200"
                      style={{
                        backgroundColor: isLocked ? "#333" : planet.themeColor,
                        transform: isHovered && !isLocked ? "scale(1.4)" : "scale(1)",
                        boxShadow:
                          isCurrent
                            ? `0 0 8px ${planet.themeColor}80`
                            : isHovered && !isLocked
                              ? `0 0 12px ${planet.themeColor}60`
                              : "none",
                      }}
                    >
                      {isCurrent && (
                        <span
                          className="absolute inset-0 rounded-full motion-safe:animate-ping opacity-40"
                          style={{ backgroundColor: planet.themeColor }}
                        />
                      )}
                    </span>

                    {/* Planet info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono tracking-wider uppercase truncate
                            ${isCurrent ? "text-white" : isLocked ? "text-white/30" : "text-white/70 group-hover/planet:text-white"}`}
                        >
                          {planet.name}
                        </span>
                        {isLocked && (
                          <span className="text-[8px] font-mono tracking-widest text-amber-400/60 border border-amber-400/20 px-1.5 py-0.5 rounded">
                            ENCRYPTED
                          </span>
                        )}
                        {isCurrent && (
                          <span className="text-[8px] font-mono tracking-widest text-green-400/80 border border-green-400/20 px-1.5 py-0.5 rounded">
                            HERE
                          </span>
                        )}
                        {!isLocked && !isCurrent && planet.id === "voice" && (
                          <span className="text-[8px] font-mono tracking-widest text-pink-400/80 border border-pink-400/20 px-1.5 py-0.5 rounded">
                            READY
                          </span>
                        )}
                        {!isLocked && !isCurrent && planet.id === "videogram" && (
                          <span className="text-[8px] font-mono tracking-widest text-gray-400/80 border border-gray-400/20 px-1.5 py-0.5 rounded">
                            READY
                          </span>
                        )}
                      </div>

                      {/* Bilingual title + distance — shown on hover */}
                      {isHovered && !isLocked && (
                        <div className="mt-1 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150">
                          <p className="text-[10px] font-mono text-white/40 truncate">
                            {planet.ui.title}
                          </p>
                          <p className="text-[9px] font-mono text-white/25 truncate" dir="rtl">
                            {planet.ui.description.substring(0, 50)}…
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Distance indicator */}
                    <span className="text-[9px] font-mono text-white/20 tabular-nums flex-shrink-0">
                      {SIMULATED_DISTANCES[planet.id]}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* ── Footer Controls ───────────────────────────────────── */}
          <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
            {/* Audio Toggle (slot — prepared for ambient soundscape) */}
            <button
              onClick={() => {
                playSfx("click")
                toggleMute()
              }}
              aria-label={isMuted ? "Unmute ambient audio" : "Mute ambient audio"}
              className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {!isMuted ? (
                  <>
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                  </>
                ) : (
                  <>
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </>
                )}
              </svg>
              <span className="text-[9px] font-mono tracking-wider uppercase">
                {isMuted ? "MUTED" : "AUDIO ON"}
              </span>
            </button>

            {/* System status */}
            <span className="text-[8px] font-mono text-white/15 tracking-wider">
              {ACTIVE_PLANETS.size}/10 NODES ACTIVE
            </span>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-2xl"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </nav>
      )}
    </>
  )
}
