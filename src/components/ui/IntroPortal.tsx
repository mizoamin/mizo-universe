"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PortalState = "idle" | "hover" | "holding" | "ignited" | "complete";

export default function IntroPortal({ onEnter }: { onEnter: () => void }) {
  const [state, setState] = useState<PortalState>("idle");
  const [progress, setProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const holdStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const moveRafRef = useRef<number | null>(null);
  const pointerTargetRef = useRef<{ x: number; y: number } | null>(null);
  const enteredRef = useRef(false);
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const HOLD_DURATION = isTouchDevice ? 900 : 1500;

  const ASSETS = {
    idle: "/images/intro/mizo-state1-off.png",
    hover: "/images/intro/mizo-state2-ready.png",
    active: "/images/intro/mizo-state3-active.png",
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

    return () => {
      reducedMotionQuery.removeEventListener("change", syncPreferences);
      pointerQuery.removeEventListener("change", syncPreferences);
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

  const showIdle = state === "idle";
  const showReady = state === "hover" || state === "holding";
  const showActive = state === "ignited" || state === "complete";

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
            {!hasImageError && (
              <>
                <motion.img 
                  src={ASSETS.idle} 
                  alt="Mizo idle portrait" 
                  draggable={false}
                  onError={onImageError}
                  className="absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none" 
                  animate={{ opacity: showIdle ? 1 : 0 }} 
                  transition={{ duration: 0.5 }} 
                />
                <motion.img 
                  src={ASSETS.hover} 
                  alt="Mizo ready portrait" 
                  draggable={false}
                  onError={onImageError}
                  className="absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none" 
                  animate={{ opacity: showReady ? 1 : 0 }} 
                  transition={{ duration: 0.3 }} 
                />
                <motion.img 
                  src={ASSETS.active} 
                  alt="Mizo active portrait" 
                  draggable={false}
                  onError={onImageError}
                  className="absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none" 
                  animate={{ opacity: showActive ? 1 : 0 }} 
                  transition={{ duration: 0.2 }} 
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

            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "300px", height: "300px", bottom: "10%",
                border: "1px solid rgba(200,220,255,0.12)",
                transform: `scale(${1 + progress * 0.12})`,
                opacity: progress * 0.6, 
                transition: "transform 0.1s linear", 
                backdropFilter: "blur(2px)",
                willChange: "transform",
              }}
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center text-center z-10" style={{ height: "40dvh", paddingBottom: "5vh" }}>
            
            <motion.div className="flex items-center justify-center gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span style={{ color: '#ffffff', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.15em', lineHeight: 1 }}>MIZO</span>
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.15em', lineHeight: 1 }}>AMIN</span>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-6 opacity-60 w-full px-4">
              <span style={{ width: 'clamp(20px, 4vw, 40px)', height: '1px', backgroundColor: 'rgba(255,255,255,0.4)' }}></span>
              <p style={{ color: 'white', letterSpacing: '0.5em', fontSize: 'clamp(9px, 1.5vw, 12px)', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>SPATIAL DIGITAL DOMAIN</p>
              <span style={{ width: 'clamp(20px, 4vw, 40px)', height: '1px', backgroundColor: 'rgba(255,255,255,0.4)' }}></span>
            </div>

            <motion.p className="mt-8 text-[11px] tracking-[0.4em] uppercase text-white/40 h-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              {showIdle && (isTouchDevice ? "TAP TO ENTER" : "HOLD TO ENTER")}
              {showReady && "INITIALIZING SEQUENCE..."}
              {showActive && "NEURAL LINK ESTABLISHED..."}
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
