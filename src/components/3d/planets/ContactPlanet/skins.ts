/**
 * ContactPlanet — Skin & Material Configuration
 *
 * PBR: MeshPhysicalMaterial transmission glass with iridescence.
 * Inner Neural Core: Emissive sphere with hover-reactive intensity.
 * Palette: Neural Navy / Signal Cyan / Burst Mint
 */

import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────

export const PALETTE = {
  neuralNavy: "#0a1628",
  signalCyan: "#00d4ff",
  burstMint: "#00ffcc",
  hoverWhite: "#e0f7ff",
  deepBlack: "#020810",
  fiberGlow: "#00a8cc",
} as const;

// ─── Outer Shell — Frosted-glass satellite ────────────────────────────────────

export const SHELL_MATERIAL = {
  color: new THREE.Color(PALETTE.neuralNavy),
  emissive: new THREE.Color(PALETTE.signalCyan),
  emissiveIntensity: 0.4,
  metalness: 0.0,
  roughness: 0.12,
  transmission: 0.85,
  thickness: 2.0,
  ior: 1.52,
  iridescence: 0.45,
  iridescenceIOR: 1.3,
  iridescenceThicknessRange: [200, 500] as [number, number],
  clearcoat: 0.6,
  clearcoatRoughness: 0.15,
  attenuationColor: new THREE.Color(PALETTE.signalCyan),
  attenuationDistance: 2.5,
  envMapIntensity: 1.8,
  transparent: true,
} as const;

// ─── Inner Neural Core ────────────────────────────────────────────────────────

export const CORE_EMISSIVE_IDLE = 1.2;
export const CORE_EMISSIVE_HOVER = 2.4;

export const CORE_MATERIAL = {
  color: new THREE.Color(PALETTE.signalCyan),
  emissive: new THREE.Color(PALETTE.burstMint),
  emissiveIntensity: CORE_EMISSIVE_IDLE,
  roughness: 0.15,
  metalness: 0.2,
  transparent: true,
  opacity: 0.9,
} as const;

// ─── Spring Physics ───────────────────────────────────────────────────────────

export const SPRING = {
  stiffness: 300,
  damping: 15,
  mass: 0.8,
} as const;

/** Target icon scale on hover */
export const ICON_HOVER_SCALE = 1.35;

// ─── Orbit Layout ─────────────────────────────────────────────────────────────

export const ORBIT = {
  radiusX: 2.6,
  radiusZ: 2.2,
  rotationSpeed: 0.015,
} as const;

// ─── Data Burst (form submission effect) ──────────────────────────────────────

export const BURST = {
  particleCount: 200,
  /** Phase durations in seconds */
  chargeDuration: 0.4,
  burstDuration: 0.4,
  settleDuration: 1.0,
} as const;
