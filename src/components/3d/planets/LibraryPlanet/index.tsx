"use client";

/**
 * LibraryPlanet — The Great Archive
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. OBSIDIAN KNOWLEDGE CORE: MeshPhysicalMaterial from skins.ts.
 *    transmission:0.7 + ior:1.8 + clearcoat:1. Deep sapphire-like
 *    refraction reveals the Data Core — 2000 glowing voxel particles.
 *
 * 2. DATA CORE: BufferGeometry Points system inside the translucent
 *    shell. Particles pulse at 0.3Hz, rotating slowly to simulate
 *    living binary data streams. Color alternates between indigo
 *    and violet for visual depth.
 *
 * 3. CLOUD GALLERY: 4 Album Clusters (Basketball Career, Business &
 *    Marketing, University Life, Personal Archive) orbiting the planet
 *    in a spherical grid. Each cluster shows up to 6 thumbnail frames.
 *
 * 4. CYLINDRICAL CAROUSEL: On album click, the selected category
 *    expands into a cylindrical wrap of images surrounding the user.
 *    12 columns × N rows, frustum-culled, lazy-loaded in batches.
 *
 * 5. 3-POINT CINEMATIC LIGHTING:
 *    Key: Sharp cool-white SpotLight.
 *    Fill: Deep violet PointLight from bottom.
 *    Rim: Electric blue DirectionalLight for edge definition.
 *
 * 6. SPRING PHYSICS: stiffness:180, damping:25 for fluid underwater
 *    motion on all image frames. Zero GSAP.
 *
 * 7. PERFORMANCE: Frustum culling in useFrame, lazy texture loading
 *    in batches of 24, LOD distance culling, pre-allocated vectors.
 *    Zero allocations per frame. Locked 60fps.
 */

import { useRef, useMemo, useState, useCallback, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sphere, Stars, Image, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import { MANIFEST_URL } from "@/lib/constants";
import {
  filterManifest,
  filterManifestByTags,
  type ManifestMap,
  type AssetRecord,
} from "@/lib/resolvers";

import {
  PALETTE,
  SHELL_MATERIAL,
  DATA_CORE,
  AURA,
  ALBUM_CATEGORIES,
  CLOUD_GALLERY,
  CAROUSEL,
  SPRING_PHYSICS,
  PANEL_SPRING,
  FRAME_MATERIAL,
  LIGHTING,
  LAZY_LOAD_BATCH,
  LOD_CULL_RADIUS,
  MAX_VISIBLE_FRAMES,
  FOG,
  type AlbumCategory,
} from "./skins";
import { useDeviceStore } from "@/engine/deviceStore";

// ─── Pre-allocated — ZERO allocations in useFrame ─────────────────────────────
const _tempVec = new THREE.Vector3();
const _frustum = new THREE.Frustum();
const _projScreenMatrix = new THREE.Matrix4();

// ─── Manifest hook — fetches & categorizes 20,000+ images ────────────────────

interface CategorizedAlbums {
  [categoryId: string]: AssetRecord[];
}

function useLibraryAssets() {
  const [albums, setAlbums] = useState<CategorizedAlbums>({});
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(MANIFEST_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const manifest = (await res.json()) as ManifestMap;
        if (cancelled) return;

        const categorized: CategorizedAlbums = {};
        let total = 0;

        for (const cat of ALBUM_CATEGORIES) {
          // Tag-based search first
          let assets = filterManifestByTags(manifest, cat.tags, [], 500);

          // Supplement with path-based if tag search yields few results
          if (assets.length < 20) {
            const extra = filterManifest(manifest, cat.pathTokens, 500 - assets.length);
            const ids = new Set(assets.map((a) => a.id));
            assets.push(...extra.filter((a) => !ids.has(a.id)));
          }

          categorized[cat.id] = assets;
          total += assets.length;
        }

        setAlbums(categorized);
        setTotalCount(total);
        setLoading(false);
      } catch (err) {
        console.warn("[LibraryPlanet] Manifest fetch failed — graceful fallback:", err);
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { albums, totalCount, loading };
}

// ─── Data Core — Glowing Voxel Points Inside the Shell ───────────────────────

function DataCore({ loadProgress, particleCount }: { loadProgress: number; particleCount: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = particleCount;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = DATA_CORE.color;
    const c2 = DATA_CORE.colorAlt;

    for (let i = 0; i < count; i++) {
      // Spherical distribution inside the core
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = DATA_CORE.radius * Math.cbrt(Math.random()); // Cube root for uniform volume
      const i3 = i * 3;
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      // Alternate between primary and secondary color
      const mix = Math.random();
      col[i3] = c1.r * (1 - mix) + c2.r * mix;
      col[i3 + 1] = c1.g * (1 - mix) + c2.g * mix;
      col[i3 + 2] = c1.b * (1 - mix) + c2.b * mix;
    }
    return { positions: pos, colors: col };
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.elapsedTime;

    // Slow rotation of the data cloud
    pointsRef.current.rotation.y = t * DATA_CORE.rotationSpeed;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;

    // Pulse particle size based on load progress + sine wave
    const pulse = 1 + DATA_CORE.pulseAmplitude * Math.sin(t * Math.PI * 2 * DATA_CORE.pulseHz);
    const loadScale = 0.5 + 0.5 * loadProgress; // More particles "activate" as images load
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.size = DATA_CORE.size * pulse * loadScale;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={DATA_CORE.size}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Obsidian Knowledge Shell ─────────────────────────────────────────────────

function ObsidianShell({ loadProgress, particleCount }: { loadProgress: number; particleCount: number }) {
  const shellRef = useRef<THREE.Mesh>(null);
  const auraRef = useRef<THREE.Mesh>(null);
  const auraLightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Slow majestic rotation
    if (shellRef.current) {
      shellRef.current.rotation.y = t * 0.02;
    }

    // Aura pulse — intensity scales with load progress
    const auraPulse = Math.sin(t * Math.PI * 2 * AURA.pulseHz) * 0.5 + 0.5;
    const auraOpacity = AURA.idleOpacity + (AURA.peakOpacity - AURA.idleOpacity) * loadProgress * auraPulse;

    if (auraRef.current) {
      (auraRef.current.material as THREE.MeshBasicMaterial).opacity = auraOpacity;
    }

    if (auraLightRef.current) {
      const targetIntensity = AURA.lightIntensity.idle +
        (AURA.lightIntensity.peak - AURA.lightIntensity.idle) * loadProgress * auraPulse;
      auraLightRef.current.intensity += (targetIntensity - auraLightRef.current.intensity) * 0.05;
    }
  });

  return (
    <group>
      {/* Outer translucent obsidian shell */}
      <Sphere ref={shellRef} args={[1.0, 128, 128]}>
        <meshPhysicalMaterial
          color={SHELL_MATERIAL.color}
          emissive={SHELL_MATERIAL.emissive}
          emissiveIntensity={SHELL_MATERIAL.emissiveIntensity}
          transmission={SHELL_MATERIAL.transmission}
          roughness={SHELL_MATERIAL.roughness}
          thickness={SHELL_MATERIAL.thickness}
          ior={SHELL_MATERIAL.ior}
          clearcoat={SHELL_MATERIAL.clearcoat}
          clearcoatRoughness={SHELL_MATERIAL.clearcoatRoughness}
          attenuationColor={SHELL_MATERIAL.attenuationColor}
          attenuationDistance={SHELL_MATERIAL.attenuationDistance}
          envMapIntensity={SHELL_MATERIAL.envMapIntensity}
        />
      </Sphere>

      {/* Inner Data Core */}
      <DataCore loadProgress={loadProgress} particleCount={particleCount} />

      {/* Aura sphere — indigo-violet atmosphere */}
      <Sphere ref={auraRef} args={[AURA.radius, 32, 32]}>
        <meshBasicMaterial
          color={AURA.color}
          transparent
          opacity={AURA.idleOpacity}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Aura ambient light */}
      <pointLight
        ref={auraLightRef}
        color={PALETTE.indigo}
        intensity={AURA.lightIntensity.idle}
        distance={AURA.lightDistance}
        decay={1.5}
      />
      <pointLight
        color={PALETTE.violet}
        intensity={3}
        distance={6}
        decay={2}
        position={[0, 2, 0]}
      />
    </group>
  );
}

// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────

function LibraryLightingRig() {
  return (
    <>
      {/* KEY — sharp cool-white SpotLight from top-right */}
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

      {/* FILL — deep violet PointLight from bottom */}
      <pointLight
        color={LIGHTING.fill.color}
        intensity={LIGHTING.fill.intensity}
        position={LIGHTING.fill.position}
        distance={LIGHTING.fill.distance}
        decay={LIGHTING.fill.decay}
      />

      {/* RIM — electric blue DirectionalLight for sharp edge definition */}
      <directionalLight
        color={LIGHTING.rim.color}
        intensity={LIGHTING.rim.intensity}
        position={LIGHTING.rim.position}
      />
    </>
  );
}

// ─── Lazy Image Frame — loads texture on demand ──────────────────────────────

interface LazyImageFrameProps {
  asset: AssetRecord;
  position: [number, number, number];
  rotation: [number, number, number];
  categoryColor: string;
  groupRef: React.RefObject<THREE.Group | null>;
  onClick: (asset: AssetRecord) => void;
  onHoverChange: (hovered: boolean) => void;
  shouldLoad: boolean;
}

function LazyImageFrame({
  asset,
  position,
  rotation,
  categoryColor,
  groupRef,
  onClick,
  onHoverChange,
  shouldLoad,
}: LazyImageFrameProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);
  const currentScale = useRef(1.0);
  const velocity = useRef(0);
  // Pre-compute category color once — avoids new THREE.Color() on every JSX render pass
  const threeColor = useMemo(() => new THREE.Color(categoryColor), [categoryColor]);

  // Spring physics: stiffness 180, damping 25 — fluid underwater movement
  useFrame((_, delta) => {
    const target = hovered ? 1.15 : 1.0;
    const dt = Math.min(delta, 0.033);
    const springForce = (target - currentScale.current) * SPRING_PHYSICS.stiffness;
    const dampingForce = -SPRING_PHYSICS.damping * velocity.current;
    const acceleration = (springForce + dampingForce) / SPRING_PHYSICS.mass;
    velocity.current += acceleration * dt;
    currentScale.current += velocity.current * dt;
    currentScale.current = Math.max(0.7, Math.min(1.3, currentScale.current));

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
      rotation={rotation}
    >
      {/* Frame border */}
      <mesh>
        <planeGeometry args={[CAROUSEL.frameSize + 0.06, CAROUSEL.frameSize + 0.06]} />
        <meshStandardMaterial
          color={threeColor}
          emissive={FRAME_MATERIAL.emissive}
          emissiveIntensity={hovered ? FRAME_MATERIAL.emissiveIntensity.hover : FRAME_MATERIAL.emissiveIntensity.idle}
          metalness={FRAME_MATERIAL.metalness}
          roughness={FRAME_MATERIAL.roughness}
        />
      </mesh>

      {/* Image plane — only loads texture when shouldLoad is true */}
      {shouldLoad ? (
        <Image
          url={asset.url}
          scale={CAROUSEL.frameSize}
          transparent
          position={[0, 0, 0.01]}
          onClick={(e) => { e.stopPropagation(); onClick(asset); }}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        />
      ) : (
        <mesh
          position={[0, 0, 0.01]}
          onClick={(e) => { e.stopPropagation(); onClick(asset); }}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <planeGeometry args={[CAROUSEL.frameSize, CAROUSEL.frameSize]} />
          <meshBasicMaterial color={PALETTE.slate} transparent opacity={0.5} />
        </mesh>
      )}

      {/* Hover glow halo */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[CAROUSEL.frameSize * 0.6, 32]} />
        <meshBasicMaterial
          color={threeColor}
          transparent
          opacity={hovered ? 0.2 : 0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Holographic Preview tooltip */}
      {hovered && (
        <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
          <div style={{
            background: "rgba(15,23,42,0.92)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${categoryColor}50`,
            borderRadius: 8,
            padding: "6px 14px",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}>
            <p style={{ color: categoryColor, fontSize: 11, fontWeight: 700, margin: 0 }}>
              {asset.title}
            </p>
            <p style={{ color: PALETTE.coolWhite, fontSize: 9, opacity: 0.7, margin: 0 }}>
              {asset.year} · {asset.location}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}

// ─── Album Cluster Node — Spherical orbiting cluster ─────────────────────────

interface AlbumClusterProps {
  category: AlbumCategory;
  assets: AssetRecord[];
  orbitAngle: number;
  onSelectAlbum: (category: AlbumCategory) => void;
}

function AlbumCluster({ category, assets, orbitAngle, onSelectAlbum }: AlbumClusterProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const currentScale = useRef(1.0);
  const velocity = useRef(0);
  // Pre-compute category color once — avoids new THREE.Color(category.color) on every render
  const threeColor = useMemo(() => new THREE.Color(category.color), [category.color]);

  // Orbital position on sphere
  const position = useMemo<[number, number, number]>(() => {
    const y = Math.sin(orbitAngle * 0.7) * CLOUD_GALLERY.orbitRadius * 0.4;
    const xz = CLOUD_GALLERY.orbitRadius * Math.cos(orbitAngle * 0.7);
    return [
      Math.cos(orbitAngle) * xz,
      y,
      Math.sin(orbitAngle) * xz,
    ];
  }, [orbitAngle]);

  // Thumbnails — show up to 6 preview images around the cluster node
  const thumbnails = useMemo(() => {
    return assets.slice(0, CLOUD_GALLERY.thumbnailsPerCluster);
  }, [assets]);

  // Spring hover
  useFrame((_, delta) => {
    const target = hovered ? 1.2 : 1.0;
    const dt = Math.min(delta, 0.033);
    const springForce = (target - currentScale.current) * SPRING_PHYSICS.stiffness;
    const dampingForce = -SPRING_PHYSICS.damping * velocity.current;
    velocity.current += ((springForce + dampingForce) / SPRING_PHYSICS.mass) * dt;
    currentScale.current += velocity.current * dt;
    currentScale.current = Math.max(0.8, Math.min(1.4, currentScale.current));

    if (groupRef.current) {
      groupRef.current.scale.setScalar(currentScale.current);
    }
  });

  const handlePointerOver = useCallback((e: THREE.Event) => {
    (e as { stopPropagation?: () => void }).stopPropagation?.();
    setHovered(true);
    document.body.style.cursor = "pointer";
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = "auto";
  }, []);

  const handleClick = useCallback((e: THREE.Event) => {
    (e as { stopPropagation?: () => void }).stopPropagation?.();
    onSelectAlbum(category);
  }, [category, onSelectAlbum]);

  return (
    <group ref={groupRef} position={position}>
      {/* Central cluster sphere */}
      <Sphere
        args={[CLOUD_GALLERY.clusterNodeSize, 32, 32]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshPhysicalMaterial
          color={threeColor}
          emissive={threeColor}
          emissiveIntensity={hovered ? 1.2 : 0.5}
          transmission={0.4}
          roughness={0.2}
          thickness={1.5}
          ior={1.5}
          clearcoat={0.8}
          metalness={0.1}
        />
      </Sphere>

      {/* Orbiting thumbnail preview frames */}
      {thumbnails.map((asset, i) => {
        const thumbAngle = (i / thumbnails.length) * Math.PI * 2;
        const r = CLOUD_GALLERY.thumbnailSpacing;
        const tx = Math.cos(thumbAngle) * r;
        const tz = Math.sin(thumbAngle) * r;
        return (
          <group key={asset.id} position={[tx, 0, tz]} rotation={[0, -thumbAngle + Math.PI, 0]}>
            <Image
              url={asset.url}
              scale={0.35}
              transparent
              onClick={(e) => { e.stopPropagation(); onSelectAlbum(category); }}
            />
          </group>
        );
      })}

      {/* Cluster halo glow */}
      <mesh>
        <sphereGeometry args={[CLOUD_GALLERY.clusterNodeSize * 2, 16, 16]} />
        <meshBasicMaterial
          color={threeColor}
          transparent
          opacity={hovered ? 0.12 : 0.03}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Holographic album label */}
      <Html center distanceFactor={6} position={[0, CLOUD_GALLERY.clusterNodeSize + 0.4, 0]} style={{ pointerEvents: "none" }}>
        <div style={{
          background: "rgba(15,23,42,0.88)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${category.color}40`,
          borderRadius: 10,
          padding: "5px 12px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          <p style={{ color: category.color, fontSize: 11, fontWeight: 800, margin: 0, letterSpacing: "0.05em" }}>
            {category.label}
          </p>
          <p style={{ color: PALETTE.coolWhite, fontSize: 9, opacity: 0.6, margin: 0 }}>
            {assets.length.toLocaleString()} images
          </p>
        </div>
      </Html>
    </group>
  );
}

// ─── Cloud Gallery — Orbiting Album Clusters ─────────────────────────────────

interface CloudGalleryProps {
  albums: CategorizedAlbums;
  onSelectAlbum: (category: AlbumCategory) => void;
}

function CloudGallery({ albums, onSelectAlbum }: CloudGalleryProps) {
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = clock.elapsedTime * CLOUD_GALLERY.orbitSpeed;
    }
  });

  return (
    <group ref={orbitRef}>
      {ALBUM_CATEGORIES.map((cat, i) => {
        const angle = (i / ALBUM_CATEGORIES.length) * Math.PI * 2;
        const assets = albums[cat.id] ?? [];
        return (
          <AlbumCluster
            key={cat.id}
            category={cat}
            assets={assets}
            orbitAngle={angle}
            onSelectAlbum={onSelectAlbum}
          />
        );
      })}
    </group>
  );
}

// ─── Cylindrical Carousel — Expanded Album View ──────────────────────────────

interface CylindricalCarouselProps {
  category: AlbumCategory;
  assets: AssetRecord[];
  onSelectAsset: (asset: AssetRecord) => void;
  onClose: () => void;
  budget: {
    maxVisibleFrames: number;
    lazyLoadBatch: number;
    lodCullRadius: number;
  };
}

function CylindricalCarousel({ category, assets, onSelectAsset, onClose, budget }: CylindricalCarouselProps) {
  const carouselRef = useRef<THREE.Group>(null);

  // Lazy loading: track which batch of images to load
  const [loadedBatch, setLoadedBatch] = useState(budget.lazyLoadBatch);

  useEffect(() => {
    setLoadedBatch(budget.lazyLoadBatch);
  }, [budget.lazyLoadBatch, assets.length]);

  // Load more images as user scrolls (triggered by proximity in useFrame)
  const loadMore = useCallback(() => {
    setLoadedBatch((prev) => Math.min(prev + budget.lazyLoadBatch, assets.length));
  }, [assets.length, budget.lazyLoadBatch]);

  // Limit visible frames for performance
  const visibleAssets = useMemo(() => {
    return assets.slice(0, Math.min(assets.length, budget.maxVisibleFrames));
  }, [assets, budget.maxVisibleFrames]);

  // Cylindrical positions
  const framePositions = useMemo(() => {
    const result: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    const cols = CAROUSEL.columns;
    for (let i = 0; i < visibleAssets.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const angle = (col / cols) * Math.PI * 2;
      const x = Math.cos(angle) * CAROUSEL.radius;
      const z = Math.sin(angle) * CAROUSEL.radius;
      const y = (row - Math.floor(visibleAssets.length / cols / 2)) * CAROUSEL.rowHeight;
      result.push({
        pos: [x, y, z],
        rot: [0, -angle + Math.PI, 0],
      });
    }
    return result;
  }, [visibleAssets.length]);

  // Per-frame refs for frustum culling
  const frameRefs = useRef<React.RefObject<THREE.Group | null>[]>([]);
  if (frameRefs.current.length !== visibleAssets.length) {
    frameRefs.current = Array.from({ length: visibleAssets.length }, () => ({ current: null } as React.RefObject<THREE.Group | null>));
  }

  const { camera } = useThree();

  // Slow rotation + frustum culling + lazy load trigger
  useFrame(({ clock }) => {
    if (carouselRef.current) {
      carouselRef.current.rotation.y = clock.elapsedTime * CAROUSEL.browseSpeed * 0.1;
    }

    // Update frustum from camera
    _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    _frustum.setFromProjectionMatrix(_projScreenMatrix);

    let nearestUnloaded = Infinity;

    // Frustum cull + LOD distance cull
    frameRefs.current.forEach((ref, i) => {
      const g = ref.current;
      if (!g) return;
      _tempVec.setFromMatrixPosition(g.matrixWorld);
      const dist = _tempVec.distanceTo(camera.position);
      const inFrustum = _frustum.containsPoint(_tempVec);
      g.visible = inFrustum && dist < budget.lodCullRadius;

      // Track closest unloaded frame for lazy loading
      if (i >= loadedBatch && dist < nearestUnloaded) {
        nearestUnloaded = dist;
      }
    });

    // Trigger lazy load when user approaches unloaded frames
    if (nearestUnloaded < budget.lodCullRadius * 0.7) {
      loadMore();
    }
  });

  return (
    <group ref={carouselRef}>
      {visibleAssets.map((asset, i) => {
        const fp = framePositions[i];
        if (!fp) return null;
        return (
          <LazyImageFrame
            key={asset.id}
            asset={asset}
            position={fp.pos}
            rotation={fp.rot}
            categoryColor={category.color}
            groupRef={frameRefs.current[i]}
            onClick={onSelectAsset}
            onHoverChange={() => {}}
            shouldLoad={i < loadedBatch}
          />
        );
      })}

      {/* Close button (floating Html) */}
      <Html center distanceFactor={8} position={[0, CAROUSEL.rowHeight * (CAROUSEL.maxVisibleRows + 1), 0]} style={{ pointerEvents: "none" }}>
        <button
          onClick={onClose}
          style={{
            pointerEvents: "auto",
            background: `${PALETTE.slate}dd`,
            backdropFilter: "blur(12px)",
            border: `1px solid ${category.color}50`,
            borderRadius: 24,
            color: category.color,
            fontSize: 12,
            fontWeight: 700,
            padding: "8px 20px",
            cursor: "pointer",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          ← Back to Archive
        </button>
      </Html>

      {/* Category label */}
      <Html center distanceFactor={8} position={[0, CAROUSEL.rowHeight * (CAROUSEL.maxVisibleRows + 2), 0]} style={{ pointerEvents: "none" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: category.color, fontSize: 18, fontWeight: 900, letterSpacing: "0.08em", margin: 0 }}>
            {category.label}
          </p>
          <p style={{ color: PALETTE.coolWhite, fontSize: 11, opacity: 0.5, margin: "4px 0 0" }}>
            {visibleAssets.length} of {assets.length.toLocaleString()} images
          </p>
        </div>
      </Html>
    </group>
  );
}

// ─── Asset Detail Panel ───────────────────────────────────────────────────────

interface DetailPanelProps {
  asset: AssetRecord | null;
  visible: boolean;
  categoryColor: string;
  onClose: () => void;
}

function AssetDetailPanel({ asset, visible, categoryColor, onClose }: DetailPanelProps) {
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
              background: `linear-gradient(145deg, rgba(15,23,42,0.94) 0%, rgba(2,6,23,0.97) 100%)`,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${categoryColor}40`,
              boxShadow: `0 0 40px ${PALETTE.indigo}20, inset 0 0 20px ${PALETTE.slate}10`,
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
              <p style={{ color: categoryColor, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6, opacity: 0.7 }}>
                Library · {asset.year}
              </p>
              <h3 style={{ color: "#e0e7ff", fontSize: 15, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: 8 }}>
                {asset.title}
              </h3>
              <p style={{ color: PALETTE.coolWhite, fontSize: 12, opacity: 0.7, fontWeight: 500 }}>
                {asset.location}
              </p>
              {asset.caption && (
                <p style={{ color: PALETTE.coolWhite, fontSize: 11, opacity: 0.5, marginTop: 6, lineHeight: 1.4 }}>
                  {asset.caption}
                </p>
              )}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: `${categoryColor}60`, fontSize: 22, cursor: "pointer", padding: "0.75rem 1rem", alignSelf: "flex-start" }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Volumetric Fog ───────────────────────────────────────────────────────────

function VolumeFog() {
  return (
    <>
      <Stars radius={FOG.innerParticles.radius} depth={FOG.innerParticles.depth} count={FOG.innerParticles.count} factor={FOG.innerParticles.factor} saturation={0.8} fade speed={FOG.innerParticles.speed} />
      <Stars radius={FOG.outerParticles.radius} depth={FOG.outerParticles.depth} count={FOG.outerParticles.count} factor={FOG.outerParticles.factor} saturation={0.4} fade speed={FOG.outerParticles.speed} />
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

// ─── Archive Stats Overlay (image count HUD) ─────────────────────────────────

function ArchiveStats({ totalCount, loading }: { totalCount: number; loading: boolean }) {
  return (
    <Html center distanceFactor={10} position={[0, -2.2, 0]} style={{ pointerEvents: "none" }}>
      <div style={{ textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: PALETTE.indigo,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: 0,
            opacity: 0.6,
          }}
        >
          {loading ? "Scanning Archive..." : "The Great Archive"}
        </motion.p>
        <motion.p
          key={totalCount}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            color: PALETTE.coolWhite,
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            margin: "4px 0 0",
            textShadow: `0 0 30px ${PALETTE.indigo}60`,
          }}
        >
          {totalCount > 0 ? `${totalCount.toLocaleString()} Images` : "..."}
        </motion.p>
      </div>
    </Html>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function LibraryPlanetVisual() {
  const [selectedCategory, setSelectedCategory] = useState<AlbumCategory | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<AssetRecord | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const { albums, totalCount, loading } = useLibraryAssets();
  const tier = useDeviceStore((s) => s.tier);

  const budget = useMemo(() => {
    if (tier === "mobile") {
      return {
        dataCoreParticles: 900,
        maxVisibleFrames: 28,
        lazyLoadBatch: 12,
        lodCullRadius: 11,
      };
    }

    if (tier === "tablet") {
      return {
        dataCoreParticles: 1400,
        maxVisibleFrames: 44,
        lazyLoadBatch: 16,
        lodCullRadius: 13,
      };
    }

    return {
      dataCoreParticles: DATA_CORE.particleCount,
      maxVisibleFrames: MAX_VISIBLE_FRAMES,
      lazyLoadBatch: LAZY_LOAD_BATCH,
      lodCullRadius: LOD_CULL_RADIUS,
    };
  }, [tier]);

  // Load progress (0→1) drives Data Core + Aura intensity
  const loadProgress = useMemo(() => {
    if (totalCount === 0) return 0;
    return Math.min(totalCount / 200, 1); // Cap at 200 for smooth visual
  }, [totalCount]);

  // Album selection — opens Cylindrical Carousel
  const handleSelectAlbum = useCallback((category: AlbumCategory) => {
    setSelectedCategory(category);
  }, []);

  const handleCloseCarousel = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  // Asset selection — opens detail panel
  const handleSelectAsset = useCallback((asset: AssetRecord) => {
    setSelectedAsset(asset);
    setShowDetail(true);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setShowDetail(false);
    setSelectedAsset(null);
  }, []);

  // Current category color for detail panel theming
  const activeCategoryColor = selectedCategory?.color ?? PALETTE.indigo;

  return (
    <group>
      {/* Environment map — dark sky for obsidian reflections */}
      <Environment preset={LIGHTING.environment} background={false} environmentIntensity={LIGHTING.environmentIntensity} />

      {/* 3-point cinematic lighting rig */}
      <LibraryLightingRig />

      {/* Volumetric fog */}
      <VolumeFog />

      {/* Obsidian Knowledge Core — the planet itself */}
      <ObsidianShell loadProgress={loadProgress} particleCount={budget.dataCoreParticles} />

      {/* Archive Stats HUD (total image count) */}
      <ArchiveStats totalCount={totalCount} loading={loading} />

      {/* Cloud Gallery (orbiting album clusters) — visible when no album selected */}
      {!selectedCategory && (
        <Suspense fallback={null}>
          <CloudGallery albums={albums} onSelectAlbum={handleSelectAlbum} />
        </Suspense>
      )}

      {/* Cylindrical Carousel — visible when an album is selected */}
      {selectedCategory && (
        <Suspense fallback={null}>
          <CylindricalCarousel
            category={selectedCategory}
            assets={albums[selectedCategory.id] ?? []}
            onSelectAsset={handleSelectAsset}
            onClose={handleCloseCarousel}
            budget={{
              maxVisibleFrames: budget.maxVisibleFrames,
              lazyLoadBatch: budget.lazyLoadBatch,
              lodCullRadius: budget.lodCullRadius,
            }}
          />
        </Suspense>
      )}

      {/* Asset detail panel */}
      <AssetDetailPanel
        asset={selectedAsset}
        visible={showDetail}
        categoryColor={activeCategoryColor}
        onClose={handleCloseDetail}
      />
    </group>
  );
}
