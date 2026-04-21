import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import ThoughtStream from "@/components/ui/widgets/ThoughtStream";
import StatPulse from "@/components/ui/widgets/StatPulse";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("legacy");

// ─── Legacy Heritage Stats ────────────────────────────────────────────────────

const LEGACY_STATS = [
  { label: "Debut Age", value: "4", sublabel: "Youngest in Qatar History" },
  { label: "National Team", value: "2017", sublabel: "Top Gulf 3PT Shooter" },
  { label: "Club Legacy", value: "Al Shamal", sublabel: "Captain & Leader" },
  { label: "7th Asian", value: "Shooter", sublabel: "Continental Recognition" },
];

// ─── Heritage Thoughts ────────────────────────────────────────────────────────

const LEGACY_THOUGHTS = [
  {
    text: "Legacy isn't what you build for yourself. It's the foundation you leave for those who come after you.",
    textAr:
      "الإرث ليس ما تبنيه لنفسك. إنه الأساس الذي تتركه لمن يأتي بعدك.",
    source: "Mizo Amin",
  },
  {
    text: "My father taught me that the court doesn't care about your name — only your discipline. That's the Amin coaching DNA.",
    textAr:
      "علّمني أبي أن الملعب لا يهتم باسمك — فقط بانضباطك. هذا هو الحمض النووي لعائلة أمين في التدريب.",
    source: "Mizo Amin",
  },
  {
    text: "Every trophy in this archive was paid for in hours nobody saw — early mornings, late nights, and the quiet war against mediocrity.",
    textAr:
      "كل كأس في هذا الأرشيف دُفع ثمنه بساعات لم يرها أحد — صباحات مبكرة، ليالٍ متأخرة، والحرب الهادئة ضد الاعتيادية.",
    source: "Mizo Amin",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function LegacyPage() {
  return (
    <PlanetPageLayout planetId="legacy">
      {/* Heritage Stats */}
      <StatPulse
        stats={LEGACY_STATS}
        accentColor="#ffaa00"
        title="Heritage Timeline"
      />

      {/* Family Coaching Legacy */}
      <div className="mt-16">
        <ThoughtStream
          thoughts={LEGACY_THOUGHTS}
          accentColor="#ffaa00"
          title="The Amin Dynasty"
        />
      </div>
    </PlanetPageLayout>
  );
}