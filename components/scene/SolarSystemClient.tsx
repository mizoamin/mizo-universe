"use client";

import dynamic from "next/dynamic";

/**
 * Client-side wrapper that lazy-loads the WebGL canvas.
 *
 * `ssr: false` must live inside a Client Component ("use client") when using
 * Next.js 16 App Router; it cannot be used directly in a Server Component.
 *
 * Security: dynamic import with no external source – the module is bundled
 * locally and never fetched from an untrusted origin.
 */
const SolarSystem = dynamic(() => import("./SolarSystem"), { ssr: false });

export default function SolarSystemClient() {
  return <SolarSystem />;
}
