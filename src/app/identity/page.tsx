import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import StatPulse from "@/components/ui/widgets/StatPulse";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("identity");

// ─── Identity Milestones ──────────────────────────────────────────────────────

const IDENTITY_STATS = [
  { label: "Started Basketball", value: "Age 4", sublabel: "Qatar" },
  { label: "National Team", value: "Captain", sublabel: "Qatar Men's National" },
  { label: "Education", value: "Marketing", sublabel: "Qatar University" },
  { label: "Languages", value: "3", sublabel: "Arabic · English · Tech" },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function IdentityPage() {
  return (
    <PlanetPageLayout planetId="identity">
      {/* Personal Milestones */}
      <StatPulse
        stats={IDENTITY_STATS}
        accentColor="#ffd4a3"
        title="Personal Milestones"
      />
    </PlanetPageLayout>
  );
}