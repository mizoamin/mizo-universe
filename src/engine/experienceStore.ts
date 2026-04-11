import { create } from "zustand"

export type Mode = "free" | "approach" | "isolation" | "enter" | "cinematic"

interface ExperienceState {
  mode: Mode
  activePlanet: string | null
  cinematicPlanetIndex: number
  setMode: (mode: Mode) => void
  setPlanet: (id: string | null) => void
  setCinematicPlanetIndex: (idx: number) => void
  resetExperience: () => void
}

export const useExperience = create<ExperienceState>((set) => ({
  mode: "free",
  activePlanet: null,
  cinematicPlanetIndex: 0,

  setMode: (mode) => set({ mode }),

  setPlanet: (id) => set({ activePlanet: id }),

  setCinematicPlanetIndex: (idx) => set({ cinematicPlanetIndex: idx }),

  resetExperience: () =>
    set({
      mode: "free",
      activePlanet: null,
      cinematicPlanetIndex: 0,
    }),
}))