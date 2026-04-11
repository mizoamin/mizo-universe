/**
 * mathUtils.ts — Shared Math Utilities for Mizo Universe
 *
 * Frame-rate-independent helpers, spring physics primitives, angle utilities,
 * and geometry helpers used across all 3D render loops and UI animations.
 *
 * All functions are pure and allocation-free unless noted.
 */

// ─── Basic Scalar Utilities ───────────────────────────────────────────────────

/** Clamp a value between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/** Linear interpolation between a and b by t ∈ [0, 1]. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Inverse linear interpolation — returns t for which lerp(a, b, t) === value. */
export function inverseLerp(a: number, b: number, value: number): number {
  if (a === b) return 0;
  return clamp((value - a) / (b - a), 0, 1);
}

/** Remap value from [inMin, inMax] to [outMin, outMax]. */
export function remap(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return lerp(outMin, outMax, inverseLerp(inMin, inMax, value));
}

/** Smooth-step (cubic Hermite) ease for t ∈ [0, 1]. */
export function smoothStep(t: number): number {
  const c = clamp(t, 0, 1);
  return c * c * (3 - 2 * c);
}

/** Smooth-er step (quintic) for t ∈ [0, 1]. */
export function smootherStep(t: number): number {
  const c = clamp(t, 0, 1);
  return c * c * c * (c * (c * 6 - 15) + 10);
}

// ─── Frame-Rate-Independent Lerp ─────────────────────────────────────────────

/**
 * Frame-rate-independent exponential lerp factor.
 *
 * Usage: `value = lerp(value, target, damp(lambda, delta))`
 *
 * @param lambda  Convergence speed — higher = faster. Use 1–20 range.
 * @param delta   Frame delta in seconds (from R3F useFrame).
 * @returns       Alpha to pass into lerp().
 */
export function damp(lambda: number, delta: number): number {
  return 1 - Math.exp(-lambda * delta);
}

/**
 * Frame-rate-independent scalar lerp (all-in-one).
 *
 * @param current  Current value.
 * @param target   Target value.
 * @param lambda   Convergence speed (1–20 typical).
 * @param delta    Frame delta seconds.
 */
export function dampLerp(
  current: number,
  target: number,
  lambda: number,
  delta: number,
): number {
  return lerp(current, target, damp(lambda, delta));
}

// ─── Spring Physics ───────────────────────────────────────────────────────────

export interface SpringState {
  value: number;
  velocity: number;
}

/**
 * Advance a critically-damped spring one frame.
 *
 * @param state      Mutable spring state (value + velocity).
 * @param target     Target value to spring toward.
 * @param stiffness  Spring stiffness (e.g. 200).
 * @param damping    Damping coefficient (e.g. 20).
 * @param mass       Mass (e.g. 1.0).
 * @param delta      Frame delta in seconds.
 */
export function tickSpring(
  state: SpringState,
  target: number,
  stiffness: number,
  damping: number,
  mass: number,
  delta: number,
): void {
  const dt = Math.min(delta, 0.033); // cap at ~30fps equivalent
  const springForce = (target - state.value) * stiffness;
  const dampingForce = -damping * state.velocity;
  const acceleration = (springForce + dampingForce) / mass;
  state.velocity += acceleration * dt;
  state.value += state.velocity * dt;
}

// ─── Angle Utils ─────────────────────────────────────────────────────────────

/** Convert degrees to radians. */
export function degToRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/** Convert radians to degrees. */
export function radToDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}

/**
 * Shortest angular delta between two angles in radians.
 * Returns a value in [-π, π].
 */
export function angleDelta(from: number, to: number): number {
  let delta = ((to - from) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  if (delta > Math.PI) delta -= Math.PI * 2;
  return delta;
}

/** Wrap an angle to [-π, π]. */
export function wrapAngle(angle: number): number {
  return ((angle + Math.PI) % (Math.PI * 2)) - Math.PI;
}

// ─── Geometry Utils ──────────────────────────────────────────────────────────

/**
 * Convert lat/lng in degrees to a 3D unit sphere point [x, y, z].
 * lat=0 lng=0 → equator facing forward (+Z).
 */
export function latLngToXYZ(
  lat: number,
  lng: number,
  radius = 1,
): [number, number, number] {
  const phi = degToRad(90 - lat);
  const theta = degToRad(lng + 180);
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

/**
 * Fibonacci sphere — evenly distribute n points on a unit sphere.
 * Returns array of [x, y, z] tuples.
 */
export function fibonacciSphere(n: number): Array<[number, number, number]> {
  const points: Array<[number, number, number]> = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return points;
}

/**
 * Angular distance (great-circle) in degrees between two lat/lng points.
 * Uses haversine formula.
 */
export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371; // unused here — returns degrees not km
  const dLat = degToRad(lat2 - lat1);
  const dLng = degToRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLng / 2) ** 2;
  void R;
  return radToDeg(2 * Math.asin(Math.sqrt(a)));
}

// ─── Random / Noise (Deterministic) ──────────────────────────────────────────

/**
 * Seeded pseudo-random float in [0, 1].
 * Uses a simple mulberry32-based PRNG — deterministic from seed.
 */
export function seededRandom(seed: number): number {
  let s = seed | 0;
  s = Math.imul(s ^ (s >>> 15), s | 1);
  s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
  return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
}

/**
 * Seeded random in [min, max].
 */
export function seededRandomRange(seed: number, min: number, max: number): number {
  return min + seededRandom(seed) * (max - min);
}

// ─── Color Utils ─────────────────────────────────────────────────────────────

/**
 * Linear blend between two hex color strings (CSS-style).
 * Returns a hex string.
 * NOTE: For Three.js use, prefer Color.lerp() on pre-allocated instances.
 */
export function lerpHex(colorA: string, colorB: string, t: number): string {
  const parseHex = (h: string) => {
    const n = parseInt(h.replace(/^#/, ""), 16);
    return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
  };
  const [ar, ag, ab] = parseHex(colorA);
  const [br, bg, bb] = parseHex(colorB);
  const r = Math.round(lerp(ar, br, t));
  const g = Math.round(lerp(ag, bg, t));
  const b = Math.round(lerp(ab, bb, t));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
