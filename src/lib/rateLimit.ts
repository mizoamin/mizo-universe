/**
 * In-Memory Rate Limiter — Sliding Window
 *
 * Lightweight, zero-dependency rate limiter for Server Actions and API routes.
 * Uses a Map of IP → timestamps with automatic cleanup.
 *
 * For Vercel deployments, each serverless instance has its own Map.
 * This provides per-instance protection. For distributed rate limiting
 * at scale, upgrade to Vercel KV or Upstash Redis.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  const cutoff = now - windowMs;
  for (const [key, entry] of store) {
    entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
    if (entry.timestamps.length === 0) {
      store.delete(key);
    }
  }
}

export interface RateLimitResult {
  success: boolean;
  /** Requests remaining in the current window */
  remaining: number;
  /** When the rate limit resets (ms since epoch) */
  resetAt: number;
}

/**
 * Check and consume a rate limit token.
 *
 * @param key       Unique identifier (e.g., IP address or user ID)
 * @param maxHits   Maximum requests allowed in the window
 * @param windowMs  Time window in milliseconds (default: 60_000 = 1 minute)
 */
export function rateLimit(
  key: string,
  maxHits: number,
  windowMs = 60_000,
): RateLimitResult {
  cleanup(windowMs);

  const now = Date.now();
  const cutoff = now - windowMs;

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Remove expired timestamps
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

  const remaining = Math.max(0, maxHits - entry.timestamps.length);
  const resetAt = entry.timestamps.length > 0
    ? entry.timestamps[0] + windowMs
    : now + windowMs;

  if (entry.timestamps.length >= maxHits) {
    return { success: false, remaining: 0, resetAt };
  }

  // Consume a token
  entry.timestamps.push(now);

  return {
    success: true,
    remaining: remaining - 1,
    resetAt,
  };
}
