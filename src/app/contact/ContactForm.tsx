"use client";

/**
 * ContactForm — Inquiry form for the Contact planet
 *
 * Client Component with form validation and submission feedback.
 * Currently logs to console — wire to API route or email service when ready.
 *
 * Categories: Collaboration, Business, Media, General
 * Secure: no dangerouslySetInnerHTML, input sanitized via controlled components
 */

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  { value: "collaboration", label: "Collaboration" },
  { value: "business", label: "Business Inquiry" },
  { value: "media", label: "Media & Press" },
  { value: "general", label: "General" },
] as const;

const ACCENT = "#00ff88";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const type = (data.get("type") as string) ?? "general";
    const message = (data.get("message") as string) ?? "";

    const subject = encodeURIComponent(`[${type}] Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`,
    );

    // Open default mail client pre-filled — no backend required
    window.open(
      `mailto:contact@mizoamin.com?subject=${subject}&body=${body}`,
      "_blank",
    );

    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div
          className="w-4 h-4 rounded-full mx-auto mb-6"
          style={{
            backgroundColor: ACCENT,
            boxShadow: `0 0 30px ${ACCENT}60`,
          }}
        />
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
          Transmission Received
        </h2>
        <p className="text-gray-400">
          Your mail client opened with the message pre-filled. Hit send to
          complete the transmission. Expect a response within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div
          className="h-6 w-1 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
          Open Channel
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label
            htmlFor="contact-type"
            className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
          >
            Inquiry Type
          </label>
          <select
            id="contact-type"
            name="type"
            required
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors appearance-none"
          >
            <option value="" className="bg-[#0a0a0a]">
              Select type...
            </option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value} className="bg-[#0a0a0a]">
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-4 rounded-xl font-black uppercase tracking-wider text-black transition-all disabled:opacity-50"
          style={{
            backgroundColor: ACCENT,
            boxShadow: `0 0 20px ${ACCENT}30`,
          }}
        >
          {status === "sending" ? "Transmitting..." : "Send Transmission"}
        </button>
      </form>
    </div>
  );
}
