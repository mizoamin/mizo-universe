import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mizo Universe",
  description: "Official digital ecosystem of Captain Mizo Amin — a hyper-realistic 3D solar system portfolio blending sports, business, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
