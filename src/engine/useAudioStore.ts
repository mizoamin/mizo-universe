"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SfxType = "click" | "hover" | "warp";

interface AudioState {
  isMuted: boolean;
  ambientVolume: number;
  isAmbientPlaying: boolean;
  setMuted: (muted: boolean) => void;
  toggleMute: () => void;
  setAmbientVolume: (volume: number) => void;
  startAmbientLoop: () => void;
  stopAmbientLoop: () => void;
  playSfx: (type: SfxType) => void;
}

const SFX_PATHS: Record<SfxType, string> = {
  click: process.env.NEXT_PUBLIC_SFX_CLICK_PATH || "",
  hover: process.env.NEXT_PUBLIC_SFX_HOVER_PATH || "",
  warp: process.env.NEXT_PUBLIC_SFX_WARP_PATH || "",
};

const AMBIENT_PATH = process.env.NEXT_PUBLIC_AMBIENT_AUDIO_PATH || "";

let ambientAudio: HTMLAudioElement | null = null;

function clamp01(value: number): number {
  return Math.max(0, Math.min(value, 1));
}

function getAmbientAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!AMBIENT_PATH) return null;
  if (!ambientAudio) {
    ambientAudio = new Audio(AMBIENT_PATH);
    ambientAudio.loop = true;
    ambientAudio.preload = "auto";
  }
  return ambientAudio;
}

function playOneShot(path: string, volume: number): void {
  if (typeof window === "undefined") return;
  if (!path) return;
  try {
    const sfx = new Audio(path);
    sfx.volume = clamp01(volume);
    void sfx.play().catch(() => {
      // Ignore autoplay-blocked promises until user interaction occurs.
    });
  } catch {
    // Ignore audio API failures gracefully.
  }
}

export const useAudioStore = create<AudioState>()(
  persist(
    (set, get) => ({
      isMuted: false,
      ambientVolume: 0.25,
      isAmbientPlaying: false,

      setMuted: (muted) => {
        set({ isMuted: muted });
        const audio = getAmbientAudio();
        if (!audio) return;
        if (muted) {
          audio.pause();
          set({ isAmbientPlaying: false });
        } else if (get().isAmbientPlaying) {
          audio.volume = clamp01(get().ambientVolume);
          void audio.play().catch(() => {
            // Browser may require gesture; keep state true for retry.
          });
        }
      },

      toggleMute: () => {
        const nextMuted = !get().isMuted;
        get().setMuted(nextMuted);
      },

      setAmbientVolume: (volume) => {
        const next = clamp01(volume);
        set({ ambientVolume: next });
        const audio = getAmbientAudio();
        if (audio) audio.volume = next;
      },

      startAmbientLoop: () => {
        if (get().isMuted) return;
        const audio = getAmbientAudio();
        if (!audio) return;
        audio.volume = clamp01(get().ambientVolume);
        set({ isAmbientPlaying: true });
        void audio.play().catch(() => {
          // Browser may block autoplay; state remains for next interaction.
        });
      },

      stopAmbientLoop: () => {
        const audio = getAmbientAudio();
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        set({ isAmbientPlaying: false });
      },

      playSfx: (type) => {
        if (get().isMuted) return;
        const path = SFX_PATHS[type];
        if (!path) return;
        const volume = type === "hover" ? 0.2 : type === "warp" ? 0.6 : 0.35;
        playOneShot(path, volume);
      },
    }),
    {
      name: "mizo-audio-store",
      partialize: (state) => ({
        isMuted: state.isMuted,
        ambientVolume: state.ambientVolume,
      }),
    }
  )
);
