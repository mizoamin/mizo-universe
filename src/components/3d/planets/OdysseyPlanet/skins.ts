/**
 * OdysseyPlanet — "Photorealistic Odyssey" Skin & Material Configuration
 *
 * VISUAL CONCEPT — 8K NASA Earth × Super Mario Odyssey Stylization
 * ─────────────────────────────────────────────────────────────────
 * A photorealistic 8K Earth globe with high-contrast colors, combining
 * NASA-level PBR textures (Diffuse, Normal, Roughness, Clouds,
 * Night Lights) with stylized Mario Odyssey vibes — bright 3D
 * Travel Pins that pop out, bouncy spring physics, and a soft
 * Rayleigh-scattering atmospheric glow.
 *
 * 8K WEBP TEXTURE PIPELINE
 * ─────────────────────────────────────────────────────────────────
 *   All textures loaded via THREE.TextureLoader with:
 *     texture.anisotropy = gl.capabilities.getMaxAnisotropy()
 *   → Ensures 8K detail stays sharp at oblique viewing angles.
 *   → Proper dispose() on component unmount prevents VRAM leaks.
 *
 * MATERIAL SCIENCE — Earth Surface (MeshPhysicalMaterial)
 * ─────────────────────────────────────────────────────────────────
 *   metalness: 0.0         → Non-metallic (rock/water/vegetation)
 *   roughness: 0.6         → Mixed terrain roughness (overridden by map)
 *   clearcoat: 0.35        → Subtle ocean gloss + ice cap sheen
 *   clearcoatRoughness: 0.3 → Slightly rough clearcoat
 *   envMapIntensity: 1.4   → Punchy HDRI reflections on oceans
 *   normalScale: [1.5, 1.5]→ Deep topographic shadows from 8K normal
 *
 * NIGHT LIGHTS (emissiveMap — light-direction sync)
 * ─────────────────────────────────────────────────────────────────
 *   emissive: #ffcc66       → Warm city-light orange glow
 *   emissiveIntensity: modulated per-frame by sun direction
 *   → Surface normal · sunDir < 0 → night hemisphere → glow ON
 *   → Smooth sigmoid transition at the terminator line
 *
 * ATMOSPHERE
 * ─────────────────────────────────────────────────────────────────
 *   Custom Fresnel ShaderMaterial — soft sky-blue Rayleigh glow.
 *   Two-tone: inner = warm (sunrise tint), outer = cool (deep blue).
 *   Visible from all angles, fades at grazing incidence.
 *
 * CLOUD SHELL
 * ─────────────────────────────────────────────────────────────────
 *   Separate sphere (radius + 0.015) with clouds.webp as both
 *   map and alphaMap. Independent rotation at 0.005 rad/s for
 *   parallax depth against the surface below.
 *
 * TEXTURE PATHS (local /public — 8K WebP)
 * ─────────────────────────────────────────────────────────────────
 *   diffuse:    /textures/planets/odyssey/diffuse.webp
 *   normal:     /textures/planets/odyssey/normal.webp
 *   roughness:  /textures/planets/odyssey/specular.webp (fallback)
 *   clouds:     /textures/planets/odyssey/clouds.webp
 *   night:      /textures/planets/odyssey/night.webp
 */

import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────

export const PALETTE = {
  /** Deep ocean — base fallback color for the globe */
  ocean: "#1a3a5c",
  /** Land green — fallback land tone */
  land: "#2d5a27",
  /** Sky blue — atmosphere Rayleigh scattering */
  skyBlue: "#87ceeb",
  /** Atmosphere rim — deeper blue for Fresnel edge */
  atmosphereRim: "#4a90d9",
  /** Atmosphere warm — sunrise tint near terminator */
  atmosphereWarm: "#ffa07a",
  /** Night glow — city lights warm orange */
  nightGlow: "#ffcc66",
  /** Pin gold — Odyssey marker primary */
  pinGold: "#fbbf24",
  /** Pin red — Odyssey marker accent / mega-pin */
  pinRed: "#ef4444",
  /** Pin white — marker highlight */
  pinWhite: "#fef3c7",
  /** Cool white — key light / fresh text */
  coolWhite: "#f0f9ff",
  /** Slate — UI overlay background */
  slate: "#0f172a",
  /** Deep space — background darkness */
  deepSpace: "#030712",
} as const;

// ─── Texture Paths ────────────────────────────────────────────────────────────

export const TEXTURES = {
  /** 8K Diffuse (albedo) — full-colour Earth surface */
  diffuse: "/textures/planets/odyssey/diffuse.webp",
  /** 8K Normal map — terrain elevation → deep topographic shadows */
  normal: "/textures/planets/odyssey/normal.webp",
  /** 8K Roughness map — oceans smooth, land rough */
  roughness: "/textures/planets/odyssey/specular.webp",
  /** 8K Cloud layer — semi-transparent white (used as map + alphaMap) */
  clouds: "/textures/planets/odyssey/clouds.webp",
  /** 8K Night lights emissiveMap — city lights white-on-black */
  night: "/textures/planets/odyssey/night.webp",
} as const;

// ─── Texture Loading Configuration ────────────────────────────────────────────

export const TEXTURE_CONFIG = {
  /** Color space for diffuse map (sRGB for colour accuracy) */
  diffuseColorSpace: THREE.SRGBColorSpace,
  /** Color space for data maps (Linear for normal/roughness/night) */
  dataColorSpace: THREE.LinearSRGBColorSpace,
  /** Wrap mode for Earth spherical mapping */
  wrapS: THREE.RepeatWrapping,
  wrapT: THREE.ClampToEdgeWrapping,
  /** Min filter for 8K maps (trilinear for smooth mipmapping) */
  minFilter: THREE.LinearMipmapLinearFilter,
  /** Mag filter (bilinear) */
  magFilter: THREE.LinearFilter,
  /** Generate mipmaps for 8K textures (essential for LOD) */
  generateMipmaps: true,
} as const;

// ─── Earth Surface Material (MeshPhysicalMaterial) ────────────────────────────

export const EARTH_MATERIAL = {
  color: new THREE.Color("#ffffff"),
  emissive: new THREE.Color("#ffcc66"),
  emissiveIntensity: 0.0, // Driven per-frame by sun direction

  metalness: 0.0,
  roughness: 0.6,

  // ── Clearcoat (ocean gloss + ice cap sheen) ──
  clearcoat: 0.35,
  clearcoatRoughness: 0.3,

  // ── Environment reflections (punchy for oceans) ──
  envMapIntensity: 1.4,

  /** 8K Normal map strength — deep topographic shadows */
  normalScale: [1.5, 1.5] as [number, number],
} as const;

// ─── Cloud Shell ──────────────────────────────────────────────────────────────

export const CLOUD_SHELL = {
  /** Radius offset above earth surface */
  radiusOffset: 0.015,
  /** Cloud base opacity */
  opacity: 0.4,
  /** Cloud rotation speed (slightly different from earth for parallax) */
  rotationSpeed: 0.005,
  /** Cloud shell sphere segments (lower than earth — clouds are soft) */
  segments: 64,
} as const;

// ─── Atmosphere — Fresnel Rayleigh Glow ───────────────────────────────────────
//
// Custom ShaderMaterial: Fresnel-based glow that simulates Rayleigh scattering.
// Visible as a soft sky-blue halo at grazing angles, fading toward the center.

export const ATMOSPHERE = {
  /** Atmosphere shell radius (slightly larger than earth) */
  radius: 1.08,
  /** Rayleigh scattering base color */
  color: new THREE.Color("#87ceeb"),
  /** Fresnel power — controls how tight the rim glow is */
  fresnelPower: 3.5,
  /** Overall opacity */
  opacity: 0.45,
  /** Vertex shader — computes view-dependent Fresnel */
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /** Fragment shader — Rayleigh Fresnel scattering with warm terminator tint */
  fragmentShader: `
    uniform vec3 uColor;
    uniform float uPower;
    uniform float uOpacity;
    uniform vec3 uSunDir;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), uPower);
      // Warm tint near terminator (sunset/sunrise edge)
      float sunDot = dot(vNormal, uSunDir);
      vec3 warmTint = vec3(1.0, 0.7, 0.5);
      vec3 finalColor = mix(uColor, warmTint, smoothstep(-0.1, 0.2, sunDot) * 0.3);
      gl_FragColor = vec4(finalColor, fresnel * uOpacity);
    }
  `,
} as const;

// ─── Night Lights Logic ───────────────────────────────────────────────────────

export const NIGHT_LIGHTS = {
  /** Max emissive intensity on the dark hemisphere */
  maxEmissive: 2.0,
  /** How fast the emissive intensity reacts per frame (lerp rate) */
  lerpRate: 0.04,
  /** Gentle pulse on top of the night lights */
  pulseHz: 0.3,
  pulseAmplitude: 0.15,
} as const;

// ─── Globe Rotation ───────────────────────────────────────────────────────────

export const GLOBE = {
  /** Earth sphere radius */
  radius: 1.0,
  /** Sphere segments (high for smooth curvature with 8K map) */
  segments: 256,
  /** Auto-rotation speed (rad/s) */
  autoRotateSpeed: 0.04,
  /** Slerp speed for fly-to animation (0→1 interpolation rate per frame) */
  slerpSpeed: 0.03,
  /** Axial tilt (Earth ~23.4°, in radians) */
  axialTilt: 0.408, // ~23.4°
} as const;

// ─── Mario-Style Odyssey Pins ─────────────────────────────────────────────────

export const PIN = {
  /** Pin body height (diamond shape) */
  height: 0.08,
  /** Pin body width */
  width: 0.025,
  /** Hover scale multiplier */
  hoverScale: 1.8,
  /** Hover emissive intensity */
  hoverEmissive: 2.5,
  /** Idle emissive intensity */
  idleEmissive: 0.8,
  /** Bounce amplitude on first appearance */
  bounceAmplitude: 0.02,
  /** Bounce frequency (Hz) */
  bounceHz: 2.0,
  /** Pin float height above surface */
  floatHeight: 0.03,
  /** Regular pin color */
  color: new THREE.Color("#fbbf24"),
  /** Mega-pin color (cluster with 5+ photos) */
  megaColor: new THREE.Color("#ef4444"),
  /** Mega-pin scale multiplier */
  megaScale: 1.5,
  /** Mega-pin threshold (min assets to become mega) */
  megaThreshold: 5,
} as const;

// ─── Spring Physics — Odyssey Bouncy Feel ─────────────────────────────────────

export const SPRING_PHYSICS = {
  stiffness: 200,
  damping: 20,
  mass: 1.0,
} as const;

// ─── Panel Spring (UI overlays) ──────────────────────────────────────────────

export const PANEL_SPRING = {
  stiffness: 220,
  damping: 22,
  mass: 1.0,
} as const;

// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────

export const LIGHTING = {
  environment: "sunset" as const,
  environmentIntensity: 0.6,

  /** Key — warm sunlight SpotLight from top-right (simulating the sun) */
  key: {
    color: "#fff8f0",
    intensity: 90,
    position: [8, 6, 5] as [number, number, number],
    angle: 0.5,
    penumbra: 0.8,
    decay: 1.5,
    distance: 35,
  },

  /** Fill — cool blue PointLight from bottom-left (space ambient bounce) */
  fill: {
    color: "#93c5fd",
    intensity: 3.0,
    position: [-4, -3, 4] as [number, number, number],
    distance: 18,
    decay: 2,
  },

  /** Rim — electric-blue DirectionalLight from behind (atmospheric backlight) */
  rim: {
    color: "#3b82f6",
    intensity: 5.0,
    position: [-5, 5, -8] as [number, number, number],
  },
} as const;

// ─── Geo-Spatial: City Coordinate Database ────────────────────────────────────
//
// Since assets_manifest_v8.json stores City/Country but NOT lat/lng,
// we maintain a lookup table of known cities → coordinates.
// Unmatched cities fall back to country centroids.

export interface GeoCoord {
  lat: number;
  lng: number;
}

export const CITY_COORDS: Record<string, GeoCoord> = {
  // ── Qatar ──
  "Doha": { lat: 25.2854, lng: 51.5310 },
  "Al Wakrah": { lat: 25.1720, lng: 51.6038 },
  "Lusail": { lat: 25.4200, lng: 51.4900 },
  "Al Khor": { lat: 25.6804, lng: 51.4969 },
  "Education City": { lat: 25.3148, lng: 51.4400 },
  "The Pearl": { lat: 25.3741, lng: 51.5512 },
  "Aspire Zone": { lat: 25.2620, lng: 51.4484 },

  // ── UAE ──
  "Dubai": { lat: 25.2048, lng: 55.2708 },
  "Abu Dhabi": { lat: 24.4539, lng: 54.3773 },
  "Sharjah": { lat: 25.3463, lng: 55.4209 },
  "Ajman": { lat: 25.4052, lng: 55.5136 },

  // ── Saudi Arabia ──
  "Riyadh": { lat: 24.7136, lng: 46.6753 },
  "Jeddah": { lat: 21.4858, lng: 39.1925 },
  "Mecca": { lat: 21.3891, lng: 39.8579 },
  "Medina": { lat: 24.5247, lng: 39.5692 },
  "Dammam": { lat: 26.3927, lng: 49.9777 },

  // ── Gulf / Middle East ──
  "Manama": { lat: 26.2285, lng: 50.5860 },
  "Kuwait City": { lat: 29.3759, lng: 47.9774 },
  "Muscat": { lat: 23.5880, lng: 58.3829 },
  "Amman": { lat: 31.9454, lng: 35.9284 },
  "Beirut": { lat: 33.8938, lng: 35.5018 },

  // ── Europe ──
  "London": { lat: 51.5074, lng: -0.1278 },
  "Paris": { lat: 48.8566, lng: 2.3522 },
  "Barcelona": { lat: 41.3874, lng: 2.1686 },
  "Istanbul": { lat: 41.0082, lng: 28.9784 },
  "Rome": { lat: 41.9028, lng: 12.4964 },
  "Madrid": { lat: 40.4168, lng: -3.7038 },
  "Berlin": { lat: 52.5200, lng: 13.4050 },
  "Amsterdam": { lat: 52.3676, lng: 4.9041 },
  "Munich": { lat: 48.1351, lng: 11.5820 },
  "Vienna": { lat: 48.2082, lng: 16.3738 },
  "Zurich": { lat: 47.3769, lng: 8.5417 },
  "Geneva": { lat: 46.2044, lng: 6.1432 },
  "Milan": { lat: 45.4642, lng: 9.1900 },
  "Prague": { lat: 50.0755, lng: 14.4378 },
  "Budapest": { lat: 47.4979, lng: 19.0402 },
  "Lisbon": { lat: 38.7223, lng: -9.1393 },
  "Athens": { lat: 37.9838, lng: 23.7275 },
  "Copenhagen": { lat: 55.6761, lng: 12.5683 },
  "Stockholm": { lat: 59.3293, lng: 18.0686 },
  "Oslo": { lat: 59.9139, lng: 10.7522 },
  "Helsinki": { lat: 60.1699, lng: 24.9384 },
  "Dublin": { lat: 53.3498, lng: -6.2603 },
  "Edinburgh": { lat: 55.9533, lng: -3.1883 },
  "Manchester": { lat: 53.4808, lng: -2.2426 },
  "Marseille": { lat: 43.2965, lng: 5.3698 },
  "Nice": { lat: 43.7102, lng: 7.2620 },
  "Monaco": { lat: 43.7384, lng: 7.4246 },

  // ── Americas ──
  "New York": { lat: 40.7128, lng: -74.0060 },
  "Los Angeles": { lat: 34.0522, lng: -118.2437 },
  "Miami": { lat: 25.7617, lng: -80.1918 },
  "Chicago": { lat: 41.8781, lng: -87.6298 },
  "Houston": { lat: 29.7604, lng: -95.3698 },
  "Toronto": { lat: 43.6532, lng: -79.3832 },
  "San Francisco": { lat: 37.7749, lng: -122.4194 },
  "Washington": { lat: 38.9072, lng: -77.0369 },
  "Boston": { lat: 42.3601, lng: -71.0589 },
  "Las Vegas": { lat: 36.1699, lng: -115.1398 },
  "Montreal": { lat: 45.5017, lng: -73.5673 },
  "Vancouver": { lat: 49.2827, lng: -123.1207 },
  "Mexico City": { lat: 19.4326, lng: -99.1332 },
  "São Paulo": { lat: -23.5505, lng: -46.6333 },
  "Buenos Aires": { lat: -34.6037, lng: -58.3816 },

  // ── Asia ──
  "Tokyo": { lat: 35.6762, lng: 139.6503 },
  "Singapore": { lat: 1.3521, lng: 103.8198 },
  "Hong Kong": { lat: 22.3193, lng: 114.1694 },
  "Bangkok": { lat: 13.7563, lng: 100.5018 },
  "Kuala Lumpur": { lat: 3.1390, lng: 101.6869 },
  "Seoul": { lat: 37.5665, lng: 126.9780 },
  "Mumbai": { lat: 19.0760, lng: 72.8777 },
  "Beijing": { lat: 39.9042, lng: 116.4074 },
  "Shanghai": { lat: 31.2304, lng: 121.4737 },
  "Delhi": { lat: 28.7041, lng: 77.1025 },
  "Bali": { lat: -8.3405, lng: 115.0920 },
  "Taipei": { lat: 25.0330, lng: 121.5654 },
  "Osaka": { lat: 34.6937, lng: 135.5023 },
  "Jakarta": { lat: -6.2088, lng: 106.8456 },
  "Manila": { lat: 14.5995, lng: 120.9842 },
  "Ho Chi Minh City": { lat: 10.8231, lng: 106.6297 },

  // ── Africa ──
  "Cairo": { lat: 30.0444, lng: 31.2357 },
  "Casablanca": { lat: 33.5731, lng: -7.5898 },
  "Johannesburg": { lat: -26.2041, lng: 28.0473 },
  "Nairobi": { lat: -1.2921, lng: 36.8219 },
  "Cape Town": { lat: -33.9249, lng: 18.4241 },
  "Lagos": { lat: 6.5244, lng: 3.3792 },
  "Marrakech": { lat: 31.6295, lng: -7.9811 },
  "Tunis": { lat: 36.8065, lng: 10.1815 },

  // ── Oceania ──
  "Sydney": { lat: -33.8688, lng: 151.2093 },
  "Melbourne": { lat: -37.8136, lng: 144.9631 },
  "Auckland": { lat: -36.8485, lng: 174.7633 },
} as const;

/** Fallback: country → centroid */
export const COUNTRY_COORDS: Record<string, GeoCoord> = {
  "Qatar": { lat: 25.3548, lng: 51.1839 },
  "UAE": { lat: 23.4241, lng: 53.8478 },
  "United Arab Emirates": { lat: 23.4241, lng: 53.8478 },
  "Saudi Arabia": { lat: 23.8859, lng: 45.0792 },
  "Bahrain": { lat: 26.0667, lng: 50.5577 },
  "Kuwait": { lat: 29.3117, lng: 47.4818 },
  "Oman": { lat: 21.4735, lng: 55.9754 },
  "Jordan": { lat: 30.5852, lng: 36.2384 },
  "Lebanon": { lat: 33.8547, lng: 35.8623 },
  "Iraq": { lat: 33.2232, lng: 43.6793 },
  "Iran": { lat: 32.4279, lng: 53.6880 },
  "United Kingdom": { lat: 55.3781, lng: -3.4360 },
  "France": { lat: 46.2276, lng: 2.2137 },
  "Spain": { lat: 40.4637, lng: -3.7492 },
  "Germany": { lat: 51.1657, lng: 10.4515 },
  "Italy": { lat: 41.8719, lng: 12.5674 },
  "Turkey": { lat: 38.9637, lng: 35.2433 },
  "Netherlands": { lat: 52.1326, lng: 5.2913 },
  "Switzerland": { lat: 46.8182, lng: 8.2275 },
  "Austria": { lat: 47.5162, lng: 14.5501 },
  "Portugal": { lat: 39.3999, lng: -8.2245 },
  "Greece": { lat: 39.0742, lng: 21.8243 },
  "Czech Republic": { lat: 49.8175, lng: 15.4730 },
  "Hungary": { lat: 47.1625, lng: 19.5033 },
  "Sweden": { lat: 60.1282, lng: 18.6435 },
  "Norway": { lat: 60.4720, lng: 8.4689 },
  "Denmark": { lat: 56.2639, lng: 9.5018 },
  "Finland": { lat: 61.9241, lng: 25.7482 },
  "Ireland": { lat: 53.1424, lng: -7.6921 },
  "USA": { lat: 37.0902, lng: -95.7129 },
  "United States": { lat: 37.0902, lng: -95.7129 },
  "Canada": { lat: 56.1304, lng: -106.3468 },
  "Mexico": { lat: 23.6345, lng: -102.5528 },
  "Brazil": { lat: -14.2350, lng: -51.9253 },
  "Argentina": { lat: -38.4161, lng: -63.6167 },
  "Japan": { lat: 36.2048, lng: 138.2529 },
  "China": { lat: 35.8617, lng: 104.1954 },
  "India": { lat: 20.5937, lng: 78.9629 },
  "South Korea": { lat: 35.9078, lng: 127.7669 },
  "Thailand": { lat: 15.8700, lng: 100.9925 },
  "Malaysia": { lat: 4.2105, lng: 101.9758 },
  "Singapore": { lat: 1.3521, lng: 103.8198 },
  "Indonesia": { lat: -0.7893, lng: 113.9213 },
  "Philippines": { lat: 12.8797, lng: 121.7740 },
  "Vietnam": { lat: 14.0583, lng: 108.2772 },
  "Taiwan": { lat: 23.6978, lng: 120.9605 },
  "Australia": { lat: -25.2744, lng: 133.7751 },
  "New Zealand": { lat: -40.9006, lng: 174.8860 },
  "Egypt": { lat: 26.8206, lng: 30.8025 },
  "South Africa": { lat: -30.5595, lng: 22.9375 },
  "Kenya": { lat: -0.0236, lng: 37.9062 },
  "Morocco": { lat: 31.7917, lng: -7.0926 },
  "Nigeria": { lat: 9.0820, lng: 8.6753 },
  "Tunisia": { lat: 33.8869, lng: 9.5375 },
} as const;

// ─── Clustering ───────────────────────────────────────────────────────────────

export const CLUSTER = {
  /** Minimum angular distance (degrees) to merge two markers */
  mergeAngleDeg: 3.0,
  /** Mega-pin visual pulse frequency (Hz) */
  pulseHz: 1.0,
  /** Mega-pin pulse amplitude */
  pulseAmplitude: 0.15,
} as const;

// ─── Performance Constants ────────────────────────────────────────────────────

/** Max markers rendered (after clustering) */
export const MAX_MARKERS = 300;

/** LOD culling distance — beyond this, pins are hidden */
export const LOD_CULL_RADIUS = 12;

// ─── Volumetric Haze ──────────────────────────────────────────────────────────

export const FOG = {
  innerParticles: { radius: 5, depth: 2, count: 200, factor: 0.5, speed: 0.08 },
  outerParticles: { radius: 12, depth: 4, count: 400, factor: 1.0, speed: 0.05 },
} as const;
