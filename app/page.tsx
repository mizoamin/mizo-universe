import SolarSystemClient from "@/components/scene/SolarSystemClient";

export default function Home() {
  return (
    <main className="relative h-full w-full overflow-hidden">
      {/* 3D scene fills the entire viewport */}
      <div className="absolute inset-0">
        <SolarSystemClient />
      </div>

      {/* HUD overlay – purely static text, no user input rendered */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none z-10">
        <h1 className="text-3xl font-bold tracking-widest text-white drop-shadow-lg">
          MIZO UNIVERSE
        </h1>
        <p className="mt-1 text-sm text-zinc-400 tracking-wide">
          Captain Mizo Amin · Sports · Business · Technology
        </p>
      </header>

      <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-zinc-600 pointer-events-none select-none z-10">
        Drag to orbit · Scroll to zoom
      </footer>
    </main>
  );
}
