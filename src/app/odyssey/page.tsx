import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import StatPulse from "@/components/ui/widgets/StatPulse";
import ThoughtStream from "@/components/ui/widgets/ThoughtStream";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("odyssey");

// ─── Odyssey Career Stats ─────────────────────────────────────────────────────

const ODYSSEY_STATS = [
  { label: "Points Per Game", value: "18.4", sublabel: "Career Average" },
  { label: "Career Games", value: "350+", sublabel: "Professional Level" },
  { label: "3PT Accuracy", value: "41%", sublabel: "Gulf Region Top 10" },
  { label: "Championships", value: "5", sublabel: "National & Club Titles" },
];

// ─── Mizo Thoughts ────────────────────────────────────────────────────────────

const ODYSSEY_THOUGHTS = [
  {
    text: "The court is the only place where the truth can't be faked. Every shot, every defensive stop — it's raw, real, and permanent.",
    textAr:
      "الملعب هو المكان الوحيد حيث لا يمكن تزييف الحقيقة. كل تسديدة، كل وقفة دفاعية — خام وحقيقي ودائم.",
    source: "Mizo Amin",
  },
  {
    text: "Leadership isn't a title. It's the decision to show up first and leave last, every single day, for years.",
    textAr:
      "القيادة ليست لقبًا. إنها قرار أن تأتي أولًا وتغادر آخرًا، كل يوم، لسنوات.",
    source: "Mizo Amin",
  },
  {
    text: "I don't play basketball. I study it, I engineer it, I wage war through it. The court is my laboratory.",
    textAr:
      "أنا لا ألعب كرة السلة. أدرسها، أهندسها، أخوض حربي من خلالها. الملعب مختبري.",
    source: "Mizo Amin",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function OdysseyPage() {
  return (
    <PlanetPageLayout planetId="odyssey">
      {/* Career Stats */}
      <StatPulse
        stats={ODYSSEY_STATS}
        accentColor="#4488ff"
        title="Career Metrics"
      />

      {/* Athlete Mindset */}
      <div className="mt-16">
        <ThoughtStream
          thoughts={ODYSSEY_THOUGHTS}
          accentColor="#4488ff"
          title="From The Court"
        />
      </div>
    </PlanetPageLayout>
  );
}
