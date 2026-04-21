import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import ProjectOrbit from "@/components/ui/widgets/ProjectOrbit";
import StatPulse from "@/components/ui/widgets/StatPulse";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("ventures");

// ─── Active Projects ──────────────────────────────────────────────────────────

const VENTURE_PROJECTS = [
  {
    title: "Mizo Universe",
    description:
      "A cinematic, AI-powered personal brand platform built with Next.js, Three.js, and Sanity. The digital galaxy you're exploring right now.",
    status: "active" as const,
  },
  {
    title: "North Sports Club",
    description:
      "Leadership and management of one of Qatar's premier sports institutions. Building champions on and off the court.",
    status: "active" as const,
  },
  {
    title: "Sports Tech Academy",
    description:
      "Combining elite athletic training with cutting-edge technology. AI-driven coaching analytics and performance optimization.",
    status: "building" as const,
  },
  {
    title: "Digital Brand Studio",
    description:
      "Full-service digital branding for athletes and entrepreneurs in the MENA region. From strategy to execution.",
    status: "stealth" as const,
  },
  {
    title: "Content Empire",
    description:
      "A multi-platform content engine spanning blog, podcast, and video — powered by AI personas and bilingual publishing.",
    status: "active" as const,
  },
];

// ─── Business Metrics ─────────────────────────────────────────────────────────

const VENTURE_STATS = [
  { label: "Active Ventures", value: "4", sublabel: "Across Sports & Tech" },
  { label: "Markets", value: "3", sublabel: "Qatar, MENA, Global" },
  { label: "Team Members", value: "25+", sublabel: "Cross-Functional" },
  { label: "Years Building", value: "8+", sublabel: "Since University" },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function VenturesPage() {
  return (
    <PlanetPageLayout planetId="ventures">
      {/* Business Metrics */}
      <StatPulse
        stats={VENTURE_STATS}
        accentColor="#8A2BE2"
        title="Empire Metrics"
      />

      {/* Active Projects Orbit */}
      <div className="mt-16">
        <ProjectOrbit
          projects={VENTURE_PROJECTS}
          accentColor="#8A2BE2"
          title="Active Ventures"
        />
      </div>
    </PlanetPageLayout>
  );
}
