"use client";

/**
 * VisionPlanet — Production-grade Vision Planet visual component
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. SEPARATION OF CONCERNS: Visual component only. Mounted as `children`
 *    inside <BasePlanet id="vision"> in TheSolarSystem.tsx.
 *
 * 2. NEURAL SAPPHIRE SHELL: MeshPhysicalMaterial with transmission 0.88,
 *    IOR 1.52, iridescence 0.5 — holographic AI brain aesthetic.
 *
 * 3. DNA HELIX — SANITY-WIRED: Fetches latest post from Sanity on mount.
 *    The post's aiPersona drives the helix segment glow in real-time
 *    via the Visual Signature Engine (personaSignatures.ts).
 *
 * 4. 11-SEGMENT DATA ARCHITECTURE: Each DNA segment maps to a master
 *    category (Sports, Business, Mindset, etc.). Clicking a segment
 *    opens the category detail overlay.
 *
 * 5. PER-NODE LOD CULLING: Distance-checked in useFrame against camera.
 *    _tempVec is pre-allocated — ZERO allocations per frame.
 *
 * 6. SPRING PHYSICS: Panel stiffness 220/damping 20, Helix 260/18,
 *    Node 300/14 — all critically-damped springs, no GSAP.
 *
 * 7. 3-POINT LIGHTING: Key (white spot), Fill (cyan point), Rim (cyan
 *    directional) + "city" HDRI environment.
 */

import { useRef, useState, useCallback, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sphere, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import {
  PALETTE,
  SHELL_MATERIAL,
  CORE_MATERIAL,
  PROXIMITY_PULSE,
  AURA,
  AURA_LERP_RATE,
  AURA_INTENSITY,
  AURA_DISTANCE,
  PANEL_SPRING,
  LIGHTING,
  DNA_HELIX,
  type AuraMode,
} from "./skins";
import DNAHelix, { type LatestPostData } from "./DNAHelix";
import { VISION_CATEGORIES } from "@/config/visionCategories";

// ─── Pre-allocated (ZERO per-frame allocations) ──────────────────────────────

const _auraColor = new THREE.Color();

// ─── Vision Core — Neural Sapphire Shell ─────────────────────────────────────

function VisionCore({ auraMode }: { auraMode: AuraMode }) {
  const shellRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const auraLightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    // Shell slow rotation
    if (shellRef.current) shellRef.current.rotation.y += 0.003;

    // Core pulse — breathing data rhythm
    if (coreRef.current) {
      const pulse = Math.sin(t * Math.PI * 2 * 0.5);
      const base =
        PROXIMITY_PULSE.idle +
        (PROXIMITY_PULSE.peak - PROXIMITY_PULSE.idle) * (pulse * 0.5 + 0.5) * 0.25;
      (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = base;
    }

    // Aura colour + intensity lerp
    if (auraLightRef.current) {
      const targetColor = AURA[auraMode];
      const targetIntensity = AURA_INTENSITY[auraMode];
      const targetDistance = AURA_DISTANCE[auraMode];
      const lerpFactor = 1 - Math.pow(AURA_LERP_RATE, delta);

      auraLightRef.current.color.lerp(targetColor, lerpFactor);
      auraLightRef.current.intensity +=
        (targetIntensity - auraLightRef.current.intensity) * lerpFactor;
      auraLightRef.current.distance +=
        (targetDistance - auraLightRef.current.distance) * lerpFactor;
    }
  });

  return (
    <group>
      {/* Outer shell — Neural Sapphire */}
      <Sphere ref={shellRef} args={[1.0, 128, 128]}>
        <meshPhysicalMaterial
          color={SHELL_MATERIAL.color}
          emissive={SHELL_MATERIAL.emissive}
          emissiveIntensity={SHELL_MATERIAL.emissiveIntensity}
          metalness={SHELL_MATERIAL.metalness}
          roughness={SHELL_MATERIAL.roughness}
          transmission={SHELL_MATERIAL.transmission}
          thickness={SHELL_MATERIAL.thickness}
          ior={SHELL_MATERIAL.ior}
          iridescence={SHELL_MATERIAL.iridescence}
          iridescenceIOR={SHELL_MATERIAL.iridescenceIOR}
          iridescenceThicknessRange={SHELL_MATERIAL.iridescenceThicknessRange}
          clearcoat={SHELL_MATERIAL.clearcoat}
          clearcoatRoughness={SHELL_MATERIAL.clearcoatRoughness}
          attenuationColor={SHELL_MATERIAL.attenuationColor}
          attenuationDistance={SHELL_MATERIAL.attenuationDistance}
          envMapIntensity={SHELL_MATERIAL.envMapIntensity}
          transparent
        />
      </Sphere>

      {/* Inner core — data pulse */}
      <Sphere ref={coreRef} args={[0.65, 64, 64]}>
        <meshStandardMaterial
          color={CORE_MATERIAL.color}
          emissive={CORE_MATERIAL.emissive}
          emissiveIntensity={CORE_MATERIAL.emissiveIntensity}
          roughness={CORE_MATERIAL.roughness}
          metalness={CORE_MATERIAL.metalness}
          transparent
          opacity={CORE_MATERIAL.opacity}
        />
      </Sphere>

      {/* Aura light */}
      <pointLight
        ref={auraLightRef}
        color={PALETTE.visionCyan}
        intensity={AURA_INTENSITY.idle}
        distance={AURA_DISTANCE.idle}
        decay={2}
      />
    </group>
  );
}

// ─── Cinematic Lighting Rig ──────────────────────────────────────────────────

function VisionLightingRig() {
  return (
    <>
      <Environment
        preset={LIGHTING.environment}
        background={false}
        environmentIntensity={LIGHTING.environmentIntensity}
      />

      <spotLight
        color={LIGHTING.key.color}
        intensity={LIGHTING.key.intensity}
        position={LIGHTING.key.position}
        angle={LIGHTING.key.angle}
        penumbra={LIGHTING.key.penumbra}
        decay={LIGHTING.key.decay}
        distance={LIGHTING.key.distance}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-normalBias={0.02}
      />

      <pointLight
        color={LIGHTING.fill.color}
        intensity={LIGHTING.fill.intensity}
        position={LIGHTING.fill.position}
        distance={LIGHTING.fill.distance}
        decay={LIGHTING.fill.decay}
      />

      <directionalLight
        color={LIGHTING.rim.color}
        intensity={LIGHTING.rim.intensity}
        position={LIGHTING.rim.position}
      />
    </>
  );
}

// ─── Category Detail Overlay ─────────────────────────────────────────────────

interface CategoryOverlayProps {
  visible: boolean;
  segmentIndex: number;
  onClose: () => void;
}

function CategoryOverlay({ visible, segmentIndex, onClose }: CategoryOverlayProps) {
  const cat = VISION_CATEGORIES[segmentIndex];

  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[200, 300]}>
      <AnimatePresence>
        {visible && cat && (
          <motion.div
            key="category-overlay"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: PANEL_SPRING.stiffness,
              damping: PANEL_SPRING.damping,
              mass: PANEL_SPRING.mass,
            }}
            style={{
              pointerEvents: "auto",
              position: "fixed",
              bottom: "5vh",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(480px, 90vw)",
              borderRadius: 16,
              overflow: "hidden",
              background: `linear-gradient(145deg, ${PALETTE.overlayBg}ee 0%, #000a14f0 100%)`,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${cat.helixColor}40`,
              boxShadow: `0 0 40px ${cat.helixColor}20, inset 0 0 20px ${cat.helixColor}08`,
              zIndex: 500,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 1.25rem 0.75rem",
                borderBottom: `1px solid ${cat.helixColor}20`,
              }}
            >
              <div>
                <p
                  style={{
                    color: cat.helixColor,
                    fontSize: 10,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  DNA SEGMENT #{segmentIndex + 1}
                </p>
                <h3
                  style={{
                    color: PALETTE.textPrimary,
                    fontSize: 20,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  {cat.icon} {cat.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 24,
                  cursor: "pointer",
                  lineHeight: 1,
                  padding: "4px 8px",
                }}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: "1rem 1.25rem" }}>
              <p
                style={{
                  color: PALETTE.textPrimary,
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: "0 0 8px",
                }}
              >
                {cat.description}
              </p>
              <p
                style={{
                  color: PALETTE.textMuted,
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: 0,
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                {cat.descriptionAr}
              </p>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "0.6rem 1.25rem",
                borderTop: `1px solid ${cat.helixColor}15`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: cat.helixColor,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                /blog/{cat.slug}
              </span>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: cat.helixColor,
                  boxShadow: `0 0 8px ${cat.helixColor}`,
                  display: "inline-block",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Dive Transition — Camera zoom into DNA segment → navigate to blog ───────

const _diveTarget = new THREE.Vector3();
const _diveDirection = new THREE.Vector3();

interface DiveState {
  active: boolean;
  targetSegment: number;
  categorySlug: string;
  progress: number; // 0 → 1
}

function DiveCameraController({
  diveState,
  onDiveComplete,
}: {
  diveState: DiveState;
  onDiveComplete: () => void;
}) {
  const { camera } = useThree();
  const initialPos = useRef(new THREE.Vector3());
  const initialLookAt = useRef(new THREE.Vector3());
  const hasLocked = useRef(false);

  useFrame((_, delta) => {
    if (!diveState.active) {
      hasLocked.current = false;
      return;
    }

    // Lock initial camera position on first frame of dive
    if (!hasLocked.current) {
      initialPos.current.copy(camera.position);
      initialLookAt.current.set(0, 0, 0); // helix center
      hasLocked.current = true;
    }

    // Compute target: center of the clicked DNA segment
    const nodesPerSegment = Math.floor(DNA_HELIX.nodesPerStrand / DNA_HELIX.segmentCount);
    const midNode = diveState.targetSegment * nodesPerSegment + Math.floor(nodesPerSegment / 2);
    const t = midNode / (DNA_HELIX.nodesPerStrand - 1);
    const angle = t * DNA_HELIX.turns * Math.PI * 2;
    _diveTarget.set(
      Math.cos(angle) * DNA_HELIX.radius * 0.3,
      (t - 0.5) * DNA_HELIX.height,
      Math.sin(angle) * DNA_HELIX.radius * 0.3
    );

    // Ease-in-out cubic progress
    const speed = 0.8; // complete in ~1.25s
    const rawProgress = Math.min(diveState.progress + delta * speed, 1.0);
    diveState.progress = rawProgress;

    const ease =
      rawProgress < 0.5
        ? 4 * rawProgress * rawProgress * rawProgress
        : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

    // Lerp camera toward segment
    camera.position.lerpVectors(initialPos.current, _diveTarget, ease);

    // At 100%, trigger navigation
    if (rawProgress >= 1.0) {
      onDiveComplete();
    }
  });

  return null;
}

/**
 * DiveOverlay — full-screen fade that covers the WebGL canvas
 * during the dive transition. Rendered via drei's Html to escape the 3D viewport.
 */
function DiveOverlay({
  active,
  categorySlug,
  categoryColor,
}: {
  active: boolean;
  categorySlug: string;
  categoryColor: string;
}) {
  return (
    <Html fullscreen style={{ pointerEvents: "none" }} zIndexRange={[900, 1000]}>
      <AnimatePresence>
        {active && (
          <motion.div
            key="dive-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `radial-gradient(circle at 50% 50%, ${categoryColor}30 0%, #000000 70%)`,
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                color: categoryColor,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              DIVING INTO /blog/{categorySlug}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Latest Post Status Bar ──────────────────────────────────────────────────

function LatestPostBar({ latestPost }: { latestPost: LatestPostData | null }) {
  if (!latestPost) return null;

  return (
    <Html
      position={[0, -2.5, 0]}
      center
      distanceFactor={12}
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: PANEL_SPRING.stiffness,
          damping: PANEL_SPRING.damping,
        }}
        style={{
          padding: "6px 16px",
          borderRadius: 10,
          background: "rgba(0,10,20,0.7)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,255,255,0.15)",
          color: PALETTE.textPrimary,
          fontSize: 11,
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        <span style={{ color: PALETTE.visionCyan, fontWeight: 700 }}>LATEST:</span>{" "}
        {latestPost.title}
        <span style={{ color: PALETTE.textMuted, marginLeft: 8 }}>
          by {latestPost.personaSlug.replace(/-/g, " ")}
        </span>
      </motion.div>
    </Html>
  );
}

// ─── Live Status HUD — Post count pulse ──────────────────────────────────────

interface PostCounts {
  total: number;
  migrated: number;
  generated: number;
}

function LiveStatusHUD() {
  const [counts, setCounts] = useState<PostCounts>({
    total: 0,
    migrated: 0,
    generated: 0,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchCounts() {
      try {
        const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
        const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
        if (!projectId) return;

        const query = encodeURIComponent(
          `{
            "total": count(*[_type == "post"]),
            "migrated": count(*[_type == "post" && defined(migrationSource)]),
            "generated": count(*[_type == "post" && defined(aiPersona) && !defined(migrationSource)])
          }`
        );
        const url = `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();

        if (!cancelled && data.result) {
          setCounts({
            total: data.result.total ?? 0,
            migrated: data.result.migrated ?? 0,
            generated: data.result.generated ?? 0,
          });
        }
      } catch {
        // Silently fail — HUD is informational
      }
    }

    fetchCounts();
    // Poll every 30s for live updates
    const interval = setInterval(fetchCounts, 30_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (counts.total === 0) return null;

  return (
    <Html
      position={[3.5, 2.2, 0]}
      center
      distanceFactor={14}
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 22, delay: 1.5 }}
        style={{
          padding: "8px 14px",
          borderRadius: 10,
          background: "rgba(0,10,20,0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,255,255,0.12)",
          fontSize: 10,
          letterSpacing: "0.12em",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ color: PALETTE.visionCyan, fontWeight: 700, marginBottom: 4, fontSize: 9, textTransform: "uppercase" }}>
          CONTENT PULSE
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <div>
            <span style={{ color: PALETTE.textPrimary, fontWeight: 700, fontSize: 16 }}>
              {counts.total}
            </span>
            <span style={{ color: PALETTE.textMuted, marginLeft: 4 }}>total</span>
          </div>
          <div>
            <span style={{ color: "#22c55e", fontWeight: 700, fontSize: 16 }}>
              {counts.generated}
            </span>
            <span style={{ color: PALETTE.textMuted, marginLeft: 4 }}>AI</span>
          </div>
          <div>
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: 16 }}>
              {counts.migrated}
            </span>
            <span style={{ color: PALETTE.textMuted, marginLeft: 4 }}>migrated</span>
          </div>
        </div>
      </motion.div>
    </Html>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function VisionPlanetVisual() {
  const [latestPost, setLatestPost] = useState<LatestPostData | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState(-1);
  const [selectedSegment, setSelectedSegment] = useState(-1);
  const [showOverlay, setShowOverlay] = useState(false);
  const [auraMode, setAuraMode] = useState<AuraMode>("idle");

  // ── Dive transition state ──
  const [diveState, setDiveState] = useState<DiveState>({
    active: false,
    targetSegment: 0,
    categorySlug: "",
    progress: 0,
  });
  const navigateRef = useRef<string | null>(null);

  // ── Fetch latest post from Sanity (with cancellation) ──
  useEffect(() => {
    let cancelled = false;

    async function fetchLatestPost() {
      try {
        // Sanity GROQ query for latest post with expanded persona
        // NOTE: Replace SANITY_PROJECT_ID and DATASET with real values
        // when Sanity is configured. For now, use mock data for dev.
        const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
        const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

        if (!SANITY_PROJECT_ID) {
          // Dev fallback — mock data to demonstrate helix glow
          if (!cancelled) {
            setLatestPost({
              categorySlug: "mindset",
              personaSlug: "tony-robbins",
              title: "Awaken the Giant Within: The 5AM Neural Protocol",
            });
            setAuraMode("active");
          }
          return;
        }

        const query = encodeURIComponent(
          `*[_type == "post"] | order(publishedAt desc)[0]{
            title,
            "categorySlug": category->slug.current,
            "personaSlug": aiPersona->slug.current
          }`
        );
        const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${query}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Sanity HTTP ${res.status}`);
        const data = await res.json();

        if (cancelled) return;

        if (data.result) {
          setLatestPost({
            categorySlug: data.result.categorySlug ?? "",
            personaSlug: data.result.personaSlug ?? "",
            title: data.result.title ?? "Untitled",
          });
          setAuraMode("active");
        }
      } catch (err) {
        console.warn("[VisionPlanet] Sanity fetch failed — using dev fallback:", err);
        if (!cancelled) {
          setLatestPost({
            categorySlug: "mindset",
            personaSlug: "tony-robbins",
            title: "Awaken the Giant Within: The 5AM Neural Protocol",
          });
          setAuraMode("active");
        }
      }
    }

    fetchLatestPost();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSegmentClick = useCallback((segIdx: number, categorySlug: string) => {
    // First click: show overlay. Second click (or double-click): dive to blog.
    if (showOverlay && selectedSegment === segIdx) {
      // Trigger dive transition
      setShowOverlay(false);
      setAuraMode("data");
      navigateRef.current = `/blog/${categorySlug}`;
      setDiveState({
        active: true,
        targetSegment: segIdx,
        categorySlug,
        progress: 0,
      });
    } else {
      setSelectedSegment(segIdx);
      setShowOverlay(true);
      setAuraMode("data");
    }
  }, [showOverlay, selectedSegment]);

  const handleDiveComplete = useCallback(() => {
    const route = navigateRef.current;
    if (route) {
      // Use window.location for hard navigation from within R3F
      window.location.href = route;
    }
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setShowOverlay(false);
    setAuraMode(latestPost ? "active" : "idle");
  }, [latestPost]);

  return (
    <group>
      {/* 🎬 Cinematic Lighting */}
      <VisionLightingRig />

      {/* 🪐 Neural Sapphire Core */}
      <VisionCore auraMode={auraMode} />

      {/* 🧬 DNA Double Helix */}
      <DNAHelix
        latestPost={latestPost}
        hoveredSegment={hoveredSegment}
        onSegmentClick={handleSegmentClick}
      />

      {/* 📊 Latest Post Status */}
      <LatestPostBar latestPost={latestPost} />

      {/* 📈 Live Content Pulse HUD */}
      <LiveStatusHUD />

      {/* 📋 Category Detail Overlay */}
      <CategoryOverlay
        visible={showOverlay}
        segmentIndex={selectedSegment >= 0 ? selectedSegment : 0}
        onClose={handleCloseOverlay}
      />

      {/* 🚀 Dive Camera Animation */}
      <DiveCameraController
        diveState={diveState}
        onDiveComplete={handleDiveComplete}
      />

      {/* 🌀 Dive Fade Overlay */}
      <DiveOverlay
        active={diveState.active}
        categorySlug={diveState.categorySlug}
        categoryColor={
          VISION_CATEGORIES[diveState.targetSegment]?.helixColor ?? PALETTE.visionCyan
        }
      />
    </group>
  );
}
