/**
 * Videogram Registry — Smart Cinematic Archive with Time-Stamp Engine
 *
 * Hybrid Video System: supports both YouTube embeds and direct Hostinger CDN assets.
 * Every entry carries: videoURL, startTime (seconds), title_AR, title_EN, ai_summary.
 *
 * EVOLUTION HOOK: To expand the archive, simply add new entries to
 * VIDEOGRAM_ENTRIES below. No rebuild required — the data is read at
 * build/request time by Next.js Server Components.
 */

import { HOSTINGER_CDN_BASE } from "@/data/hostinger-registry/assetHelper";

// ─── Types ────────────────────────────────────────────────────────────────────

export type VideoSourceType = "youtube" | "mp4";

export interface VideogramEntry {
  /** Unique identifier */
  id: string;
  /** Full video URL — YouTube watch link or direct CDN .mp4 path */
  videoURL: string;
  /** Start playback at this second (Time-Stamp Engine) */
  startTime: number;
  /** English title */
  title_EN: string;
  /** Arabic title */
  title_AR: string;
  /** AI-generated one-liner summary */
  ai_summary: string;
  /** Auto-detected source type */
  source: VideoSourceType;
  /** Optional thumbnail override (CDN relative path) */
  thumbnail?: string;
  /** Content category for filtering */
  category: VideogramCategory;
  /** Year of the content */
  year?: string;
}

export type VideogramCategory =
  | "Match Highlight"
  | "Interview"
  | "Behind the Scenes"
  | "Training"
  | "Documentary"
  | "Lifestyle";

// ─── Source detection ─────────────────────────────────────────────────────────

const YOUTUBE_PATTERNS = [
  /youtube\.com\/watch/i,
  /youtu\.be\//i,
  /youtube\.com\/embed/i,
  /youtube\.com\/shorts/i,
];

export function detectSource(url: string): VideoSourceType {
  for (const pattern of YOUTUBE_PATTERNS) {
    if (pattern.test(url)) return "youtube";
  }
  return "mp4";
}

/**
 * Extract YouTube video ID from various URL formats.
 */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /embed\/([a-zA-Z0-9_-]{11})/,
    /shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

/**
 * Build a YouTube embed URL with start-time parameter.
 */
export function buildYouTubeEmbedUrl(
  videoId: string,
  startTime: number,
): string {
  const params = new URLSearchParams({
    autoplay: "0",
    rel: "0",
    modestbranding: "1",
  });
  if (startTime > 0) {
    params.set("start", String(Math.floor(startTime)));
  }
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/**
 * Build a direct MP4 CDN URL from a relative path.
 */
export function buildCdnVideoUrl(relativePath: string): string {
  const sanitized = relativePath.replace(/^\/+/, "");
  return `${HOSTINGER_CDN_BASE.replace(/\/+$/, "")}/${sanitized}`;
}

/**
 * Get YouTube thumbnail URL for a video ID.
 */
export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// ─── EVOLUTION HOOK — Add new entries here ────────────────────────────────────
// To expand the archive: paste new objects into this array.
// Each entry is validated at the type level — TypeScript will catch mismatches.
// No rebuild required for ISR pages. For static pages, a rebuild deploys new content.

export const VIDEOGRAM_ENTRIES: VideogramEntry[] = [
  {
    id: "fiba-asia-2015-showcase",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_FIBA2015",
    startTime: 0,
    title_EN: "FIBA Asia 2015 Showcase: A Qatari Hoops Highlight",
    title_AR: "عرض FIBA آسيا 2015: أبرز لحظات كرة السلة القطرية",
    ai_summary:
      "Mizo Amin's standout performance at the 2015 FIBA Asia Championship, showcasing elite court vision and defensive intensity.",
    source: "youtube",
    category: "Match Highlight",
    year: "2015",
  },
  {
    id: "fiba-asia-championship-highlights",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_FIBACHAMP",
    startTime: 15,
    title_EN: "FIBA Asia Championship Highlights",
    title_AR: "أبرز لحظات بطولة FIBA آسيا",
    ai_summary:
      "Comprehensive highlight reel from multiple FIBA Asia Championship appearances — fast breaks, clutch shots, and team leadership moments.",
    source: "youtube",
    category: "Match Highlight",
    year: "2015",
  },
  {
    id: "u16-season-highlights",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_U16",
    startTime: 0,
    title_EN: "U16 Season Highlights: The Making of a Champion",
    title_AR: "أبرز لحظات موسم تحت 16: صناعة بطل",
    ai_summary:
      "Early career footage from the U16 national team season — raw talent, explosive athleticism, and the foundation of a future captain.",
    source: "youtube",
    category: "Match Highlight",
    year: "2010",
  },
  {
    id: "wasl-season-game",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_WASL",
    startTime: 30,
    title_EN: "WASL Season Game Highlights",
    title_AR: "أبرز لحظات مباراة الوصل",
    ai_summary:
      "Key plays from WASL league action — pick-and-roll execution, transition offense, and defensive stops.",
    source: "youtube",
    category: "Match Highlight",
    year: "2016",
  },
  {
    id: "asian-beach-games-haiyang",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_BEACH",
    startTime: 0,
    title_EN: "Haiyang Highlights: 3rd Asian Beach Games",
    title_AR: "أبرز لحظات هاييانغ: ألعاب الشاطئ الآسيوية الثالثة",
    ai_summary:
      "3x3 basketball action at the 2012 Asian Beach Games in Haiyang, China — intensity under the sun.",
    source: "youtube",
    category: "Match Highlight",
    year: "2012",
  },
  {
    id: "asian-games-qatar-vs-hongkong",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_ASIANGAMES",
    startTime: 45,
    title_EN: "Asian Games: Qatar Defies Size to Conquer Hong Kong",
    title_AR: "الألعاب الآسيوية: قطر تتحدى الحجم وتهزم هونغ كونغ",
    ai_summary:
      "Underdog victory as Qatar's national team overcomes a larger Hong Kong squad with heart, hustle, and tactical brilliance.",
    source: "youtube",
    category: "Match Highlight",
    year: "2014",
  },
  {
    id: "fan-favorites-film-tv",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_FILMTV",
    startTime: 0,
    title_EN: "Connecting Beyond the Court: Fan Favorites in Film & TV",
    title_AR: "التواصل خارج الملعب: المفضلات في السينما والتلفاز",
    ai_summary:
      "Off-court personality — Mizo shares his top film and TV picks, revealing the mindset behind the athlete.",
    source: "youtube",
    category: "Lifestyle",
    year: "2023",
  },
  {
    id: "netflix-vs-youtube-showdown",
    videoURL: "https://www.youtube.com/watch?v=PLACEHOLDER_NETFLIXYT",
    startTime: 0,
    title_EN: "Screen Time Showdown: Netflix vs. YouTube",
    title_AR: "مواجهة وقت الشاشة: نتفليكس ضد يوتيوب",
    ai_summary:
      "A candid discussion about media consumption habits — streaming vs. creator content — from an athlete's perspective.",
    source: "youtube",
    category: "Lifestyle",
    year: "2023",
  },
  {
    id: "sample-mp4-training",
    videoURL: "videogram/training/court-session-01.mp4",
    startTime: 10,
    title_EN: "Court Session: Pre-Game Warmup Routine",
    title_AR: "جلسة تدريب: روتين الإحماء قبل المباراة",
    ai_summary:
      "Behind-the-scenes look at the warm-up ritual — stretching, shooting drills, and mental preparation before tip-off.",
    source: "mp4",
    category: "Training",
    year: "2024",
  },
];

// ─── Query API ────────────────────────────────────────────────────────────────

/**
 * Retrieve all videogram entries, optionally filtered by category.
 */
export function getVideogramEntries(
  category?: VideogramCategory,
): VideogramEntry[] {
  if (!category) return VIDEOGRAM_ENTRIES;
  return VIDEOGRAM_ENTRIES.filter((e) => e.category === category);
}

/**
 * Get unique categories present in the archive.
 */
export function getVideogramCategories(): VideogramCategory[] {
  return [...new Set(VIDEOGRAM_ENTRIES.map((e) => e.category))];
}
