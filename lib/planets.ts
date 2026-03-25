/**
 * Static data for the eight solar system planets.
 * Centralised here so both the 3-D scene and the info panel share one source
 * of truth without any circular imports.
 */

export interface PlanetData {
  id: string;
  name: string;
  orbitRadius: number;
  size: number;
  speed: number;
  color: string;
  initialAngle: number;
  axialTilt?: number;
  /** Mean diameter in kilometres */
  diameter: number;
  /** Mean distance from the Sun in million km */
  distanceFromSun: number;
  /** Length of one orbit in Earth days */
  orbitalPeriod: number;
  /** A short, interesting fact about the planet */
  fact: string;
}

const TWO_PI = Math.PI * 2;

export const PLANETS: PlanetData[] = [
  {
    id: "mercury",
    name: "Mercury",
    orbitRadius: 10,
    size: 0.4,
    speed: 0.02,
    color: "#b5b5b5",
    initialAngle: 0 * (TWO_PI / 8),
    diameter: 4_879,
    distanceFromSun: 57.9,
    orbitalPeriod: 88,
    fact: "Mercury has no atmosphere, so temperatures swing from -180 °C to 430 °C.",
  },
  {
    id: "venus",
    name: "Venus",
    orbitRadius: 15,
    size: 0.9,
    speed: 0.015,
    color: "#e8cda0",
    initialAngle: 1 * (TWO_PI / 8),
    diameter: 12_104,
    distanceFromSun: 108.2,
    orbitalPeriod: 225,
    fact: "Venus rotates backwards compared to most planets – the Sun rises in the west.",
  },
  {
    id: "earth",
    name: "Earth",
    orbitRadius: 20,
    size: 1,
    speed: 0.01,
    color: "#4fc3f7",
    initialAngle: 2 * (TWO_PI / 8),
    diameter: 12_742,
    distanceFromSun: 149.6,
    orbitalPeriod: 365,
    fact: "Earth is the only known planet harbouring life – so far!",
  },
  {
    id: "mars",
    name: "Mars",
    orbitRadius: 28,
    size: 0.6,
    speed: 0.008,
    color: "#c1440e",
    initialAngle: 3 * (TWO_PI / 8),
    diameter: 6_779,
    distanceFromSun: 227.9,
    orbitalPeriod: 687,
    fact: "Olympus Mons on Mars is the tallest volcano in the solar system at 22 km.",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    orbitRadius: 45,
    size: 3.5,
    speed: 0.004,
    color: "#c88b3a",
    initialAngle: 4 * (TWO_PI / 8),
    diameter: 139_820,
    distanceFromSun: 778.5,
    orbitalPeriod: 4_333,
    fact: "The Great Red Spot is a storm that has raged on Jupiter for over 350 years.",
  },
  {
    id: "saturn",
    name: "Saturn",
    orbitRadius: 65,
    size: 2.8,
    speed: 0.003,
    color: "#e4d191",
    initialAngle: 5 * (TWO_PI / 8),
    diameter: 116_460,
    distanceFromSun: 1_432,
    orbitalPeriod: 10_759,
    fact: "Saturn is so light it could theoretically float in a large enough body of water.",
  },
  {
    id: "uranus",
    name: "Uranus",
    orbitRadius: 82,
    size: 1.8,
    speed: 0.002,
    color: "#7de8e8",
    initialAngle: 6 * (TWO_PI / 8),
    axialTilt: 1.7,
    diameter: 50_724,
    distanceFromSun: 2_867,
    orbitalPeriod: 30_589,
    fact: "Uranus orbits the Sun on its side with an axial tilt of 98°.",
  },
  {
    id: "neptune",
    name: "Neptune",
    orbitRadius: 98,
    size: 1.7,
    speed: 0.001,
    color: "#5b5ddf",
    initialAngle: 7 * (TWO_PI / 8),
    diameter: 49_244,
    distanceFromSun: 4_495,
    orbitalPeriod: 60_182,
    fact: "Winds on Neptune can reach 2,100 km/h – the fastest in the solar system.",
  },
] as const;
