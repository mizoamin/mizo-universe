/**
 * AudioPlayer — Minimalist audio player component for Voice planet
 *
 * Shows episode details and a play/pause button with duration slider.
 * Integrates with useAudioStore for mute state.
 */

"use client"

import { useState } from "react"
import { useAudioStore } from "@/engine/audioStore"

interface AudioPlayerProps {
  episode: {
    title: string
    titleAr: string
    description: string
    descriptionAr: string
    duration: string
    audioUrl: string
    date: string
  }
}

export default function AudioPlayer({ episode }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const { isMuted, toggleMute } = useAudioStore()

  return (
    <div className="space-y-6">
      {/* Episode Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white mb-1">
              {episode.title}
            </h3>
            <p className="text-sm font-mono text-white/40">{episode.titleAr}</p>
          </div>
          <span className="text-sm text-white/30 flex-shrink-0">
            {episode.date}
          </span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          {episode.description}
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-full cursor-pointer accent-pink-400"
            aria-label="Player progress"
          />
          <div className="flex items-center justify-between text-xs text-white/40 font-mono">
            <span>{Math.floor(progress)}%</span>
            <span>{episode.duration}</span>
          </div>
        </div>

        {/* Button Row */}
        <div className="flex items-center gap-3">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause episode" : "Play episode"}
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-all active:scale-95"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              {isPlaying ? (
                // Pause icon
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              ) : (
                // Play icon
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </button>

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="flex-shrink-0 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMuted ? (
                // Muted icon
                <>
                  <path d="M11 5L6 9H2v6h4l5 5V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </>
              ) : (
                // Unmuted icon
                <>
                  <path d="M11 5L6 9H2v6h4l5 5V5z" />
                  <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                </>
              )}
            </svg>
            {isMuted ? "Muted" : "Unmute"}
          </button>
        </div>
      </div>
    </div>
  )
}
