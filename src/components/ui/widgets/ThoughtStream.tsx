"use client";

/**
 * ThoughtStream — Minimalist quote/thought card with share functionality
 *
 * Used on: Library (philosophical quotes), Mindset (mental models).
 *
 * Features:
 *   - Elegant quote card with bilingual support
 *   - Native share (Web Share API) with clipboard fallback
 *   - Random quote rotation on click
 *   - Reduced-motion: no fade animation
 */

import { useState, useCallback } from "react";

export interface ThoughtItem {
  text: string;
  textAr?: string;
  source?: string;
}

interface ThoughtStreamProps {
  thoughts: ThoughtItem[];
  accentColor?: string;
  title?: string;
}

export default function ThoughtStream({
  thoughts,
  accentColor = "#ffffff",
  title,
}: ThoughtStreamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");

  const current = thoughts[currentIndex];

  const nextThought = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % thoughts.length);
    setShareStatus("idle");
  }, [thoughts.length]);

  const handleShare = useCallback(async () => {
    const shareText = current.source
      ? `"${current.text}" — ${current.source}`
      : `"${current.text}"`;

    // Web Share API (mobile-first)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          text: shareText,
          url: typeof window !== "undefined" ? window.location.href : "",
        });
        return;
      } catch {
        // User cancelled or API unavailable — fall through to clipboard
      }
    }

    // Clipboard fallback
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareText);
        setShareStatus("copied");
        setTimeout(() => setShareStatus("idle"), 2000);
      } catch {
        // Clipboard failed — silent failure
      }
    }
  }, [current]);

  if (thoughts.length === 0) return null;

  return (
    <div>
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

      <div className="max-w-2xl mx-auto">
        <div
          className="relative rounded-2xl"
          style={{
            padding: "var(--space-8) var(--space-6)",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "var(--blur-glass-sm)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {/* Quote mark */}
          <div
            className="absolute top-4 left-6 text-6xl font-serif leading-none"
            style={{
              color: accentColor,
              opacity: 0.2,
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote className="relative z-10">
            <p
              className="leading-relaxed mb-4"
              style={{
                fontSize: "var(--text-h3)",
                fontWeight: "var(--font-weight-light)",
                color: "var(--color-text-primary)",
                lineHeight: "var(--line-height-body)",
              }}
            >
              {current.text}
            </p>
            {current.textAr && (
              <p
                className="leading-relaxed mb-6"
                dir="rtl"
                style={{
                  fontSize: "var(--text-body-lg)",
                  fontWeight: "var(--font-weight-light)",
                  color: "var(--color-text-tertiary)",
                  lineHeight: "var(--line-height-body)",
                }}
              >
                {current.textAr}
              </p>
            )}
            {current.source && (
              <footer
                className="font-medium"
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                — {current.source}
              </footer>
            )}
          </blockquote>

          {/* Actions */}
          <div
            className="flex items-center justify-between mt-8 pt-6"
            style={{
              borderTopColor: "rgba(255,255,255,0.06)",
              borderTopWidth: "1px",
            }}
          >
            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 font-bold uppercase transition-colors"
              style={{
                fontSize: "var(--text-body-xs)",
                letterSpacing: "var(--tracking-hud)",
                color: "var(--color-text-tertiary)",
                transitionDuration: "var(--duration-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-tertiary)";
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              {shareStatus === "copied" ? "Copied!" : "Share"}
            </button>

            {/* Next thought */}
            {thoughts.length > 1 && (
              <button
                onClick={nextThought}
                className="flex items-center gap-2 font-bold uppercase transition-colors"
                style={{
                  fontSize: "var(--text-body-xs)",
                  letterSpacing: "var(--tracking-hud)",
                  color: accentColor,
                  transitionDuration: "var(--duration-fast)",
                }}
              >
                Next Thought
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Progress dots */}
          {thoughts.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {thoughts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setShareStatus("idle");
                  }}
                  className="rounded-full transition-all"
                  style={{
                    width: "1.5px",
                    height: "1.5px",
                    backgroundColor:
                      i === currentIndex ? accentColor : "rgba(255,255,255,0.15)",
                    transform: i === currentIndex ? "scale(1.4)" : "scale(1)",
                    transitionDuration: "var(--duration-moderate)",
                    transitionTimingFunction: "var(--ease-out-cubic)",
                  }}
                  aria-label={`Thought ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
