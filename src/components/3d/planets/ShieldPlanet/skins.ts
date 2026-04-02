/**
 * ShieldPlanet — Skins Configuration
 * Theme: Security Shield · Defense Mechanisms · Legal Assets · System Integrity
 * Visual: Tungsten-carbon core wrapped in rotating electromagnetic shield rings
 */

export const SHIELD_SKIN = {
  // Core sphere — dark carbon-titanium alloy
  coreColor: "#0d1117",
  coreEmissive: "#1e3a5f",
  coreEmissiveIntensity: 0.7,
  metalness: 0.92,
  roughness: 0.18,
  clearcoat: 1.0,
  clearcoatRoughness: 0.06,
  envMapIntensity: 1.6,

  // Equatorial shield ring — electric steel blue
  ringEquatorialColor: "#2a6698",
  ringEquatorialOpacity: 0.55,
  ringEquatorialTubeRadius: 0.045,
  ringEquatorialRadius: 1.38,

  // Tilted inner ring — dim cyan
  ringInnerColor: "#1a4a6a",
  ringInnerOpacity: 0.38,
  ringInnerTubeRadius: 0.028,
  ringInnerRadius: 1.22,

  // Outer sentinel ring — faint steel
  ringOuterColor: "#0f2a40",
  ringOuterOpacity: 0.22,
  ringOuterTubeRadius: 0.018,
  ringOuterRadius: 1.58,

  // Force-field pulse aura
  auraColor: "#1a4a88",
  auraOpacity: 0.08,

  // Animation speeds
  ringEquatorialSpeed: 0.28,
  ringInnerSpeed: -0.45,
  ringOuterSpeed: 0.18,
  pulseSpeed: 1.1,
  coreRotateSpeed: 0.12,
};
