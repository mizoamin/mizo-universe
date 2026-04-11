/**
 * Performance Monitor — Frame Budget Tracker with Light Mode Trigger
 *
 * Runs a rolling FPS sampler. When average FPS drops below the threshold
 * (default 55), triggers a "light mode" callback that the 3D canvas can
 * use to reduce post-processing, lower star counts, disable DOF, etc.
 *
 * Usage in a React Three Fiber component:
 *   const monitor = useRef(new FrameBudgetMonitor({ onLightMode: () => ... }));
 *   useFrame((_, delta) => monitor.current.sample(delta));
 *
 * Or outside R3F with requestAnimationFrame:
 *   const monitor = new FrameBudgetMonitor({ onLightMode, onRecovery });
 *   function loop() { monitor.tick(); requestAnimationFrame(loop); }
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FrameBudgetOptions {
  /** FPS threshold — below this triggers light mode (default: 55) */
  threshold?: number;
  /** Number of samples in the rolling window (default: 60) */
  windowSize?: number;
  /** Consecutive low-FPS windows before triggering (avoids false positives) */
  triggerAfterWindows?: number;
  /** Called when FPS drops below threshold for sustained period */
  onLightMode?: () => void;
  /** Called when FPS recovers above threshold */
  onRecovery?: () => void;
}

// ─── Core class ───────────────────────────────────────────────────────────────

export class FrameBudgetMonitor {
  private readonly threshold: number;
  private readonly windowSize: number;
  private readonly triggerAfterWindows: number;
  private readonly onLightMode?: () => void;
  private readonly onRecovery?: () => void;

  private samples: number[] = [];
  private sampleIndex = 0;
  private lowWindows = 0;
  private _isLightMode = false;
  private _lastFps = 60;
  private _lastTimestamp = 0;

  constructor(options: FrameBudgetOptions = {}) {
    this.threshold = options.threshold ?? 55;
    this.windowSize = options.windowSize ?? 60;
    this.triggerAfterWindows = options.triggerAfterWindows ?? 3;
    this.onLightMode = options.onLightMode;
    this.onRecovery = options.onRecovery;
    this.samples = new Array(this.windowSize).fill(60);
  }

  /** Whether light mode is currently active */
  get isLightMode(): boolean {
    return this._isLightMode;
  }

  /** Most recent rolling average FPS */
  get fps(): number {
    return this._lastFps;
  }

  /**
   * Record a frame delta (seconds) from useFrame.
   * Call once per frame.
   */
  sample(delta: number): void {
    // Clamp delta to avoid extreme spikes (e.g., tab switch)
    const clampedDelta = Math.min(delta, 0.1);
    const instantFps = clampedDelta > 0 ? 1 / clampedDelta : 60;

    this.samples[this.sampleIndex] = instantFps;
    this.sampleIndex = (this.sampleIndex + 1) % this.windowSize;

    // Evaluate every full window
    if (this.sampleIndex === 0) {
      this.evaluate();
    }
  }

  /**
   * Record a frame using performance.now() timestamp.
   * Call once per requestAnimationFrame frame (no R3F needed).
   */
  tick(): void {
    const now = performance.now();
    if (this._lastTimestamp > 0) {
      const deltaMs = now - this._lastTimestamp;
      const delta = deltaMs / 1000;
      this.sample(delta);
    }
    this._lastTimestamp = now;
  }

  /** Force re-evaluation of the current window */
  evaluate(): void {
    let sum = 0;
    for (let i = 0; i < this.windowSize; i++) {
      sum += this.samples[i];
    }
    this._lastFps = Math.round(sum / this.windowSize);

    if (this._lastFps < this.threshold) {
      this.lowWindows++;
      if (!this._isLightMode && this.lowWindows >= this.triggerAfterWindows) {
        this._isLightMode = true;
        this.onLightMode?.();
      }
    } else {
      if (this._isLightMode && this.lowWindows === 0) {
        this._isLightMode = false;
        this.onRecovery?.();
      }
      // Decay low window counter on good frames
      if (this.lowWindows > 0) this.lowWindows--;
    }
  }

  /** Reset state (e.g., on route change) */
  reset(): void {
    this.samples.fill(60);
    this.sampleIndex = 0;
    this.lowWindows = 0;
    this._isLightMode = false;
    this._lastFps = 60;
    this._lastTimestamp = 0;
  }
}

// ─── Singleton for app-wide performance tracking ──────────────────────────────

let _globalMonitor: FrameBudgetMonitor | null = null;

/**
 * Get or create the global FrameBudgetMonitor singleton.
 * Pass options on first call to configure thresholds and callbacks.
 */
export function getPerformanceMonitor(
  options?: FrameBudgetOptions,
): FrameBudgetMonitor {
  if (!_globalMonitor) {
    _globalMonitor = new FrameBudgetMonitor(options);
  }
  return _globalMonitor;
}
