import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import VoiceSignalGrid from "@/components/ui/widgets/VoiceSignalGrid";
import { getVoiceRegistryData } from "@/lib/voiceRegistry";
import { buildPlanetMetadata } from "@/config/seoConfig";

export const metadata: Metadata = buildPlanetMetadata("voice");

export default async function VoicePage() {
  const payload = await getVoiceRegistryData(12);

  return (
    <PlanetPageLayout planetId="voice">
      <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(255,0,128,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,79,166,0.2),transparent_45%)]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[4px] text-pink-400 mb-3">Sonic Pulse Engine</p>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Podcast & Interview Frequency
          </h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Hybrid registry mode is active. Voice metadata is parsed from Hostinger intelligence files and projected as
            a signal archive. Every card is a recoverable media transmission with bilingual context.
          </p>
        </div>
      </div>

      <VoiceSignalGrid
        accentColor="#ff0080"
        title="Voice Signal Archive"
        taxonomy={payload.taxonomy}
        items={payload.items}
      />
    </PlanetPageLayout>
  );
}
