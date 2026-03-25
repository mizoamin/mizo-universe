"use client";

import dynamic from "next/dynamic";

// Lazy-load the heavy R3F canvas so it never runs on the server
const SolarSystem = dynamic(() => import("@/components/scene/SolarSystem"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <span className="animate-pulse text-sm tracking-widest text-zinc-500 uppercase">
        Loading universe…
      </span>
    </div>
  ),
});

export default SolarSystem;
