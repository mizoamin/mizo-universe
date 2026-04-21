/**
 * Device Store — Zustand store for hardware detection & adaptive rendering
 *
 * Detects device tier (mobile/tablet/desktop/ultra/vision-pro) and
 * exposes the corresponding DeviceProfile from deviceProfiles.ts.
 *
 * Components read: useDeviceStore(s => s.profile.starCount), etc.
 * Initialized once on mount via initDeviceProfile().
 */

import { create } from "zustand"
import {
  DEVICE_PROFILES,
  TIER_BREAKPOINTS,
  type DeviceProfile,
  type DeviceTier,
} from "@/config/deviceProfiles"

interface DeviceState {
  /** Current device tier */
  tier: DeviceTier
  /** Full profile with all rendering caps */
  profile: DeviceProfile
  /** Whether detection has run */
  initialized: boolean
  /** Run device detection and set the profile */
  initDeviceProfile: () => void
}

/**
 * Detect device tier from screen width, touch capability, and user agent.
 * GPU tier detection can be added later via WebGL renderer info.
 */
function detectTier(): DeviceTier {
  if (typeof window === "undefined") return "desktop"

  const ua = navigator.userAgent.toLowerCase()

  // Apple Vision Pro detection
  if (ua.includes("apple vision") || ua.includes("xros")) {
    return "vision-pro"
  }

  const width = window.innerWidth
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
  const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory

  // Mobile: narrow viewport + touch
  if (width < TIER_BREAKPOINTS.mobile && isTouchDevice) {
    return "mobile"
  }

  // Tablet: mid viewport + touch
  if (width < TIER_BREAKPOINTS.tablet && isTouchDevice) {
    return "tablet"
  }

  // Ultra: wide viewport + high memory (8GB+) or 4K+ display
  if (
    width > TIER_BREAKPOINTS.desktop ||
    (deviceMemory && deviceMemory >= 8) ||
    (window.devicePixelRatio >= 2 && width >= TIER_BREAKPOINTS.desktop)
  ) {
    return "ultra"
  }

  return "desktop"
}

export const useDeviceStore = create<DeviceState>((set) => ({
  tier: "desktop",
  profile: DEVICE_PROFILES.desktop,
  initialized: false,

  initDeviceProfile: () => {
    const tier = detectTier()
    set({
      tier,
      profile: DEVICE_PROFILES[tier],
      initialized: true,
    })
  },
}))
