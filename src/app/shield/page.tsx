import type { Metadata } from "next";
import PlanetPageLayout from "@/components/layout/PlanetPageLayout";
import { buildPlanetMetadata } from "@/config/seoConfig";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildPlanetMetadata("shield");

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ShieldPage() {
  return (
    <PlanetPageLayout planetId="shield">
      {/* Privacy & Security Content */}
      <div className="space-y-12">
        {/* Privacy Protocol */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,rgba(85,85,85,0.3),transparent_55%)]" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[4px] text-gray-400 mb-3">Protocol Active</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Privacy Framework
            </h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Mizo Universe is engineered with privacy as a non-negotiable architectural layer. No
              tracking pixels. No third-party data brokers. No surveillance capitalism. Your presence
              in this universe is your own.
            </p>
          </div>
        </section>

        {/* Security Pillars */}
        <section>
          <h3 className="text-lg uppercase tracking-widest text-gray-400 mb-6">Security Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Data Minimization",
                description:
                  "Only the data required to operate this platform is collected. Zero behavioral profiling. Zero resale.",
              },
              {
                title: "Secure Transmission",
                description:
                  "All connections are encrypted via TLS 1.3. HTTP Strict Transport Security enforced site-wide.",
              },
              {
                title: "Content Security Policy",
                description:
                  "Strict CSP headers block unauthorized scripts, iframes, and resource injections across all routes.",
              },
              {
                title: "Cookie Transparency",
                description:
                  "Session persistence uses only first-party, SameSite=Strict cookies. No cross-site tracking.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#555555]/50 transition-colors"
              >
                <h4 className="font-bold uppercase tracking-wide text-sm text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Frameworks */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <h3 className="text-lg uppercase tracking-widest text-gray-400 mb-4">Legal Framework</h3>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>
              All content, media assets, and interactive experiences within Mizo Universe are the
              exclusive intellectual property of Mizo Amin. Reproduction, distribution, or unauthorized
              use of any asset is prohibited under international copyright law.
            </p>
            <p>
              The 20,000+ photographic assets accessible through the platform are hosted on
              mizoamin.com infrastructure and subject to individual licensing agreements. Commercial use
              requires explicit written authorization.
            </p>
            <p>
              This platform operates in compliance with applicable data protection regulations. Users
              in the European Economic Area retain rights to access, correction, deletion, and
              portability of any personal data held by this platform.
            </p>
          </div>
        </section>

        {/* Contact for Legal */}
        <section className="rounded-xl border border-[#555555]/30 bg-[#555555]/[0.05] p-6 text-center">
          <p className="text-gray-400 text-sm mb-2">Legal & Privacy Inquiries</p>
          <p className="text-white font-mono tracking-wide">privacy@mizoamin.com</p>
        </section>
      </div>
    </PlanetPageLayout>
  );
}

