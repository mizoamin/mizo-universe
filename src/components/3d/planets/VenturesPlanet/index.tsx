"use client";

/**
 * VenturesPlanet — The Business Empire Hub
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. DATA-GRID CORE: Custom ShaderMaterial with procedural grid lines via
 *    step(fract(uv * N)) in Neon Cyan over Deep Navy base. Fresnel rim glow.
 *    Zero texture dependencies — fully resolution-independent.
 *
 * 2. HEXAGONAL GALLERY — MANIFEST-WIRED: Assets filtered by TAG-BASED search
 *    (business, punchy, startup, marketing, management) via filterManifestByTags().
 *    Distributed on a Fibonacci sphere shell at radius 3.2 with hexagonal
 *    wireframe rings — representing structure and order.
 *
 * 3. LOD CULLING: Pre-allocated _tempVec. Per-node distance check in useFrame.
 *    Beyond LOD_CULL_RADIUS → group.visible = false. Zero allocations per frame.
 *
 * 4. CODE TERMINAL: Floating <Html> panel with monospace terminal aesthetic.
 *    Shows live asset count and sector information.
 *
 * 5. PULSING QUOTE: drei <Text> SDF rendering — "A Leader is a Reader" with
 *    sine-wave opacity oscillation in useFrame.
 *
 * PALETTE: #001219 (Deep Navy), #00E5FF (Neon Cyan)
 */

import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sphere, Stars, Image, Text } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import { MANIFEST_URL } from "@/lib/constants";
import {
  filterManifestByTags,
  filterManifest,
  type ManifestMap,
  type AssetRecord,
} from "@/lib/resolvers";

// ─── Constants ────────────────────────────────────────────────────────────────

const PALETTE = {
  navy: "#001219",
  cyan: "#00E5FF",
  cyanDim: "#006D77",
  cyanGlow: "#00B4D8",
  charcoal: "#0A0A0A",
} as const;

/** Max asset nodes displayed in the hex grid */
const HEX_GRID_COUNT = 36;

/** LOD cull radius — pre-allocated, zero allocations inside useFrame */
const LOD_CULL_RADIUS = 14;
const _tempVec = new THREE.Vector3();

/** Fibonacci sphere shell radius for hex grid */
const HEX_SHELL_RADIUS = 3.2;

/** Tags for ventures manifest query */
const VENTURES_TAGS = ["business", "punchy", "startup", "marketing", "management"];

/** Fallback path tokens */
const VENTURES_FALLBACK_TOKENS = ["ventures/", "business/"];

/** Shared hex wireframe geometry — single GPU upload, reused by all nodes */
const _hexCircle = new THREE.CircleGeometry(0.42, 6);
const _hexEdges = new THREE.EdgesGeometry(_hexCircle);
const _hexHaloGeo = new THREE.CircleGeometry(0.44, 6);

// ─── Data-Grid Shader ─────────────────────────────────────────────────────────

const gridVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-worldPos.xyz);
    gl_Position = projectionMatrix * worldPos;
  }
`;

const gridFragmentShader = /* glsl */ `
  uniform vec3 uBaseColor;
  uniform vec3 uGridColor;
  uniform float uTime;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    // Grid lines — procedural, resolution-independent
    float gridDensity = 24.0;
    vec2 grid = abs(fract(vUv * gridDensity - 0.5) - 0.5);
    float line = min(grid.x, grid.y);
    float gridMask = 1.0 - smoothstep(0.01, 0.04, line);

    // Vertical scan line
    float scan = smoothstep(0.48, 0.5, fract(vUv.y - uTime * 0.05));
    float scanLine = scan * 0.3;

    // Fresnel rim
    float fresnel = pow(1.0 - clamp(dot(vNormal, vViewDir), 0.0, 1.0), 3.0);

    // Slow pulse on grid brightness
    float pulse = 0.7 + 0.3 * sin(uTime * 0.6);

    // Compose colour
    vec3 base = uBaseColor;
    vec3 gridCol = uGridColor * gridMask * pulse;
    vec3 rim = uGridColor * fresnel * 0.6;
    vec3 scanCol = uGridColor * scanLine;
    vec3 colour = base + gridCol + rim + scanCol;

    float alpha = mix(uOpacity * 0.85, uOpacity, fresnel);
    gl_FragColor = vec4(colour, alpha);
  }
`;

// ─── Manifest hook ────────────────────────────────────────────────────────────

function useVenturesAssets() {
  const [assets, setAssets] = useState<AssetRecord[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(MANIFEST_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const manifest = (await res.json()) as ManifestMap;
        if (cancelled) return;

        // Primary: tag-based search
        let results = filterManifestByTags(
          manifest,
          VENTURES_TAGS,
          [],
          HEX_GRID_COUNT
        );

        // Fallback: path-based if tag search yields few results
        if (results.length < 8) {
          const extra = filterManifest(
            manifest,
            VENTURES_FALLBACK_TOKENS,
            HEX_GRID_COUNT - results.length
          );
          const existingIds = new Set(results.map((a) => a.id));
          results.push(...extra.filter((a) => !existingIds.has(a.id)));
        }

        setAssets(results.slice(0, HEX_GRID_COUNT));
      } catch (err) {
        console.warn("[VenturesPlanet] Manifest fetch failed:", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return assets;
}

// ─── The Data-Grid Core ───────────────────────────────────────────────────────

function VenturesCore({ onClick }: { onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uBaseColor: { value: new THREE.Color(PALETTE.navy) },
      uGridColor: { value: new THREE.Color(PALETTE.cyan) },
      uTime: { value: 0 },
      uOpacity: { value: 0.88 },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group onClick={onClick}>
      {/* Outer data-grid shell */}
      <Sphere ref={meshRef} args={[1.0, 128, 128]}>
        <shaderMaterial
          ref={matRef}
          vertexShader={gridVertexShader}
          fragmentShader={gridFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          side={THREE.FrontSide}
        />
      </Sphere>

      {/* Inner emissive core */}
      <Sphere args={[0.65, 48, 48]}>
        <meshStandardMaterial
          color={PALETTE.cyanDim}
          emissive={PALETTE.cyan}
          emissiveIntensity={0.6}
          metalness={0.2}
          roughness={0.5}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Core illumination */}
      <pointLight color={PALETTE.cyan} intensity={5} distance={10} decay={2} />
      <pointLight
        color={PALETTE.cyanGlow}
        intensity={3}
        distance={6}
        decay={2}
        position={[0, 1.5, 0]}
      />
    </group>
  );
}

// ─── Hex Node (single gallery cell) ──────────────────────────────────────────

interface HexNodeProps {
  asset: AssetRecord;
  position: [number, number, number];
  rotation: [number, number, number];
  groupRef: React.RefObject<THREE.Group | null>;
  onClick: (asset: AssetRecord) => void;
}

function HexNode({ asset, position, rotation, groupRef, onClick }: HexNodeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={hovered ? 1.15 : 1}
    >
      {/* Hex wireframe ring — shared geometry */}
      <lineSegments geometry={_hexEdges}>
        <lineBasicMaterial
          color={PALETTE.cyan}
          transparent
          opacity={hovered ? 0.9 : 0.5}
        />
      </lineSegments>

      {/* Photo plane */}
      <Image
        url={asset.url}
        scale={0.55}
        transparent
        onClick={(e) => {
          e.stopPropagation();
          onClick(asset);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      />

      {/* Glow halo behind image */}
      <mesh position={[0, 0, -0.02]} geometry={_hexHaloGeo}>
        <meshBasicMaterial
          color={PALETTE.cyan}
          transparent
          opacity={hovered ? 0.15 : 0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Hover tooltip */}
      {hovered && (
        <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
          <div
            style={{
              background: "rgba(0,18,25,0.92)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${PALETTE.cyan}40`,
              borderRadius: 8,
              padding: "6px 12px",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: PALETTE.cyan,
                fontSize: 11,
                fontWeight: 700,
                margin: 0,
              }}
            >
              {asset.title}
            </p>
            <p
              style={{
                color: PALETTE.cyanGlow,
                fontSize: 9,
                opacity: 0.7,
                margin: 0,
              }}
            >
              {asset.year} · {asset.location}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}

// ─── Hex Grid — Fibonacci sphere shell ───────────────────────────────────────

interface HexGridProps {
  assets: AssetRecord[];
  onSelectAsset: (a: AssetRecord) => void;
}

function HexGrid({ assets, onSelectAsset }: HexGridProps) {
  const count = assets.length;
  const { camera } = useThree();
  const gridRef = useRef<THREE.Group>(null);

  const nodeRefs = useRef<React.RefObject<THREE.Group | null>[]>([]);
  if (nodeRefs.current.length !== Math.max(count, 12)) {
    nodeRefs.current = Array.from(
      { length: Math.max(count, 12) },
      () => ({ current: null }) as React.RefObject<THREE.Group | null>
    );
  }

  // Fibonacci sphere positions + outward-facing Euler rotations (baked once)
  const layout = useMemo(() => {
    const n = Math.max(count, 12);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const pts: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    const _dir = new THREE.Vector3();
    const _quat = new THREE.Quaternion();
    const _euler = new THREE.Euler();
    const _forward = new THREE.Vector3(0, 0, 1);

    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const px = Math.cos(theta) * r * HEX_SHELL_RADIUS;
      const py = y * HEX_SHELL_RADIUS;
      const pz = Math.sin(theta) * r * HEX_SHELL_RADIUS;

      // Face outward from origin
      _dir.set(px, py, pz).normalize();
      _quat.setFromUnitVectors(_forward, _dir);
      _euler.setFromQuaternion(_quat);

      pts.push({
        pos: [px, py, pz],
        rot: [_euler.x, _euler.y, _euler.z],
      });
    }
    return pts;
  }, [count]);

  useFrame(({ clock }) => {
    // Slow rotation
    if (gridRef.current) gridRef.current.rotation.y = clock.elapsedTime * 0.025;

    // Per-node LOD culling — zero allocations
    nodeRefs.current.forEach((ref) => {
      const g = ref.current;
      if (!g) return;
      _tempVec.setFromMatrixPosition(g.matrixWorld);
      g.visible = _tempVec.distanceTo(camera.position) < LOD_CULL_RADIUS;
    });
  });

  // Placeholder wireframes while manifest loads
  if (count === 0) {
    return (
      <group ref={gridRef}>
        {layout.map((item, i) => (
          <group key={i} position={item.pos} rotation={item.rot}>
            <lineSegments geometry={_hexEdges}>
              <lineBasicMaterial
                color={PALETTE.cyan}
                transparent
                opacity={0.2}
              />
            </lineSegments>
          </group>
        ))}
      </group>
    );
  }

  return (
    <group ref={gridRef}>
      {assets.map((asset, i) => {
        const item = layout[i];
        if (!item) return null;
        return (
          <HexNode
            key={asset.id}
            asset={asset}
            position={item.pos}
            rotation={item.rot}
            groupRef={nodeRefs.current[i]}
            onClick={onSelectAsset}
          />
        );
      })}
    </group>
  );
}

// ─── Code Terminal ────────────────────────────────────────────────────────────

function CodeTerminal({ assetCount }: { assetCount: number }) {
  return (
    <Html
      transform
      occlude
      position={[3.5, 1.8, -1]}
      rotation={[0, -0.4, 0]}
      scale={0.5}
    >
      <div
        style={{
          width: 280,
          background: "rgba(0,18,25,0.94)",
          border: `1px solid ${PALETTE.cyan}30`,
          borderRadius: 12,
          padding: "14px 16px",
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          lineHeight: 1.8,
          color: PALETTE.cyan,
          boxShadow: `0 0 30px ${PALETTE.cyan}15, inset 0 0 15px ${PALETTE.navy}`,
          pointerEvents: "none",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: "flex",
            gap: 5,
            marginBottom: 10,
            paddingBottom: 8,
            borderBottom: `1px solid ${PALETTE.cyan}20`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
          <span
            style={{
              marginLeft: "auto",
              fontSize: 9,
              opacity: 0.4,
              color: "#fff",
            }}
          >
            ventures.sh
          </span>
        </div>

        {/* Terminal lines */}
        <div style={{ opacity: 0.6 }}>$ mizo ventures init</div>
        <div style={{ color: "#28c840" }}>✓ Business engine loaded</div>
        <div style={{ opacity: 0.6 }}>$ scan --sectors</div>
        <div>
          <span style={{ color: PALETTE.cyanGlow }}>→</span> Marketing · IT ·
          Management
        </div>
        <div style={{ opacity: 0.6 }}>$ load --assets</div>
        <div>
          <span style={{ color: "#28c840" }}>✓</span>{" "}
          {assetCount > 0
            ? `${assetCount} ventures loaded`
            : "scanning manifest..."}
        </div>
        <div style={{ opacity: 0.6 }}>$ status</div>
        <div>
          <span style={{ color: PALETTE.cyan }}>ACTIVE</span>
          <span style={{ opacity: 0.4 }}> — all systems operational</span>
        </div>

        {/* Blinking cursor */}
        <div style={{ marginTop: 4 }}>
          <span style={{ opacity: 0.6 }}>$ </span>
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 14,
              background: PALETTE.cyan,
              animation: "venturesBlink 1s step-end infinite",
              verticalAlign: "middle",
            }}
          />
        </div>
        <style>{`@keyframes venturesBlink { 50% { opacity: 0; } }`}</style>
      </div>
    </Html>
  );
}

// ─── Pulsing Motivational Text ────────────────────────────────────────────────

function PulsingQuote() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (textRef.current) {
      const mat = textRef.current.material as THREE.Material;
      mat.opacity = 0.5 + 0.5 * Math.sin(clock.elapsedTime * 0.6);
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, -2.8, 0]}
      fontSize={0.28}
      color={PALETTE.cyan}
      anchorX="center"
      anchorY="middle"
      maxWidth={6}
      textAlign="center"
    >
      A Leader is a Reader
    </Text>
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
    <Html
      center
      style={{ pointerEvents: "none", width: 0, height: 0 }}
      zIndexRange={[200, 400]}
    >
      <AnimatePresence>
        {visible && asset && (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              pointerEvents: "auto",
              position: "fixed",
              bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(520px, 90vw)",
              borderRadius: 16,
              overflow: "hidden",
              background:
                "linear-gradient(145deg, rgba(0,18,25,0.94) 0%, rgba(0,8,12,0.97) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${PALETTE.cyan}35`,
              boxShadow: `0 0 40px ${PALETTE.cyan}18, inset 0 0 20px ${PALETTE.navy}`,
              zIndex: 500,
              display: "flex",
              gap: 0,
            }}
          >
            {/* Photo */}
            <div style={{ width: 110, flexShrink: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.url}
                alt={asset.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Metadata */}
            <div style={{ padding: "1.25rem 1.25rem 1rem", flex: 1 }}>
              <p
                style={{
                  color: PALETTE.cyan,
                  fontSize: 9,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                  opacity: 0.7,
                }}
              >
                Ventures · {asset.year}
              </p>
              <h3
                style={{
                  color: "#e0f7ff",
                  fontSize: 15,
                  fontWeight: 800,
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                  marginBottom: 8,
                }}
              >
                {asset.title}
              </h3>
              <p
                style={{
                  color: PALETTE.cyanGlow,
                  fontSize: 12,
                  opacity: 0.7,
                  fontWeight: 500,
                }}
              >
                {asset.location}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: `${PALETTE.cyan}60`,
                fontSize: 22,
                cursor: "pointer",
                padding: "0.75rem 1rem",
                alignSelf: "flex-start",
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Root Export ───────────────────────────────────────────────────────────────

export default function VenturesPlanetVisual() {
  const assets = useVenturesAssets();
  const [selectedAsset, setSelectedAsset] = useState<AssetRecord | null>(null);

  const handleSelectAsset = useCallback((asset: AssetRecord) => {
    setSelectedAsset(asset);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedAsset(null);
  }, []);

  const handleCoreClick = useCallback(() => {
    setSelectedAsset(null);
  }, []);

  return (
    <group>
      {/* ── Ambient background particles ── */}
      <Stars
        radius={14}
        depth={5}
        count={600}
        factor={1.0}
        saturation={0.15}
        fade
        speed={0.2}
      />

      {/* ── Data-Grid Core Sphere ── */}
      <VenturesCore onClick={handleCoreClick} />

      {/* ── Hexagonal Asset Grid ── */}
      <HexGrid assets={assets} onSelectAsset={handleSelectAsset} />

      {/* ── Floating Code Terminal ── */}
      <CodeTerminal assetCount={assets.length} />

      {/* ── Pulsing Motivational Quote ── */}
      <PulsingQuote />

      {/* ── Asset Detail Panel ── */}
      <AssetDetailPanel
        asset={selectedAsset}
        visible={selectedAsset !== null}
        onClose={handleCloseDetail}
      />
    </group>
  );
}
