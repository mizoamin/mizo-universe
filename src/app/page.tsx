import SolarSystemClient from "@/components/ui/SolarSystemClient";

export default function Home() {
  return (
    <main className="relative h-full w-full overflow-hidden bg-black">
      {/* Full-viewport 3D canvas */}
      <div className="absolute inset-0">
        <SolarSystemClient />
      </div>

      {/* HUD overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center gap-1 pt-8">
        <h1 className="text-2xl font-bold tracking-[0.25em] text-white/90 uppercase drop-shadow-lg">
          Mizo Universe
        </h1>
        <p className="text-xs tracking-widest text-white/40 uppercase">
          Sports · Business · Technology
        </p>
      </div>

      <p className="pointer-events-none absolute bottom-6 inset-x-0 text-center text-[10px] tracking-widest text-white/25 uppercase">
        Drag to explore · Scroll to zoom
      </p>
    </main>
  );
}
