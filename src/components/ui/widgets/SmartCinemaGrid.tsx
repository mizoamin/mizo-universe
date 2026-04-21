"use client";

import { useState, useCallback, useMemo } from "react";
import {
  type VideogramEntry,
  type VideogramCategory,
  extractYouTubeId,
  buildYouTubeEmbedUrl,
  buildCdnVideoUrl,
  getYouTubeThumbnail,
} from "@/lib/videogramRegistry";
import { useAudioStore } from "@/engine/useAudioStore";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SmartCinemaGridProps {
  entries: VideogramEntry[];
  categories: VideogramCategory[];
  accentColor?: string;
}

// ─── Time formatting ──────────────────────────────────────────────────────────

function formatStartTime(seconds: number): string {
  if (seconds <= 0) return "";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m > 0) return `${m}m${s > 0 ? ` ${s}s` : ""}`;
  return `${s}s`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartCinemaGrid({
  entries,
  categories,
  accentColor = "#c0c0c0",
}: SmartCinemaGridProps) {
  const [activeFilter, setActiveFilter] = useState<VideogramCategory | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const playSfx = useAudioStore((s) => s.playSfx);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return entries;
    return entries.filter((e) => e.category === activeFilter);
  }, [entries, activeFilter]);

  const handleCardClick = useCallback(
    (id: string) => {
      playSfx("click");
      setExpandedId((prev) => (prev === id ? null : id));
    },
    [playSfx],
  );

  return (
    <section>
      {/* ── Category filters ── */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => {
            playSfx("click");
            setActiveFilter("all");
          }}
          className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
            activeFilter === "all"
              ? "text-black border-transparent"
              : "text-white/50 border-white/10 hover:text-white hover:border-white/25"
          }`}
          style={
            activeFilter === "all"
              ? { backgroundColor: accentColor }
              : undefined
          }
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playSfx("click");
              setActiveFilter(cat);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
              activeFilter === cat
                ? "text-black border-transparent"
                : "text-white/50 border-white/10 hover:text-white hover:border-white/25"
            }`}
            style={
              activeFilter === cat
                ? { backgroundColor: accentColor }
                : undefined
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((entry) => (
          <CinemaCard
            key={entry.id}
            entry={entry}
            isExpanded={expandedId === entry.id}
            accentColor={accentColor}
            onToggle={handleCardClick}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-white/30 font-mono text-sm py-16">
          No entries found for this category.
        </p>
      )}
    </section>
  );
}

// ─── CinemaCard sub-component ─────────────────────────────────────────────────

interface CinemaCardProps {
  entry: VideogramEntry;
  isExpanded: boolean;
  accentColor: string;
  onToggle: (id: string) => void;
}

function CinemaCard({ entry, isExpanded, accentColor, onToggle }: CinemaCardProps) {
  const isYouTube = entry.source === "youtube";
  const youtubeId = isYouTube ? extractYouTubeId(entry.videoURL) : null;
  const thumbnailUrl = isYouTube && youtubeId
    ? getYouTubeThumbnail(youtubeId)
    : undefined;

  return (
    <article
      className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden
                 hover:border-white/20 transition-all duration-300"
    >
      {/* ── Thumbnail / Player ── */}
      <div className="relative aspect-video bg-black/50 overflow-hidden">
        {isExpanded && isYouTube && youtubeId ? (
          <iframe
            src={buildYouTubeEmbedUrl(youtubeId, entry.startTime)}
            title={entry.title_EN}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : isExpanded && entry.source === "mp4" ? (
          <video
            src={`${buildCdnVideoUrl(entry.videoURL)}#t=${entry.startTime}`}
            controls
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <track kind="captions" />
          </video>
        ) : (
          <button
            onClick={() => onToggle(entry.id)}
            className="absolute inset-0 w-full h-full cursor-pointer group/thumb"
            aria-label={`Play ${entry.title_EN}`}
          >
            {thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt={entry.title_EN}
                className="w-full h-full object-cover opacity-70 group-hover/thumb:opacity-90 transition-opacity"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${accentColor}20, transparent 60%)`,
                }}
              >
                <span className="text-white/20 text-xs font-mono uppercase tracking-widest">
                  {entry.source === "mp4" ? "CDN VIDEO" : "VIDEO"}
                </span>
              </div>
            )}

            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center
                           bg-black/60 backdrop-blur-sm border border-white/20
                           group-hover/thumb:scale-110 transition-transform"
              >
                <svg
                  className="w-6 h-6 text-white ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Start-time badge */}
            {entry.startTime > 0 && (
              <span
                className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono
                           bg-black/70 backdrop-blur-sm border border-white/10 text-white/70"
              >
                START @ {formatStartTime(entry.startTime)}
              </span>
            )}

            {/* Source badge */}
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider
                         border"
              style={{
                backgroundColor: isYouTube ? "rgba(255,0,0,0.15)" : "rgba(192,192,192,0.15)",
                borderColor: isYouTube ? "rgba(255,0,0,0.3)" : "rgba(192,192,192,0.3)",
                color: isYouTube ? "#ff6b6b" : "#c0c0c0",
              }}
            >
              {isYouTube ? "YouTube" : "CDN MP4"}
            </span>
          </button>
        )}

        {/* Collapse button when expanded */}
        {isExpanded && (
          <button
            onClick={() => onToggle(entry.id)}
            className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm
                       border border-white/20 flex items-center justify-center text-white/70
                       hover:text-white transition-colors"
            aria-label="Collapse video"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Card info ── */}
      <div className="p-4">
        {/* Category + Year */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border"
            style={{
              color: accentColor,
              borderColor: `${accentColor}40`,
            }}
          >
            {entry.category}
          </span>
          {entry.year && (
            <span className="text-[9px] font-mono text-white/30">{entry.year}</span>
          )}
        </div>

        {/* Bilingual titles */}
        <h3 className="text-sm font-bold text-white/90 leading-snug mb-1">
          {entry.title_EN}
        </h3>
        <p className="text-xs text-white/40 leading-snug mb-3" dir="rtl">
          {entry.title_AR}
        </p>

        {/* AI Summary */}
        <p className="text-xs text-white/50 leading-relaxed">
          {entry.ai_summary}
        </p>
      </div>
    </article>
  );
}
