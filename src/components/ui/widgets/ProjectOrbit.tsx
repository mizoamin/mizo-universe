"use client";

/**
 * ProjectOrbit — Horizontal project slider widget for Ventures/Tech planets
 *
 * Displays active startups and projects in a horizontally scrollable orbit.
 * Used on: Ventures (startup portfolio), Vision (tech projects).
 *
 * Features:
 *   - Horizontal scroll with snap points
 *   - Touch-friendly drag scrolling
 *   - Status indicators (active, stealth, launched)
 *   - Responsive card sizing
 *   - Reduced-motion: no scroll animations
 */

import { useRef } from "react";

export interface ProjectItem {
  title: string;
  description: string;
  status: "active" | "stealth" | "launched" | "building";
  link?: string;
}

interface ProjectOrbitProps {
  projects: ProjectItem[];
  accentColor?: string;
  title?: string;
}

const STATUS_STYLES: Record<
  ProjectItem["status"],
  { label: string; colorVar: string }
> = {
  active: { label: "ACTIVE", colorVar: "var(--color-text-success)" },
  stealth: { label: "STEALTH", colorVar: "var(--color-planet-voice)" },
  launched: { label: "LAUNCHED", colorVar: "var(--color-planet-vision)" },
  building: { label: "BUILDING", colorVar: "var(--color-text-warning)" },
};

function ProjectCard({
  project,
  accentColor,
}: {
  project: ProjectItem;
  accentColor: string;
}) {
  const status = STATUS_STYLES[project.status];
  const Tag = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      className="flex-shrink-0 snap-start transition-all cursor-default group"
      style={{
        width: "18rem",
        padding: "var(--space-6)",
        borderRadius: "var(--radius-2xl)",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "var(--blur-glass-sm)",
        boxShadow: "var(--shadow-sm)",
        cursor: project.link ? "pointer" : "default",
        transitionDuration: "var(--duration-fast)",
        transitionTimingFunction: "var(--ease-out-cubic)",
      }}
      onMouseEnter={(e) => {
        if (project.link) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
        }
      }}
      onMouseLeave={(e) => {
        if (project.link) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
        }
      }}
    >
      {/* Status badge */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="rounded-full motion-safe:animate-pulse"
          style={{
            width: "var(--space-1)",
            height: "var(--space-1)",
            backgroundColor: status.colorVar,
          }}
        />
        <span
          className="font-bold uppercase"
          style={{
            fontSize: "var(--text-body-xs)",
            letterSpacing: "var(--tracking-hud)",
            color: status.colorVar,
            fontWeight: "var(--font-weight-bold)",
          }}
        >
          {status.label}
        </span>
      </div>

      <h3
        className="uppercase mb-3 group-hover:text-gray-200 transition-colors"
        style={{
          fontSize: "var(--text-h3)",
          fontWeight: "var(--font-weight-black)",
          letterSpacing: "var(--tracking-cinematic)",
          color: "var(--color-text-primary)",
          transitionDuration: "var(--duration-fast)",
        }}
      >
        {project.title}
      </h3>
      <p
        className="leading-relaxed line-clamp-3"
        style={{
          fontSize: "var(--text-body-sm)",
          color: "var(--color-text-tertiary)",
          lineHeight: "var(--line-height-body)",
        }}
      >
        {project.description}
      </p>

      {project.link && (
        <div
          className="mt-4 flex items-center gap-1 font-medium transition-colors"
          style={{
            fontSize: "var(--text-body-xs)",
            color: accentColor,
            transitionDuration: "var(--duration-fast)",
          }}
        >
          <span>Explore</span>
          <svg
            className="w-3 h-3 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transitionDuration: "var(--duration-fast)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as SVGElement).style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as SVGElement).style.transform = "";
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </Tag>
  );
}

export default function ProjectOrbit({
  projects,
  accentColor = "#8A2BE2",
  title,
}: ProjectOrbitProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div>
      {title && (
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className="rounded-full"
              style={{
                backgroundColor: accentColor,
                width: "var(--space-1)",
                height: "var(--space-6)",
              }}
            />
            <h2
              className="uppercase font-black"
              style={{
                fontSize: "var(--text-h2)",
                letterSpacing: "var(--tracking-cinematic)",
                color: "var(--color-text-primary)",
                fontWeight: "var(--font-weight-black)",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: "var(--size-icon-lg)",
                height: "var(--size-icon-lg)",
                borderWidth: "1px",
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--color-text-muted)",
                transitionDuration: "var(--duration-fast)",
                transitionTimingFunction: "var(--ease-out-cubic)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-muted)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
              aria-label="Scroll left"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: "var(--size-icon-lg)",
                height: "var(--size-icon-lg)",
                borderWidth: "1px",
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--color-text-muted)",
                transitionDuration: "var(--duration-fast)",
                transitionTimingFunction: "var(--ease-out-cubic)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-muted)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
              aria-label="Scroll right"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 overflow-x-auto"
        style={{
          gap: "var(--space-4)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}
