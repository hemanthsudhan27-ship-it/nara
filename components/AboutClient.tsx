"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Compass, Check } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

const COMMUNITY_RULES = [
  {
    title: "No One Trains Alone",
    desc: "Always look out for the people training next to you. If someone is attempting a new move, offer an eye, a word, or a spot.",
  },
  {
    title: "Respect Public Spaces",
    desc: "Calicut gives us these spaces. We never vandalize or damage public property. We leave every spot cleaner than we found it.",
  },
  {
    title: "Zero Ego Policy",
    desc: "Everyone started at zero. We don't judge anyone for their body shape, fitness level, or fear. Humility is mandatory.",
  },
  {
    title: "Safety Over Clout",
    desc: "Never throw a move purely for a camera if you don't possess the safe progression and landing mechanics to back it up.",
  },
];

export default function AboutClient() {
  const { openRegister } = useRegister();
  const [activeTab, setActiveTab] = useState<"story" | "community">("story");

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              ABOUT TEAM NARA
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              RECLAIMING <br />
              <span className="text-brand-orange">CALICUT&apos;S SPACES</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              Born on the seaside promenades of Kozhikode, Team NARA is Kerala&apos;s
              pioneering collective dedicated to Parkour, Freerunning, and Tricking.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mt-10">
            {(["story", "community"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab === "story" ? "Our Story" : "Community"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB: OUR STORY ── */}
      {activeTab === "story" && (
        <>
          <section className="relative py-20 sm:py-28 text-white overflow-hidden">
            <Image
              src="/images/about-bg.webp"
              alt="NARA Movement Background"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 sm:to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
              <div className="max-w-2xl space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                  OUR STORY
                </span>
                <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white">
                  HOW NARA STARTED
                </h2>

                <div className="space-y-4 text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
                  <p className="text-lg sm:text-xl font-bold text-white font-headline uppercase tracking-wide">
                    NARA didn’t start as a Parkour team.
                  </p>

                  <p>
                    It started with a few random kids who simply wanted to learn flips. That was our introduction to movement too. We wanted to learn how to flip, and along the way, we discovered that there was a whole world beyond just doing flips — there was Parkour, Freerunning, Tricking and a completely different way of looking at movement.
                  </p>

                  <p>
                    As more people came together, a few small teams started forming. But, like with any athlete’s journey, life happened. People moved on, priorities changed, and over time, everyone ended up scattered in different places.
                  </p>

                  <p>
                    Eventually, a small group of core members came together and decided to build something of our own.
                  </p>

                  <p className="font-headline font-black text-xl sm:text-2xl uppercase tracking-wide text-brand-orange">
                    That’s how NARA was born.
                  </p>

                  <div className="py-2 space-y-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-orange">
                      THE MEANING BEHIND THE NAME
                    </span>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                      NARA comes from the Sanskrit word <strong>&ldquo;Nara&rdquo;</strong>, meaning human. We called it NARA Movement because, at its core, it was about something very simple — human movement.
                    </p>
                  </div>

                  <p>
                    What started with a few people trying to learn flips slowly became a community built around Parkour, movement and the people who kept showing up.
                  </p>

                  <div className="border-l-4 border-brand-orange pl-4 py-2 space-y-1 bg-gradient-to-r from-black/40 to-transparent">
                    <p className="text-sm sm:text-base font-semibold text-white">
                      And after all these years, that’s still what NARA is about.
                    </p>
                    <p className="text-base sm:text-lg font-black font-headline uppercase tracking-wide text-brand-orange">
                      People. Movement. And the willingness to keep moving forward.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab("community")}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow"
                  >
                    <span>Our Community</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Core Pillars */}
          <section className="py-20 sm:py-28 bg-[#141414] border-t border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                  PHILOSOPHY &amp; VALUES
                </span>
                <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white">
                  WHAT WE STAND FOR
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
                <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4 hover:border-brand-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">ADAPTATION</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Life and environments present unexpected obstacles. Parkour trains
                    your mind and body to assess risk calmly, calculate trajectories, and
                    adapt fluidly.
                  </p>
                </div>

                <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4 hover:border-brand-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">SAFETY FIRST</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Longevity is the true hallmark of a great mover. We prioritize
                    fundamental joint preparation, safe roll mechanics, and zero-ego
                    progression over reckless stunts.
                  </p>
                </div>

                <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4 hover:border-brand-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">PROGRESS TOGETHER</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    No one trains alone. We celebrate every newcomer&apos;s first safe
                    vault with the same enthusiasm as a veteran landing a double cork.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}


      {/* ── TAB: COMMUNITY ── */}
      {activeTab === "community" && (
        <section className="py-20 sm:py-28 bg-[#141414] flex items-center justify-center min-h-[50vh]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                THE NARA COLLECTIVE
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
                JOIN OUR <br />
                <span className="text-brand-orange">COMMUNITY</span>
              </h2>
              <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-4 max-w-2xl mx-auto">
                Connect with other movers, stay updated on our latest jams, and become a part of the Team NARA family in Calicut.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="https://chat.whatsapp.com/ChZdKzp4ksbJK3e2v8JXDl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#25D366]/20 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Join WhatsApp Community
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA — always visible */}
      <section className="py-14 sm:py-24 bg-brand-orange text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/70">
            EXPERIENCE IT YOURSELF
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white">
            READY TO TRAIN IN CALICUT?
          </h2>
          <p className="text-sm sm:text-lg text-white/90 max-w-xl mx-auto">
            Our outdoor sessions are open every week. Step outside your comfort
            zone and unlock your body&apos;s movement potential.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => openRegister()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-xl active:scale-98"
            >
              Register for a Session →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
