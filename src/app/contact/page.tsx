import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import ContactForm from "./ContactForm";
import AppointmentSection from "./AppointmentSection";
import ContactSocials from "./ContactSocials";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("contact");

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <PlanetPageLayout planetId="contact">
      {/* Appointment booking */}
      <AppointmentSection />

      {/* Social media handles */}
      <ContactSocials />

      {/* Direct inquiry form → mailto:contact@mizoamin.com */}
      <ContactForm />
    </PlanetPageLayout>
  );
}
