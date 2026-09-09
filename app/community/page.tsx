"use client";

import React from "react";
import Image from "next/image";
import { Users, HeartHandshake, ShieldCheck, Sparkles, Instagram, ArrowRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

const COMMUNITY_RULES = [
  {
    title: "No One Trains Alone",
    desc: "Always look out for the people training next to you. If someone is attempting a new jump or trick, offer an eye, an encouraging word, or a spot.",
  },
  {
    title: "Respect Public Spaces",
    desc: "Calicut gives us these spaces. We never vandalize or damage public property. We pack out all trash and leave every spot cleaner than we found it.",
  },
  {
    title: "Zero Ego Policy",
    desc: "Everyone started at zero. We don't judge anyone for their body shape, fitness level, or fear. Humility and mutual encouragement are mandatory.",
  },
  {
    title: "Safety Over Clout",
    desc: "Never throw a move purely for a camera or social media hype if you don't possess the safe progression and landing mechanics to back it up.",
  },
];

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

export default function CommunityPage() {
  const { openRegister } = useRegister();

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              THE NARA COLLECTIVE
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              A COMMUNITY <br />
              <span className="text-brand-orange">THAT MOVES</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              More than training sessions, Team NARA is a close-knit movement family.
              United by passion, discipline, and the pursuit of human potential.
            </p>
          </div>
        </div>
      </section>

      {/* The Beach Jam Culture */}
      <section className="py-20 sm:py-28 bg-brand-cream text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                CULTURE &amp; JAMS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-brand-dark">
                THE SUNDAY SUNSET JAM
              </h2>
              <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Every Sunday afternoon, as the Arabian Sea horizon turns golden orange,
                  our community gathers on the South Beach promenade for our open jam.
                </p>
                <p>
                  Portable speakers play rhythmic beats, experienced athletes run warmup
                  drills, newcomers practice their first wall climbs, and curious locals
                  stop along the promenade to watch and cheer.
                </p>
                <p className="font-semibold text-neutral-900 border-l-4 border-brand-orange pl-4 py-1">
                  There are no entry fees for our open community jams. All you need is
                  respect for the spot and a willingness to try.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openRegister("Weekend Sunset Session — Calicut Beach (5:00 PM)")}
                  className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20"
                >
                  Join Next Sunday Jam →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900">
                <Image
                  src="/images/IMG_3116.PNG"
                  alt="Team NARA community jam at sunset"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Code */}
      <section className="py-20 sm:py-28 bg-[#181818] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              OUR ETHOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white">
              THE TEAM NARA CODE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMUNITY_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#141414] border border-white/10 rounded-2xl space-y-3 hover:border-brand-orange/40 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-brand-orange font-mono font-black text-lg">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg sm:text-xl font-headline font-black uppercase text-white">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pl-7 sm:pl-8">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-14 sm:py-28 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              VOICES FROM THE SPOT
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white">
              WHAT MOVERS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {MEMBER_VOICES.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{m.text}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-headline uppercase font-bold text-white text-sm sm:text-base">
                    {m.name}
                  </h4>
                  <p className="text-xs font-mono text-brand-orange">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social connection banner */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-orange/20 via-[#1C1C1C] to-brand-orange/20 border border-brand-orange/30 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-headline font-black uppercase text-white">
                Follow Team NARA on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Catch daily training clips, session announcements, and jam location pins.
              </p>
            </div>
            <a
              href="https://instagram.com/teamnara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition shadow-lg shadow-brand-orange/25 active:scale-98"
            >
              <Instagram className="w-4 h-4" />
              <span>@teamnara.in</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
