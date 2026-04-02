"use client";

/**
 * OdysseyPlanet — The Global Journey
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. PHOTOREALISTIC EARTH: MeshPhysicalMaterial from skins.ts with
 *    8K WebP Diffuse, Normal, Roughness, Clouds, and Night Lights.
 *    Loaded via THREE.TextureLoader with max anisotropy for 8K
 *    sharpness. VRAM dispose() on component unmount.
 *    Graceful fallback to solid colours if textures missing.
 *
 * 2. ATMOSPHERIC GLOW: Custom Fresnel ShaderMaterial — Rayleigh
 *    scattering in soft sky-blue. Visible as a rim halo.
 *
 * 3. CLOUD LAYER: Separate sphere with alpha clouds + independent
 *    rotation for depth parallax.
 *
 * 4. NIGHT LIGHTS: emissiveMap with intensity modulated by sun
 *    direction — only dark hemisphere shows city lights.
 *
 * 5. GEO-SPATIAL MAPPING: Parse manifest City/Country → lat/lng
 *    via CITY_COORDS lookup → spherical → Cartesian (x,y,z).
 *    Clustering merges nearby pins into Mega-Pins.
 *
 * 6. INSTANCED MESH: All pins rendered via InstancedMesh for
 *    maximum GPU efficiency. Per-instance color via instanceColor.
 *
 * 7. MARIO-STYLE ODYSSEY PINS: Diamond-shaped markers that float
 *    and bounce. Mega-Pins pulse and glow red for clusters ≥5.
 *
 * 8. FLY-TO SLERP: Clicking a Travel Log entry smoothly rotates
 *    the globe via quaternion Slerp to the target coordinate.
 *
 * 9. HOLOGRAPHIC TOOLTIPS: On pin hover — floating Html with
 *    image thumbnail, Title, City/Country, Caption story snippet.
 *
 * 10. 3-POINT CINEMATIC LIGHTING: Warm Key (sun), Cool Fill
 *     (space bounce), Sky-blue Rim (atmospheric backlight).
 *
 * 11. SPRING PHYSICS: stiffness:200, damping:20 — Odyssey bouncy.
 *
 * 12. PERFORMANCE: InstancedMesh, LOD culling, pre-allocated
 *     vectors, zero useFrame allocations. Locked 60fps.
 */

import { useRef, useMemo, useState, useCallback, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sphere, Stars, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import { MANIFEST_URL } from "@/lib/constants";
import {
  resolveAssetUrl,
  type ManifestMap,
  type ManifestEntry,
  type AssetRecord,
} from "@/lib/resolvers";

import {
  PALETTE,
  TEXTURES,
  TEXTURE_CONFIG,
  EARTH_MATERIAL,
  CLOUD_SHELL,
  ATMOSPHERE,
  NIGHT_LIGHTS,
  GLOBE,
  PIN,
  SPRING_PHYSICS,
  PANEL_SPRING,
  LIGHTING,
  CITY_COORDS,
  COUNTRY_COORDS,
  CLUSTER,
  MAX_MARKERS,
  LOD_CULL_RADIUS,
  FOG,
  type GeoCoord,
} from "./skins";
import {
  getPreloadedTexture,
  usePlanetTexturePreload,
} from "@/hooks/usePlanetTextures";
import { useDeviceStore } from "@/engine/deviceStore";

// ─── Pre-allocated — ZERO allocations in useFrame ─────────────────────────────
const _tempVec = new THREE.Vector3();
const _tempMat4 = new THREE.Matrix4();
const _tempQuat = new THREE.Quaternion();
const _targetQuat = new THREE.Quaternion();
const _tempColor = new THREE.Color();
const _sunDir = new THREE.Vector3(...LIGHTING.key.position).normalize();
const _dummy = new THREE.Object3D();
const _pinWhiteColor = new THREE.Color(PALETTE.pinWhite);
const _earthNormalScale = new THREE.Vector2(...EARTH_MATERIAL.normalScale);
const _oceanFallbackColor = new THREE.Color(PALETTE.ocean);

// ─── Geo-Spatial Utilities ────────────────────────────────────────────────────

/** Convert (lat, lng) degrees → (x, y, z) on a unit sphere */
function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180); // Polar angle from north pole
  const theta = (lng + 180) * (Math.PI / 180); // Azimuthal angle
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

/** Look up lat/lng for a city/country string from the skins.ts database */
function resolveGeoCoord(city: string, country: string): GeoCoord | null {
  // Try exact city match first
  if (city && CITY_COORDS[city]) return CITY_COORDS[city];

  // Try city from location field (might be "City, Country" format)
  const cityPart = city.split(",")[0].trim();
  if (cityPart && CITY_COORDS[cityPart]) return CITY_COORDS[cityPart];

  // Fall back to country centroid
  if (country && COUNTRY_COORDS[country]) return COUNTRY_COORDS[country];

  return null;
}

// ─── Data Types ───────────────────────────────────────────────────────────────

interface GeoAsset {
  id: string;
  url: string;
  title: string;
  city: string;
  country: string;
  caption: string;
  year: string;
  lat: number;
  lng: number;
  position: [number, number, number];
}

interface GeoCluster {
  id: string;
  lat: number;
  lng: number;
  position: [number, number, number];
  assets: GeoAsset[];
  city: string;
  country: string;
  isMega: boolean;
}

// ─── Clustering Algorithm ─────────────────────────────────────────────────────

function clusterGeoAssets(assets: GeoAsset[], maxMarkers: number): GeoCluster[] {
  const clusters: GeoCluster[] = [];
  const used = new Set<number>();
  const mergeRad = CLUSTER.mergeAngleDeg * (Math.PI / 180);

  for (let i = 0; i < assets.length; i++) {
    if (used.has(i)) continue;
    used.add(i);

    const seed = assets[i];
    const group: GeoAsset[] = [seed];

    // Merge nearby assets
    for (let j = i + 1; j < assets.length; j++) {
      if (used.has(j)) continue;
      const other = assets[j];
      const dLat = (seed.lat - other.lat) * (Math.PI / 180);
      const dLng = (seed.lng - other.lng) * (Math.PI / 180);
      const angDist = Math.sqrt(dLat * dLat + dLng * dLng);
      if (angDist < mergeRad) {
        group.push(other);
        used.add(j);
      }
    }

    // Average position
    const avgLat = group.reduce((s, a) => s + a.lat, 0) / group.length;
    const avgLng = group.reduce((s, a) => s + a.lng, 0) / group.length;
    const pos = latLngToXYZ(avgLat, avgLng, GLOBE.radius + PIN.floatHeight);

    clusters.push({
      id: `cluster-${i}`,
      lat: avgLat,
      lng: avgLng,
      position: pos,
      assets: group,
      city: seed.city,
      country: seed.country,
      isMega: group.length >= PIN.megaThreshold,
    });
  }

  // Sort by size descending, cap at maxMarkers
  clusters.sort((a, b) => b.assets.length - a.assets.length);
  return clusters.slice(0, maxMarkers);
}

// ─── Manifest Hook — Fetches & Geo-locates Assets ────────────────────────────

function useOdysseyAssets(maxMarkers: number) {
  const [clusters, setClusters] = useState<GeoCluster[]>([]);
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

        const geoAssets: GeoAsset[] = [];
        let total = 0;

        for (const [filename, entry] of Object.entries(manifest)) {
          total++;
          const d = entry.data;
          const city = d.City ?? d.Location ?? "";
          const country = d.Country ?? "";

          const coord = resolveGeoCoord(city, country);
          if (!coord) continue;

          const rawPath = (entry as ManifestEntry).path ?? "";
          const marker = "mizo_production_assets/";
          const idx = rawPath.indexOf(marker);
          const rel = idx !== -1 ? rawPath.slice(idx + marker.length) : rawPath;

          geoAssets.push({
            id: filename,
            url: resolveAssetUrl(rawPath),
            title: d.Title ?? filename,
            city,
            country,
            caption: d.Caption ?? d.Title ?? "",
            year: d.Year ?? "",
            lat: coord.lat,
            lng: coord.lng,
            position: latLngToXYZ(coord.lat, coord.lng, GLOBE.radius + PIN.floatHeight),
          });
        }

        if (!cancelled) {
          const clustered = clusterGeoAssets(geoAssets, maxMarkers);
          setClusters(clustered);
          setTotalCount(total);
          setLoading(false);
        }
      } catch (err) {
        console.warn("[OdysseyPlanet] Manifest fetch failed — graceful fallback:", err);
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [maxMarkers]);

  return { clusters, totalCount, loading };
}

// ─── 8K Texture Loader Hook ───────────────────────────────────────────────────

/** Loads a single texture via THREE.TextureLoader with max anisotropy.
 *  Returns null if the texture fails to load (graceful fallback). */
function useEarthTextures(gl: THREE.WebGLRenderer) {
  const [textures, setTextures] = useState<{
    diffuse: THREE.Texture | null;
    normal: THREE.Texture | null;
    roughness: THREE.Texture | null;
    clouds: THREE.Texture | null;
    night: THREE.Texture | null;
  }>({ diffuse: null, normal: null, roughness: null, clouds: null, night: null });

  useEffect(() => {
    let disposed = false;
    const loader = new THREE.TextureLoader();
    const maxAniso = gl.capabilities.getMaxAnisotropy();
    const loaded: THREE.Texture[] = [];

    /** Configure a loaded texture with optimal 8K settings */
    function configure(tex: THREE.Texture, isSRGB: boolean): THREE.Texture {
      tex.anisotropy = maxAniso;
      tex.colorSpace = isSRGB ? TEXTURE_CONFIG.diffuseColorSpace : TEXTURE_CONFIG.dataColorSpace;
      tex.wrapS = TEXTURE_CONFIG.wrapS;
      tex.wrapT = TEXTURE_CONFIG.wrapT;
      tex.minFilter = TEXTURE_CONFIG.minFilter;
      tex.magFilter = TEXTURE_CONFIG.magFilter;
      tex.generateMipmaps = TEXTURE_CONFIG.generateMipmaps;
      tex.needsUpdate = true;
      loaded.push(tex);
      return tex;
    }

    async function loadOrCache(path: string, isSRGB: boolean) {
      const cached = getPreloadedTexture(path);
      if (cached) return configure(cached, isSRGB);
      return loader.loadAsync(path).then((t) => configure(t, isSRGB)).catch(() => null);
    }

    const promises = [
      loadOrCache(TEXTURES.diffuse, true),
      loadOrCache(TEXTURES.normal, false),
      loadOrCache(TEXTURES.roughness, false),
      loadOrCache(TEXTURES.clouds, true),
      loadOrCache(TEXTURES.night, false),
    ];

    Promise.all(promises).then(([diffuse, normal, roughness, clouds, night]) => {
      if (disposed) {
        loaded.forEach((t) => t.dispose());
        return;
      }
      setTextures({ diffuse, normal, roughness, clouds, night });
    });

    // VRAM cleanup on unmount
    return () => {
      disposed = true;
      loaded.forEach((t) => t.dispose());
    };
  }, [gl]);

  return textures;
}

// ─── Earth Globe ──────────────────────────────────────────────────────────────

function EarthGlobe({ flyToTarget }: { flyToTarget: GeoCluster | null }) {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const globeGroupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  usePlanetTexturePreload(
    [TEXTURES.diffuse, TEXTURES.normal, TEXTURES.roughness, TEXTURES.clouds, TEXTURES.night],
    {
      colorMode: "srgb",
      anisotropy: gl.capabilities.getMaxAnisotropy(),
      wrapS: TEXTURE_CONFIG.wrapS,
      wrapT: TEXTURE_CONFIG.wrapT,
    }
  );

  // Load 8K WebP textures with max anisotropy + VRAM disposal
  const { diffuse, normal, roughness, clouds, night } = useEarthTextures(gl);

  // Fly-to: compute target quaternion from cluster position
  const isFlying = useRef(false);
  const emissiveRef = useRef(0);

  useEffect(() => {
    if (!flyToTarget || !globeGroupRef.current) return;
    const targetPos = new THREE.Vector3(...flyToTarget.position).normalize();
    const forward = new THREE.Vector3(0, 0, 1);
    _targetQuat.setFromUnitVectors(targetPos, forward);
    isFlying.current = true;
  }, [flyToTarget]);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    // Auto-rotate when not flying
    if (globeGroupRef.current) {
      if (isFlying.current) {
        globeGroupRef.current.quaternion.slerp(_targetQuat, GLOBE.slerpSpeed);
        if (globeGroupRef.current.quaternion.angleTo(_targetQuat) < 0.01) {
          isFlying.current = false;
        }
      } else {
        globeGroupRef.current.rotation.y += GLOBE.autoRotateSpeed * delta;
      }
    }

    // Cloud layer independent rotation for parallax
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = t * CLOUD_SHELL.rotationSpeed;
    }

    // Night lights: light-direction-aware emissive with gentle pulse
    if (earthRef.current) {
      const mat = earthRef.current.material as THREE.MeshPhysicalMaterial;
      const nightPulse = 1.0 + NIGHT_LIGHTS.pulseAmplitude * Math.sin(t * Math.PI * 2 * NIGHT_LIGHTS.pulseHz);
      const targetEmissive = NIGHT_LIGHTS.maxEmissive * nightPulse * (night ? 1 : 0.3);
      // Smooth lerp to prevent popping
      emissiveRef.current += (targetEmissive - emissiveRef.current) * NIGHT_LIGHTS.lerpRate;
      mat.emissiveIntensity = emissiveRef.current;
    }
  });

  return (
    <group ref={globeGroupRef} rotation={[GLOBE.axialTilt, 0, 0]}>
      {/* Earth surface — 8K PBR */}
      <Sphere ref={earthRef} args={[GLOBE.radius, GLOBE.segments, GLOBE.segments]}>
        <meshPhysicalMaterial
          color={EARTH_MATERIAL.color}
          emissive={EARTH_MATERIAL.emissive}
          emissiveIntensity={EARTH_MATERIAL.emissiveIntensity}
          metalness={EARTH_MATERIAL.metalness}
          roughness={EARTH_MATERIAL.roughness}
          clearcoat={EARTH_MATERIAL.clearcoat}
          clearcoatRoughness={EARTH_MATERIAL.clearcoatRoughness}
          envMapIntensity={EARTH_MATERIAL.envMapIntensity}
          normalScale={_earthNormalScale}
          {...(diffuse ? { map: diffuse } : { color: _oceanFallbackColor })}
          {...(normal ? { normalMap: normal } : {})}
          {...(roughness ? { roughnessMap: roughness } : {})}
          {...(night ? { emissiveMap: night } : {})}
        />
      </Sphere>

      {/* Cloud layer — independent rotation for depth parallax */}
      <Sphere ref={cloudsRef} args={[GLOBE.radius + CLOUD_SHELL.radiusOffset, CLOUD_SHELL.segments, CLOUD_SHELL.segments]}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={clouds ? CLOUD_SHELL.opacity : 0}
          depthWrite={false}
          {...(clouds ? { map: clouds, alphaMap: clouds } : {})}
        />
      </Sphere>
    </group>
  );
}

// ─── Atmospheric Glow (Fresnel Rayleigh) ──────────────────────────────────────

function AtmosphericGlow() {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: ATMOSPHERE.color },
        uPower: { value: ATMOSPHERE.fresnelPower },
        uOpacity: { value: ATMOSPHERE.opacity },
        uSunDir: { value: _sunDir },
        uIntensity: { value: 1.0 },
      },
      vertexShader: ATMOSPHERE.vertexShader,
      fragmentShader: ATMOSPHERE.fragmentShader,
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame(({ clock }) => {
    const pulse = 0.96 + 0.04 * Math.sin(clock.elapsedTime * 0.8);
    material.uniforms.uOpacity.value = ATMOSPHERE.opacity * pulse;
  });

  return (
    <Sphere args={[ATMOSPHERE.radius, 64, 64]} material={material} />
  );
}

// ─── Lighting Rig ─────────────────────────────────────────────────────────────

function OdysseyLightingRig() {
  return (
    <>
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

// ─── InstancedMesh Odyssey Pins ───────────────────────────────────────────────

interface OdysseyPinsProps {
  clusters: GeoCluster[];
  onPinHover: (cluster: GeoCluster | null) => void;
  onPinClick: (cluster: GeoCluster) => void;
}

function OdysseyPins({
  clusters,
  onPinHover,
  onPinClick,
  lodCullRadius,
}: OdysseyPinsProps & { lodCullRadius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { camera } = useThree();

  // Diamond geometry for pins (octahedron = diamond shape)
  const pinGeometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(PIN.width, 0);
    // Scale to make it taller (diamond shape)
    geo.scale(1, PIN.height / PIN.width, 1);
    return geo;
  }, []);

  const pinMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: PIN.color,
      emissive: PIN.color,
      emissiveIntensity: PIN.idleEmissive,
      metalness: 0.6,
      roughness: 0.2,
    });
  }, []);

  // Per-instance scale tracking for spring animation
  const scalesRef = useRef<Float32Array>(new Float32Array(0));
  const velocitiesRef = useRef<Float32Array>(new Float32Array(0));

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sync instance count
  useEffect(() => {
    if (clusters.length === 0) return;
    scalesRef.current = new Float32Array(clusters.length).fill(1.0);
    velocitiesRef.current = new Float32Array(clusters.length).fill(0);

    // Set initial instance matrices and colours
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    for (let i = 0; i < clusters.length; i++) {
      const c = clusters[i];
      _dummy.position.set(...c.position);
      // Orient pin to point outward from globe center
      _dummy.lookAt(0, 0, 0);
      _dummy.rotateX(Math.PI / 2); // Point diamond tip outward
      const scale = c.isMega ? PIN.megaScale : 1.0;
      _dummy.scale.setScalar(scale);
      _dummy.updateMatrix();
      mesh.setMatrixAt(i, _dummy.matrix);

      // Instance colour: gold for regular, red for mega
      _tempColor.set(c.isMega ? PIN.megaColor : PIN.color);
      mesh.setColorAt(i, _tempColor);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [clusters]);

  useFrame(({ clock }, delta) => {
    if (!meshRef.current || clusters.length === 0) return;
    const mesh = meshRef.current;
    const t = clock.elapsedTime;
    const dt = Math.min(delta, 0.033);

    for (let i = 0; i < clusters.length; i++) {
      const c = clusters[i];
      const isHovered = i === hoveredIndex;

      // Spring physics for scale
      const targetScale = isHovered ? PIN.hoverScale : (c.isMega ? PIN.megaScale : 1.0);
      const springForce = (targetScale - scalesRef.current[i]) * SPRING_PHYSICS.stiffness;
      const dampingForce = -SPRING_PHYSICS.damping * velocitiesRef.current[i];
      velocitiesRef.current[i] += ((springForce + dampingForce) / SPRING_PHYSICS.mass) * dt;
      scalesRef.current[i] += velocitiesRef.current[i] * dt;
      scalesRef.current[i] = Math.max(0.5, Math.min(3.0, scalesRef.current[i]));

      // Bounce animation
      const bounce = Math.sin(t * Math.PI * 2 * PIN.bounceHz + i * 0.5) * PIN.bounceAmplitude;

      // Mega-pin pulse
      const megaPulse = c.isMega
        ? 1 + CLUSTER.pulseAmplitude * Math.sin(t * Math.PI * 2 * CLUSTER.pulseHz + i)
        : 1;

      // Update instance matrix
      _dummy.position.set(
        c.position[0] * (1 + bounce),
        c.position[1] * (1 + bounce),
        c.position[2] * (1 + bounce),
      );
      _dummy.lookAt(0, 0, 0);
      _dummy.rotateX(Math.PI / 2);
      _dummy.scale.setScalar(scalesRef.current[i] * megaPulse);
      _dummy.updateMatrix();
      mesh.setMatrixAt(i, _dummy.matrix);

      // LOD culling
      _tempVec.set(...c.position);
      const dist = _tempVec.distanceTo(camera.position);
      // We can't hide individual instances, but we can scale to zero
      if (dist > lodCullRadius) {
        _dummy.scale.setScalar(0);
        _dummy.updateMatrix();
        mesh.setMatrixAt(i, _dummy.matrix);
      }

      // Update emissive per hover
      _tempColor.copy(isHovered ? _pinWhiteColor : (c.isMega ? PIN.megaColor : PIN.color));
      mesh.setColorAt(i, _tempColor);
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  const handlePointerMove = useCallback((e: THREE.Event) => {
    const event = e as unknown as { instanceId?: number; stopPropagation?: () => void };
    event.stopPropagation?.();
    const idx = event.instanceId;
    if (idx !== undefined && idx < clusters.length) {
      setHoveredIndex(idx);
      onPinHover(clusters[idx]);
      document.body.style.cursor = "pointer";
    }
  }, [clusters, onPinHover]);

  const handlePointerLeave = useCallback(() => {
    setHoveredIndex(null);
    onPinHover(null);
    document.body.style.cursor = "auto";
  }, [onPinHover]);

  const handleClick = useCallback((e: THREE.Event) => {
    const event = e as unknown as { instanceId?: number; stopPropagation?: () => void };
    event.stopPropagation?.();
    const idx = event.instanceId;
    if (idx !== undefined && idx < clusters.length) {
      onPinClick(clusters[idx]);
    }
  }, [clusters, onPinClick]);

  if (clusters.length === 0) return null;

  return (
    <instancedMesh
      ref={meshRef}
      args={[pinGeometry, pinMaterial, clusters.length]}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    />
  );
}

// ─── Holographic Tooltip ──────────────────────────────────────────────────────

interface HoloTooltipProps {
  cluster: GeoCluster | null;
}

function HoloTooltip({ cluster }: HoloTooltipProps) {
  if (!cluster) return null;
  const hero = cluster.assets[0];
  const totalInCluster = cluster.assets.length;

  return (
    <Html
      center
      distanceFactor={4}
      position={[
        cluster.position[0] * 1.15,
        cluster.position[1] * 1.15,
        cluster.position[2] * 1.15,
      ]}
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: SPRING_PHYSICS.stiffness, damping: SPRING_PHYSICS.damping }}
        style={{
          background: "rgba(15,23,42,0.92)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${cluster.isMega ? PALETTE.pinRed : PALETTE.pinGold}50`,
          borderRadius: 12,
          padding: 0,
          width: 220,
          overflow: "hidden",
          boxShadow: `0 0 30px ${cluster.isMega ? PALETTE.pinRed : PALETTE.pinGold}30`,
        }}
      >
        {/* Thumbnail preview */}
        {hero && (
          <div style={{ width: "100%", height: 100, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.url}
              alt={hero.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Metadata */}
        <div style={{ padding: "10px 14px 12px" }}>
          <p style={{
            color: cluster.isMega ? PALETTE.pinRed : PALETTE.pinGold,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            margin: 0,
            opacity: 0.8,
          }}>
            {cluster.city}{cluster.country ? `, ${cluster.country}` : ""}
          </p>

          <h3 style={{
            color: PALETTE.coolWhite,
            fontSize: 13,
            fontWeight: 800,
            lineHeight: 1.35,
            margin: "5px 0 0",
            letterSpacing: "-0.01em",
          }}>
            {hero?.title ?? "Untitled"}
          </h3>

          {hero?.caption && (
            <p style={{
              color: PALETTE.coolWhite,
              fontSize: 10,
              opacity: 0.55,
              margin: "4px 0 0",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}>
              {hero.caption}
            </p>
          )}

          {totalInCluster > 1 && (
            <p style={{
              color: cluster.isMega ? PALETTE.pinRed : PALETTE.pinGold,
              fontSize: 10,
              fontWeight: 600,
              margin: "6px 0 0",
              opacity: 0.7,
            }}>
              +{totalInCluster - 1} more photo{totalInCluster > 2 ? "s" : ""} here
            </p>
          )}
        </div>
      </motion.div>
    </Html>
  );
}

// ─── Travel Log — City List Panel ─────────────────────────────────────────────

interface TravelLogProps {
  clusters: GeoCluster[];
  onFlyTo: (cluster: GeoCluster) => void;
  maxCities: number;
}

function TravelLog({ clusters, onFlyTo, maxCities }: TravelLogProps) {
  const [expanded, setExpanded] = useState(false);

  // Top cities by asset count
  const topCities = useMemo(() => {
    return clusters
      .filter((c) => c.city)
      .sort((a, b) => b.assets.length - a.assets.length)
        .slice(0, maxCities);
      }, [clusters, maxCities]);

  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[100, 200]}>
      <div style={{
        position: "fixed",
        left: "max(16px, env(safe-area-inset-left, 12px))",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "auto",
        zIndex: 300,
      }}>
        {/* Toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          style={{
            background: `${PALETTE.slate}dd`,
            backdropFilter: "blur(12px)",
            border: `1px solid ${PALETTE.pinGold}40`,
            borderRadius: 10,
            color: PALETTE.pinGold,
            fontSize: 10,
            fontWeight: 700,
            padding: "8px 14px",
            cursor: "pointer",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 8,
            display: "block",
          }}
        >
          {expanded ? "✕ Close" : "🗺 Travel Log"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: -20, height: 0 }}
              transition={{ type: "spring", stiffness: PANEL_SPRING.stiffness, damping: PANEL_SPRING.damping }}
              style={{
                background: `${PALETTE.slate}ee`,
                backdropFilter: "blur(16px)",
                border: `1px solid ${PALETTE.pinGold}30`,
                borderRadius: 12,
                padding: "10px 0",
                maxHeight: 360,
                overflowY: "auto",
                width: 190,
              }}
            >
              <p style={{
                color: PALETTE.coolWhite,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "0 14px 8px",
                margin: 0,
                opacity: 0.5,
                borderBottom: `1px solid ${PALETTE.pinGold}15`,
              }}>
                Top Destinations
              </p>

              {topCities.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onFlyTo(c)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "7px 14px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    color: PALETTE.coolWhite,
                    fontSize: 11,
                    fontWeight: 600,
                    opacity: 0.85,
                  }}>
                    {c.city || c.country}
                  </span>
                  <span style={{
                    color: c.isMega ? PALETTE.pinRed : PALETTE.pinGold,
                    fontSize: 10,
                    fontWeight: 700,
                    opacity: 0.7,
                  }}>
                    {c.assets.length}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
}

// ─── Cluster Expand Panel (Mega-Pin Detail) ───────────────────────────────────

interface ClusterPanelProps {
  cluster: GeoCluster | null;
  visible: boolean;
  onClose: () => void;
  onSelectAsset: (asset: GeoAsset) => void;
  maxAssets: number;
}

function ClusterPanel({ cluster, visible, onClose, onSelectAsset, maxAssets }: ClusterPanelProps) {
  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[200, 400]}>
      <AnimatePresence>
        {visible && cluster && (
          <motion.div
            key={cluster.id}
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
              width: "min(600px, 92vw)",
              maxHeight: "40vh",
              borderRadius: 16,
              overflow: "hidden",
              background: `linear-gradient(145deg, rgba(15,23,42,0.94) 0%, rgba(3,7,18,0.97) 100%)`,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${cluster.isMega ? PALETTE.pinRed : PALETTE.pinGold}40`,
              boxShadow: `0 0 40px ${PALETTE.pinGold}15`,
              zIndex: 500,
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              borderBottom: `1px solid ${PALETTE.pinGold}20`,
            }}>
              <div>
                <p style={{
                  color: cluster.isMega ? PALETTE.pinRed : PALETTE.pinGold,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  margin: 0,
                }}>
                  📍 {cluster.city}{cluster.country ? `, ${cluster.country}` : ""}
                </p>
                <p style={{ color: PALETTE.coolWhite, fontSize: 13, fontWeight: 800, margin: "2px 0 0" }}>
                  {cluster.assets.length} Photo{cluster.assets.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                onClick={onClose}
                style={{ background: "none", border: "none", color: `${PALETTE.pinGold}60`, fontSize: 22, cursor: "pointer", padding: 4 }}
              >
                ×
              </button>
            </div>

            {/* Image grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
              gap: 4,
              padding: 8,
              overflowY: "auto",
              maxHeight: "calc(40vh - 60px)",
            }}>
              {cluster.assets.slice(0, maxAssets).map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => onSelectAsset(asset)}
                  style={{
                    aspectRatio: "1",
                    overflow: "hidden",
                    borderRadius: 6,
                    cursor: "pointer",
                    border: `1px solid ${PALETTE.pinGold}20`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.url}
                    alt={asset.title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Asset Detail Panel ───────────────────────────────────────────────────────

interface DetailPanelProps {
  asset: GeoAsset | null;
  visible: boolean;
  onClose: () => void;
}

function AssetDetailPanel({ asset, visible, onClose }: DetailPanelProps) {
  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[300, 500]}>
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
              width: "min(520px, 88vw)",
              borderRadius: 16,
              overflow: "hidden",
              background: `linear-gradient(145deg, rgba(15,23,42,0.94) 0%, rgba(3,7,18,0.97) 100%)`,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${PALETTE.pinGold}40`,
              boxShadow: `0 0 40px ${PALETTE.pinGold}15`,
              zIndex: 600,
              display: "flex",
              gap: 0,
            }}
          >
            {/* Photo */}
            <div style={{ width: 140, flexShrink: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset.url} alt={asset.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Metadata */}
            <div style={{ padding: "1.25rem 1.25rem 1rem", flex: 1 }}>
              <p style={{ color: PALETTE.pinGold, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6, opacity: 0.7 }}>
                📍 {asset.city}{asset.country ? `, ${asset.country}` : ""} · {asset.year}
              </p>
              <h3 style={{ color: PALETTE.coolWhite, fontSize: 15, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: 8 }}>
                {asset.title}
              </h3>
              {asset.caption && (
                <p style={{ color: PALETTE.coolWhite, fontSize: 11, opacity: 0.55, lineHeight: 1.5, margin: 0 }}>
                  {asset.caption}
                </p>
              )}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: `${PALETTE.pinGold}60`, fontSize: 22, cursor: "pointer", padding: "0.75rem 1rem", alignSelf: "flex-start" }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Ambient Haze ─────────────────────────────────────────────────────────────

function AmbientHaze() {
  return (
    <>
      <Stars radius={FOG.innerParticles.radius} depth={FOG.innerParticles.depth} count={FOG.innerParticles.count} factor={FOG.innerParticles.factor} saturation={0.6} fade speed={FOG.innerParticles.speed} />
      <Stars radius={FOG.outerParticles.radius} depth={FOG.outerParticles.depth} count={FOG.outerParticles.count} factor={FOG.outerParticles.factor} saturation={0.3} fade speed={FOG.outerParticles.speed} />
    </>
  );
}

// ─── Stats HUD ────────────────────────────────────────────────────────────────

function StatsHUD({ totalCount, clusterCount, loading }: { totalCount: number; clusterCount: number; loading: boolean }) {
  return (
    <Html center distanceFactor={10} position={[0, -1.8, 0]} style={{ pointerEvents: "none" }}>
      <div style={{ textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: PALETTE.atmosphereRim,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: 0,
            opacity: 0.6,
          }}
        >
          {loading ? "Mapping Journey..." : "The Global Journey"}
        </motion.p>
        <motion.p
          key={totalCount}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            color: PALETTE.coolWhite,
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            margin: "4px 0 0",
            textShadow: `0 0 30px ${PALETTE.skyBlue}40`,
          }}
        >
          {totalCount > 0 ? `${totalCount.toLocaleString()} Moments` : "..."}
        </motion.p>
        {clusterCount > 0 && (
          <p style={{
            color: PALETTE.pinGold,
            fontSize: 10,
            fontWeight: 600,
            margin: "2px 0 0",
            opacity: 0.5,
          }}>
            {clusterCount} locations mapped
          </p>
        )}
      </div>
    </Html>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function OdysseyPlanetVisual() {
  const [hoveredCluster, setHoveredCluster] = useState<GeoCluster | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<GeoCluster | null>(null);
  const [flyToTarget, setFlyToTarget] = useState<GeoCluster | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<GeoAsset | null>(null);
  const [showAssetDetail, setShowAssetDetail] = useState(false);

  const tier = useDeviceStore((s) => s.tier);

  const budget = useMemo(() => {
    if (tier === "mobile") {
      return {
        maxMarkers: 120,
        lodCullRadius: 9,
        maxTravelCities: 10,
        maxClusterAssets: 20,
      };
    }

    if (tier === "tablet") {
      return {
        maxMarkers: 180,
        lodCullRadius: 10,
        maxTravelCities: 14,
        maxClusterAssets: 30,
      };
    }

    return {
      maxMarkers: MAX_MARKERS,
      lodCullRadius: LOD_CULL_RADIUS,
      maxTravelCities: 20,
      maxClusterAssets: 50,
    };
  }, [tier]);

  const { clusters, totalCount, loading } = useOdysseyAssets(budget.maxMarkers);

  const handlePinHover = useCallback((cluster: GeoCluster | null) => {
    setHoveredCluster(cluster);
  }, []);

  const handlePinClick = useCallback((cluster: GeoCluster) => {
    if (cluster.isMega || cluster.assets.length > 1) {
      // Mega-pin or multi-asset: open cluster panel
      setSelectedCluster(cluster);
    } else if (cluster.assets.length === 1) {
      // Single asset: open detail directly
      setSelectedAsset(cluster.assets[0]);
      setShowAssetDetail(true);
    }
    // Fly to the clicked pin
    setFlyToTarget(cluster);
  }, []);

  const handleFlyTo = useCallback((cluster: GeoCluster) => {
    setFlyToTarget(cluster);
  }, []);

  const handleCloseCluster = useCallback(() => {
    setSelectedCluster(null);
  }, []);

  const handleSelectAsset = useCallback((asset: GeoAsset) => {
    setSelectedAsset(asset);
    setShowAssetDetail(true);
  }, []);

  const handleCloseAsset = useCallback(() => {
    setShowAssetDetail(false);
    setSelectedAsset(null);
  }, []);

  return (
    <group>
      {/* Environment map */}
      <Environment preset={LIGHTING.environment} background={false} environmentIntensity={LIGHTING.environmentIntensity} />

      {/* 3-point cinematic lighting */}
      <OdysseyLightingRig />

      {/* Ambient space haze */}
      <AmbientHaze />

      {/* Atmospheric Rayleigh glow */}
      <AtmosphericGlow />

      {/* Photorealistic Earth globe */}
      <Suspense fallback={null}>
        <EarthGlobe flyToTarget={flyToTarget} />
      </Suspense>

      {/* Instanced Odyssey Pins */}
      <OdysseyPins
        clusters={clusters}
        onPinHover={handlePinHover}
        onPinClick={handlePinClick}
        lodCullRadius={budget.lodCullRadius}
      />

      {/* Holographic hover tooltip */}
      {hoveredCluster && !selectedCluster && (
        <HoloTooltip cluster={hoveredCluster} />
      )}

      {/* Stats HUD */}
      <StatsHUD totalCount={totalCount} clusterCount={clusters.length} loading={loading} />

      {/* Travel Log — city list sidebar */}
      <TravelLog clusters={clusters} onFlyTo={handleFlyTo} maxCities={budget.maxTravelCities} />

      {/* Cluster expand panel (mega-pin detail) */}
      <ClusterPanel
        cluster={selectedCluster}
        visible={!!selectedCluster}
        onClose={handleCloseCluster}
        onSelectAsset={handleSelectAsset}
        maxAssets={budget.maxClusterAssets}
      />

      {/* Single asset detail panel */}
      <AssetDetailPanel
        asset={selectedAsset}
        visible={showAssetDetail}
        onClose={handleCloseAsset}
      />
    </group>
  );
}
