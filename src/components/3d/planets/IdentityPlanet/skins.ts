/**
 * IdentityPlanet — "Layered Emerald" Skin & Material Configuration
 *
 * VISUAL CONCEPT: Digital Jewelry
 * ─────────────────────────────────────────────────────────────────
 * A hyper-realistic gemstone sphere — deep emerald (#004d40) with
 * crystal refraction (ior 1.45), full clearcoat (1.0), and internal
 * warm ivory attenuation creating visible "strata" inside the shell.
 *
 * MATERIAL SCIENCE
 * ─────────────────────────────────────────────────────────────────
 * MeshPhysicalMaterial with:
 *   transmission: 0.92   → Crystal-clear with slight emerald body
 *   thickness: 1.5       → Moderate depth for layered feel
 *   ior: 1.45            → Crystal refraction (between glass & gem)
 *   clearcoat: 1.0       → Perfect mirror surface layer
 *   iridescence: 0.6     → Subtle green→teal→gold angle shift
 *   attenuationColor: #e8dcc8 (Warm Ivory)
 *   attenuationDistance: 3.0 → Long-range warm glow inside
 *
 * INTERACTIVE ATMOSPHERE (Aura)
 * ─────────────────────────────────────────────────────────────────
 *   • IDLE        → Emerald (#00c896)
 *   • EDUCATION   → Royal Ivory (#f5e6c8), warm scholarly glow
 *   • SPORTS      → Championship Gold (#ffd700), energetic flare
 *
 * SPRING PHYSICS
 * ─────────────────────────────────────────────────────────────────
 * All UI panels: stiffness 250, damping 20, mass 1.0
 * Premium weightless feel with controlled overshoot.
 *
 * MOUSE PROXIMITY PULSE
 * ─────────────────────────────────────────────────────────────────
 * Core emissiveIntensity is driven by normalized mouse-to-planet
 * distance: distant → idle (0.4), close → peak (2.5).
 */

import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────

export const PALETTE = {
  /** Deep emerald base — primary hue */
  emeraldDeep: "#004d40",
  /** Bright emerald for emissive edges and rim highlights */
  emeraldBright: "#00c896",
  /** Translucent ivory — inner strata colour */
  ivoryCore: "#f5f0e8",
  /** Warm ivory — attenuation colour inside gemstone */
  ivoryCoreGlow: "#e8dcc8",
  /** Education aura — warm scholarly gold-ivory */
  auraEducation: "#f5e6c8",
  /** Sports aura — championship gold */
  auraSports: "#ffd700",
  /** Default idle aura */
  auraIdle: "#00c896",
  /** Education helix node border — warm amber */
  educationNode: "#c8a87a",
  /** Sports helix node border — emerald mint */
  sportsNode: "#00e5a0",
  /** Deep background for UI overlays */
  overlayBg: "#05140f",
} as const;

// ─── Outer Shell — Layered Emerald (MeshPhysicalMaterial) ─────────────────────

export const SHELL_MATERIAL = {
  color: new THREE.Color(PALETTE.emeraldDeep),
  emissive: new THREE.Color(PALETTE.emeraldBright),
  emissiveIntensity: 0.2,
  metalness: 0.0,
  roughness: 0.05,

  // ── Transmission ──
  transmission: 0.92,
  thickness: 1.5,
  ior: 1.45,

  // ── Iridescence ──
  iridescence: 0.6,
  iridescenceIOR: 1.3,
  iridescenceThicknessRange: [100, 400] as [number, number],

  // ── Clearcoat ──
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,

  // ── Internal Attenuation (Warm Ivory depth tint) ──
  attenuationColor: new THREE.Color(PALETTE.ivoryCoreGlow),
  attenuationDistance: 3.0,

  envMapIntensity: 1.5,
  transparent: true,
} as const;

// ─── Inner Core — mouse-proximity reactive ────────────────────────────────────

export const CORE_MATERIAL = {
  color: new THREE.Color(PALETTE.ivoryCoreGlow),
  emissive: new THREE.Color(PALETTE.ivoryCore),
  emissiveIntensity: 0.8,
  roughness: 0.1,
  metalness: 0.35,
  transparent: true,
  opacity: 0.92,
} as const;

/** Mouse proximity → emissive intensity mapping */
export const PROXIMITY_PULSE = {
  /** Emissive when mouse is far away */
  idle: 0.4,
  /** Emissive when mouse is directly over the planet */
  peak: 2.5,
  /** Normalized distance at which peak begins to take effect (in world units) */
  influenceRadius: 5.0,
} as const;

// ─── Aura System (Interactive Atmosphere) ─────────────────────────────────────

export const AURA = {
  idle: new THREE.Color(PALETTE.auraIdle),
  education: new THREE.Color(PALETTE.auraEducation),
  sports: new THREE.Color(PALETTE.auraSports),
} as const;

export type AuraMode = "idle" | "education" | "sports";

/** Exponential lerp speed for aura colour transitions */
export const AURA_LERP_RATE = 0.003;

/** Aura point-light intensity per mode */
export const AURA_INTENSITY = {
  idle: 3.0,
  education: 5.0,
  sports: 6.0,
} as const;

/** Aura bloom/glow radius per mode */
export const AURA_DISTANCE = {
  idle: 8,
  education: 10,
  sports: 12,
} as const;

// ─── Spring Physics ───────────────────────────────────────────────────────────

export const PANEL_SPRING = {
  stiffness: 250,
  damping: 20,
  mass: 1.0,
} as const;

export const ICON_SPRING = {
  stiffness: 300,
  damping: 16,
  mass: 0.6,
} as const;

export const ICON_HOVER_SCALE = 1.3;

// ─── Double Helix Layout ──────────────────────────────────────────────────────

export const HELIX = {
  /** Radius of the helix orbit */
  radius: 2.8,
  /** Total vertical span of the helix */
  height: 4.0,
  /** Number of full turns */
  turns: 1.5,
  /** Base rotation speed (rad/s) */
  rotationSpeed: 0.04,
  /** Nodes on each strand */
  nodesPerStrand: 24,
} as const;

// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────

export const LIGHTING = {
  environment: "night" as const,
  environmentIntensity: 1.3,

  /** Key — intense white SpotLight, top-right, VSM soft shadows */
  key: {
    color: "#ffffff",
    intensity: 100,
    position: [5, 8, 4] as [number, number, number],
    angle: 0.45,
    penumbra: 0.85,
    decay: 1.5,
    distance: 30,
  },

  /** Fill — soft neutral PointLight, lower-left */
  fill: {
    color: "#f0f0f0",
    intensity: 3.0,
    position: [-4, -2, 6] as [number, number, number],
    distance: 18,
    decay: 2,
  },

  /** Rim — emerald-tinted DirectionalLight from behind */
  rim: {
    color: PALETTE.emeraldBright,
    intensity: 4.0,
    position: [-4, 6, -8] as [number, number, number],
  },
} as const;

// ─── Sparkle Dust System ──────────────────────────────────────────────────────

export const SPARKLE = {
  count: 60,
  scale: 0.4,
  size: 2,
  speed: 0.15,
  opacity: 0.7,
  color: PALETTE.ivoryCoreGlow,
} as const;

// ─── LOD Constants ────────────────────────────────────────────────────────────

export const LOD_CULL_RADIUS = 12;
