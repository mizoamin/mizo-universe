# Audio Assets for Voice Planet

This directory contains audio files for the Voice planet podcast gallery.

## Directory Structure

- **episodes/** — Podcast episodes (e.g., `episode-001.mp3`)
- **interviews/** — Interview audio (e.g., `qatar-journey.mp3`)
- **reflections/** — Audio reflections (e.g., `after-peak.mp3`)

## Audio File Specifications

- **Format**: MP3, AAC, or OGG
- **Bitrate**: 128-192 kbps (recommended for web delivery)
- **Sample Rate**: 44.1 kHz
- **Duration**: 20-60 minutes (typical podcast episodes)

## Files Referenced in VoiceGallery.tsx

The following files are expected by VoiceGallery:

### Episodes
- `episodes/episode-001.mp3` — "The Athlete's Mindset"
- `episodes/episode-002.mp3` — "Business, Basketball & Beyond"

### Interviews
- `interviews/qatar-journey.mp3` — "The Qatar Basketball Journey"

### Reflections
- `reflections/after-peak.mp3` — "Life After Peak Performance"

## Adding New Episodes

1. Export/encode audio file to MP3 format
2. Place in appropriate subdirectory
3. Update `VoiceGallery.tsx` with new episode metadata
4. Include bilingual titles and descriptions (English + Arabic)

## Testing

To test audio playback locally:
1. Add placeholder MP3 files to this directory
2. Run `npm run dev` and navigate to `/voice`
3. Click an episode to load it in the player
4. Use the play/pause button to test playback

## CDN Upload

For production, consider uploading audio files to:
- Cloudinary (video + audio hosting)
- AWS S3
- Bunny CDN
- Akamai

Then update file paths in `VoiceGallery.tsx` to point to CDN URLs.

## Metadata Integration (Future)

Podcast metadata is currently hardcoded in `VoiceGallery.tsx`. To integrate with Sanity CMS:

1. Create Sanity schema: `schemas/podcastEpisode.ts`
2. Add fields: title, titleAr, description, descriptionAr, audioUrl, duration, date
3. Create GROQ query: `lib/podcastQueries.ts`
4. Fetch data in VoiceGallery component
5. Update AudioPlayer to accept fetched data

See `blog/` planet for similar CMS integration pattern.
