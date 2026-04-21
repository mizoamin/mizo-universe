/**
 * Jupiter Atmospheric Shader
 *
 * Procedurally generates Jupiter's banded structure, Great Red Spot, and subtle animations.
 * Uses layered noise functions for natural-looking atmospheric turbulence.
 *
 * Vertex Shader + Fragment Shader combined for clarity.
 */

// ─── VERTEX SHADER ────────────────────────────────────────────────────────
#define VERTEX

varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vViewDir;
varying float vHeight;

void main() {
  vPosition = position;
  vNormal = normalize(normalMatrix * normal);
  vViewDir = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
  vHeight = position.y;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// ─── FRAGMENT SHADER ───────────────────────────────────────────────────────

#define FRAGMENT

varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vViewDir;
varying float vHeight;

uniform float uTime;
uniform float uWindSpeed;
uniform float uSpotWobble;
uniform float uSpotWobbleFreq;

// Color uniforms
uniform vec3 uBandColorPrimary;
uniform vec3 uBandColorSecondary;
uniform vec3 uZoneColorLight;
uniform vec3 uPolarColor;
uniform vec3 uSpotColor;

// Lighting
uniform vec3 uSunDir;
uniform float uSunIntensity;
uniform float uAmbientIntensity;
uniform float uSelfIllumination;

// ─── NOISE FUNCTIONS ──────────────────────────────────────────────────────

// Pseudo-random function
float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Perlin-like noise
float perlinLike(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  f = f * f * (3.0 - 2.0 * f);

  float n = mix(
    mix(random(i), random(i + vec2(1.0, 0.0)), f.x),
    mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
  return n;
}

// Fractional Brownian Motion (layered noise for natural variety)
float fbm(vec2 st, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 6; i++) {
    if (i >= octaves) break;
    value += amplitude * perlinLike(st * frequency);
    st *= 2.0;
    amplitude *= 0.5;
  }

  return value;
}

// ─── BAND GENERATION ──────────────────────────────────────────────────────

vec3 generateBands(vec3 pos) {
  // Normalize to UV space (latitude/longitude)
  float latitude = atan(pos.y, length(pos.xz)) * 2.0 / 3.14159;  // -1 to 1
  float longitude = atan(pos.z, pos.x);

  // Add wind animation (bands move east-west at different speeds)
  float windPhase = longitude + uTime * uWindSpeed * (latitude * 0.5);

  // Create band pattern: alternating light/dark zones
  float bandPattern = sin(latitude * 8.0 + 0.5) * 0.5 + 0.5;

  // Add cloud turbulence
  float cloudNoise = fbm(vec2(windPhase, latitude), 4);
  bandPattern += cloudNoise * 0.15;

  // Color interpolation: light zones vs. dark zones
  vec3 bandColor = mix(uZoneColorLight, mix(uBandColorPrimary, uBandColorSecondary, cloudNoise), bandPattern);

  // Polar regions (slight blue-tint)
  float polarMask = smoothstep(0.7, 1.0, abs(latitude));
  bandColor = mix(bandColor, uPolarColor, polarMask * 0.4);

  return bandColor;
}

// ─── GREAT RED SPOT ────────────────────────────────────────────────────────

vec3 generateGreatRedSpot(vec3 pos, vec3 bandBase) {
  float latitude = atan(pos.y, length(pos.xz)) * 2.0 / 3.14159;
  float longitude = atan(pos.z, pos.x);

  // Great Red Spot latitude: fixed around -22°
  float spotLat = -0.38;  // ~-22 degrees in radians

  // Wobble animation
  float wobble = sin(uTime * uSpotWobbleFreq) * uSpotWobble;
  float spotLongitude = 0.0 + uTime * uWindSpeed + wobble;

  // Distance to spot center
  float distToSpot = distance(
    vec2(latitude, longitude),
    vec2(spotLat, spotLongitude)
  );

  // Spot falloff (Gaussian-like)
  float spotIntensity = exp(-distToSpot * distToSpot * 8.0);

  // Spot has internal structure (turbulent clouds)
  float spotTurbulence = fbm(vec2(longitude * 5.0, latitude * 5.0), 3);
  spotIntensity *= (0.7 + 0.3 * spotTurbulence);

  return mix(bandBase, uSpotColor, spotIntensity * 0.8);
}

// ─── MAIN FRAGMENT ────────────────────────────────────────────────────────

void main() {
  vec3 pos = normalize(vPosition);

  // Generate base banded coloring
  vec3 bandColor = generateBands(pos);

  // Apply Great Red Spot
  vec3 spotColor = generateGreatRedSpot(pos, bandColor);

  // Lighting
  float diffuse = max(dot(vNormal, uSunDir), 0.0) * uSunIntensity;
  float ambient = uAmbientIntensity;

  // Fresnel effect (atmospheric glow at edges)
  float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 2.0) * 0.2;

  // Final color composition
  vec3 finalColor = spotColor * (diffuse + ambient + fresnel);
  finalColor += uSelfIllumination * spotColor;  // Subtle self-glow

  gl_FragColor = vec4(finalColor, 1.0);
}
