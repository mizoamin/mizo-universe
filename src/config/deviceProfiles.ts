/**
 * Device Profiles — Performance tier definitions
 *
 * Each tier defines rendering caps: DPR, star counts, texture quality,
 * post-processing toggles, shadow toggles. Read by useDeviceStore to
 * configure the 3D engine adaptively.
 *
 * ⚠️ config/ imports NOTHING from engine/ or components/.
 */

export type DeviceTier = "mobile" | "tablet" | "desktop" | "ultra" | "vision-pro"
export type QualityLevel = "low" | "medium" | "high" | "ultra"

export interface DeviceProfile {
  tier: DeviceTier
  quality: QualityLevel
  dpr: [number, number]
  fov: number
  starCount: number
  textureResolution: 512 | 1024 | 2048
  shadows: boolean
  postProcessing: boolean
  bloomEnabled: boolean
  dofEnabled: boolean
  instancedMesh: boolean
}

export const DEVICE_PROFILES: Record<DeviceTier, DeviceProfile> = {
  mobile: {
    tier: "mobile",
    quality: "low",
    dpr: [1, 1.5],
    fov: 65,
    starCount: 1500,
    textureResolution: 512,
    shadows: false,
    postProcessing: false,
    bloomEnabled: false,
    dofEnabled: false,
    instancedMesh: false,
  },
  tablet: {
    tier: "tablet",
    quality: "medium",
    dpr: [1, 1.5],
    fov: 55,
    starCount: 3000,
    textureResolution: 1024,
    shadows: false,
    postProcessing: true,
    bloomEnabled: true,
    dofEnabled: false,
    instancedMesh: true,
  },
  desktop: {
    tier: "desktop",
    quality: "high",
    dpr: [1, 2],
    fov: 40,
    starCount: 5000,
    textureResolution: 2048,
    shadows: true,
    postProcessing: true,
    bloomEnabled: true,
    dofEnabled: false,
    instancedMesh: true,
  },
  ultra: {
    tier: "ultra",
    quality: "ultra",
    dpr: [1, 2],
    fov: 40,
    starCount: 8000,
    textureResolution: 2048,
    shadows: true,
    postProcessing: true,
    bloomEnabled: true,
    dofEnabled: true,
    instancedMesh: true,
  },
  "vision-pro": {
    tier: "vision-pro",
    quality: "ultra",
    dpr: [1, 2],
    fov: 40,
    starCount: 8000,
    textureResolution: 2048,
    shadows: true,
    postProcessing: true,
    bloomEnabled: true,
    dofEnabled: true,
    instancedMesh: true,
  },
}

/** Width breakpoints for tier classification (fallback when GPU detection unavailable) */
export const TIER_BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1920,
  // Above 1920 → ultra. vision-pro detected via UA string.
} as const
