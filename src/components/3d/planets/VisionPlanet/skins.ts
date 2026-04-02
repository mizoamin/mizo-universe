/**
 * VisionPlanet — "Neural Sapphire" Skin & Material Configuration
 *
 * VISUAL CONCEPT: Holographic AI Brain
 * ─────────────────────────────────────────────────────────────────
 * A translucent cyan-sapphire sphere with internal holographic
 * refraction. The shell represents the "neural membrane" of AI
 * consciousness, while the inner core pulses with data-driven
 * activity from the Sanity CMS blog engine.
 *
 * MATERIAL SCIENCE
 * ─────────────────────────────────────────────────────────────────
 * MeshPhysicalMaterial with:
 *   transmission: 0.88   → Glass-like transparency
 *   thickness: 2.0       → Deep light absorption for holographic feel
 *   ior: 1.52            → Glass-grade refraction
 *   clearcoat: 0.8       → Polished neural membrane
 *   iridescence: 0.5     → Cyan→violet angle shift
 *   attenuationColor: #001a33 (Deep neural blue)
 *   attenuationDistance: 4.0 → Extended inner glow
 *
 * DNA HELIX INTEGRATION
 * ─────────────────────────────────────────────────────────────────
 * 11 segments (1 per master category), each driven by persona
 * visual signatures via InstancedMesh. 60fps mobile target.
 *
 * SPRING PHYSICS
 * ─────────────────────────────────────────────────────────────────
 * Panel:  stiffness 220, damping 20, mass 1.0 — smooth AI feel
 * Helix:  stiffness 260, damping 18, mass 0.8 — snappy data response
 * Node:   stiffness 300, damping 14, mass 0.6 — crisp hover feedback
 */

import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────

export const PALETTE = {
  /** Deep neural navy — primary base */
  neuralDeep: "#0a0e1a",
  /** Bright vision cyan — accent and emissive */
  visionCyan: "#00ffff",
  /** Signal cyan for secondary highlights */
  signalCyan: "#00d4ff",
  /** Core pulse blue */
  coreBlue: "#0066ff",
  /** Inner holographic tint */
  holoTint: "#001a33",
  /** Warm data gold for active highlights */
  dataGold: "#ffd700",
  /** Helix backbone color */
  helixBackbone: "#003366",
  /** Helix bridge (rung) color */
  helixBridge: "#004488",
  /** Default segment glow */
  segmentDefault: "#00ccff",
  /** Overlay background */
  overlayBg: "#050a14",
  /** Text primary */
  textPrimary: "#e0f0ff",
  /** Text muted */
  textMuted: "#668899",
} as const;

// ─── Outer Shell — Neural Sapphire (MeshPhysicalMaterial) ─────────────────────

export const SHELL_MATERIAL = {
  color: new THREE.Color(PALETTE.neuralDeep),
  emissive: new THREE.Color(PALETTE.visionCyan),
  emissiveIntensity: 0.15,
  metalness: 0.05,
  roughness: 0.08,

  // ── Transmission ──
  transmission: 0.88,
  thickness: 2.0,
  ior: 1.52,

  // ── Iridescence ──
  iridescence: 0.5,
  iridescenceIOR: 1.35,
  iridescenceThicknessRange: [150, 450] as [number, number],

  // ── Clearcoat ──
  clearcoat: 0.8,
  clearcoatRoughness: 0.1,

  // ── Internal Attenuation ──
  attenuationColor: new THREE.Color(PALETTE.holoTint),
  attenuationDistance: 4.0,

  envMapIntensity: 1.6,
  transparent: true,
} as const;

// ─── Inner Core — Data-reactive pulse ─────────────────────────────────────────

export const CORE_MATERIAL = {
  color: new THREE.Color(PALETTE.holoTint),
  emissive: new THREE.Color(PALETTE.visionCyan),
  emissiveIntensity: 1.0,
  roughness: 0.05,
  metalness: 0.1,
  transparent: true,
  opacity: 0.85,
} as const;

/** Core proximity pulse — reacts to camera distance */
export const PROXIMITY_PULSE = {
  idle: 0.5,
  peak: 3.0,
  influenceRadius: 6.0,
} as const;

// ─── DNA Helix Configuration ──────────────────────────────────────────────────

export const DNA_HELIX = {
  /** Helix radius */
  radius: 2.2,
  /** Total vertical span */
  height: 5.0,
  /** Number of full turns */
  turns: 2.0,
  /** Base rotation speed (rad/s) */
  rotationSpeed: 0.03,
  /** Number of category segments */
  segmentCount: 11,
  /** Nodes per strand (total across all segments) */
  nodesPerStrand: 66,
  /** Bridge (rung) count between strands */
  bridgeCount: 33,
  /** Node particle size */
  nodeSize: 0.06,
  /** Bridge tube radius */
  bridgeRadius: 0.015,
  /** Active segment glow multiplier */
  activeGlowMultiplier: 3.0,
  /** Idle segment glow base */
  idleGlowBase: 0.3,
} as const;

// ─── Aura System ──────────────────────────────────────────────────────────────

export const AURA = {
  idle: new THREE.Color(PALETTE.visionCyan),
  active: new THREE.Color(PALETTE.dataGold),
  data: new THREE.Color(PALETTE.coreBlue),
} as const;

export type AuraMode = "idle" | "active" | "data";

export const AURA_LERP_RATE = 0.004;

export const AURA_INTENSITY = {
  idle: 3.0,
  active: 6.0,
  data: 4.5,
} as const;

export const AURA_DISTANCE = {
  idle: 8,
  active: 12,
  data: 10,
} as const;

// ─── Spring Physics ───────────────────────────────────────────────────────────

export const PANEL_SPRING = {
  stiffness: 220,
  damping: 20,
  mass: 1.0,
} as const;

export const HELIX_SPRING = {
  stiffness: 260,
  damping: 18,
  mass: 0.8,
} as const;

export const NODE_SPRING = {
  stiffness: 300,
  damping: 14,
  mass: 0.6,
} as const;

export const NODE_HOVER_SCALE = 1.4;

// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────

export const LIGHTING = {
  environment: "city" as const,
  environmentIntensity: 1.1,

  /** Key — intense white SpotLight, top-right */
  key: {
    color: "#e0f0ff",
    intensity: 80,
    position: [5, 8, 4] as [number, number, number],
    angle: 0.5,
    penumbra: 0.8,
    decay: 1.5,
    distance: 28,
  },

  /** Fill — soft cyan PointLight, lower-left */
  fill: {
    color: "#00d4ff",
    intensity: 4.0,
    position: [-4, -2, 6] as [number, number, number],
    distance: 18,
    decay: 2,
  },

  /** Rim — cyan-tinted DirectionalLight from behind */
  rim: {
    color: PALETTE.visionCyan,
    intensity: 4.5,
    position: [-4, 6, -8] as [number, number, number],
  },
} as const;

// ─── LOD Constants ────────────────────────────────────────────────────────────

export const LOD_CULL_RADIUS = 14;
