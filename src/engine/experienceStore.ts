import { create } from "zustand"

export type Mode = "free" | "approach" | "isolation" | "enter" | "cinematic" | "jupiter-hub"

interface ExperienceState {
  mode: Mode
  activePlanet: string | null
  cinematicPlanetIndex: number
  selectedMoonId: string | null
  setMode: (mode: Mode) => void
  setPlanet: (id: string | null) => void
  setCinematicPlanetIndex: (idx: number) => void
  setSelectedMoon: (id: string | null) => void
  resetExperience: () => void
}

export const useExperience = create<ExperienceState>((set) => ({
  mode: "jupiter-hub",
  activePlanet: null,
  cinematicPlanetIndex: 0,
  selectedMoonId: null,

  setMode: (mode) => set({ mode }),

  setPlanet: (id) => set({ activePlanet: id }),

  setCinematicPlanetIndex: (idx) => set({ cinematicPlanetIndex: idx }),

  setSelectedMoon: (id) => set({ selectedMoonId: id }),

  resetExperience: () =>
    set({
      mode: "jupiter-hub",
      activePlanet: null,
      cinematicPlanetIndex: 0,
      selectedMoonId: null,
    }),
}))