/**
 * LegacyPlanet — "Obsidian-Gold Basketball" Skin & Material Configuration
 *
 * VISUAL CONCEPT — NBA Trophy Ball
 * ─────────────────────────────────────────────────────────────────
 * A hyper-realistic, obsidian-gold basketball with Mizo's gold
 * signature etched into the surface. The signature glows emissive
 * during God Ray pulses, creating a "living autograph" effect.
 *
 * MATERIAL SCIENCE — Trophy Gold (MeshPhysicalMaterial)
 * ─────────────────────────────────────────────────────────────────
 *   metalness: 1.0        → Full metal — like an actual NBA trophy
 *   roughness: 0.15       → Polished but with micro-grain for realism
 *   clearcoat: 1.0        → Lacquered trophy finish
 *   clearcoatRoughness: 0.04  → Near-mirror clearcoat layer
 *   envMapIntensity: 2.5   → Hot HDRI reflections on the surface
 *   reflectivity: 1.0      → Maximum Fresnel reflection at grazing angles
 *
 * THE SIGNATURE EFFECT
 * ─────────────────────────────────────────────────────────────────
 * Technique: Dual-texture blend via MeshPhysicalMaterial maps.
 *
 *   1. BASE MAP (albedo.jpg): The obsidian-gold basketball texture
 *      with panel lines and pebble grain.
 *
 *   2. SIGNATURE MAP (emissiveMap): A grayscale texture where Mizo's
 *      signature is white-on-black. When assigned as `emissiveMap`,
 *      ONLY the white signature pixels emit light. The black areas
 *      contribute zero emission → signature "floats" in gold glow.
 *
 *   3. GOD RAY SYNC: In useFrame, the core's `emissiveIntensity` is
 *      modulated by the same breathing sine wave as the God Ray shaft:
 *        breathe = 0.8 + 0.2 * sin(t * 0.5)
 *        emissiveIntensity = SIGNATURE_GLOW.idle + breathe * SIGNATURE_GLOW.amplitude
 *      This syncs the gold autograph glow with the god-ray pulse.
 *
 * DISPLAY ARCHITECTURE — Gravitational Legend Orbit
 * ─────────────────────────────────────────────────────────────────
 * Championship trophies orbit in a SPIRAL VORTEX (double helix) that
 * winds around the signed ball. The spiral creates gravitational
 * depth — trophies closer to the equator feel "pulled in" while
 * those near the poles drift wider. Combined with slow rotation,
 * this gives the sense that the ball's legend warps space itself.
 *
 *   SPIRAL_BASE_RADIUS: 2.8  → Close enough to feel gravitational pull
 *   SPIRAL_HEIGHT: 6.0       → Tall column embracing the planet
 *   SPIRAL_TURNS: 2.5        → Enough wraps for density without clutter
 *   rotationSpeed: 0.035     → Stately, trophy-case rotation
 *
 * TEXTURE PATHS
 * ─────────────────────────────────────────────────────────────────
 *   albedo:    /textures/planets/legacy/default/albedo.jpg
 *   signature: /textures/planets/legacy/default/albedo.jpg (emissiveMap fallback)
 *              → Create as white-on-black grayscale of Mizo's autograph
 */

import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────

export const PALETTE = {
  /** Classic gold — primary surface hue */
  gold: "#D4AF37",
  /** Bright gold — emissive highlights, god-ray tint */
  goldBright: "#F5D060",
  /** Dim gold — ambient emissive base */
  goldDim: "#8B7425",
  /** Deep obsidian — the dark base of the basketball */
  obsidian: "#0D0D0D",
  /** Warm sepia bronze — secondary accent */
  sepiaBronze: "#7C4E1E",
  /** Charcoal — UI overlay background */
  charcoal: "#1A1A1A",
} as const;

// ─── Texture Paths ────────────────────────────────────────────────────────────

export const TEXTURES = {
  /** Basketball surface — obsidian-gold base albedo */
  albedo: "/textures/planets/legacy/default/albedo.jpg",
  /**
   * Signature emissive map — white-on-black grayscale.
   * White pixels = Mizo's autograph → glow gold.
   * Black pixels = zero emission → invisible.
   *
   * If this texture doesn't exist yet, the material falls back
   * to uniform emissive (no map), which still looks correct.
   */
  signature: "/textures/planets/legacy/default/albedo.jpg",
} as const;

// ─── Outer Shell — Trophy Gold Basketball (MeshPhysicalMaterial) ──────────────
//
// The "NBA 2K Trophy" effect comes from full metalness + clearcoat.
// The albedo map provides the obsidian-gold basketball grain,
// the emissiveMap makes only the signature glow.

export const SHELL_MATERIAL = {
  color: new THREE.Color("#FFD700"),
  emissive: new THREE.Color("#FFA500"),
  emissiveIntensity: 1.4,
  metalness: 1.0,
  roughness: 0.18,

  // ── Clearcoat (lacquered trophy finish — makes signature pop) ──
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,

  // ── Environment reflections ──
  envMapIntensity: 2.5,
  reflectivity: 1.0,
} as const;

// ─── Inner Warm Glow Core ─────────────────────────────────────────────────────

export const CORE_MATERIAL = {
  color: new THREE.Color(PALETTE.goldBright),
  emissive: new THREE.Color(PALETTE.goldBright),
  emissiveIntensity: 0.8,
  metalness: 0.0,
  roughness: 0.8,
  transparent: true,
  opacity: 0.7,
} as const;

// ─── Signature Glow (God Ray Sync) ───────────────────────────────────────────
//
// The emissiveIntensity of the shell is modulated in useFrame:
//   breathe = 0.8 + 0.2 * sin(t * 0.5)        ← same as GodRayShaft
//   emissiveIntensity = idle + breathe * amplitude
//
// When the god rays brighten, the signature brightens in sync.

export const SIGNATURE_GLOW = {
  /** Base emissive intensity when god rays are at minimum */
  idle: 0.8,
  /** Additional intensity added at god ray peak */
  amplitude: 0.8,
  /** Frequency in Hz (matches GodRayShaft at 0.5 Hz) */
  frequency: 0.5,
  /** Emissive spike when a trophy/asset is hovered (“Memory Recall”) */
  hoverSpike: 2.8,
} as const;

// ─── God Ray Configuration ────────────────────────────────────────────────────

export const GOD_RAY = {
  /** Outer cone geometry */
  outerRadius: 4.5,
  outerHeight: 14,
  outerOpacity: 0.04,
  /** Inner cone geometry */
  innerRadius: 1.5,
  innerHeight: 14,
  innerOpacity: 0.07,
  /** Breathing pulse at 0.5 Hz — synced with SIGNATURE_GLOW.frequency */
  breatheBase: 0.8,
  breatheAmplitude: 0.2,
  /** SpotLight at apex */
  spotIntensity: 60,
  spotDistance: 20,
  spotAngle: 0.4,
  spotPenumbra: 0.7,
  /** Pulse frequency in Hz */
  pulseHz: 0.5,
} as const;

// ─── Spiral Vortex Layout (Gravitational Legend Orbit) ────────────────────────
//
// Trophy frames orbit in a helix that winds around the signed ball.
// Closer to equator = tighter radius (gravitational pull).

export const SPIRAL = {
  /** Base orbital radius at equator level */
  baseRadius: 2.8,
  /** Total vertical span of the helix column */
  height: 6.0,
  /** Number of full helix revolutions */
  turns: 2.5,
  /** Rotation speed (rad/frame ≈ 0.035 at 60fps) */
  rotationSpeed: 0.035,
  /** Organic radius variation amplitude */
  radiusVariation: 0.3,
  /**
   * Stairway to Glory: career assets (2015–2017) physically ascend the Y-axis.
   * Y offset is computed as: baseY + (yearIndex / totalYears) * stairwayRise
   */
  stairwayRise: 1.5,
} as const;

// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────

export const LIGHTING = {
  environment: "sunset" as const,
  environmentIntensity: 1.2,

  /** Key — warm high-intensity SpotLight, top-right, VSM soft shadows */
  key: {
    color: "#fff8e0",
    intensity: 100,
    position: [5, 8, 4] as [number, number, number],
    angle: 0.45,
    penumbra: 0.85,
    decay: 1.5,
    distance: 30,
  },

  /** Fill — neutral PointLight, lower-left */
  fill: {
    color: "#f0f0f0",
    intensity: 3.0,
    position: [-4, -2, 6] as [number, number, number],
    distance: 18,
    decay: 2,
  },

  /** Rim — golden DirectionalLight from behind (‘Halo’ effect) */
  rim: {
    color: "#FFD700",
    intensity: 4.0,
    position: [-4, 6, -8] as [number, number, number],
  },
} as const;

// ─── Spring Physics (Floating Panels) ─────────────────────────────────────────

export const PANEL_SPRING = {
  stiffness: 280,
  damping: 18,
  mass: 1.0,
} as const;

// ─── Gallery & Layout Constants ───────────────────────────────────────────────

/** Max photos displayed in the Hall of Champions spiral */
export const GALLERY_COUNT = 32;

/** Era slider range */
export const ERA_MIN = 2000;
export const ERA_MAX = 2026;

/** LOD culling distance — beyond this, nodes are hidden */
export const LOD_CULL_RADIUS = 14;

// ─── Frame Material (Gallery Torus Rings) ─────────────────────────────────────

export const FRAME_MATERIAL = {
  color: new THREE.Color(PALETTE.gold),
  emissive: new THREE.Color(PALETTE.goldDim),
  emissiveIntensity: {
    idle: 1.0,
    hover: 1.8,
  },
  metalness: 1.0,
  roughness: 0.1,
} as const;

/** Hover “Memory Recall”: when any trophy/asset is hovered, the core signature glows brighter */
export const MEMORY_RECALL = {
  /** How fast the core reacts to hover (exponential lerp rate) */
  lerpRate: 0.005,
} as const;

// ─── Volumetric Fog ───────────────────────────────────────────────────────────

export const FOG = {
  innerParticles: { radius: 8, depth: 3, count: 400, factor: 0.8, speed: 0.15 },
  outerParticles: { radius: 16, depth: 5, count: 600, factor: 1.5, speed: 0.08 },
  mistSphere: {
    radius: 7,
    color: new THREE.Color(PALETTE.goldDim),
    opacity: 0.025,
  },
} as const;
