"use client";

/**
 * IdentityPlanet — Production-grade Identity Planet visual component
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. SEPARATION OF CONCERNS: Visual component only. Mounted as `children`
 *    inside <BasePlanet id="identity"> in TheSolarSystem.tsx.
 *
 * 2. FRESNEL GLASS EFFECT: Custom ShaderMaterial using dot(viewDir, normal).
 *    Avoids costly post-process layers. Zero new allocations in useFrame.
 *
 * 3. UNIVERSITY ARC — MANIFEST-WIRED: Fetches assets_manifest_v8.json on
 *    mount, filters for lifestyle/milestones + lifestyle/personal_history,
 *    renders up to ARC_NODE_COUNT real <Image> planes along CubicBezierCurve3.
 *    Geometric placeholder renders while manifest loads.
 *
 * 4. CAPTAIN'S COMMAND — MANIFEST-WIRED: Filters legacy/national_pride +
 *    performance/floor_general. Renders up to CAPTAIN_NODE_COUNT real images
 *    on a Fibonacci sphere. LOD culling applied per-node in useFrame.
 *
 * 5. PER-NODE LOD CULLING: Every node group ref is distance-checked against
 *    camera.position in useFrame. Beyond LOD_CULL_RADIUS → group.visible=false.
 *    _tempVec is pre-allocated outside the loop — ZERO allocations per frame.
 *
 * 6. TEMPORAL ECHO OVERLAY: Clicking any image node passes its AssetRecord
 *    metadata into the overlay, replacing placeholders with real photo + year
 *    + title + location from the live manifest.
 *
 * 7. NEBULA BACKGROUND: Additive point cloud via drei <Stars>, ivory tint.
 */

import { useRef, useMemo, useState, useCallback, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sphere, Stars, Image, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import { MANIFEST_URL } from "@/lib/constants";
import { filterManifest, type ManifestMap, type AssetRecord } from "@/lib/resolvers";
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
  HELIX,
  LOD_CULL_RADIUS,
  type AuraMode,
} from "./skins";
import { useDeviceStore } from "@/engine/deviceStore";

// ─── Derived layout constants from HELIX config ──────────────────────────────
const DEFAULT_NODE_COUNT = HELIX.nodesPerStrand;
const CAPTAIN_CLUSTER_RADIUS = HELIX.radius * 0.65;

// Pre-allocated Vector3 — shared across all LOD checks, never allocates in useFrame
const _tempVec = new THREE.Vector3();

const QU_ARC_TOKENS = ["lifestyle/milestones", "lifestyle/personal_history"];
const CAPTAIN_TOKENS = ["legacy/national_pride", "performance/floor_general"];

// Pre-allocated Color for aura lerping — zero allocations in useFrame
const _auraColor = new THREE.Color();

// ─── Manifest hook ────────────────────────────────────────────────────────────

function useManifestAssets(arcLimit: number, captainLimit: number) {
  const [arcAssets, setArcAssets] = useState<AssetRecord[]>([]);
  const [captainAssets, setCaptainAssets] = useState<AssetRecord[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(MANIFEST_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const manifest = (await res.json()) as ManifestMap;
        if (cancelled) return;
        setArcAssets(filterManifest(manifest, QU_ARC_TOKENS, arcLimit));
        setCaptainAssets(filterManifest(manifest, CAPTAIN_TOKENS, captainLimit));
      } catch (err) {
        console.warn("[IdentityPlanet] Manifest fetch failed — graceful fallback:", err);
      }
    })();
    return () => { cancelled = true; };
  }, [arcLimit, captainLimit]);

  return { arcAssets, captainAssets };
}

// ─── Identity Core — Living Emerald (Layered Gemstone MeshPhysicalMaterial) ───

function IdentityCore({ auraMode }: { auraMode: AuraMode }) {
  const shellRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const auraLightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    // Shell slow rotation
    if (shellRef.current) shellRef.current.rotation.y += 0.002;

    // Core proximity pulse (mouse distance → emissive intensity)
    if (coreRef.current) {
      const pulse = Math.sin(t * Math.PI * 2 * 0.4);
      const base = PROXIMITY_PULSE.idle + (PROXIMITY_PULSE.peak - PROXIMITY_PULSE.idle) * (pulse * 0.5 + 0.5) * 0.3;
      (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = base;
    }

    // Aura colour + intensity shift
    if (auraLightRef.current) {
      const targetColor = AURA[auraMode];
      const targetIntensity = AURA_INTENSITY[auraMode];
      const targetDistance = AURA_DISTANCE[auraMode];
      const lerpFactor = 1 - Math.pow(AURA_LERP_RATE, delta);

      auraLightRef.current.color.lerp(targetColor, lerpFactor);
      auraLightRef.current.intensity += (targetIntensity - auraLightRef.current.intensity) * lerpFactor;
      auraLightRef.current.distance += (targetDistance - auraLightRef.current.distance) * lerpFactor;
    }
  });

  return (
    <group>
      {/* Outer shell — Living Emerald layered gemstone */}
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

      {/* Inner ivory core — heartbeat pulse */}
      <Sphere ref={coreRef} args={[0.72, 64, 64]}>
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

      {/* Aura light — shifts colour per hover context */}
      <pointLight
        ref={auraLightRef}
        color={PALETTE.auraIdle}
        intensity={AURA_INTENSITY.idle}
        distance={AURA_DISTANCE.idle}
        decay={2}
      />
    </group>
  );
}

// ─── Cinematic Lighting Rig (3-point + Environment) ──────────────────────────

function IdentityLightingRig() {
  return (
    <>
      {/* HDRI environment — cool night for emerald rim highlights */}
      <Environment preset={LIGHTING.environment} background={false} environmentIntensity={LIGHTING.environmentIntensity} />

      {/* KEY — SpotLight from upper-right, VSM soft shadow */}
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

      {/* FILL — soft point light from lower-left */}
      <pointLight
        color={LIGHTING.fill.color}
        intensity={LIGHTING.fill.intensity}
        position={LIGHTING.fill.position}
        distance={LIGHTING.fill.distance}
        decay={LIGHTING.fill.decay}
      />

      {/* RIM — directional backlight in emerald accent */}
      <directionalLight
        color={LIGHTING.rim.color}
        intensity={LIGHTING.rim.intensity}
        position={LIGHTING.rim.position}
      />
    </>
  );
}

// ─── ImageNode (shared by Arc + Cluster) ─────────────────────────────────────

interface ImageNodeProps {
  asset: AssetRecord;
  position: THREE.Vector3;
  scale?: number;
  borderColor?: string;
  onSelect: (asset: AssetRecord) => void;
  groupRef: React.RefObject<THREE.Group | null>;
}

function ImageNode({ asset, position, scale = 0.28, borderColor = PALETTE.educationNode, onSelect, groupRef }: ImageNodeProps) {
  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <ringGeometry args={[scale * 0.95, scale * 1.12, 32]} />
        <meshBasicMaterial color={borderColor} transparent opacity={0.55} side={THREE.DoubleSide} />
      </mesh>
      <Image
        url={asset.url}
        scale={scale}
        transparent
        onClick={(e) => { e.stopPropagation(); onSelect(asset); }}
      />
    </group>
  );
}

// ─── University Arc — manifest-wired ─────────────────────────────────────────

interface ArcProps {
  assets: AssetRecord[];
  nodeCount: number;
  lodCullRadius: number;
  onSelectAsset: (a: AssetRecord) => void;
}

function UniversityArc({ assets, nodeCount, lodCullRadius, onSelectAsset }: ArcProps) {
  const count = assets.length;

  const positions = useMemo(() => {
    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-3.5, -1.5, 0.5),
      new THREE.Vector3(-1.5, 2.5, 1.5),
      new THREE.Vector3(1.5, 2.8, -1.0),
      new THREE.Vector3(3.5, 1.0, 0.5)
    );
    return curve.getPoints(Math.max(count, nodeCount) - 1);
  }, [count, nodeCount]);

  const renderPositions = useMemo(() => {
    return assets.map((_, i) => {
      const base = positions[i] ?? new THREE.Vector3();
      const jitterX = Math.sin(i * 2.3) * 0.075;
      const jitterY = Math.cos(i * 1.7) * 0.075;
      const jitterZ = Math.sin(i * 3.1) * 0.075;
      return new THREE.Vector3(base.x + jitterX, base.y + jitterY, base.z + jitterZ);
    });
  }, [assets, positions]);

  const nodeRefs = useRef<React.RefObject<THREE.Group | null>[]>([]);
  if (nodeRefs.current.length !== count) {
    nodeRefs.current = Array.from({ length: count }, () => ({ current: null } as React.RefObject<THREE.Group | null>));
  }

  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.06;
    nodeRefs.current.forEach((ref) => {
      const g = ref.current;
      if (!g) return;
      _tempVec.setFromMatrixPosition(g.matrixWorld);
      g.visible = _tempVec.distanceTo(camera.position) < lodCullRadius;
    });
  });

  // Geometric placeholder while manifest loads
  if (count === 0) {
    const placeholderCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-3.5, -1.5, 0.5),
      new THREE.Vector3(-1.5, 2.5, 1.5),
      new THREE.Vector3(1.5, 2.8, -1.0),
      new THREE.Vector3(3.5, 1.0, 0.5)
    );
    const pts = placeholderCurve.getPoints(nodeCount - 1);
    return (
      <group ref={groupRef}>
        {pts.map((pt, i) => {
          const t = i / Math.max(nodeCount - 1, 1);
          return (
            <mesh key={i} position={pt} scale={0.06 + 0.04 * Math.sin(Math.PI * t)}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color={PALETTE.educationNode} emissive={PALETTE.educationNode} emissiveIntensity={0.4} metalness={0.6} roughness={0.3} />
            </mesh>
          );
        })}
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      {assets.map((asset, i) => {
        const t = i / Math.max(count - 1, 1);
        return (
          <ImageNode
            key={asset.id}
            asset={asset}
            position={renderPositions[i]}
            scale={0.22 + 0.08 * Math.sin(Math.PI * t)}
            borderColor={PALETTE.educationNode}
            onSelect={onSelectAsset}
            groupRef={nodeRefs.current[i]}
          />
        );
      })}
    </group>
  );
}

// ─── Captain's Command Cluster — manifest-wired ───────────────────────────────

interface ClusterProps {
  assets: AssetRecord[];
  nodeCount: number;
  lodCullRadius: number;
  onSelectAsset: (a: AssetRecord) => void;
}

function CaptainCommandCluster({ assets, nodeCount, lodCullRadius, onSelectAsset }: ClusterProps) {
  const count = assets.length;

  const positions = useMemo(() => {
    const n = Math.max(count, nodeCount);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1 || 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      return new THREE.Vector3(
        Math.cos(theta) * r * CAPTAIN_CLUSTER_RADIUS,
        y * CAPTAIN_CLUSTER_RADIUS,
        Math.sin(theta) * r * CAPTAIN_CLUSTER_RADIUS
      );
    });
  }, [count, nodeCount]);

  const nodeRefs = useRef<React.RefObject<THREE.Group | null>[]>([]);
  if (nodeRefs.current.length !== count) {
    nodeRefs.current = Array.from({ length: count }, () => ({ current: null } as React.RefObject<THREE.Group | null>));
  }

  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -clock.elapsedTime * 0.04;
      groupRef.current.rotation.x = clock.elapsedTime * 0.02;
    }
    nodeRefs.current.forEach((ref) => {
      const g = ref.current;
      if (!g) return;
      _tempVec.setFromMatrixPosition(g.matrixWorld);
      g.visible = _tempVec.distanceTo(camera.position) < lodCullRadius;
    });
  });

  // Geometric placeholder while manifest loads
  if (count === 0) {
    return (
      <group ref={groupRef}>
        {positions.slice(0, nodeCount).map((pos, i) => (
          <mesh key={i} position={pos} scale={0.07}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={PALETTE.sportsNode} emissive={PALETTE.sportsNode} emissiveIntensity={0.5} metalness={0.3} roughness={0.4} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      {assets.map((asset, i) => (
        <ImageNode
          key={asset.id}
          asset={asset}
          position={positions[i]}
          scale={0.2}
          borderColor={PALETTE.sportsNode}
          onSelect={onSelectAsset}
          groupRef={nodeRefs.current[i]}
        />
      ))}
    </group>
  );
}

// ─── Temporal Echo Overlay — real metadata injected ──────────────────────────

interface TemporalEchoProps {
  visible: boolean;
  selectedAsset: AssetRecord | null;
  onClose: () => void;
}

function TemporalEchoOverlay({ visible, selectedAsset, onClose }: TemporalEchoProps) {
  const [sliderX, setSliderX] = useState(50);

  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[200, 300]}>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="temporal-echo"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: PANEL_SPRING.stiffness,
              damping: PANEL_SPRING.damping,
              mass: PANEL_SPRING.mass,
            }}
            style={{
              pointerEvents: "auto",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(680px, 92vw)",
              borderRadius: 20,
              overflow: "hidden",
              background: "linear-gradient(145deg,rgba(5,20,15,0.88) 0%,rgba(0,8,5,0.92) 100%)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(0,200,150,0.25)",
              boxShadow: "0 0 60px rgba(0,200,150,0.12),inset 0 0 30px rgba(0,150,100,0.06)",
              zIndex: 500,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem 0.75rem", borderBottom: "1px solid rgba(0,200,150,0.12)" }}>
              <div>
                <p style={{ color: "#00c896", fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 700, marginBottom: 2 }}>
                  Temporal Echo
                </p>
                <h3 style={{ color: "#f5f0e8", fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em" }}>
                  {selectedAsset ? `${selectedAsset.year} · ${selectedAsset.location}` : "Student → Captain"}
                </h3>
              </div>
              <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: 28, cursor: "pointer", lineHeight: 1, padding: "4px 8px" }}>×</button>
            </div>

            {/* Split view — THEN vs NOW */}
            <div style={{ position: "relative", height: 280, overflow: "hidden", userSelect: "none" }}>
              {/* THEN panel */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#1a1208 0%,#0d0a04 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", color: "#c8a87a" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8, opacity: 0.6 }}>THEN · Qatar University</div>
                  <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>Student</div>
                  <div style={{ fontSize: 13, opacity: 0.5, marginTop: 8, fontWeight: 300 }}>Marketing · IT Pioneer · Early Court Years</div>
                </div>
              </div>

              {/* NOW panel — real asset photo if available, clipped by slider */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#001a12 0%,#000d08 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", clipPath: `inset(0 0 0 ${sliderX}%)` }}>
                {selectedAsset ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedAsset.url} alt={selectedAsset.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(0.05) saturate(1.1)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.75rem 1rem", background: "linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 100%)", color: "#00e5a0", fontSize: 12, fontWeight: 600 }}>
                      {selectedAsset.title}
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: "center", color: "#00e5a0" }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8, opacity: 0.6 }}>NOW · National Captain</div>
                    <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>Captain</div>
                    <div style={{ fontSize: 13, opacity: 0.5, marginTop: 8, fontWeight: 300 }}>Qatar National Team · Club Al-Shamal · Entrepreneur</div>
                  </div>
                )}
              </div>

              {/* Drag slider handle */}
              <div
                style={{ position: "absolute", top: 0, bottom: 0, left: `${sliderX}%`, width: 2, background: "linear-gradient(to bottom,transparent,#00c896,transparent)", transform: "translateX(-50%)", cursor: "ew-resize", zIndex: 10 }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  const rect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
                  const move = (ev: MouseEvent) => setSliderX(Math.min(95, Math.max(5, ((ev.clientX - rect.left) / rect.width) * 100)));
                  const up = () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
                  window.addEventListener("mousemove", move);
                  window.addEventListener("mouseup", up);
                }}
                onTouchMove={(e) => {
                  const rect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
                  setSliderX(Math.min(95, Math.max(5, ((e.touches[0].clientX - rect.left) / rect.width) * 100)));
                }}
              >
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 28, height: 28, borderRadius: "50%", background: "#00c896", boxShadow: "0 0 16px rgba(0,200,150,0.6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontSize: 12, fontWeight: 900 }}>⇔</div>
              </div>
            </div>

            {/* Footer — StoryLink metadata */}
            <div style={{ padding: "0.75rem 1.5rem", borderTop: "1px solid rgba(0,200,150,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#c8a87a", fontSize: 11, opacity: 0.6 }}>← THEN</span>
              {selectedAsset && (
                <span style={{ color: "#ffffff", fontSize: 11, opacity: 0.5 }}>{selectedAsset.location} · {selectedAsset.year}</span>
              )}
              <span style={{ color: "#00e5a0", fontSize: 11, opacity: 0.6 }}>NOW →</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── StoryLink Camera Animator ────────────────────────────────────────────────

function StoryLinkCameraControl({ target, active }: { target: THREE.Vector3 | null; active: boolean }) {
  const { camera } = useThree();
  const lerpTarget = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    if (!active || !target) return;
    lerpTarget.current.set(target.x, target.y + 3, target.z + 5);
    camera.position.lerp(lerpTarget.current, 1 - Math.pow(0.001, delta));
  });

  return null;
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function IdentityPlanetVisual() {
  const tier = useDeviceStore((s) => s.tier);

  const budget = useMemo(() => {
    if (tier === "mobile") {
      return { arcNodeCount: 14, captainNodeCount: 14, lodCullRadius: 9, ambientStars: 420 };
    }
    if (tier === "tablet") {
      return { arcNodeCount: 18, captainNodeCount: 18, lodCullRadius: 10.5, ambientStars: 560 };
    }
    return {
      arcNodeCount: DEFAULT_NODE_COUNT,
      captainNodeCount: DEFAULT_NODE_COUNT,
      lodCullRadius: LOD_CULL_RADIUS,
      ambientStars: 800,
    };
  }, [tier]);

  const { arcAssets, captainAssets } = useManifestAssets(
    budget.arcNodeCount,
    budget.captainNodeCount,
  );

  const [showTemporalEcho, setShowTemporalEcho] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<AssetRecord | null>(null);
  const [storyTarget] = useState<THREE.Vector3 | null>(null);
  const [storyActive] = useState(false);
  const [auraMode, setAuraMode] = useState<AuraMode>("idle");

  const handleCoreClick = useCallback(() => {
    setSelectedAsset(null);
    setShowTemporalEcho((v) => !v);
  }, []);

  const handleNodeSelect = useCallback((asset: AssetRecord) => {
    setSelectedAsset(asset);
    setShowTemporalEcho(true);
  }, []);

  const handleCloseEcho = useCallback(() => {
    setShowTemporalEcho(false);
    setSelectedAsset(null);
  }, []);

  return (
    <group>
      {/* Cinematic lighting rig + HDRI environment */}
      <IdentityLightingRig />

      {/* Nebula — ivory additive point cloud */}
      <Stars radius={12} depth={4} count={budget.ambientStars} factor={1.2} saturation={0.1} fade speed={0.3} />

      {/* Identity Core — Living Emerald with aura system */}
      <group onClick={handleCoreClick}>
        <IdentityCore auraMode={auraMode} />
      </group>

      {/* University Arc — manifest-wired real milestones */}
      <Suspense fallback={null}>
        <group
          onPointerEnter={() => setAuraMode("education")}
          onPointerLeave={() => setAuraMode("idle")}
        >
          <UniversityArc
            assets={arcAssets}
            nodeCount={budget.arcNodeCount}
            lodCullRadius={budget.lodCullRadius}
            onSelectAsset={handleNodeSelect}
          />
        </group>
      </Suspense>

      {/* Captain's Command — manifest-wired national pride photos */}
      <Suspense fallback={null}>
        <group
          onPointerEnter={() => setAuraMode("sports")}
          onPointerLeave={() => setAuraMode("idle")}
        >
          <CaptainCommandCluster
            assets={captainAssets}
            nodeCount={budget.captainNodeCount}
            lodCullRadius={budget.lodCullRadius}
            onSelectAsset={handleNodeSelect}
          />
        </group>
      </Suspense>

      {/* Temporal Echo — real photo + year + location from manifest */}
      <TemporalEchoOverlay
        visible={showTemporalEcho}
        selectedAsset={selectedAsset}
        onClose={handleCloseEcho}
      />

      {/* StoryLink camera lerp */}
      <StoryLinkCameraControl target={storyTarget} active={storyActive} />
    </group>
  );
}
