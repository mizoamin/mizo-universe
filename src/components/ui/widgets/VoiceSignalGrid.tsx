"use client";

import { useMemo, useState } from "react";
import { useAudioStore } from "@/engine/useAudioStore";
import type { VoiceRegistryItem } from "@/lib/voiceRegistry";

interface VoiceSignalGridProps {
  title?: string;
  accentColor?: string;
  taxonomy: Array<{ en: string; ar: string }>;
  items: VoiceRegistryItem[];
}

function AudioSlot({ label }: { label: string }) {
  const playSfx = useAudioStore((s) => s.playSfx);
  return (
    <button
      onClick={() => playSfx("click")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        borderRadius: "var(--radius-lg)",
        borderWidth: "1px",
        borderColor: "rgba(255,255,255,0.1)",
        backgroundColor: "rgba(255,255,255,0.03)",
        padding: "var(--space-1) var(--space-2)",
        fontSize: "var(--text-body-xs)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-hud)",
        color: "var(--color-text-muted)",
        cursor: "pointer",
        transition: `all var(--duration-fast) var(--ease-out-cubic)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--color-text-primary)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--color-text-muted)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15 9.5a4.5 4.5 0 010 5" />
      </svg>
      {label}
    </button>
  );
}

export default function VoiceSignalGrid({
  title = "Signal Archive",
  accentColor = "#ff0080",
  taxonomy,
  items,
}: VoiceSignalGridProps) {
  const [activeType, setActiveType] = useState<"all" | "Podcast" | "Interview" | "Audio Note">("all");
  const playSfx = useAudioStore((s) => s.playSfx);

  const filtered = useMemo(() => {
    if (activeType === "all") return items;
    return items.filter((i) => i.type === activeType);
  }, [items, activeType]);

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div
          style={{
            backgroundColor: accentColor,
            width: "var(--space-1)",
            height: "var(--space-6)",
            borderRadius: "var(--radius-full)",
          }}
        />
        <h2
          style={{
            fontSize: "var(--text-h2)",
            fontWeight: "var(--font-weight-black)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-cinematic)",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h2>
      </div>

      <div style={{ marginBottom: "var(--space-4)", display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
        {(["all", "Podcast", "Interview", "Audio Note"] as const).map((type) => (
          <button
            key={type}
            onMouseEnter={() => playSfx("hover")}
            onClick={() => {
              playSfx("click");
              setActiveType(type);
            }}
            style={{
              borderRadius: "var(--radius-full)",
              padding: "var(--space-1) var(--space-2)",
              fontSize: "var(--text-body-xs)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-hud)",
              borderWidth: "1px",
              borderColor: activeType === type ? accentColor : "rgba(255,255,255,0.15)",
              color: activeType === type ? accentColor : "rgba(255,255,255,0.65)",
              backgroundColor: activeType === type ? `${accentColor}10` : "transparent",
              transition: `all var(--duration-fast) var(--ease-out-cubic)`,
              cursor: "pointer",
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: "var(--space-6)", display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
        {taxonomy.slice(0, 6).map((t) => (
          <span
            key={t.en}
            style={{
              fontSize: "var(--text-body-xs)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-hud)",
              borderRadius: "var(--radius-full)",
              borderWidth: "1px",
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--color-text-muted)",
              padding: "var(--space-1) var(--space-2)",
            }}
            title={t.ar}
          >
            {t.en}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        {filtered.map((item) => (
          <article
            key={item.id}
            style={{
              borderRadius: "var(--radius-2xl)",
              overflow: "hidden",
              borderWidth: "1px",
              borderColor: "rgba(255,255,255,0.1)",
              backgroundColor: "rgba(255,255,255,0.02)",
              boxShadow: "var(--shadow-sm)",
              transition: `all var(--duration-fast) var(--ease-out-cubic)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <div
              style={{
                position: "relative",
                height: "176px",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.titleEn}
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  opacity: 0.8,
                  transition: `opacity var(--duration-fast) var(--ease-out-cubic)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                }}
              />
            </div>
            <div style={{ padding: "var(--space-2)" }}>
              <div
                style={{
                  marginBottom: "var(--space-1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-1)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-body-xs)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-hud)",
                    fontWeight: "var(--font-weight-bold)",
                    color: accentColor,
                  }}
                >
                  {item.type}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-body-xs)",
                    color: "var(--color-text-muted)",
                    direction: "rtl",
                  }}
                >
                  {item.typeAr}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-1)",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.titleEn}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-body-xs)",
                  color: "var(--color-text-muted)",
                  marginBottom: "var(--space-2)",
                  direction: "rtl",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.titleAr}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-1)",
                }}
              >
                <AudioSlot label="Audio Slot" />
                <span
                  style={{
                    fontSize: "var(--text-body-xs)",
                    color: "var(--color-text-muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={item.sourceDir}
                >
                  {item.sourceDir.split("/").slice(-1)[0] ?? "registry"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
