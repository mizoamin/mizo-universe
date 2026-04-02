import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import ContactForm from "./ContactForm";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("contact");

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <PlanetPageLayout planetId="contact">
      {/* Inquiry Form */}
      <ContactForm />
    </PlanetPageLayout>
  );
}
