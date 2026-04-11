export type PlanetId = 
  | "identity" | "legacy" | "vision" | "odyssey" | "ventures" 
  | "voice" | "videogram" | "library" | "contact" | "shield";

export interface PlanetMetadata {
  id: PlanetId;
  name: string;
  themeColor: string;
  orbitRadius: number;
  baseSize: number;
  orbitSpeed: number;
  routePath: string;
  ui: {
    title: string;
    description: string;
  };
}

export const planetsData: Record<PlanetId, PlanetMetadata> = {
  identity: {
    id: "identity", name: "Identity", themeColor: "#ffd4a3",
    orbitRadius: 6, baseSize: 0.8, orbitSpeed: 0.003, routePath: "/identity",
    ui: { title: "CORE IDENTITY", description: "Initialize sequence to explore the heritage and foundational roots." }
  },
  legacy: {
    id: "legacy", name: "Legacy", themeColor: "#ffaa00",
    orbitRadius: 9, baseSize: 1.0, orbitSpeed: 0.0025, routePath: "/legacy",
    ui: { title: "LEGACY ARCHIVES", description: "Accessing spatial data... Explore the basketball journey and achievements." }
  },
  vision: {
    id: "vision", name: "Vision", themeColor: "#00ffff",
    orbitRadius: 12, baseSize: 0.9, orbitSpeed: 0.002, routePath: "/vision",
    ui: { title: "FUTURE VISION", description: "Analyzing technological trajectories and AI innovation modules." }
  },
  odyssey: {
    id: "odyssey", name: "Odyssey", themeColor: "#4488ff",
    orbitRadius: 15, baseSize: 1.1, orbitSpeed: 0.0018, routePath: "/odyssey",
    ui: { title: "THE ODYSSEY", description: "Tracing the global travel logs and geographical milestones." }
  },
  ventures: {
    id: "ventures", name: "Ventures", themeColor: "#8A2BE2",
    orbitRadius: 18, baseSize: 0.85, orbitSpeed: 0.0015, routePath: "/ventures",
    ui: { title: "COMMERCIAL VENTURES", description: "Reviewing active business nodes and corporate architecture." }
  },
  voice: {
    id: "voice", name: "Voice", themeColor: "#ff0080",
    orbitRadius: 21, baseSize: 0.95, orbitSpeed: 0.0013, routePath: "/voice",
    ui: { title: "VOICE & BROADCAST", description: "Decoding audio signals, podcast streams, and public speaking logs." }
  },
  videogram: {
    id: "videogram", name: "Videogram", themeColor: "#c0c0c0",
    orbitRadius: 24, baseSize: 1.05, orbitSpeed: 0.0011, routePath: "/videogram",
    ui: { title: "MEDIA HIGHLIGHTS", description: "Accessing the visual database and cinematic representations." }
  },
  library: {
    id: "library", name: "Library", themeColor: "#ffffff",
    orbitRadius: 27, baseSize: 0.9, orbitSpeed: 0.0009, routePath: "/library",
    ui: { title: "KNOWLEDGE BASE", description: "Entering the central repository of philosophy and stored intelligence." }
  },
  contact: {
    id: "contact", name: "Contact", themeColor: "#00ff88",
    orbitRadius: 30, baseSize: 1.0, orbitSpeed: 0.0008, routePath: "/contact",
    ui: { title: "COMMUNICATION NODE", description: "Establishing secure links for direct connection and AI chat." }
  },
  shield: {
    id: "shield", name: "Shield", themeColor: "#555555",
    orbitRadius: 33, baseSize: 0.8, orbitSpeed: 0.0006, routePath: "/shield",
    ui: { title: "SECURITY SHIELD", description: "Monitoring defense mechanisms, legal assets, and system integrity." }
  }
};

// Helper function to map through planets easily
export const getPlanetsArray = () => Object.values(planetsData);

// ─── Planet Navigation ────────────────────────────────────────────────────────

/** Returns the previous and next planets in orbital order for planet-to-planet navigation */
export function getPlanetNeighbors(id: PlanetId): {
  prev: PlanetMetadata | null;
  next: PlanetMetadata | null;
} {
  const planets = getPlanetsArray();
  const idx = planets.findIndex((p) => p.id === id);
  return {
    prev: idx > 0 ? planets[idx - 1] : null,
    next: idx < planets.length - 1 ? planets[idx + 1] : null,
  };
}