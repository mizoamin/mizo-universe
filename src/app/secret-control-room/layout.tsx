import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secret Control Room | Mizo Universe",
  robots: { index: false, follow: false },
};

export default function SecretControlRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
