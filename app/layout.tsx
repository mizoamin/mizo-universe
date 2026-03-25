import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mizo Universe – 3D Solar System Portfolio",
  description:
    "The official digital ecosystem of Captain Mizo Amin. A hyper-realistic 3D solar system portfolio blending sports, business, and technology.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizo-universe.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
