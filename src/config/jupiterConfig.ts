/**
 * Jupiter Configuration — Immersive hub parameters
 *
 * All physical properties derive from real Jupiter data, scaled for spatial computing experience.
 * Tuned for Vision Pro aesthetic: depth, immersion, subtle animation.
 */

export const JUPITER_CONFIG = {
  // ─── Geometry ─────────────────────────────────────────────────────────
  /** Base radius in spatial units (1 unit ≈ Earth diameter) */
  radius: 25,

  /** Sphere tessellation (higher = smoother, more expensive) */
  widthSegments: 128,
  heightSegments: 96,

  // ─── Atmosphere & Bands ────────────────────────────────────────────────
  /** Atmospheric halo radius (extends beyond surface) */
  atmosphereRadius: 27,

  /** Great Red Spot prominent on southern hemisphere */
  greatRedSpotLatitude: -22,
  greatRedSpotLongitude: 200,

  /** Polar flattening (Jupiter is ~9% flattened) */
  oblateness: 0.06,

  // ─── Colors ───────────────────────────────────────────────────────────
  /** Primary band color (warm orange-brown) */
  bandColorPrimary: "#c88b3a",

  /** Secondary band (darker) */
  bandColorSecondary: "#a67035",

  /** Equatorial zone (light) */
  zoneColorLight: "#f4d9a0",

  /** Polar regions (slight blue tint) */
  polarColor: "#e8d4b0",

  /** Great Red Spot (hue of ancient storm) */
  spotColor: "#d9644a",

  // ─── Animation ────────────────────────────────────────────────────────
  /** Rotation speed (rad/sec). Real Jupiter: one rotation every 10 hours */
  rotationSpeed: 0.00035,

  /** Wind band animation speed (affects cloud patterns) */
  windSpeed: 0.00015,

  /** Great Red Spot spot subtle wobble */
  spotWobbleAmount: 0.02,
  spotWobbleFrequency: 0.001,

  // ─── Lighting ─────────────────────────────────────────────────────────
  /** Ambient light intensity for subtle surface visibility */
  ambientIntensity: 0.4,

  /** Directional light (sun) intensity */
  sunIntensity: 1.2,

  /** Self-illumination glow (emissive property) */
  selfIllumination: 0.15,

  // ─── Post-Processing ──────────────────────────────────────────────────
  /** Bloom intensity around Jupiter (halo glow) */
  bloomIntensity: 0.8,
  bloomThreshold: 0.7,

  /** Atmospheric fog thickness (subtle depth cueing) */
  fogDensity: 0.0005,

  // ─── Camera/Experience ────────────────────────────────────────────────
  /** Default viewing distance (far enough to see whole planet + aura) */
  defaultCameraDistance: 70,

  /** Smooth auto-rotation when idle (deg/sec) */
  idleRotationSpeed: 0.15,

  /** Enable auto-rotation on initial load */
  enableIdleRotation: true,
};

/**
 * Jupiter Moon System — Io, Europa, Ganymede, Callisto
 *
 * Real orbital data scaled to spatial computing scale (1 spatial unit = 1 million km)
 */
export const MOON_CONFIG = [
  {
    id: "io",
    name: "Io",
    displayName: "Career & Journey",
    description: "Basketball, achievements, personal odyssey",
    accentColor: "#ffb347",

    // Orbital mechanics (semi-major axis in spatial units)
    orbitalRadius: 42,
    orbitalPeriod: 42.45, // hours → scaled to seconds for interactive speed
    orbitalInclination: 0.04,

    // Geometry
    radius: 1.8,
    color: "#f4d9a0",
    topologyType: "volcanic", // affects texture

    // Experience
    entryDescription: "The basketball journey. From court to cosmos.",
    contentSlot: "career-stats",
  },
  {
    id: "europa",
    name: "Europa",
    displayName: "Heritage & Legacy",
    description: "Family, roots, cultural identity",
    accentColor: "#7fdfff",

    orbitalRadius: 67,
    orbitalPeriod: 85.19,
    orbitalInclination: 0.47,

    radius: 1.55,
    color: "#e8d4b0",
    topologyType: "icy",

    entryDescription: "Where it all began. Heritage, family, roots.",
    contentSlot: "legacy-section",
  },
  {
    id: "ganymede",
    name: "Ganymede",
    displayName: "Vision & Projects",
    description: "Tech, AI, innovation, portfolio",
    accentColor: "#00fff7",

    orbitalRadius: 107,
    orbitalPeriod: 171.71,
    orbitalInclination: 0.21,

    radius: 2.6,
    color: "#a67035",
    topologyType: "rocky-textured",

    entryDescription: "Projects, vision, and the future being built.",
    contentSlot: "vision-projects",
  },
  {
    id: "callisto",
    name: "Callisto",
    displayName: "Media & Experience",
    description: "Photography, video, world experiences",
    accentColor: "#7d3cff",

    orbitalRadius: 185,
    orbitalPeriod: 400.48,
    orbitalInclination: 0.25,

    radius: 2.4,
    color: "#c0c0c0",
    topologyType: "cratered",

    entryDescription: "Visual stories, places, and experiences.",
    contentSlot: "media-gallery",
  },
];

/**
 * Camera Transition Presets — Cinematic zooms between system views
 */
export const CAMERA_PRESETS = {
  // Orbit view: see all 4 moons around Jupiter
  jupiterOrbit: {
    position: { x: 0, y: 80, z: 200 },
    fov: 35,
    duration: 1.8,
    easing: [0.22, 1, 0.36, 1], // ease-out-cubic
  },

  // Moon approach: zoom into specific moon's orbital zone
  moonApproach: (moonId: string) => {
    const moon = MOON_CONFIG.find((m) => m.id === moonId);
    if (!moon) return { position: { x: 0, y: 0, z: 50 }, fov: 45, duration: 1.5, easing: [0.22, 1, 0.36, 1] };

    const angle = Math.random() * Math.PI * 2;
    return {
      position: {
        x: Math.cos(angle) * moon.orbitalRadius * 2.5,
        y: 30,
        z: Math.sin(angle) * moon.orbitalRadius * 2.5,
      },
      fov: 50,
      duration: 1.5,
      easing: [0.22, 1, 0.36, 1],
    };
  },

  // Panel view: close up on moon with floating UI
  panelView: (moonId: string) => {
    const moon = MOON_CONFIG.find((m) => m.id === moonId);
    if (!moon) return { position: { x: 0, y: 0, z: 50 }, fov: 50, duration: 1.2, easing: [0.22, 1, 0.36, 1] };

    return {
      position: {
        x: moon.radius * 4,
        y: moon.radius * 2,
        z: moon.radius * 6,
      },
      fov: 55,
      duration: 1.2,
      easing: [0.22, 1, 0.36, 1],
    };
  },
};
