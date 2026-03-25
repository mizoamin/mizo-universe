import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TWITTER_HANDLE,
  getCanonicalUrl,
} from "@/lib/seo/metadata";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Explore Mizo Universe — a hyper-realistic 3D solar system portfolio showcasing Captain Mizo Amin's world across sports, business, and technology.",

  keywords: [
    "Mizo Amin",
    "Captain Mizo Amin",
    "Mizo Universe",
    "3D solar system portfolio",
    "sports business technology",
    "digital ecosystem",
    "interactive 3D",
    "athlete entrepreneur",
    "digital brand",
  ],

  authors: [{ name: "Mizo Amin", url: SITE_URL }],
  creator: "Mizo Amin",
  publisher: "Mizo Universe",

  alternates: {
    canonical: getCanonicalUrl("/"),
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: getCanonicalUrl("/"),
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Explore Mizo Universe — a hyper-realistic 3D solar system portfolio showcasing Captain Mizo Amin's world across sports, business, and technology.",
    images: [
      {
        url: getCanonicalUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Interactive 3D Solar System Portfolio`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Explore Mizo Universe — a hyper-realistic 3D solar system portfolio showcasing Captain Mizo Amin's world across sports, business, and technology.",
    images: [getCanonicalUrl("/og-image.jpg")],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
