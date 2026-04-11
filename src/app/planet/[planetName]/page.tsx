"use client";
import React, { use } from "react";
import { notFound } from "next/navigation";
import { planetsData } from "@/config/planetMetadata";
import dynamic from "next/dynamic";

// Dynamic imports for planet components (only identity + legacy are implemented)
const PlanetComponents: Record<string, React.ComponentType<any>> = {
  identity: dynamic(() => import("@/components/3d/planets/IdentityPlanet")),
  legacy: dynamic(() => import("@/components/3d/planets/LegacyPlanet")),
  vision: dynamic(() => import("@/components/3d/planets/VisionPlanet")),
};

export default function PlanetPage({ params }: { params: Promise<{ planetName: string }> }) {
  const resolvedParams = use(params);
  const slug = decodeURIComponent(resolvedParams.planetName).toLowerCase();

  // Validate slug against planetMetadata
  const planet = Object.values(planetsData).find((p) => p.id === slug);
  
  if (!planet) {
    notFound();
  }

  // Get the component for this planet (or fallback to placeholder)
  const PlanetComponent = PlanetComponents[slug];

  if (!PlanetComponent) {
    // Planets without custom visuals (8 planets) render a minimal fallback
    return (
      <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-black uppercase">{planet.name}</h1>
        <p className="mt-4 text-gray-400">{planet.ui.description}</p>
        <p className="mt-8 text-sm text-gray-600">[Planet visual implementation coming soon]</p>
      </div>
    );
  }

  return <PlanetComponent />;
}