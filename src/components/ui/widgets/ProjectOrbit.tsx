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
  { label: string; color: string }
> = {
  active: { label: "ACTIVE", color: "#00ff88" },
  stealth: { label: "STEALTH", color: "#ff0080" },
  launched: { label: "LAUNCHED", color: "#4488ff" },
  building: { label: "BUILDING", color: "#ffaa00" },
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
      className="flex-shrink-0 w-72 sm:w-80 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm snap-start hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04] cursor-default group"
      style={project.link ? { cursor: "pointer" } : undefined}
    >
      {/* Status badge */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="w-2 h-2 rounded-full motion-safe:animate-pulse"
          style={{ backgroundColor: status.color }}
        />
        <span
          className="text-[10px] font-bold uppercase tracking-wider"
          style={{ color: status.color }}
        >
          {status.label}
        </span>
      </div>

      <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-gray-200 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {project.link && (
        <div className="mt-4 flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: accentColor }}>
          <span>Explore</span>
          <svg
            className="w-3 h-3 transition-transform group-hover:translate-x-1"
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
              className="h-6 w-1 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              {title}
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
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
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
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
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
