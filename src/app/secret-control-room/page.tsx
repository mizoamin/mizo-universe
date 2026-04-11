"use client";

/**
 * Galaxy Commander — AI Blog Generation HQ
 *
 * Cyber-space themed command center with:
 * 1. Persona selection grid with signature color glow
 * 2. Category strategy selector
 * 3. Core Insight input with character counter
 * 4. Real-time Visual Signature Monitor (persona color + pulse)
 * 5. SEO Score Radar (simulated pre-publish quality estimate)
 * 6. Generation status + Sanity draft result
 */

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { PERSONA_SEED } from "../../../sanity/schemas/aiPersona";
import { VISION_CATEGORIES } from "@/config/visionCategories";
import {
  generateBlogPost,
  type GenerationResult,
} from "@/app/secret-control-room/actions";
import { getPersonaSoul } from "@/lib/personaSouls";

// ─── Types ────────────────────────────────────────────────────────────────────

type GenerationState =
  | { status: "idle" }
  | { status: "generating"; personaName: string }
  | { status: "success"; result: GenerationResult }
  | { status: "error"; message: string };

// ─── Component ────────────────────────────────────────────────────────────────

export default function SecretControlRoomPage() {
  const [selectedPersona, setSelectedPersona] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [coreInsight, setCoreInsight] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");
  const [genState, setGenState] = useState<GenerationState>({ status: "idle" });

  const activePersona = PERSONA_SEED.find((p) => p.slug === selectedPersona);
  const activeCategory = VISION_CATEGORIES.find(
    (c) => c.slug === selectedCategory,
  );
  const activeSoul = selectedPersona
    ? getPersonaSoul(selectedPersona)
    : undefined;

  const canGenerate =
    selectedPersona && selectedCategory && coreInsight.trim().length >= 10;

  const handleGenerate = useCallback(async () => {
    if (!canGenerate || !activePersona) return;

    setGenState({ status: "generating", personaName: activePersona.name });

    try {
      const result = await generateBlogPost({
        personaSlug: selectedPersona,
        categorySlug: selectedCategory,
        coreInsight: coreInsight.trim(),
        additionalContext: additionalContext.trim() || undefined,
      });

      if (result.error) {
        setGenState({ status: "error", message: result.error });
      } else {
        setGenState({ status: "success", result });
      }
    } catch (err) {
      setGenState({
        status: "error",
        message: err instanceof Error ? err.message : "Unknown error",
      });
    }
  }, [
    canGenerate,
    activePersona,
    selectedPersona,
    selectedCategory,
    coreInsight,
    additionalContext,
  ]);

  const handleReset = useCallback(() => {
    setGenState({ status: "idle" });
    setCoreInsight("");
    setAdditionalContext("");
  }, []);

  // SEO Radar scores (simulated from input quality)
  const seoScores = useMemo(() => {
    const insightLen = coreInsight.trim().length;
    const hasPersona = !!selectedPersona;
    const hasCategory = !!selectedCategory;
    const hasSoul = !!activeSoul;
    return {
      topicDepth: Math.min(100, Math.round((insightLen / 200) * 100)),
      voiceAuth: hasPersona ? (hasSoul ? 95 : 60) : 0,
      categoryFit: hasCategory ? 85 : 0,
      seoReady: hasPersona && hasCategory && insightLen >= 30 ? 90 : Math.min(40, Math.round((insightLen / 30) * 40)),
      overall: Math.round(
        (Math.min(100, (insightLen / 200) * 100) * 0.25) +
        ((hasPersona ? (hasSoul ? 95 : 60) : 0) * 0.3) +
        ((hasCategory ? 85 : 0) * 0.2) +
        ((hasPersona && hasCategory && insightLen >= 30 ? 90 : 0) * 0.25),
      ),
    };
  }, [coreInsight, selectedPersona, selectedCategory, activeSoul]);

  const accentColor = activePersona?.signatureColor ?? "#00f0ff";

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#030306",
        backgroundImage: `
          radial-gradient(ellipse at 20% 0%, ${accentColor}06 0%, transparent 50%),
          radial-gradient(ellipse at 80% 100%, ${accentColor}04 0%, transparent 40%)
        `,
      }}
    >
      {/* ═══ Scanline Overlay ═══ */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* ═══ Header ═══ */}
        <header className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 12px ${accentColor}80`,
                  }}
                />
                <div
                  className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
                  style={{ backgroundColor: `${accentColor}40` }}
                />
              </div>
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-mono"
                style={{ color: `${accentColor}80` }}
              >
                Galaxy Commander v3.0
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
              <span>SYS: ONLINE</span>
              <span>·</span>
              <span>AI: {genState.status === "generating" ? "ACTIVE" : "STANDBY"}</span>
              <span>·</span>
              <span>SEC: LEVEL 5</span>
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
            style={{
              background: `linear-gradient(135deg, #ffffff 0%, ${accentColor} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mission Control
          </h1>
          <p className="text-gray-600 mt-1 text-sm font-mono">
            Persona Soul Engine × Instant Indexing × Visual Signature
          </p>

          {/* Horizontal divider with glow */}
          <div
            className="mt-4 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${accentColor}30 30%, ${accentColor}60 50%, ${accentColor}30 70%, transparent 100%)`,
            }}
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ═══════════════════════════════════════════════════════ */}
          {/* LEFT PANEL: Configuration (8 cols) */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 space-y-8">
            {/* ─── Persona Grid ─── */}
            <section>
              <SectionHeader number="01" label="Select AI Persona" color={accentColor} />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {PERSONA_SEED.map((persona) => {
                  const isSelected = selectedPersona === persona.slug;
                  const hasSoul = !!getPersonaSoul(persona.slug);
                  return (
                    <button
                      key={persona.slug}
                      onClick={() => setSelectedPersona(persona.slug)}
                      className={`group relative p-3 rounded-lg border text-left transition-all duration-300 ${
                        isSelected
                          ? "bg-white/[0.08] scale-[1.02]"
                          : "bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]"
                      }`}
                      style={
                        isSelected
                          ? {
                              borderColor: `${persona.signatureColor}50`,
                              boxShadow: `0 0 24px ${persona.signatureColor}15, inset 0 0 12px ${persona.signatureColor}08`,
                            }
                          : undefined
                      }
                    >
                      {/* Soul indicator */}
                      {hasSoul && (
                        <div
                          className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: persona.signatureColor }}
                          title="Soul Engine Active"
                        />
                      )}
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0 transition-shadow"
                          style={{
                            backgroundColor: persona.signatureColor,
                            boxShadow: isSelected
                              ? `0 0 8px ${persona.signatureColor}60`
                              : undefined,
                          }}
                        />
                        <span className="font-semibold text-xs truncate">
                          {persona.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-600 capitalize font-mono">
                        {persona.tone}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ─── Category Grid ─── */}
            <section>
              <SectionHeader number="02" label="Select Category" color={accentColor} />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {VISION_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`p-3 rounded-lg border text-left transition-all duration-300 ${
                        isSelected
                          ? "bg-white/[0.08]"
                          : "bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.04]"
                      }`}
                      style={
                        isSelected
                          ? {
                              borderColor: `${cat.helixColor}50`,
                              boxShadow: `0 0 16px ${cat.helixColor}10`,
                            }
                          : undefined
                      }
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <p className="font-medium text-xs mt-1">{cat.title}</p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ─── Core Insight ─── */}
            <section>
              <SectionHeader number="03" label="Core Insight / Topic" color={accentColor} />
              <div className="relative">
                <textarea
                  value={coreInsight}
                  onChange={(e) => setCoreInsight(e.target.value)}
                  placeholder="What's the core insight or topic you want to explore? (min 10 characters)"
                  className="w-full h-28 bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 text-white placeholder-gray-700 resize-none focus:outline-none transition-colors font-mono text-sm"
                  style={{
                    borderColor: coreInsight.length >= 10 ? `${accentColor}30` : undefined,
                  }}
                />
                <span
                  className="absolute bottom-3 right-3 text-[10px] font-mono"
                  style={{
                    color:
                      coreInsight.length >= 10
                        ? `${accentColor}80`
                        : "rgba(255,255,255,0.15)",
                  }}
                >
                  {coreInsight.length} chars
                </span>
              </div>

              <div className="mt-3">
                <label className="text-[10px] text-gray-600 uppercase tracking-wider font-mono block mb-1.5">
                  Additional Context (optional)
                </label>
                <textarea
                  value={additionalContext}
                  onChange={(e) => setAdditionalContext(e.target.value)}
                  placeholder="Specific angles, personal stories, references..."
                  className="w-full h-16 bg-white/[0.02] border border-white/[0.06] rounded-lg p-3 text-white placeholder-gray-700 resize-none focus:outline-none transition-colors font-mono text-xs"
                />
              </div>
            </section>

            {/* ─── Generate Button ─── */}
            <button
              onClick={handleGenerate}
              disabled={!canGenerate || genState.status === "generating"}
              className="group relative w-full py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed overflow-hidden"
              style={{
                backgroundColor: `${accentColor}10`,
                color: accentColor,
                border: `1px solid ${accentColor}30`,
              }}
            >
              {/* Animated border glow on hover */}
              {canGenerate && genState.status !== "generating" && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 20px ${accentColor}15, 0 0 30px ${accentColor}10`,
                  }}
                />
              )}

              {/* Pulse animation when generating */}
              {genState.status === "generating" && (
                <div
                  className="absolute inset-0 animate-pulse"
                  style={{ backgroundColor: `${accentColor}08` }}
                />
              )}

              <span className="relative z-10 flex items-center justify-center gap-2">
                {genState.status === "generating" ? (
                  <>
                    <span
                      className="inline-block w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: accentColor }}
                    />
                    Channeling {genState.personaName}...
                  </>
                ) : (
                  "⚡ Initialize Generation Sequence"
                )}
              </span>
            </button>

            {/* ─── Result Display ─── */}
            {genState.status === "success" && (
              <ResultCard result={genState.result} accentColor={accentColor} onReset={handleReset} />
            )}

            {genState.status === "error" && (
              <div className="p-5 rounded-lg border border-red-500/20 bg-red-500/[0.03]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <h3 className="font-bold text-red-400 text-sm font-mono uppercase tracking-wide">
                    Generation Failed
                  </h3>
                </div>
                <p className="text-xs text-gray-500 font-mono">{genState.message}</p>
                <button
                  onClick={() => setGenState({ status: "idle" })}
                  className="mt-3 px-4 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono transition-colors"
                >
                  Retry
                </button>
              </div>
            )}
          </div>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* RIGHT PANEL: Monitors (4 cols) */}
          {/* ═══════════════════════════════════════════════════════ */}
          <aside className="lg:col-span-4 space-y-5">
            {/* ─── Visual Signature Monitor ─── */}
            {activePersona && (
              <div
                className="relative p-5 rounded-lg border overflow-hidden"
                style={{
                  borderColor: `${activePersona.signatureColor}20`,
                  backgroundColor: `${activePersona.signatureColor}04`,
                }}
              >
                {/* Animated pulse background */}
                <PulseBackground
                  color={activePersona.signatureColor}
                  pattern={activePersona.pulsePattern}
                  active={genState.status === "generating"}
                />

                <div className="relative z-10">
                  <h4
                    className="text-[10px] uppercase tracking-[0.3em] font-mono mb-3"
                    style={{ color: `${activePersona.signatureColor}80` }}
                  >
                    Visual Signature Monitor
                  </h4>

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-black"
                      style={{
                        backgroundColor: `${activePersona.signatureColor}20`,
                        color: activePersona.signatureColor,
                        boxShadow: `0 0 20px ${activePersona.signatureColor}20`,
                      }}
                    >
                      {activePersona.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{activePersona.name}</p>
                      <p
                        className="text-[10px] font-mono capitalize"
                        style={{ color: `${activePersona.signatureColor}90` }}
                      >
                        {activePersona.tone} · {activePersona.pulsePattern}
                      </p>
                    </div>
                  </div>

                  {/* Signature color bar */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="h-1 flex-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${activePersona.signatureColor}, ${activePersona.signatureColor}20)`,
                      }}
                    />
                    <span className="text-[9px] font-mono text-gray-600">
                      {activePersona.signatureColor}
                    </span>
                  </div>

                  {/* Soul status */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${activeSoul ? "animate-pulse" : ""}`}
                      style={{
                        backgroundColor: activeSoul
                          ? "#22c55e"
                          : "#666",
                      }}
                    />
                    <span className="text-[10px] font-mono text-gray-500">
                      Soul Engine: {activeSoul ? "DEEP PROFILE ACTIVE" : "GENERIC MODE"}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    {activePersona.bio.slice(0, 120)}...
                  </p>
                </div>
              </div>
            )}

            {/* ─── Active Category ─── */}
            {activeCategory && (
              <div className="p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{activeCategory.icon}</span>
                  <div>
                    <p className="font-bold text-sm">{activeCategory.title}</p>
                    <p className="text-[10px] text-gray-600 font-mono" dir="rtl">
                      {activeCategory.titleAr}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>
            )}

            {/* ─── SEO Score Radar ─── */}
            <div className="p-4 rounded-lg border border-white/[0.06] bg-white/[0.015]">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-mono text-gray-600 mb-3">
                SEO Score Radar
              </h4>
              <div className="space-y-2">
                <RadarBar label="Topic Depth" value={seoScores.topicDepth} color={accentColor} />
                <RadarBar label="Voice Auth" value={seoScores.voiceAuth} color={accentColor} />
                <RadarBar label="Category Fit" value={seoScores.categoryFit} color={accentColor} />
                <RadarBar label="SEO Ready" value={seoScores.seoReady} color={accentColor} />
                <div className="pt-2 mt-2 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                    Overall
                  </span>
                  <span
                    className="text-lg font-black font-mono"
                    style={{ color: accentColor }}
                  >
                    {seoScores.overall}
                  </span>
                </div>
              </div>
            </div>

            {/* ─── System Status ─── */}
            <div className="p-4 rounded-lg border border-white/[0.04] bg-white/[0.01]">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-mono text-gray-700 mb-2">
                System Status
              </h4>
              <div className="space-y-1">
                <StatusLine label="Persona Lock" active={!!selectedPersona} />
                <StatusLine label="Category Lock" active={!!selectedCategory} />
                <StatusLine label="Insight Feed" active={coreInsight.trim().length >= 10} />
                <StatusLine label="Soul Engine" active={!!activeSoul} />
                <StatusLine label="AI Core" active={genState.status !== "error"} />
                <StatusLine label="Indexing API" active />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

function SectionHeader({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <h2 className="text-sm font-bold mb-3 flex items-center gap-2">
      <span className="font-mono text-xs" style={{ color }}>
        {number}
      </span>
      <span className="text-gray-300">{label}</span>
      <div
        className="flex-1 h-px ml-2"
        style={{ backgroundColor: `${color}15` }}
      />
    </h2>
  );
}

function StatusLine({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? "bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.5)]" : "bg-gray-800"}`}
      />
      <span
        className={`text-[10px] font-mono ${active ? "text-gray-400" : "text-gray-700"}`}
      >
        {label}
      </span>
      <span className="text-[9px] font-mono ml-auto" style={{ color: active ? "#22c55e60" : "#33333360" }}>
        {active ? "OK" : "—"}
      </span>
    </div>
  );
}

function RadarBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[10px] font-mono text-gray-500">{label}</span>
        <span className="text-[10px] font-mono" style={{ color: `${color}90` }}>
          {value}
        </span>
      </div>
      <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color}40, ${color})`,
            boxShadow: value > 50 ? `0 0 6px ${color}40` : undefined,
          }}
        />
      </div>
    </div>
  );
}

function PulseBackground({
  color,
  pattern,
  active,
}: {
  color: string;
  pattern: string;
  active: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let frame = 0;
    let animId: number;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseAlpha = active ? 0.08 : 0.03;
      const speed = pattern === "steady" ? 0.02 : pattern === "sharp" ? 0.06 : 0.04;

      // Draw flowing wave
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.02 + frame * speed) * 8 +
          Math.sin(x * 0.01 + frame * speed * 0.7) * 4;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `${color}${Math.round(baseAlpha * 255)
        .toString(16)
        .padStart(2, "0")}`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [color, pattern, active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
    />
  );
}

function ResultCard({
  result,
  accentColor,
  onReset,
}: {
  result: GenerationResult;
  accentColor: string;
  onReset: () => void;
}) {
  return (
    <div
      className="p-5 rounded-lg border"
      style={{
        borderColor: `${accentColor}25`,
        backgroundColor: `${accentColor}04`,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.5)" }}
        />
        <h3
          className="font-bold text-xs font-mono uppercase tracking-wider"
          style={{ color: "#22c55e" }}
        >
          Draft Generated Successfully
        </h3>
      </div>

      <div className="space-y-3">
        <ResultField label="Title" value={result.title} />
        <ResultField label="SEO Title" value={result.seoTitle} />
        <ResultField label="Meta Description" value={result.metaDescription} />
        <ResultField label="Focus Keyword" value={result.focusKeyword} />
        <ResultField label="Tags" value={result.tags.join(", ")} />

        {result.bodyPreview && (
          <div className="mt-3 p-3 rounded bg-white/[0.02] border border-white/[0.04]">
            <span className="text-[9px] font-mono text-gray-600 uppercase tracking-wider block mb-1">
              Body Preview
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              {result.bodyPreview.slice(0, 300)}...
            </p>
          </div>
        )}

        {result.sanityDocumentId && (
          <p className="text-[10px] font-mono text-gray-700">
            Sanity Draft: {result.sanityDocumentId}
          </p>
        )}
      </div>

      <button
        onClick={onReset}
        className="mt-4 px-4 py-2 rounded bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono transition-colors"
        style={{ color: accentColor }}
      >
        New Mission →
      </button>
    </div>
  );
}

function ResultField({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <span className="text-[9px] font-mono text-gray-600 uppercase tracking-wider">
        {label}
      </span>
      <p className="text-xs text-gray-300 mt-0.5">{value}</p>
    </div>
  );
}
