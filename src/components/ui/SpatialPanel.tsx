/**
 * Spatial Panel — Vision Pro-inspired floating glassmorphic panel
 *
 * Renders in 3D space (using R3F <Html>) positioned next to moons.
 * Features:
 *   - Glassmorphic surface (blur + transparency)
 *   - Depth shadow (indicates distance from camera)
 *   - Subtle floating animation (parallax with pointer)
 *   - Responsive content slots
 *   - WCAG AA contrast compliance
 */

"use client";

import { useRef, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface SpatialPanelProps {
  /** World position where panel appears */
  position: [number, number, number];

  /** Panel content title */
  title: string;

  /** Panel description/subtitle */
  description: string;

  /** Accent color (moon's theme) */
  accentColor: string;

  /** Content slot to render (e.g., "career-stats", "legacy-section") */
  contentSlot: string;

  /** Callback when panel is closed */
  onClose?: () => void;

  /** Enable parallax follow pointer */
  enableParallax?: boolean;
}

export default function SpatialPanel({
  position,
  title,
  description,
  accentColor,
  contentSlot,
  onClose,
  enableParallax = true,
}: SpatialPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Parallax effect (subtle pointer following)
  useEffect(() => {
    if (!enableParallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!panelRef.current) return;

      const rect = panelRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = (e.clientX - centerX) * 0.05;
      const offsetY = (e.clientY - centerY) * 0.05;

      setParallaxOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableParallax]);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Html position={position} scale={[0.001, 0.001, 0.001]} distanceFactor={1}>
      <div
        ref={panelRef}
        style={{
          width: "520px",
          borderRadius: "24px",
          padding: "32px",

          // Glassmorphism
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",

          // Depth shadow (creates distance illusion)
          boxShadow: `
            0 20px 80px rgba(0, 0, 0, 0.4),
            0 0 60px ${accentColor}25,
            inset 0 1px 2px rgba(255, 255, 255, 0.1)
          `,

          // Animation
          opacity: isVisible ? 1 : 0,
          transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
          transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)`,
          pointerEvents: "auto",

          // Typography
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "var(--color-text-primary, #ffffff)",
        }}
      >
        {/* Header with close button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottomWidth: "1px",
            borderBottomColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div>
            {/* Accent indicator */}
            <div
              style={{
                width: "8px",
                height: "32px",
                borderRadius: "4px",
                backgroundColor: accentColor,
                marginBottom: "12px",
                boxShadow: `0 0 16px ${accentColor}60`,
              }}
            />

            {/* Title */}
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: 0,
                textTransform: "uppercase",
                color: "var(--color-text-primary, #ffffff)",
              }}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.6)",
                margin: "8px 0 0 0",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {description}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(255, 255, 255, 0.05)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "20px",
              transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1)`,
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
            }}
            aria-label="Close panel"
          >
            ✕
          </button>
        </div>

        {/* Content area */}
        <div
          style={{
            minHeight: "200px",
            overflowY: "auto",
            maxHeight: "400px",

            // Scrollbar styling
            scrollbarWidth: "thin",
            scrollbarColor: `${accentColor}40 transparent`,
          }}
        >
          {/* Content slot renderer */}
          {contentSlot === "career-stats" && (
            <div>
              <p style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}>
                Basketball journey from court to cosmos. Stats, achievements, and personal evolution.
              </p>
              <ul style={{ marginTop: "16px", paddingLeft: "20px", lineHeight: "2" }}>
                <li>Peak performance metrics</li>
                <li>Career transition to tech</li>
                <li>Current focus on AI & innovation</li>
              </ul>
            </div>
          )}

          {contentSlot === "legacy-section" && (
            <div>
              <p style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}>
                Cultural heritage, family roots, and the identity that shaped this journey.
              </p>
              <ul style={{ marginTop: "16px", paddingLeft: "20px", lineHeight: "2" }}>
                <li>Mizo heritage & identity</li>
                <li>Family influence & values</li>
                <li>Cultural bridge in tech</li>
              </ul>
            </div>
          )}

          {contentSlot === "vision-projects" && (
            <div>
              <p style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}>
                Innovation portfolio: AI systems, spatial computing, and experimental projects.
              </p>
              <ul style={{ marginTop: "16px", paddingLeft: "20px", lineHeight: "2" }}>
                <li>AI-powered experiences</li>
                <li>3D spatial interfaces</li>
                <li>Future-focused tech stack</li>
              </ul>
            </div>
          )}

          {contentSlot === "media-gallery" && (
            <div>
              <p style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}>
                Visual storytelling through photography, video, and world experiences.
              </p>
              <ul style={{ marginTop: "16px", paddingLeft: "20px", lineHeight: "2" }}>
                <li>Photography gallery</li>
                <li>Video documentaries</li>
                <li>Travel & exploration</li>
              </ul>
            </div>
          )}
        </div>

        {/* CTA button */}
        <button
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "12px 16px",
            borderRadius: "12px",
            border: `2px solid ${accentColor}`,
            background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 100%)`,
            color: accentColor,
            fontWeight: 700,
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${accentColor}40 0%, ${accentColor}10 100%)`;
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${accentColor}20 0%, transparent 100%)`;
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Explore {title}
        </button>
      </div>
    </Html>
  );
}
