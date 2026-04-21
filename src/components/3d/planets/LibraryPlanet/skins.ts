/**
 * LibraryPlanet — "Obsidian Knowledge" Skin & Material Configuration
 *
 * VISUAL CONCEPT — The Great Archive
 * ─────────────────────────────────────────────────────────────────
 * A deep obsidian translucent sphere housing a luminous Data Core —
 * thousands of glowing voxel-like particles floating within, evoking
 * the feeling of knowledge stored in crystalline memory. The shell
 * refracts an indigo-violet aura that pulses with the rhythm of
 * loaded images, as if the planet breathes with information.
 *
 * MATERIAL SCIENCE — Deep Obsidian (MeshPhysicalMaterial)
 * ─────────────────────────────────────────────────────────────────
 *   color: #020617           → Near-black with a blue undertone
 *   transmission: 0.7        → Semi-translucent — reveals inner Data Core
 *   roughness: 0.15          → Polished obsidian glass surface
 *   thickness: 3.0           → Deep refraction volume
 *   ior: 1.8                 → High refraction — sapphire-like bending
 *   clearcoat: 1.0           → Perfect clearcoat gloss layer
 *
 * DISPLAY ARCHITECTURE — Cloud Gallery
 * ─────────────────────────────────────────────────────────────────
 * 20,000+ images organized into Album Clusters that orbit the planet
 * as a Spherical Grid. On album click, images expand into a
 * Cylindrical Carousel surrounding the viewer. Frustum culling
 * ensures only visible frames consume GPU resources.
 *
 * TEXTURE PATHS
 * ─────────────────────────────────────────────────────────────────
 *   albedo: /textures/planets/library/default/albedo.jpg
 */

import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────

export const PALETTE = {
  /** Deep obsidian — shell surface */
  obsidian: "#020617",
  /** Rich indigo — primary accent, aura base */
  indigo: "#4f46e5",
  /** Bright violet — emissive highlights, active states */
  violet: "#7c3aed",
  /** Electric blue — rim light, secondary glow */
  electricBlue: "#3b82f6",
  /** Cool white — key light, text highlights */
  coolWhite: "#e0e7ff",
  /** Dim slate — UI overlay background */
  slate: "#0f172a",
  /** Warm amber — category accent (Basketball) */
  amber: "#f59e0b",
  /** Emerald — category accent (University) */
  emerald: "#10b981",
  /** Rose — category accent (Personal) */
  rose: "#f43f5e",
  /** Cyan — category accent (Business) */
  cyan: "#06b6d4",
} as const;

// ─── Texture Paths ────────────────────────────────────────────────────────────

export const TEXTURES = {
  /** Obsidian surface albedo — subtle surface detail */
  albedo: "/textures/planets/library/default/albedo.jpg",
} as const;

// ─── Outer Shell — Deep Obsidian (MeshPhysicalMaterial) ───────────────────────

export const SHELL_MATERIAL = {
  color: new THREE.Color("#020617"),
  emissive: new THREE.Color("#1e1b4b"),
  emissiveIntensity: 0.3,

  // ── Transmission (translucent glass) ──
  transmission: 0.7,
  roughness: 0.15,
  thickness: 3.0,
  ior: 1.8,

  // ── Clearcoat (polished obsidian finish) ──
  clearcoat: 1.0,
  clearcoatRoughness: 0.08,

  // ── Attenuation (indigo light absorption) ──
  attenuationColor: new THREE.Color("#312e81"),
  attenuationDistance: 2.5,

  // ── Environment reflections ──
  envMapIntensity: 1.8,
} as const;

// ─── Inner Data Core — Glowing Voxel Points System ───────────────────────────

export const DATA_CORE = {
  /** Number of voxel particles inside the shell */
  particleCount: 2000,
  /** Radius of the spherical particle volume */
  radius: 0.75,
  /** Base particle size */
  size: 0.015,
  /** Emissive brightness range [min, max] */
  brightnessRange: [0.3, 1.0] as [number, number],
  /** Rotation speed of the inner particle cloud (rad/s) */
  rotationSpeed: 0.08,
  /** Pulse frequency — synced with aura (Hz) */
  pulseHz: 0.3,
  /** Pulse amplitude for particle size modulation */
  pulseAmplitude: 0.4,
  /** Base color for core particles */
  color: new THREE.Color("#818cf8"),
  /** Secondary color for variety */
  colorAlt: new THREE.Color("#c084fc"),
} as const;

// ─── Aura System — Indigo-Violet Atmosphere ──────────────────────────────────

export const AURA = {
  /** Base indigo-violet aura color */
  color: new THREE.Color("#4f46e5"),
  /** Aura sphere radius */
  radius: 1.35,
  /** Base opacity when idle */
  idleOpacity: 0.04,
  /** Peak opacity when fully loaded */
  peakOpacity: 0.12,
  /** Pulse frequency in Hz — pulses based on load count */
  pulseHz: 0.4,
  /** Ambient point light intensity range */
  lightIntensity: { idle: 4, peak: 10 },
  /** Ambient point light distance */
  lightDistance: 10,
} as const;

// ─── Album Categories ─────────────────────────────────────────────────────────

export interface AlbumCategory {
  id: string;
  label: string;
  color: string;
  /** Path tokens to match in the manifest (substring match on relative path) */
  pathTokens: string[];
  /** Tag tokens to match in manifest Tags/SEO_Tags/Keywords */
  tags: string[];
}

export const ALBUM_CATEGORIES: AlbumCategory[] = [
  {
    id: "basketball",
    label: "Basketball Career",
    color: PALETTE.amber,
    pathTokens: ["legacy/basketball_career", "legacy/trophy_room", "legacy/national_pride"],
    tags: ["basketball", "trophy", "champion", "mvp", "sports", "shooting", "award"],
  },
  {
    id: "business",
    label: "Business & Marketing",
    color: PALETTE.cyan,
    pathTokens: ["ventures/", "business/", "marketing/"],
    tags: ["business", "marketing", "brand", "entrepreneurship", "ventures", "startup"],
  },
  {
    id: "university",
    label: "University Life",
    color: PALETTE.emerald,
    pathTokens: ["identity/education", "identity/university", "university/"],
    tags: ["university", "education", "campus", "academic", "graduation", "college"],
  },
  {
    id: "personal",
    label: "Personal Archive",
    color: PALETTE.rose,
    pathTokens: ["personal/", "family/", "travel/", "social/"],
    tags: ["personal", "family", "travel", "social", "lifestyle", "portrait"],
  },
] as const;

// ─── Cloud Gallery Layout — Spherical Grid ────────────────────────────────────

export const CLOUD_GALLERY = {
  /** Orbital radius of album cluster spheres around the planet */
  orbitRadius: 3.2,
  /** Orbit speed for album clusters (rad/s) */
  orbitSpeed: 0.015,
  /** Number of album thumbnail frames per cluster node */
  thumbnailsPerCluster: 6,
  /** Size of album cluster node (the sphere representing a category) */
  clusterNodeSize: 0.35,
  /** Spacing between thumbnail frames within a cluster */
  thumbnailSpacing: 0.55,
} as const;

// ─── Cylindrical Carousel (Album Expanded View) ──────────────────────────────

export const CAROUSEL = {
  /** Radius of the cylindrical carousel */
  radius: 4.0,
  /** Vertical spacing between rows */
  rowHeight: 1.2,
  /** Number of columns around the cylinder */
  columns: 12,
  /** Max rows visible at once */
  maxVisibleRows: 5,
  /** Rotation speed when browsing (rad/s) */
  browseSpeed: 0.3,
  /** Frame size (width/height of each image plane) */
  frameSize: 0.75,
  /** Gap between frames */
  frameGap: 0.08,
} as const;

// ─── Spring Physics — Fluid Underwater Movement ──────────────────────────────

export const SPRING_PHYSICS = {
  stiffness: 180,
  damping: 25,
  mass: 1.0,
} as const;

// ─── Panel Spring (UI overlays) ──────────────────────────────────────────────

export const PANEL_SPRING = {
  stiffness: 200,
  damping: 22,
  mass: 1.0,
} as const;

// ─── Frame Material (Gallery Image Frames) ────────────────────────────────────

export const FRAME_MATERIAL = {
  color: new THREE.Color(PALETTE.indigo),
  emissive: new THREE.Color(PALETTE.violet),
  emissiveIntensity: {
    idle: 0.5,
    hover: 1.6,
  },
  metalness: 0.8,
  roughness: 0.15,
} as const;

// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────

export const LIGHTING = {
  environment: "night" as const,
  environmentIntensity: 0.8,

  /** Key — sharp cool-white SpotLight from top-right */
  key: {
    color: "#e0e7ff",
    intensity: 80,
    position: [6, 8, 5] as [number, number, number],
    angle: 0.4,
    penumbra: 0.75,
    decay: 1.5,
    distance: 30,
  },

  /** Fill — deep violet PointLight from bottom */
  fill: {
    color: "#7c3aed",
    intensity: 5.0,
    position: [0, -5, 3] as [number, number, number],
    distance: 16,
    decay: 2,
  },

  /** Rim — electric blue DirectionalLight for sharp edge definition */
  rim: {
    color: "#3b82f6",
    intensity: 4.5,
    position: [-5, 4, -8] as [number, number, number],
  },
} as const;

// ─── Performance Constants ────────────────────────────────────────────────────

/** Max images loaded in GPU memory at any time (lazy load batch size) */
export const LAZY_LOAD_BATCH = 24;

/** LOD culling distance — beyond this, gallery nodes are hidden */
export const LOD_CULL_RADIUS = 15;

/** Frustum culling margin (slightly larger than view frustum) */
export const FRUSTUM_MARGIN = 1.1;

/** Max album frames rendered (even if manifest has more) */
export const MAX_VISIBLE_FRAMES = 64;

// ─── Volumetric Fog ───────────────────────────────────────────────────────────

export const FOG = {
  innerParticles: { radius: 6, depth: 3, count: 300, factor: 0.6, speed: 0.1 },
  outerParticles: { radius: 14, depth: 5, count: 500, factor: 1.2, speed: 0.06 },
  mistSphere: {
    radius: 6,
    color: new THREE.Color("#1e1b4b"),
    opacity: 0.02,
  },
} as const;
