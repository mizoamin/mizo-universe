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
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[2px] text-gray-300 hover:text-white hover:border-white/20 transition-colors"
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
        <div className="h-6 w-1 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{title}</h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {(["all", "Podcast", "Interview", "Audio Note"] as const).map((type) => (
          <button
            key={type}
            onMouseEnter={() => playSfx("hover")}
            onClick={() => {
              playSfx("click");
              setActiveType(type);
            }}
            className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[2px] border transition-colors"
            style={{
              borderColor: activeType === type ? accentColor : "rgba(255,255,255,0.15)",
              color: activeType === type ? accentColor : "rgba(255,255,255,0.65)",
              backgroundColor: activeType === type ? `${accentColor}10` : "transparent",
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {taxonomy.slice(0, 6).map((t) => (
          <span
            key={t.en}
            className="text-[10px] uppercase tracking-[2px] rounded-full border border-white/10 px-3 py-1 text-gray-400"
            title={t.ar}
          >
            {t.en}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
          >
            <div className="relative h-44 w-full overflow-hidden bg-black/50">
              <img
                src={item.imageUrl}
                alt={item.titleEn}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span
                  className="text-[10px] uppercase tracking-[2px] font-bold"
                  style={{ color: accentColor }}
                >
                  {item.type}
                </span>
                <span className="text-[10px] text-gray-500" dir="rtl">
                  {item.typeAr}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white line-clamp-2 mb-2">{item.titleEn}</h3>
              <p className="text-xs text-gray-400 line-clamp-2 mb-4" dir="rtl">
                {item.titleAr}
              </p>

              <div className="flex items-center justify-between gap-2">
                <AudioSlot label="Audio Slot" />
                <span className="text-[10px] text-gray-500 truncate" title={item.sourceDir}>
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
