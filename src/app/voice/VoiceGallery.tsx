/**
 * VoiceGallery — Audio content grid for the Voice planet
 *
 * Displays podcast episodes, interviews, and audio clips.
 * Each item has a title, description, duration, and a play button.
 *
 * This is a placeholder implementation with sample data.
 * Real data would come from a Sanity CMS collection or webhook.
 */

"use client"

import { useState } from "react"
import AudioPlayer from "@/components/ui/AudioPlayer"

interface PodcastEpisode {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  duration: string
  audioUrl: string
  coverImage: string
  episodeNumber?: number
  date: string
}

// Sample podcast data (placeholder — would be fetched from CMS or API)
const PODCAST_DATA: PodcastEpisode[] = [
  {
    id: "ep-001",
    title: "The Athlete's Mindset",
    titleAr: "عقلية الرياضي",
    description:
      "Deep dive into the psychology of peak performance, resilience, and mental toughness.",
    descriptionAr:
      "غوص عميق في علم نفس الأداء القمي والمرونة والقوة العقلية.",
    duration: "45:32",
    audioUrl: "/audio/episodes/episode-001.mp3",
    coverImage: "/images/podcasts/mindset.webp",
    episodeNumber: 1,
    date: "March 2026",
  },
  {
    id: "ep-002",
    title: "Business, Basketball & Beyond",
    titleAr: "الأعمال والكرة السلة وما وراءها",
    description:
      "Interview with visionary entrepreneurs on balancing sports and business empire.",
    descriptionAr:
      "مقابلة مع رجال أعمال حول التوازن بين الرياضة والإمبراطورية التجارية.",
    duration: "52:15",
    audioUrl: "/audio/episodes/episode-002.mp3",
    coverImage: "/images/podcasts/business.webp",
    episodeNumber: 2,
    date: "February 2026",
  },
  {
    id: "interview-01",
    title: "The Qatar Basketball Journey",
    titleAr: "رحلة كرة السلة القطرية",
    description:
      "Mizo reflects on his legacy with Qatar national team and regional achievements.",
    descriptionAr:
      "ميزو يتحدث عن إرثه مع منتخب قطر والإنجازات الإقليمية.",
    duration: "38:47",
    audioUrl: "/audio/interviews/qatar-journey.mp3",
    coverImage: "/images/podcasts/qatar.webp",
    date: "January 2026",
  },
  {
    id: "reflection-01",
    title: "Life After Peak Performance",
    titleAr: "الحياة بعد الأداء الذروي",
    description:
      "Personal reflections on transition, growth, and building a lasting legacy.",
    descriptionAr:
      "تأملات شخصية حول الانتقال والنمو وبناء إرث دائم.",
    duration: "29:16",
    audioUrl: "/audio/reflections/after-peak.mp3",
    coverImage: "/images/podcasts/legacy.webp",
    date: "December 2025",
  },
]

export default function VoiceGallery() {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(
    PODCAST_DATA[0]
  )

  return (
    <div className="space-y-12">
      {/* Tape Deck / Player */}
      {selectedEpisode && (
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 sticky top-24 z-40 backdrop-blur">
          <AudioPlayer episode={selectedEpisode} />
        </div>
      )}

      {/* Episode Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PODCAST_DATA.map((episode) => (
          <button
            key={episode.id}
            onClick={() => setSelectedEpisode(episode)}
            className={`group relative overflow-hidden rounded-xl border transition-all duration-300 text-left
              ${
                selectedEpisode?.id === episode.id
                  ? "border-white/30 bg-white/10 ring-2 ring-pink-400/50"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }
            `}
          >
            {/* Cover image */}
            <div className="relative w-full h-40 bg-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white/40 group-hover:text-white/60 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              {episode.episodeNumber && (
                <span className="text-[10px] font-mono tracking-widest text-pink-400/60 uppercase">
                  Episode {episode.episodeNumber}
                </span>
              )}

              <div>
                <h3 className="text-base font-bold text-white mb-1 line-clamp-2 group-hover:text-pink-200 transition-colors">
                  {episode.title}
                </h3>
                <p className="text-[12px] font-mono text-white/40">
                  {episode.titleAr}
                </p>
              </div>

              <p className="text-sm text-white/50 line-clamp-2">
                {episode.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-white/30">{episode.date}</span>
                <span className="text-xs font-mono text-white/40">
                  {episode.duration}
                </span>
              </div>
            </div>

            {/* Play indicator */}
            {selectedEpisode?.id === episode.id && (
              <div className="absolute top-3 right-3 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
