"use client";

import React from "react";
import { Quote } from "lucide-react";

const MEMBER_VOICES = [
  {
    name: "Faheem K.",
    role: "Member since 2024",
    text: "Before NARA, I thought parkour was only for stuntmen in action movies. Joining the Calicut beach sessions showed me that anyone can learn. The coaches are patient, and the sunset jams are the highlight of my week.",
  },
  {
    name: "Ananya S.",
    role: "Member since 2025",
    text: "I had zero upper body strength when I started. In 3 months, I cleared my first chest-high vault and learned how to safely roll on grass and concrete. It changed the way I walk through my city.",
  },
  {
    name: "Rohan M.",
    role: "Tricking Specialist",
    text: "Training tricking on the beach sand with Team NARA gave me the courage to unlock butterfly twists and corks without fear. The energy of this crew is unmatched anywhere in Kerala.",
  },
];

interface TestimonialsStripProps {
  theme?: "dark" | "light";
  heading?: string;
}

export default function TestimonialsStrip({
  theme = "dark",
  heading = "What Movers Say",
}: TestimonialsStripProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 sm:py-20 ${
        isDark ? "bg-[#0f0f0f] border-t border-white/10" : "bg-white border-t border-neutral-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span
              className={`text-xs font-mono font-bold uppercase tracking-widest ${
                isDark ? "text-brand-orange" : "text-brand-orange"
              }`}
            >
              VOICES FROM THE SPOT
            </span>
            <h2
              className={`text-2xl sm:text-4xl font-black font-headline uppercase tracking-[0.04em] mt-1 ${
                isDark ? "text-white" : "text-brand-dark"
              }`}
            >
              {heading}
            </h2>
          </div>
          <p
            className={`text-xs sm:text-sm font-mono uppercase tracking-wider ${
              isDark ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            Real members · Calicut, Kerala
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {MEMBER_VOICES.map((m, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-5 sm:p-7 flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "bg-[#1C1C1C] border border-white/10 hover:border-brand-orange/30 shadow-xl shadow-black/40"
                  : "bg-neutral-50 border border-neutral-200 hover:border-brand-orange/40 shadow-md"
              }`}
            >
              {/* Quote icon accent */}
              <Quote
                className="w-7 h-7 text-brand-orange/30 flex-shrink-0"
                strokeWidth={1.5}
              />

              <p
                className={`text-sm sm:text-base leading-relaxed flex-1 ${
                  isDark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                &ldquo;{m.text}&rdquo;
              </p>

              <div
                className={`border-t pt-4 flex items-center gap-3 ${
                  isDark ? "border-white/10" : "border-neutral-200"
                }`}
              >
                {/* Avatar initials */}
                <div className="w-9 h-9 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-black text-brand-orange font-headline">
                    {m.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3
                    className={`font-headline uppercase font-bold text-sm ${
                      isDark ? "text-white" : "text-brand-dark"
                    }`}
                  >
                    {m.name}
                  </h3>
                  <p className="text-[11px] font-mono text-brand-orange">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
