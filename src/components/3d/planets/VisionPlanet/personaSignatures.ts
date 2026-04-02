/**
 * VisionPlanet — AI Persona Visual Signatures
 *
 * VISUAL CONCEPT: Neural Identity Spectrum
 * ─────────────────────────────────────────────────────────────────
 * Each AI Persona maps to a unique "Visual Signature" comprising:
 *   - signatureColor  → THREE.Color for shader glow tint
 *   - pulseSpeed      → Hz frequency for emissive oscillation
 *   - pulseAmplitude  → Intensity range of the glow cycle
 *   - pulseShape      → Waveform type (sin, sawtooth, heartbeat, etc.)
 *
 * USAGE IN SHADER:
 * ─────────────────────────────────────────────────────────────────
 * The DNAHelix ShaderMaterial reads `getPersonaSignature(slug)` to
 * drive per-segment glow. The `pulseFunction(t)` returns a 0→1
 * normalized value per frame — zero allocations, pure math.
 *
 * PERFORMANCE:
 * ─────────────────────────────────────────────────────────────────
 * - All THREE.Color instances are created once at module load.
 * - Lookup is O(1) via Map.
 * - No allocations inside useFrame / shader callbacks.
 */

import * as THREE from "three";

// ─── Pulse Waveform Types ─────────────────────────────────────────────────────

export type PulseShape =
  | "high-frequency"
  | "slow-ethereal"
  | "staccato"
  | "rhythmic-wave"
  | "deep-breathing"
  | "aurora"
  | "heartbeat"
  | "electric"
  | "orbital"
  | "quantum";

// ─── Visual Signature Type ────────────────────────────────────────────────────

export interface PersonaVisualSignature {
  name: string;
  signatureColor: THREE.Color;
  /** Hex string for CSS / UI usage */
  hex: string;
  /** Oscillation frequency in Hz */
  pulseSpeed: number;
  /** Intensity swing (0–1 normalized added to base) */
  pulseAmplitude: number;
  /** Waveform shape identifier */
  pulseShape: PulseShape;
}

// ─── Pulse Functions (zero-allocation, pure math) ─────────────────────────────

/**
 * Returns a 0→1 pulsation value for the given waveform shape at time t.
 * All branches are branchless-friendly for GPU-side port.
 */
export function pulseFunction(shape: PulseShape, t: number, speed: number): number {
  const phase = t * speed * Math.PI * 2;

  switch (shape) {
    case "high-frequency":
      // Rapid sine pulse
      return Math.sin(phase) * 0.5 + 0.5;

    case "slow-ethereal":
      // Very slow sine with long sustain
      return Math.sin(phase * 0.3) * 0.5 + 0.5;

    case "staccato":
      // Sharp on/off — smoothstep approximation
      return Math.pow(Math.sin(phase), 8);

    case "rhythmic-wave":
      // Layered sine for organic feel
      return (Math.sin(phase) * 0.4 + Math.sin(phase * 1.7) * 0.3 + 0.5) * 0.77;

    case "deep-breathing":
      // Slow inhale/exhale — squared sine for soft attack
      return Math.pow(Math.sin(phase * 0.25), 2);

    case "aurora":
      // Multi-frequency shimmer
      return (
        (Math.sin(phase * 0.5) * 0.3 +
          Math.sin(phase * 1.3) * 0.2 +
          Math.sin(phase * 2.7) * 0.15 +
          0.65) * 0.6
      );

    case "heartbeat": {
      // Double-bump cardiac rhythm
      const beat = (phase % (Math.PI * 2)) / (Math.PI * 2);
      const bump1 = Math.exp(-((beat - 0.15) * (beat - 0.15)) * 200);
      const bump2 = Math.exp(-((beat - 0.3) * (beat - 0.3)) * 300) * 0.6;
      return Math.min(bump1 + bump2, 1.0);
    }

    case "electric":
      // Chaotic high-frequency with noise-like feel
      return (
        (Math.sin(phase * 3) * 0.3 +
          Math.sin(phase * 7.1) * 0.2 +
          Math.sin(phase * 13.3) * 0.1 +
          0.6) * 0.7
      );

    case "orbital":
      // Smooth sweep — single slow rotation
      return Math.sin(phase * 0.15) * 0.5 + 0.5;

    case "quantum":
      // Random-feeling flicker via irrational frequency mix
      return Math.abs(
        Math.sin(phase * 2.236) * 0.4 +
          Math.sin(phase * 3.606) * 0.3 +
          Math.cos(phase * 5.385) * 0.2
      );

    default:
      return Math.sin(phase) * 0.5 + 0.5;
  }
}

// ─── The 15 Persona Signatures ────────────────────────────────────────────────

const SIGNATURES: PersonaVisualSignature[] = [
  {
    name: "Tony Robbins",
    hex: "#FF8C00",
    signatureColor: new THREE.Color("#FF8C00"),
    pulseSpeed: 2.4,
    pulseAmplitude: 0.9,
    pulseShape: "high-frequency",
  },
  {
    name: "Mustafa Mahmoud",
    hex: "#4B0082",
    signatureColor: new THREE.Color("#4B0082"),
    pulseSpeed: 0.4,
    pulseAmplitude: 0.7,
    pulseShape: "slow-ethereal",
  },
  {
    name: "Elon Musk",
    hex: "#00BFFF",
    signatureColor: new THREE.Color("#00BFFF"),
    pulseSpeed: 1.8,
    pulseAmplitude: 0.85,
    pulseShape: "electric",
  },
  {
    name: "Rumi",
    hex: "#DA70D6",
    signatureColor: new THREE.Color("#DA70D6"),
    pulseSpeed: 0.6,
    pulseAmplitude: 0.75,
    pulseShape: "aurora",
  },
  {
    name: "Steve Jobs",
    hex: "#C0C0C0",
    signatureColor: new THREE.Color("#C0C0C0"),
    pulseSpeed: 1.0,
    pulseAmplitude: 0.65,
    pulseShape: "rhythmic-wave",
  },
  {
    name: "Marcus Aurelius",
    hex: "#B8860B",
    signatureColor: new THREE.Color("#B8860B"),
    pulseSpeed: 0.3,
    pulseAmplitude: 0.6,
    pulseShape: "deep-breathing",
  },
  {
    name: "Kobe Bryant",
    hex: "#FFD700",
    signatureColor: new THREE.Color("#FFD700"),
    pulseSpeed: 1.4,
    pulseAmplitude: 0.95,
    pulseShape: "heartbeat",
  },
  {
    name: "Naval Ravikant",
    hex: "#20B2AA",
    signatureColor: new THREE.Color("#20B2AA"),
    pulseSpeed: 1.6,
    pulseAmplitude: 0.7,
    pulseShape: "quantum",
  },
  {
    name: "Ibn Khaldun",
    hex: "#CD853F",
    signatureColor: new THREE.Color("#CD853F"),
    pulseSpeed: 0.5,
    pulseAmplitude: 0.6,
    pulseShape: "orbital",
  },
  {
    name: "Jordan Peterson",
    hex: "#DC143C",
    signatureColor: new THREE.Color("#DC143C"),
    pulseSpeed: 2.0,
    pulseAmplitude: 0.85,
    pulseShape: "staccato",
  },
  {
    name: "Leonardo da Vinci",
    hex: "#F0E68C",
    signatureColor: new THREE.Color("#F0E68C"),
    pulseSpeed: 0.7,
    pulseAmplitude: 0.7,
    pulseShape: "aurora",
  },
  {
    name: "Gary Vaynerchuk",
    hex: "#FF4500",
    signatureColor: new THREE.Color("#FF4500"),
    pulseSpeed: 2.6,
    pulseAmplitude: 0.95,
    pulseShape: "high-frequency",
  },
  {
    name: "Nikola Tesla",
    hex: "#00CED1",
    signatureColor: new THREE.Color("#00CED1"),
    pulseSpeed: 2.2,
    pulseAmplitude: 0.9,
    pulseShape: "electric",
  },
  {
    name: "Oprah Winfrey",
    hex: "#FF69B4",
    signatureColor: new THREE.Color("#FF69B4"),
    pulseSpeed: 0.9,
    pulseAmplitude: 0.7,
    pulseShape: "rhythmic-wave",
  },
  {
    name: "Al-Ghazali",
    hex: "#228B22",
    signatureColor: new THREE.Color("#228B22"),
    pulseSpeed: 0.35,
    pulseAmplitude: 0.6,
    pulseShape: "deep-breathing",
  },
];

// ─── O(1) Lookup Map ──────────────────────────────────────────────────────────

const _signatureMap = new Map<string, PersonaVisualSignature>();
SIGNATURES.forEach((s) => {
  _signatureMap.set(s.name.toLowerCase(), s);
  // Also index by slug form
  _signatureMap.set(
    s.name.toLowerCase().replace(/\s+/g, "-"),
    s
  );
});

/**
 * Retrieve the visual signature for a persona by name or slug.
 * Returns a default cyan signature if not found.
 */
export function getPersonaSignature(nameOrSlug: string): PersonaVisualSignature {
  return (
    _signatureMap.get(nameOrSlug.toLowerCase()) ?? DEFAULT_SIGNATURE
  );
}

/** Default fallback — Vision cyan */
export const DEFAULT_SIGNATURE: PersonaVisualSignature = {
  name: "Default",
  hex: "#00FFFF",
  signatureColor: new THREE.Color("#00FFFF"),
  pulseSpeed: 1.0,
  pulseAmplitude: 0.5,
  pulseShape: "rhythmic-wave",
};

/** Full list export for iteration (e.g., debug panels) */
export const ALL_SIGNATURES = SIGNATURES;
