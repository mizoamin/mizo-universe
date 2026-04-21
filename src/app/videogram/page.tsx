import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import SmartCinemaGrid from "@/components/ui/widgets/SmartCinemaGrid";
import {
  getVideogramEntries,
  getVideogramCategories,
} from "@/lib/videogramRegistry";
import { buildPlanetMetadata } from "@/config/seoConfig";

export const metadata: Metadata = buildPlanetMetadata("videogram");

export default function VideogramPage() {
  const entries = getVideogramEntries();
  const categories = getVideogramCategories();

  return (
    <PlanetPageLayout planetId="videogram">
      {/* ── Time-Stamp Engine Header ── */}
      <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(192,192,192,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(192,192,192,0.1),transparent_45%)]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[4px] text-gray-400 mb-3">
            Time-Stamp Engine Active
          </p>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Smart Cinematic Archive
          </h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Hybrid Video System online. Every entry carries start-time precision, bilingual metadata,
            and AI-generated summaries. YouTube embeds and direct CDN assets are auto-detected and
            rendered with the appropriate player. Expand the archive by adding entries to the registry.
          </p>
        </div>
      </div>

      {/* ── Smart Cinema Grid ── */}
      <SmartCinemaGrid
        entries={entries}
        categories={categories}
        accentColor="#c0c0c0"
      />
    </PlanetPageLayout>
  );
}
