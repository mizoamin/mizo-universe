import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import ThoughtStream from "@/components/ui/widgets/ThoughtStream";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("library");

// ─── Library Thoughts — Leader is a Reader ────────────────────────────────────

const LIBRARY_THOUGHTS = [
  {
    text: "I consume books the way athletes consume protein — systematically, aggressively, and with intent to convert knowledge into performance.",
    textAr:
      "أستهلك الكتب كما يستهلك الرياضيون البروتين — بشكل منهجي وعنيف وبنيّة تحويل المعرفة إلى أداء.",
    source: "Mizo Amin",
  },
  {
    text: "Your mindset isn't just important — it IS the game. Before I step onto the court, the battle has already been won or lost inside my head.",
    textAr:
      "عقليتك ليست مهمة فحسب — هي اللعبة كلها. قبل أن أدخل الملعب، المعركة تكون قد حُسمت في رأسي.",
    source: "Mizo Amin",
  },
  {
    text: "Every book is a compressed lifetime. Reading is the closest thing to downloading someone else's decades of experience directly into your brain.",
    textAr:
      "كل كتاب هو عمر مضغوط. القراءة هي أقرب شيء لتنزيل عقود من خبرة شخص آخر مباشرة في دماغك.",
    source: "Mizo Amin",
  },
  {
    text: "The Stoics taught me to control what I can and release what I can't. The court taught me to execute under pressure. Together, they made me dangerous.",
    textAr:
      "علّمني الرواقيون أن أتحكم فيما أستطيع وأطلق ما لا أستطيع. الملعب علّمني التنفيذ تحت الضغط. معًا، جعلوني خطيرًا.",
    source: "Mizo Amin",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function LibraryPage() {
  return (
    <PlanetPageLayout planetId="library">
      {/* Leader is a Reader */}
      <ThoughtStream
        thoughts={LIBRARY_THOUGHTS}
        accentColor="#ffffff"
        title="Leader Is A Reader"
      />
    </PlanetPageLayout>
  );
}
