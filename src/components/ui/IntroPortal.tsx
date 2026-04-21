"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PortalState = "idle" | "hover" | "holding" | "ignited" | "complete";

interface AnimationPhase {
  scale: number;
  opacity: number;
  rotationY: number;
  rotationX: number;
  z: number;
  blur: number;
  brightness: number;
  saturate: number;
}

export default function IntroPortal({ onEnter }: { onEnter: () => void }) {
  const [state, setState] = useState<PortalState>("idle");
  const [progress, setProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const [depthShift, setDepthShift] = useState(0);

  const holdStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const moveRafRef = useRef<number | null>(null);
  const pointerTargetRef = useRef<{ x: number; y: number } | null>(null);
  const enteredRef = useRef(false);
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const HOLD_DURATION = isTouchDevice ? 900 : 1500;

  const ASSETS = {
    idle: "/images/intro/mizo-state1-off.png",
    hover: "/images/intro/mizo-state2-ready.png",
    active: "/images/intro/mizo-state3-active.png",
  };

  // Animation phases for cinematic transitions
  const getAnimationPhase = (currentState: PortalState, pct: number): AnimationPhase => {
    if (currentState === "idle") {
      return {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        blur: 0,
        brightness: 1,
        saturate: 0.85,
      };
    }
    if (currentState === "hover" || currentState === "holding") {
      // Phase 1-2: Breathing/focus effect
      const breathe = Math.sin(pct * Math.PI * 2) * 0.015;
      return {
        scale: 1.02 + breathe,
        opacity: 1,
        rotationY: pct * 2.5,
        rotationX: pct * -1.2,
        z: pct * 8,
        blur: pct * 0.8,
        brightness: 1 + pct * 0.08,
        saturate: 0.85 + pct * 0.1,
      };
    }
    if (currentState === "ignited") {
      // Fast transition: snap through to active
      return {
        scale: 1.08,
        opacity: 1,
        rotationY: 4,
        rotationX: -2,
        z: 12,
        blur: 0.5,
        brightness: 1.12,
        saturate: 1,
      };
    }
    return {
      scale: 1,
      opacity: 0,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      blur: 0,
      brightness: 1,
      saturate: 1,
    };
  };

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: coarse)");

    const syncPreferences = () => {
      setIsReducedMotion(reducedMotionQuery.matches);
      setIsTouchDevice(pointerQuery.matches || navigator.maxTouchPoints > 0);
    };

    syncPreferences();
    reducedMotionQuery.addEventListener("change", syncPreferences);
    pointerQuery.addEventListener("change", syncPreferences);

    Object.values(ASSETS).forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Depth animation loop for subtle continuous movement
    let depthRaf: number;
    const animateDepth = (t: number) => {
      setDepthShift(Math.sin(t / 1000) * 2);
      depthRaf = requestAnimationFrame(animateDepth);
    };
    depthRaf = requestAnimationFrame(animateDepth);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncPreferences);
      pointerQuery.removeEventListener("change", syncPreferences);
      cancelAnimationFrame(depthRaf);
    };
  }, []);

  const finalizeEnter = useCallback(() => {
    if (enteredRef.current) return;
    enteredRef.current = true;
    setState("complete");

    const exitDelay = isReducedMotion ? 220 : 700;
    enterTimerRef.current = setTimeout(() => {
      onEnter();
    }, exitDelay);
  }, [isReducedMotion, onEnter]);

  const animateHold = useCallback(() => {
    rafRef.current = requestAnimationFrame((now) => {
      if (!holdStartRef.current) return;

      const elapsed = now - holdStartRef.current;
      const pct = Math.min(elapsed / HOLD_DURATION, 1);

      setProgress(pct);

      if (pct >= 0.75 && pct < 1) {
        setState((prev) => (prev === "complete" ? "complete" : "ignited"));
      }

      if (pct >= 1) {
        finalizeEnter();
        return;
      }

      animateHold();
    });
  }, [HOLD_DURATION, finalizeEnter]);

  const triggerQuickEnter = useCallback(() => {
    if (state === "ignited" || state === "complete") return;
    setState("ignited");
    setProgress(1);
    finalizeEnter();
  }, [finalizeEnter, state]);

  const startHold = (e: React.PointerEvent) => {
    e.preventDefault();

    if (state === "ignited" || state === "complete") return; 

    if (isTouchDevice || e.pointerType === "touch") {
      triggerQuickEnter();
      return;
    }
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setState("holding");
    holdStartRef.current = performance.now();
    animateHold();
  };

  const cancelHold = (e: React.PointerEvent) => {
    e.preventDefault();

    if (state === "ignited" || state === "complete") return; 
    if (isTouchDevice || e.pointerType === "touch") return;
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    holdStartRef.current = null;
    setProgress(0);
    setState("idle");
  };

  const applyParallax = useCallback(() => {
    const container = containerRef.current;
    const pointer = pointerTargetRef.current;

    if (!container || !pointer || isReducedMotion || isTouchDevice || state === "complete") {
      moveRafRef.current = null;
      return;
    }

    const rect = container.getBoundingClientRect();
    const x = (pointer.x - rect.width / 2) / rect.width;
    const y = (pointer.y - rect.height / 2) / rect.height;
    container.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;

    moveRafRef.current = null;
  }, [isReducedMotion, isTouchDevice, state]);

  const handleMove = (e: React.PointerEvent) => {
    if (!containerRef.current || isReducedMotion || isTouchDevice || state === "complete") return;

    pointerTargetRef.current = { x: e.clientX, y: e.clientY };

    if (moveRafRef.current !== null) return;
    moveRafRef.current = requestAnimationFrame(applyParallax);
  };

  const resetParallax = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerQuickEnter();
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (moveRafRef.current) cancelAnimationFrame(moveRafRef.current);
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice && state === "idle") {
      setState("hover");
    }
  }, [isTouchDevice, state]);

  const onImageError = () => {
    setHasImageError(true);
  };

  return (
    <AnimatePresence>
      {state !== "complete" && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-between"
          role="button"
          tabIndex={0}
          aria-label="Enter Mizo Universe"
          style={{
            background: "radial-gradient(circle at center, rgba(2,8,16,0.08) 0%, rgba(0,0,0,0.96) 100%)",
            height: "100dvh", 
            width: "100vw", 
            overflow: "hidden", 
            userSelect: "none", 
            WebkitTapHighlightColor: "transparent",
            willChange: "transform",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: isReducedMotion ? 1 : 1.04, filter: isReducedMotion ? "blur(0px)" : "blur(12px)" }}
          transition={{ duration: isReducedMotion ? 0.28 : 0.9, ease: "easeInOut" }}
          onPointerMove={handleMove}
          onPointerLeave={resetParallax}
          onKeyDown={handleKeyDown}
        >
          <div
            className="relative w-full flex items-end justify-center cursor-pointer mt-auto"
            style={{ height: "60dvh", maxWidth: "600px" }}
            onPointerEnter={() => !isTouchDevice && state === "idle" && setState("hover")}
            onPointerLeave={() => (!isTouchDevice && state === "hover" ? setState("idle") : null)}
            onPointerDown={startHold}
            onPointerUp={cancelHold}
            onPointerCancel={cancelHold}
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Cinematic depth background layers */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `radial-gradient(circle at center, rgba(100,150,255,${(progress * 0.05 + 0.02)}) 0%, transparent 70%)`,
                transition: "background 0.3s ease-out",
              }}
            />

            {/* Image container with 3D perspective */}
            <div
              ref={imageContainerRef}
              style={{
                position: "absolute",
                inset: 0,
                perspective: "1200px",
                perspectiveOrigin: "center bottom",
              }}
            >
              {!hasImageError && (
                <>
                  {/* STATE 1: IDLE - Mizo off (cool/dark) */}
                  <motion.img
                    src={ASSETS.idle}
                    alt="Mizo idle portrait"
                    draggable={false}
                    onError={onImageError}
                    className="absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none"
                    style={{
                      filter: `blur(${state === "idle" ? 0 : 2}px) brightness(${state === "idle" ? 1 : 0.8}) saturate(${state === "idle" ? 0.85 : 0.6})`,
                      transformOrigin: "center bottom",
                    }}
                    animate={{
                      opacity: state === "idle" ? 1 : 0,
                      scale: state === "idle" ? 1 : 0.95,
                      rotationY: state === "idle" ? 0 : 8,
                      z: state === "idle" ? 0 : -20,
                    }}
                    transition={{
                      duration: isReducedMotion ? 0.2 : 0.6,
                      ease: "easeInOut",
                    }}
                  />

                  {/* STATE 2: HOVER/HOLDING - Breathing/awakening state */}
                  <motion.div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transformOrigin: "center bottom",
                    }}
                    animate={{
                      opacity: state === "hover" || state === "holding" ? 1 : 0,
                      scale: state === "hover" || state === "holding" ? 1.02 : 1.05,
                      rotationY: state === "hover" || state === "holding" ? progress * 1.5 : 4,
                      rotationX: state === "hover" || state === "holding" ? progress * -0.8 : -1.5,
                      filter:
                        state === "hover" || state === "holding"
                          ? `blur(${progress * 0.4}px) brightness(${1 + progress * 0.06}) saturate(${0.85 + progress * 0.08})`
                          : "blur(2px) brightness(0.8) saturate(0.6)",
                    }}
                    transition={{
                      duration: isReducedMotion ? 0.2 : 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <img
                      src={ASSETS.hover}
                      alt="Mizo ready portrait"
                      draggable={false}
                      className="w-full h-full object-contain object-bottom pointer-events-none"
                    />
                  </motion.div>

                  {/* STATE 3: IGNITED/COMPLETE - Full color activation */}
                  <motion.img
                    src={ASSETS.active}
                    alt="Mizo active portrait"
                    draggable={false}
                    onError={onImageError}
                    className="absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none"
                    style={{
                      filter: `blur(0px) brightness(${state === "ignited" || state === "complete" ? 1.15 : 0}) saturate(${state === "ignited" || state === "complete" ? 1.2 : 0})`,
                      transformOrigin: "center bottom",
                    }}
                    animate={{
                      opacity: state === "ignited" || state === "complete" ? 1 : 0,
                      scale: state === "ignited" || state === "complete" ? 1.08 : 0.92,
                      rotationY: state === "ignited" || state === "complete" ? 2 : -4,
                      z: state === "ignited" || state === "complete" ? 20 : -30,
                    }}
                    transition={{
                      duration: isReducedMotion ? 0.15 : 0.35,
                      ease: "easeOut",
                    }}
                  />
                </>
              )}

              {hasImageError && (
                <div className="absolute bottom-0 w-full h-full flex items-center justify-center pointer-events-none">
                  <div
                    style={{
                      width: "min(76vw, 380px)",
                      aspectRatio: "3 / 4",
                      border: "1px solid rgba(255,255,255,0.18)",
                      background:
                        "linear-gradient(160deg, rgba(22,30,44,0.9) 0%, rgba(6,10,18,0.98) 100%)",
                      boxShadow: "0 20px 48px rgba(0,0,0,0.55), inset 0 0 44px rgba(130,170,210,0.08)",
                      display: "grid",
                      placeItems: "center",
                      color: "rgba(228,236,248,0.84)",
                      letterSpacing: "0.22em",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    MIZO AMIN
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced progress ring with depth effect */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "300px",
                height: "300px",
                bottom: "10%",
                border: "1.5px solid rgba(200,220,255,0.12)",
                transformOrigin: "center",
              }}
              animate={{
                scale: 1 + progress * 0.2,
                opacity: progress * 0.7,
                boxShadow: `0 0 ${20 + progress * 30}px rgba(100,150,255,${0.2 + progress * 0.4})`,
              }}
              transition={{ duration: 0.1, ease: "linear" }}
            />

            {/* Inner glow layer for Vision Pro aesthetic */}
            {(state === "holding" || state === "ignited" || state === "complete") && (
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "280px",
                  height: "280px",
                  bottom: "10%",
                  left: "50%",
                  top: "auto",
                  transform: "translateX(-50%)",
                  background: `radial-gradient(circle, rgba(150,190,255,${0.15 + progress * 0.2}) 0%, transparent 70%)`,
                  backdropFilter: "blur(8px)",
                }}
                animate={{
                  opacity: state === "ignited" ? 1 : progress * 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>

          <div className="w-full flex flex-col items-center justify-center text-center z-10" style={{ height: "40dvh", paddingBottom: "5vh" }}>
            
            <motion.div className="flex items-center justify-center gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span
                style={{
                  color: "var(--color-text-primary)",
                  fontWeight: "var(--font-weight-black)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  letterSpacing: "0.15em",
                  lineHeight: 1,
                }}
              >
                MIZO
              </span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.8)",
                  fontWeight: "var(--font-weight-black)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  letterSpacing: "0.15em",
                  lineHeight: 1,
                }}
              >
                AMIN
              </span>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-6 opacity-60 w-full px-4">
              <span style={{ width: "clamp(20px, 4vw, 40px)", height: "1px", backgroundColor: "rgba(255,255,255,0.4)" }}></span>
              <p
                style={{
                  color: "var(--color-text-primary)",
                  letterSpacing: "0.5em",
                  fontSize: "var(--text-body-xs)",
                  fontWeight: "var(--font-weight-bold)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                SPATIAL DIGITAL DOMAIN
              </p>
              <span style={{ width: "clamp(20px, 4vw, 40px)", height: "1px", backgroundColor: "rgba(255,255,255,0.4)" }}></span>
            </div>

            <motion.p
              style={{
                marginTop: "var(--space-6)",
                fontSize: "var(--text-body-xs)",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                height: "1rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {state === "idle" && (isTouchDevice ? "TAP TO ENTER" : "HOLD TO ENTER")}
              {(state === "hover" || state === "holding") && "INITIALIZING SEQUENCE..."}
              {(state === "ignited" || state === "complete") && "NEURAL LINK ESTABLISHED..."}
            </motion.p>

            <div
              style={{
                marginTop: "14px",
                width: "min(70vw, 360px)",
                height: "2px",
                background: "rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
              aria-hidden="true"
            >
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, rgba(180,220,255,0.25), rgba(255,255,255,0.75), rgba(180,220,255,0.25))",
                  transformOrigin: "left center",
                }}
                animate={{ scaleX: progress }}
                transition={{ duration: 0.08 }}
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
