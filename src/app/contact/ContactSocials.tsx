"use client";

/**
 * ContactSocials — Social media handles grid for the Contact planet
 *
 * Displays all official Mizo Amin social media channels as interactive cards
 * with platform-specific colors, handles, and follow CTAs.
 * Uses the same real URLs as SocialNexus.tsx.
 */

const ACCENT = "#00ff88";

interface Handle {
  platform: string;
  handle: string;
  url: string;
  color: string;
  description: string;
  /** SVG path data (viewBox 0 0 24 24) */
  icon: string;
}

const HANDLES: Handle[] = [
  {
    platform: "Instagram",
    handle: "@mizoamin",
    url: "https://www.instagram.com/mizoamin/",
    color: "#E4405F",
    description: "Daily life, sports, and behind-the-scenes moments.",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    platform: "X / Twitter",
    handle: "@mizoamin24",
    url: "https://x.com/mizoamin24",
    color: "#FFFFFF",
    description: "Thoughts, takes, and real-time commentary.",
    icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z",
  },
  {
    platform: "Threads",
    handle: "@mizoamin",
    url: "https://www.threads.com/@mizoamin",
    color: "#FFFFFF",
    description: "Long-form thoughts and community conversations.",
    icon: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.1-1.137 3.428-1.165 1.08-.022 2.071.142 2.943.477l.002-.037c-.04-1.612-.478-2.708-1.343-3.353-.783-.582-1.92-.875-3.39-.875h-.022c-1.25.008-2.28.32-3.058.928l-1.255-1.58C8.185 2.545 9.585 2.09 11.27 2.074h.028c1.943.012 3.474.478 4.551 1.388 1.127.951 1.717 2.368 1.766 4.224.385.183.744.392 1.073.625 1.02.72 1.77 1.672 2.227 2.83.764 1.933.722 4.56-1.109 6.346-1.803 1.76-4.082 2.477-7.167 2.502h-.002zM11.94 14.886c-.865.02-1.53.205-1.976.548-.478.368-.663.834-.636 1.326.04.73.552 1.395 1.404 1.818.607.302 1.378.464 2.17.42 1.11-.06 1.96-.457 2.53-1.183.444-.567.745-1.336.892-2.282-.813-.34-1.752-.528-2.794-.528-.524 0-1.058.032-1.59.119v-.238z",
  },
  {
    platform: "TikTok",
    handle: "@mizo_amin",
    url: "https://www.tiktok.com/@mizo_amin",
    color: "#00F2EA",
    description: "Short-form video content, highlights, and quick takes.",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    platform: "Snapchat",
    handle: "@mizo_amin",
    url: "https://www.snapchat.com/@mizo_amin",
    color: "#FFFC00",
    description: "Exclusive stories and candid snapshots.",
    icon: "M12.017.063c2.59.02 4.885 1.246 6.23 3.18.87 1.24 1.305 2.77 1.305 4.582 0 .48-.03.97-.09 1.47-.046.382-.103.765-.17 1.148.3.138.622.207.957.207.25 0 .503-.044.753-.133.178-.063.356-.095.533-.095.34 0 .63.12.87.36.24.24.36.54.36.9 0 .56-.3 1-.9 1.32-.32.178-.66.31-1.02.4-.36.088-.72.16-1.08.218-.22.035-.36.07-.42.1-.14.09-.24.26-.28.52-.04.26.12.58.46.98.06.08.15.178.26.3 1.04 1.14 1.76 2.08 2.16 2.82.14.26.22.52.22.78 0 .48-.24.88-.73 1.18-.46.29-1.05.48-1.76.57-.19.02-.36.07-.5.15-.14.08-.24.2-.3.36-.06.16-.12.34-.19.52-.07.18-.16.34-.27.48-.11.14-.26.25-.45.33-.19.08-.42.12-.69.12-.2 0-.42-.02-.67-.06-.25-.04-.54-.1-.87-.18-.48-.12-.87-.18-1.18-.18-.14 0-.37.02-.69.06-.32.04-.69.12-1.11.24-.34.1-.64.16-.9.2-.26.04-.5.06-.73.06-.28 0-.52-.04-.72-.12-.2-.08-.36-.19-.48-.33-.12-.14-.21-.3-.28-.48-.07-.18-.13-.36-.19-.52-.08-.2-.18-.33-.32-.4-.14-.08-.32-.13-.56-.16-.7-.08-1.28-.27-1.74-.56-.46-.3-.7-.69-.7-1.18 0-.26.08-.52.24-.78.4-.74 1.12-1.68 2.16-2.82.11-.12.19-.22.25-.3.34-.4.5-.72.46-.98-.04-.26-.13-.43-.28-.52-.06-.03-.2-.07-.42-.1-.36-.06-.72-.13-1.08-.22-.36-.09-.7-.22-1.02-.4-.6-.32-.9-.76-.9-1.32 0-.36.12-.66.36-.9.24-.24.53-.36.87-.36.17 0 .35.03.53.1.25.09.5.13.75.13.34 0 .66-.07.96-.21-.07-.38-.13-.77-.17-1.15-.06-.5-.09-.99-.09-1.47 0-1.81.44-3.34 1.31-4.58C7.13 1.31 9.43.082 12.017.063z",
  },
  {
    platform: "Facebook",
    handle: "24mizoamin",
    url: "https://www.facebook.com/24mizoamin/",
    color: "#1877F2",
    description: "Updates, events, and community engagement.",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    platform: "LinkedIn",
    handle: "mizo-amin",
    url: "https://qa.linkedin.com/in/mizo-amin",
    color: "#0A66C2",
    description: "Professional network, business updates, and career milestones.",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    platform: "Email",
    handle: "contact@mizoamin.com",
    url: "mailto:contact@mizoamin.com",
    color: "#00ff88",
    description: "Direct email for all formal inquiries and collaborations.",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
];

export default function ContactSocials() {
  return (
    <section className="mb-16">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="h-6 w-1 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
          Find Me Across the Universe
        </h2>
      </div>

      {/* Social handles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {HANDLES.map((handle) => (
          <a
            key={handle.platform}
            href={handle.url}
            target={handle.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* Icon + Platform */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${handle.color}18`,
                  border: `1px solid ${handle.color}35`,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  fill={handle.color}
                >
                  <path d={handle.icon} />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {handle.platform}
                </p>
                <p
                  className="text-sm font-mono font-semibold truncate"
                  style={{ color: handle.color }}
                >
                  {handle.handle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed flex-1">
              {handle.description}
            </p>

            {/* CTA */}
            <div
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              style={{ color: handle.color }}
            >
              <span>
                {handle.url.startsWith("mailto:") ? "Send Email" : "Follow"}
              </span>
              <svg
                viewBox="0 0 24 24"
                width={12}
                height={12}
                fill="currentColor"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
