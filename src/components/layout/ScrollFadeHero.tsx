"use client";

/**
 * ScrollFadeHero — Cinematic scroll-based fade + parallax for planet hero sections
 *
 * Uses direct DOM manipulation (no React re-renders) for 60 FPS scroll performance.
 * Hero opacity decreases and scale subtly increases as user scrolls down.
 *
 * Reduced-motion: disables scale transform, keeps gentle opacity fade.
 * Reads scroll from closest `.planet-page` ancestor (our scrollable container).
 */

import { useRef, useEffect } from "react";

export default function ScrollFadeHero({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scrollTarget = el.closest(".planet-page");
    if (!scrollTarget) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = scrollTarget.scrollTop;
        const heroHeight = el.offsetHeight || window.innerHeight;
        const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
        const opacity = 1 - progress;
        const scale = prefersReduced ? 1 : 1 + progress * 0.08;
        el.style.opacity = String(opacity);
        el.style.transform = `scale(${scale})`;
        ticking = false;
      });
    };

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        willChange: "opacity, transform",
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
}
