"use client";

/**
 * PlanetInfoPanel – overlay card shown in the "treatment" variant of the
 * `planet-info-panel` Amplitude experiment when the user clicks a planet.
 *
 * Security notes:
 *  - All content is static / code-defined; no user-supplied HTML is rendered.
 *  - No dangerouslySetInnerHTML.
 *  - The close button is a standard <button> with an explicit accessible label.
 */

import type { PlanetData } from "@/lib/planets";

interface PlanetInfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
}

export default function PlanetInfoPanel({ planet, onClose }: PlanetInfoPanelProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${planet.name} information`}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-sm px-4"
    >
      <div
        className="rounded-2xl border border-white/10 bg-black/80 p-5 text-white shadow-2xl backdrop-blur-md"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            className="text-xl font-bold tracking-wide"
            style={{ color: planet.color }}
          >
            {planet.name}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close planet info panel"
            className="rounded-full p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✕
          </button>
        </div>

        {/* Stats */}
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="text-zinc-500">Diameter</dt>
            <dd className="font-medium">
              {planet.diameter.toLocaleString()} km
            </dd>
          </div>
          <div>
            <dt className="text-zinc-500">From Sun</dt>
            <dd className="font-medium">
              {planet.distanceFromSun.toLocaleString()} M km
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-zinc-500">Orbital period</dt>
            <dd className="font-medium">
              {planet.orbitalPeriod.toLocaleString()} Earth days
            </dd>
          </div>
        </dl>

        {/* Fun fact */}
        <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-zinc-300">
          {planet.fact}
        </p>
      </div>
    </div>
  );
}
