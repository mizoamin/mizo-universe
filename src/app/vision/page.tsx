import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import ProjectOrbit from "@/components/ui/widgets/ProjectOrbit";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("vision");

// ─── Tech Projects ────────────────────────────────────────────────────────────

const VISION_PROJECTS = [
  {
    title: "Mizo Universe Platform",
    description:
      "A cinematic 3D personal brand platform built with Next.js 16, React Three Fiber, and 15 AI personas. The project you're experiencing now.",
    status: "active" as const,
  },
  {
    title: "AI Persona Engine",
    description:
      "15 synthetic intelligence personas, each with unique voice, tone, and visual signature. Powering bilingual content generation at scale.",
    status: "active" as const,
  },
  {
    title: "Sports Analytics AI",
    description:
      "Computer vision and machine learning models for basketball performance analysis. Shot tracking, defensive positioning, play prediction.",
    status: "building" as const,
  },
  {
    title: "Spatial Computing Lab",
    description:
      "Exploring Apple Vision Pro and spatial web interfaces. Building the next generation of immersive athlete brand experiences.",
    status: "stealth" as const,
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function VisionPage() {
  return (
    <PlanetPageLayout planetId="vision">
      {/* Tech Projects */}
      <ProjectOrbit
        projects={VISION_PROJECTS}
        accentColor="#00ffff"
        title="Innovation Lab"
      />
    </PlanetPageLayout>
  );
}
