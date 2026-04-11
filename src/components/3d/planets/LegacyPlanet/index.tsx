"use client";

/**
 * LegacyPlanet — The Golden Era Monument
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. TROPHY GOLD CORE: MeshPhysicalMaterial imported from skins.ts.
 *    metalness:1 + clearcoat:1 + signed basketball textures (albedo + emissiveMap).
 *    Signature pulses emissive at 0.5Hz in sync with the God Rays.
 *
 * 2. STAIRWAY TO GLORY: Career assets arranged in a spiral that physically
 *    ascends the Y-axis — the "Ladder of Success". Earlier years at the base,
 *    peak years at the summit. Each frame orbits in a helix formation.
 *
 * 3. 3-POINT CINEMATIC LIGHTING: Warm Key (#FFD700), Neutral Fill, Golden Rim.
 *    All values imported from skins.ts LIGHTING config. VSM soft shadows.
 *
 * 4. GOD RAYS: Dual cone geometry (inner/outer) with AdditiveBlending.
 *    Pulsing at 0.5Hz, synced with the signature glow.
 *
 * 5. MEMORY RECALL: On trophy hover, core emissiveIntensity spikes to
 *    SIGNATURE_GLOW.hoverSpike, then decays back via exponential lerp.
 *
 * 6. SPRING PHYSICS: stiffness:280, damping:18 via useFrame lerps for
 *    trophy frame hover scale — heavy, premium feel. Zero GSAP.
 *
 * 7. LOD CULLING: Pre-allocated _tempVec. Per-node distance check in
 *    useFrame. Zero allocations per frame.
 */

import { useRef, useMemo, useState, useCallback, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sphere, Stars, Image, Environment, useTexture } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import { MANIFEST_URL } from "@/lib/constants";
import {
  filterManifestByTags,
  filterManifestByYear,
  type ManifestMap,
  type AssetRecord,
} from "@/lib/resolvers";

import {
  PALETTE,
  TEXTURES,
  SHELL_MATERIAL,
  CORE_MATERIAL,
  SIGNATURE_GLOW,
  GOD_RAY,
  SPIRAL,
  LIGHTING,
  PANEL_SPRING,
  GALLERY_COUNT,
  ERA_MIN,
  ERA_MAX,
  LOD_CULL_RADIUS,
  FRAME_MATERIAL,
  MEMORY_RECALL,
  FOG,
} from "./skins";

// ─── Pre-allocated — ZERO allocations in useFrame ─────────────────────────────
const _tempVec = new THREE.Vector3();

/** Tags for Hall of Champions manifest query */
const CHAMPION_TAGS = ["award", "trophy", "champion", "mvp", "shooting"];
const CHAMPION_YEARS = ["2015", "2017"];
const LEGACY_FALLBACK_TOKENS = ["legacy/trophy_room", "legacy/national_pride", "legacy/basketball_career"];

// ─── Manifest hook ────────────────────────────────────────────────────────────

function useLegacyAssets(activeYear: number) {
  const [allAssets, setAllAssets] = useState<AssetRecord[]>([]);
  const [filteredAssets, setFilteredAssets] = useState<AssetRecord[]>([]);

  // Fetch manifest once on mount — tag-based query
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(MANIFEST_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const manifest = (await res.json()) as ManifestMap;
        if (cancelled) return;

        // Primary: tag-based search (award, trophy, champion, mvp, shooting) + years 2015/2017
        let heroAssets = filterManifestByTags(
          manifest,
          CHAMPION_TAGS,
          CHAMPION_YEARS,
          GALLERY_COUNT
        );

        // Fallback: if tag search yields few results, supplement with path-based
        if (heroAssets.length < 12) {
          const extra = filterManifestByYear(
            manifest,
            LEGACY_FALLBACK_TOKENS,
            ["2015", "2016", "2017"],
            GALLERY_COUNT - heroAssets.length
          );
          const existingIds = new Set(heroAssets.map((a) => a.id));
          heroAssets.push(...extra.filter((a) => !existingIds.has(a.id)));
        }

        setAllAssets(heroAssets);
        setFilteredAssets(heroAssets);
      } catch (err) {
        console.warn("[LegacyPlanet] Manifest fetch failed — graceful fallback:", err);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Re-filter when era slider year changes
  useEffect(() => {
    if (allAssets.length === 0) return;
    const targetYears = [String(activeYear - 1), String(activeYear), String(activeYear + 1)];
    const yearFiltered = allAssets.filter((a) => targetYears.includes(a.year));
    setFilteredAssets(yearFiltered.length >= 4 ? yearFiltered : allAssets);
  }, [activeYear, allAssets]);

  return filteredAssets;
}

// ─── Signed Trophy Core — MeshPhysicalMaterial from skins.ts ──────────────────

function LegacyGoldCore({ onClick, isHovered }: { onClick: () => void; isHovered: boolean }) {
  const shellRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const auraRef = useRef<THREE.PointLight>(null);

  // Load basketball albedo + signature emissiveMap (graceful fallback if missing)
  let albedoMap: THREE.Texture | null = null;
  let signatureMap: THREE.Texture | null = null;
  try {
    // useTexture will suspend while loading — Suspense boundary catches this
    const textures = useTexture({
      map: TEXTURES.albedo,
      emissiveMap: TEXTURES.signature,
    });
    albedoMap = textures.map;
    signatureMap = textures.emissiveMap;
  } catch {
    // Textures not found — fall back to pure material colours (still looks great)
  }

  // Track current emissive for smooth lerp (Memory Recall effect)
  const currentEmissive = useRef(SIGNATURE_GLOW.idle);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    // Shell slow rotation — majestic trophy spin
    if (shellRef.current) shellRef.current.rotation.y = t * 0.025;

    // Signature breathing pulse at 0.5Hz synced with God Rays
    const breathe = GOD_RAY.breatheBase + GOD_RAY.breatheAmplitude * Math.sin(t * Math.PI * 2 * SIGNATURE_GLOW.frequency);
    const targetEmissive = isHovered
      ? SIGNATURE_GLOW.hoverSpike
      : SIGNATURE_GLOW.idle + breathe * SIGNATURE_GLOW.amplitude;

    // Smooth exponential lerp — no snapping
    const lerpFactor = 1 - Math.pow(MEMORY_RECALL.lerpRate, delta);
    currentEmissive.current += (targetEmissive - currentEmissive.current) * lerpFactor;

    // Apply to shell material
    if (shellRef.current) {
      (shellRef.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = currentEmissive.current;
    }

    // Inner core also reacts to hover
    if (coreRef.current) {
      const coreTarget = isHovered ? CORE_MATERIAL.emissiveIntensity * 2.0 : CORE_MATERIAL.emissiveIntensity;
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity += (coreTarget - mat.emissiveIntensity) * lerpFactor;
    }

    // Aura light intensity follows the pulse
    if (auraRef.current) {
      const auraTarget = isHovered ? 14 : 8;
      auraRef.current.intensity += (auraTarget - auraRef.current.intensity) * lerpFactor;
    }
  });

  return (
    <group onClick={onClick}>
      {/* Outer shell — Trophy Gold signed basketball */}
      <Sphere ref={shellRef} args={[1.0, 128, 128]}>
        <meshPhysicalMaterial
          color={SHELL_MATERIAL.color}
          emissive={SHELL_MATERIAL.emissive}
          emissiveIntensity={SHELL_MATERIAL.emissiveIntensity}
          metalness={SHELL_MATERIAL.metalness}
          roughness={SHELL_MATERIAL.roughness}
          clearcoat={SHELL_MATERIAL.clearcoat}
          clearcoatRoughness={SHELL_MATERIAL.clearcoatRoughness}
          envMapIntensity={SHELL_MATERIAL.envMapIntensity}
          reflectivity={SHELL_MATERIAL.reflectivity}
          {...(albedoMap ? { map: albedoMap, roughnessMap: albedoMap } : {})}
          {...(signatureMap ? { emissiveMap: signatureMap } : {})}
        />
      </Sphere>

      {/* Inner warm glow core */}
      <Sphere ref={coreRef} args={[0.65, 32, 32]}>
        <meshStandardMaterial
          color={CORE_MATERIAL.color}
          emissive={CORE_MATERIAL.emissive}
          emissiveIntensity={CORE_MATERIAL.emissiveIntensity}
          metalness={CORE_MATERIAL.metalness}
          roughness={CORE_MATERIAL.roughness}
          transparent
          opacity={CORE_MATERIAL.opacity}
        />
      </Sphere>

      {/* Aura lights */}
      <pointLight ref={auraRef} color={PALETTE.goldBright} intensity={8} distance={12} decay={1.5} />
      <pointLight color={PALETTE.gold} intensity={4} distance={6} decay={2} position={[0, 2, 0]} />
    </group>
  );
}

// ─── God Ray / Light Shaft — skins.ts driven ─────────────────────────────────

function GodRayShaft() {
  const matOuterRef = useRef<THREE.MeshBasicMaterial>(null);
  const matInnerRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    const breath = GOD_RAY.breatheBase + GOD_RAY.breatheAmplitude * Math.sin(clock.elapsedTime * Math.PI * 2 * GOD_RAY.pulseHz);
    if (matOuterRef.current) matOuterRef.current.opacity = GOD_RAY.outerOpacity * breath;
    if (matInnerRef.current) matInnerRef.current.opacity = GOD_RAY.innerOpacity * breath;
  });

  return (
    <group position={[0, 8, 0]} rotation={[Math.PI, 0, 0]}>
      {/* Outer wide shaft */}
      <mesh>
        <coneGeometry args={[GOD_RAY.outerRadius, GOD_RAY.outerHeight, 16, 1, true]} />
        <meshBasicMaterial
          ref={matOuterRef}
          color={PALETTE.goldBright}
          transparent
          opacity={GOD_RAY.outerOpacity}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Inner tight shaft — focused on the core */}
      <mesh>
        <coneGeometry args={[GOD_RAY.innerRadius, GOD_RAY.innerHeight, 16, 1, true]} />
        <meshBasicMaterial
          ref={matInnerRef}
          color={PALETTE.goldBright}
          transparent
          opacity={GOD_RAY.innerOpacity}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* SpotLight source at the shaft apex */}
      <spotLight
        color={PALETTE.goldBright}
        intensity={GOD_RAY.spotIntensity}
        distance={GOD_RAY.spotDistance}
        angle={GOD_RAY.spotAngle}
        penumbra={GOD_RAY.spotPenumbra}
        decay={1}
        position={[0, 1, 0]}
        target-position={[0, -14, 0]}
      />
    </group>
  );
}

// ─── 3-Point Cinematic Lighting Rig — skins.ts driven ────────────────────────

function LegacyLightingRig() {
  return (
    <>
      {/* KEY — warm high-intensity SpotLight, top-right, VSM soft shadows */}
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

      {/* FILL — neutral PointLight from lower-left */}
      <pointLight
        color={LIGHTING.fill.color}
        intensity={LIGHTING.fill.intensity}
        position={LIGHTING.fill.position}
        distance={LIGHTING.fill.distance}
        decay={LIGHTING.fill.decay}
      />

      {/* RIM — golden DirectionalLight from behind ('Halo' effect) */}
      <directionalLight
        color={LIGHTING.rim.color}
        intensity={LIGHTING.rim.intensity}
        position={LIGHTING.rim.position}
      />
    </>
  );
}

// ─── Hall of Champions — 3D spiral vortex gallery ────────────────────────────

interface SpiralFrameProps {
  asset: AssetRecord;
  position: [number, number, number];
  lookAtCenter: boolean;
  groupRef: React.RefObject<THREE.Group | null>;
  onClick: (asset: AssetRecord) => void;
  onHoverChange: (hovered: boolean) => void;
}

function SpiralFrame({ asset, position, groupRef, onClick, onHoverChange }: SpiralFrameProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);
  const currentScale = useRef(1.0);

  // Face outward from the spiral axis (Y)
  const yAngle = Math.atan2(position[0], position[2]);

  // Spring physics hover scale — stiffness:280, damping:18, useFrame lerp
  useFrame((_, delta) => {
    const target = hovered ? 1.18 : 1.0;
    const springForce = (target - currentScale.current) * PANEL_SPRING.stiffness * 0.001;
    const dampingForce = -PANEL_SPRING.damping * 0.01 * (currentScale.current - 1.0);
    currentScale.current += (springForce + dampingForce) * Math.min(delta, 0.033);
    currentScale.current = Math.max(0.8, Math.min(1.3, currentScale.current));
    if (meshRef.current) {
      meshRef.current.scale.setScalar(currentScale.current);
    }
  });

  const handlePointerOver = useCallback((e: THREE.Event) => {
    (e as { stopPropagation?: () => void }).stopPropagation?.();
    setHovered(true);
    onHoverChange(true);
    document.body.style.cursor = "pointer";
  }, [onHoverChange]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    onHoverChange(false);
    document.body.style.cursor = "auto";
  }, [onHoverChange]);

  return (
    <group
      ref={(node) => {
        if (groupRef && typeof groupRef === "object") (groupRef as React.MutableRefObject<THREE.Group | null>).current = node;
        (meshRef as React.MutableRefObject<THREE.Group | null>).current = node;
      }}
      position={position}
      rotation={[0, -yAngle + Math.PI, 0]}
    >
      {/* Outer golden frame torus */}
      <mesh>
        <torusGeometry args={[0.38, 0.025, 16, 64]} />
        <meshStandardMaterial
          color={FRAME_MATERIAL.color}
          emissive={FRAME_MATERIAL.emissive}
          emissiveIntensity={hovered ? FRAME_MATERIAL.emissiveIntensity.hover : FRAME_MATERIAL.emissiveIntensity.idle}
          metalness={FRAME_MATERIAL.metalness}
          roughness={FRAME_MATERIAL.roughness}
        />
      </mesh>

      {/* Photo plane */}
      <Image
        url={asset.url}
        scale={0.62}
        transparent
        onClick={(e) => { e.stopPropagation(); onClick(asset); }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />

      {/* Subtle radial halo */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[0.42, 32]} />
        <meshBasicMaterial
          color={PALETTE.goldBright}
          transparent
          opacity={hovered ? 0.18 : 0.06}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Hover tooltip — title + year */}
      {hovered && (
        <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
          <div style={{
            background: "rgba(26,26,26,0.92)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${PALETTE.gold}50`,
            borderRadius: 8,
            padding: "6px 12px",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}>
            <p style={{ color: PALETTE.goldBright, fontSize: 11, fontWeight: 700, margin: 0 }}>
              {asset.title}
            </p>
            <p style={{ color: PALETTE.gold, fontSize: 9, opacity: 0.7, margin: 0 }}>
              {asset.year} · {asset.location}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}

interface HallOfChampionsProps {
  assets: AssetRecord[];
  onSelectAsset: (a: AssetRecord) => void;
  onAnyHover: (hovered: boolean) => void;
}

/**
 * Stairway to Glory: assets arranged in a spiral helix that physically
 * ASCENDS the Y-axis. Earlier career moments at the base, peak achievements
 * at the summit. Each frame orbits in a helix with SPIRAL config from skins.ts.
 */
function HallOfChampions({ assets, onSelectAsset, onAnyHover }: HallOfChampionsProps) {
  const count = assets.length;

  const nodeRefs = useRef<React.RefObject<THREE.Group | null>[]>([]);
  if (nodeRefs.current.length !== count) {
    nodeRefs.current = Array.from({ length: count }, () => ({ current: null } as React.RefObject<THREE.Group | null>));
  }

  const { camera } = useThree();
  const spiralRef = useRef<THREE.Group>(null);

  // Bake Stairway to Glory spiral positions — ascending Y-axis
  const positions = useMemo(() => {
    const pts: [number, number, number][] = [];
    const halfHeight = SPIRAL.height / 2;
    for (let i = 0; i < Math.max(count, 12); i++) {
      const t = i / Math.max(count - 1, 1); // 0→1
      const angle = t * Math.PI * 2 * SPIRAL.turns;
      // Stairway to Glory: Y physically ascends from base to summit
      const y = -halfHeight + t * SPIRAL.height + t * SPIRAL.stairwayRise;
      // Organic radius variation for gravitational feel
      const r = SPIRAL.baseRadius + SPIRAL.radiusVariation * Math.sin(angle * 1.5);
      pts.push([Math.cos(angle) * r, y, Math.sin(angle) * r]);
    }
    return pts;
  }, [count]);

  useFrame(({ clock }) => {
    // Stately trophy-case rotation
    if (spiralRef.current) spiralRef.current.rotation.y = clock.elapsedTime * SPIRAL.rotationSpeed;
    // Per-node LOD — zero allocations
    nodeRefs.current.forEach((ref) => {
      const g = ref.current;
      if (!g) return;
      _tempVec.setFromMatrixPosition(g.matrixWorld);
      g.visible = _tempVec.distanceTo(camera.position) < LOD_CULL_RADIUS;
    });
  });

  if (count === 0) {
    // Placeholder golden torus frames while manifest loads
    return (
      <group ref={spiralRef}>
        {positions.slice(0, 12).map((pos, i) => (
          <mesh key={i} position={pos}>
            <torusGeometry args={[0.38, 0.025, 16, 64]} />
            <meshStandardMaterial
              color={FRAME_MATERIAL.color}
              emissive={FRAME_MATERIAL.emissive}
              emissiveIntensity={FRAME_MATERIAL.emissiveIntensity.idle}
              metalness={FRAME_MATERIAL.metalness}
              roughness={FRAME_MATERIAL.roughness}
            />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <group ref={spiralRef}>
      {assets.map((asset, i) => (
        <SpiralFrame
          key={asset.id}
          asset={asset}
          position={positions[i] ?? [0, 0, 0]}
          lookAtCenter
          groupRef={nodeRefs.current[i]}
          onClick={onSelectAsset}
          onHoverChange={onAnyHover}
        />
      ))}
    </group>
  );
}

// ─── Era Slider (vertical, 2D HTML overlay) ───────────────────────────────────

interface EraSliderProps {
  year: number;
  onYearChange: (y: number) => void;
}

function EraSlider({ year, onYearChange }: EraSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pct = ((year - ERA_MIN) / (ERA_MAX - ERA_MIN)) * 100;

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const rawPct = (e.clientY - rect.top) / rect.height;
    const newYear = Math.round(ERA_MIN + rawPct * (ERA_MAX - ERA_MIN));
    onYearChange(Math.min(ERA_MAX, Math.max(ERA_MIN, newYear)));
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const rawPct = (e.clientY - rect.top) / rect.height;
    const newYear = Math.round(ERA_MIN + rawPct * (ERA_MAX - ERA_MIN));
    onYearChange(Math.min(ERA_MAX, Math.max(ERA_MIN, newYear)));
  };

  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[100, 200]}>
      <div style={{ position: "fixed", right: "max(24px, env(safe-area-inset-right, 16px))", top: "50%", transform: "translateY(-50%)", pointerEvents: "auto", zIndex: 300 }}>
        {/* Year label */}
        <motion.div
          key={year}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: PALETTE.goldBright,
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: 12,
            textShadow: `0 0 20px ${PALETTE.goldBright}80`,
          }}
        >
          {year}
        </motion.div>

        {/* Track */}
        <div
          ref={sliderRef}
          onClick={handleTrackClick}
          onMouseMove={handleDrag}
          style={{
            width: 4,
            height: 200,
            background: "rgba(212,168,67,0.2)",
            borderRadius: 8,
            position: "relative",
            cursor: "pointer",
            margin: "0 auto",
          }}
        >
          {/* Fill */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: `${pct}%`, background: `linear-gradient(to bottom, ${PALETTE.goldBright}, ${PALETTE.gold})`, borderRadius: 8 }} />
          {/* Thumb */}
          <div style={{ position: "absolute", left: "50%", top: `${pct}%`, transform: "translate(-50%, -50%)", width: 16, height: 16, borderRadius: "50%", background: PALETTE.goldBright, boxShadow: `0 0 12px ${PALETTE.goldBright}`, border: "2px solid #fff" }} />
          {/* Min/Max labels */}
          <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", color: PALETTE.gold, fontSize: 9, opacity: 0.6, whiteSpace: "nowrap" }}>{ERA_MIN}</div>
          <div style={{ position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)", color: PALETTE.gold, fontSize: 9, opacity: 0.6, whiteSpace: "nowrap" }}>{ERA_MAX}</div>
        </div>

        <p style={{ color: PALETTE.gold, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", textAlign: "center", marginTop: 24, opacity: 0.5 }}>Era</p>
      </div>
    </Html>
  );
}

// ─── Asset Detail Panel ───────────────────────────────────────────────────────

interface DetailPanelProps {
  asset: AssetRecord | null;
  visible: boolean;
  onClose: () => void;
}

function AssetDetailPanel({ asset, visible, onClose }: DetailPanelProps) {
  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[200, 400]}>
      <AnimatePresence>
        {visible && asset && (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: PANEL_SPRING.stiffness, damping: PANEL_SPRING.damping, mass: PANEL_SPRING.mass }}
            style={{
              pointerEvents: "auto",
              position: "fixed",
              bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(560px, 90vw)",
              borderRadius: 16,
              overflow: "hidden",
              background: `linear-gradient(145deg, rgba(26,20,10,0.92) 0%, rgba(12,8,2,0.96) 100%)`,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${PALETTE.gold}40`,
              boxShadow: `0 0 40px ${PALETTE.gold}20, inset 0 0 20px ${PALETTE.goldDim}10`,
              zIndex: 500,
              display: "flex",
              gap: 0,
            }}
          >
            {/* Photo */}
            <div style={{ width: 120, flexShrink: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset.url} alt={asset.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Metadata */}
            <div style={{ padding: "1.25rem 1.25rem 1rem", flex: 1 }}>
              <p style={{ color: PALETTE.goldBright, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6, opacity: 0.7 }}>
                Legacy · {asset.year}
              </p>
              <h3 style={{ color: "#f5f0e0", fontSize: 15, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: 8 }}>
                {asset.title}
              </h3>
              <p style={{ color: PALETTE.gold, fontSize: 12, opacity: 0.7, fontWeight: 500 }}>
                {asset.location}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: `${PALETTE.gold}60`, fontSize: 22, cursor: "pointer", padding: "0.75rem 1rem", alignSelf: "flex-start" }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Volumetric fog particle shell — skins.ts driven ─────────────────────────

function VolumeFog() {
  return (
    <>
      {/* Dense inner fog — warm golden particles */}
      <Stars radius={FOG.innerParticles.radius} depth={FOG.innerParticles.depth} count={FOG.innerParticles.count} factor={FOG.innerParticles.factor} saturation={0.6} fade speed={FOG.innerParticles.speed} />
      {/* Wide ambient haze */}
      <Stars radius={FOG.outerParticles.radius} depth={FOG.outerParticles.depth} count={FOG.outerParticles.count} factor={FOG.outerParticles.factor} saturation={0.3} fade speed={FOG.outerParticles.speed} />
      {/* Large translucent glowing mist sphere */}
      <Sphere args={[FOG.mistSphere.radius, 32, 32]}>
        <meshBasicMaterial
          color={FOG.mistSphere.color}
          transparent
          opacity={FOG.mistSphere.opacity}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function LegacyPlanetVisual() {
  const [activeYear, setActiveYear] = useState(2016);
  const [selectedAsset, setSelectedAsset] = useState<AssetRecord | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showSlider, setShowSlider] = useState(true);
  const [isTrophyHovered, setIsTrophyHovered] = useState(false);

  const galleryAssets = useLegacyAssets(activeYear);

  const handleCoreClick = useCallback(() => {
    setShowSlider((v) => !v);
  }, []);

  const handleAssetSelect = useCallback((asset: AssetRecord) => {
    setSelectedAsset(asset);
    setShowDetail(true);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setShowDetail(false);
    setSelectedAsset(null);
  }, []);

  const handleTrophyHover = useCallback((hovered: boolean) => {
    setIsTrophyHovered(hovered);
  }, []);

  return (
    <group>
      {/* Environment map for gold reflections — no skybox */}
      <Environment preset={LIGHTING.environment} background={false} environmentIntensity={LIGHTING.environmentIntensity} />

      {/* 3-point cinematic lighting rig */}
      <LegacyLightingRig />

      {/* Volumetric fog + God rays */}
      <VolumeFog />
      <GodRayShaft />

      {/* Signed Trophy Gold Core — Memory Recall wired */}
      <Suspense fallback={null}>
        <LegacyGoldCore onClick={handleCoreClick} isHovered={isTrophyHovered} />
      </Suspense>

      {/* Stairway to Glory — ascending spiral gallery */}
      <Suspense fallback={null}>
        <group key={activeYear}>
          <HallOfChampions assets={galleryAssets} onSelectAsset={handleAssetSelect} onAnyHover={handleTrophyHover} />
        </group>
      </Suspense>

      {/* Era Slider (2D HTML) */}
      {showSlider && <EraSlider year={activeYear} onYearChange={setActiveYear} />}

      {/* Asset detail panel */}
      <AssetDetailPanel asset={selectedAsset} visible={showDetail} onClose={handleCloseDetail} />
    </group>
  );
}
