/**
 * Screenshot Configuration — Central registry for all screenshot metadata
 *
 * Defines all routes to capture, device profiles, wait conditions,
 * output paths, and manifest schema. Single source of truth for the
 * screenshot automation system.
 *
 * ⚠️ config/ imports NOTHING from engine/ or components/.
 */

import type { DeviceTier } from './deviceProfiles'

/**
 * Screenshot page specification
 */
export interface ScreenshotPageSpec {
  /** Unique identifier for this page */
  id: string
  /** Route path to screenshot */
  route: string
  /** Human-readable title */
  title: string
  /** Priority: 1=critical (home, blog), 2=secondary (planets), 3=edge cases (admin) */
  priority: 1 | 2 | 3
  /** CSS selector to wait for before capturing (e.g., canvas, main content) */
  waitSelector?: string
  /** Milliseconds to wait after page loaded (for animations to settle) */
  waitMs?: number
  /** Device tiers to capture (default: all) */
  devices?: DeviceTier[]
  /** Whether this route needs interaction (e.g., button click before capture) */
  requiresInteraction?: boolean
  /** Expected render state for validation */
  expectedState?: 'loading' | 'interactive' | 'complete'
}

/**
 * Viewport dimensions for each device tier
 * Matches deviceProfiles.ts but with specific screenshot sizes
 */
export interface ScreenshotViewport {
  device: DeviceTier
  width: number
  height: number
  devicePixelRatio: number
}

export const SCREENSHOT_VIEWPORTS: ScreenshotViewport[] = [
  { device: 'mobile', width: 375, height: 812, devicePixelRatio: 2 },
  { device: 'tablet', width: 768, height: 1024, devicePixelRatio: 2 },
  { device: 'desktop', width: 1920, height: 1080, devicePixelRatio: 2 },
  { device: 'ultra', width: 2560, height: 1440, devicePixelRatio: 2 },
  { device: 'vision-pro', width: 2560, height: 1440, devicePixelRatio: 2 },
]

/**
 * All pages to screenshot
 * Organized by priority and category
 */
export const SCREENSHOT_PAGES: ScreenshotPageSpec[] = [
  // Priority 1: Critical landing pages
  {
    id: 'home',
    route: '/',
    title: 'Home / Universe',
    priority: 1,
    waitSelector: 'canvas, [data-component="universe-canvas"]',
    waitMs: 3000,
    devices: ['mobile', 'tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'blog',
    route: '/blog',
    title: 'Blog Hub',
    priority: 1,
    waitSelector: 'main, [data-component="blog-hub"]',
    waitMs: 1000,
    devices: ['mobile', 'tablet', 'desktop'],
    expectedState: 'interactive',
  },

  // Priority 2: Planet pages (10 planets)
  {
    id: 'identity',
    route: '/identity',
    title: 'Identity Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'legacy',
    route: '/legacy',
    title: 'Legacy Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'vision',
    route: '/vision',
    title: 'Vision Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'odyssey',
    route: '/odyssey',
    title: 'Odyssey Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'ventures',
    route: '/ventures',
    title: 'Ventures Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'voice',
    route: '/voice',
    title: 'Voice Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'videogram',
    route: '/videogram',
    title: 'Videogram Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'library',
    route: '/library',
    title: 'Library Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'contact',
    route: '/contact',
    title: 'Contact Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
  {
    id: 'shield',
    route: '/shield',
    title: 'Shield Planet',
    priority: 2,
    waitSelector: 'canvas, [data-component="planet-page"]',
    waitMs: 2000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },

  // Priority 3: Secondary pages (less visually complex)
  {
    id: 'blog-category-sample',
    route: '/blog/tech',
    title: 'Blog Category: Tech',
    priority: 3,
    waitSelector: 'main, [data-component="blog-category"]',
    waitMs: 1000,
    devices: ['tablet', 'desktop'],
    expectedState: 'interactive',
  },
]

/**
 * Manifest entry schema per screenshot
 */
export interface ScreenshotEntry {
  id: string
  route: string
  device: DeviceTier
  viewport: string // e.g., "1920x1080"
  path: string // relative path in public/screenshots/
  hash: string // simple hash for change detection
  timestamp: string // ISO 8601
  metadata: {
    loadTime: number // milliseconds to reach interactive state
    renderState: 'loading' | 'interactive' | 'complete'
    hasAnimations: boolean
    designSystemCompliance: number // 0-100
  }
}

/**
 * Change detection for diff reports
 */
export interface ScreenshotChange {
  page: string
  device: DeviceTier
  changeType: 'visual' | 'performance' | 'error'
  severity: 'minor' | 'moderate' | 'critical'
  description: string
  timestamp: string
}

/**
 * Master manifest schema
 */
export interface ScreenshotManifest {
  generatedAt: string
  appVersion: string
  totalPages: number
  deviceTiers: DeviceTier[]
  screenshots: ScreenshotEntry[]
  changes: ScreenshotChange[]
}

/**
 * Output path configuration
 */
export const SCREENSHOT_PATHS = {
  root: 'public/screenshots',
  latest: 'public/screenshots/latest',
  history: 'public/screenshots/history',
  diffReports: 'public/screenshots/diff-reports',
  manifest: 'public/screenshots/manifest.json',
} as const

/**
 * Default screenshot options
 */
export const SCREENSHOT_DEFAULTS = {
  timeout: 30000, // 30 second timeout per page
  waitMs: 2000, // default wait after load
  retries: 2, // retry failed captures
  format: 'png' as const,
  quality: 90,
} as const

/**
 * Get all pages for a priority level
 */
export function getPagesByPriority(priority: 1 | 2 | 3): ScreenshotPageSpec[] {
  return SCREENSHOT_PAGES.filter((page) => page.priority === priority)
}

/**
 * Get pages for specific devices
 */
export function getPagesByDevice(device: DeviceTier): ScreenshotPageSpec[] {
  return SCREENSHOT_PAGES.filter((page) => {
    const devices = page.devices || ['mobile', 'tablet', 'desktop', 'ultra', 'vision-pro']
    return devices.includes(device)
  })
}
