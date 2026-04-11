"use client";

/**
 * AppointmentSection — Book a session with Mizo Amin
 *
 * Displays available session types with a CTA to open the booking link.
 * Set NEXT_PUBLIC_BOOKING_URL env var to your Calendly / Cal.com link.
 * Falls back to a mailto: link when env var is unset.
 */

const ACCENT = "#00ff88";

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "mailto:contact@mizoamin.com?subject=Booking%20Request&body=Hi%20Mizo%2C%0A%0AI%20would%20like%20to%20book%20a%20session.%0A%0ASession%20type%3A%20%5Bplease%20fill%5D%0APreferred%20time%3A%20%5Bplease%20fill%5D%0A%0ARegards%2C";

interface SessionType {
  icon: string;
  title: string;
  duration: string;
  description: string;
}

const SESSION_TYPES: SessionType[] = [
  {
    icon: "🤝",
    title: "Collaboration Call",
    duration: "30 min",
    description: "Let's explore creative or business collaboration opportunities.",
  },
  {
    icon: "💼",
    title: "Strategy Session",
    duration: "60 min",
    description: "Deep-dive business, sports performance, or digital strategy advisory.",
  },
  {
    icon: "🎙️",
    title: "Media & Press",
    duration: "45 min",
    description: "Podcast interviews, guest features, and media appearances.",
  },
  {
    icon: "🚀",
    title: "Mentorship",
    duration: "60 min",
    description: "1-on-1 mentorship for young athletes and aspiring entrepreneurs.",
  },
];

export default function AppointmentSection() {
  return (
    <section className="mb-16">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="h-6 w-1 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
          Book a Session
        </h2>
      </div>

      {/* Session type cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {SESSION_TYPES.map((session) => (
          <div
            key={session.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">{session.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-sm uppercase tracking-wider truncate">
                    {session.title}
                  </h3>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      color: ACCENT,
                      backgroundColor: `${ACCENT}15`,
                      border: `1px solid ${ACCENT}30`,
                    }}
                  >
                    {session.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {session.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking CTA */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-wider text-black transition-all hover:scale-[1.02] active:scale-100"
        style={{
          backgroundColor: ACCENT,
          boxShadow: `0 0 24px ${ACCENT}40`,
        }}
      >
        <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
        </svg>
        Schedule a Session
      </a>

      <p className="mt-3 text-xs text-gray-500">
        Select a session type above, then click Schedule to choose a time slot.
      </p>
    </section>
  );
}
