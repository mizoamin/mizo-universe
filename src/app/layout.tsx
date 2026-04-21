import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: {
    default: "MIZO UNIVERSE — Mizo Amin",
    template: "%s | MIZO UNIVERSE",
  },
  description:
    "Athlete, tech architect, entrepreneur. Explore Mizo Amin's immersive 3D universe — sports, business, mindset, and beyond.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_QA",
    siteName: "MIZO UNIVERSE",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mizoamin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
        {/* DNS prefetch for Sanity CDN */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        {/* Vercel Analytics — auto pageview tracking */}
        <Analytics />
        {/* Vercel Speed Insights — Core Web Vitals monitoring */}
        <SpeedInsights />
      </body>
    </html>
  );
}