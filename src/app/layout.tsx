import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mizo Universe — Captain Mizo Amin",
  description:
    "The official digital ecosystem of Captain Mizo Amin. A hyper-realistic 3D solar system portfolio blending sports, business, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black antialiased">{children}</body>
    </html>
  );
}
