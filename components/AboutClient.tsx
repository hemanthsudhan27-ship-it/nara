"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Compass, Check } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

const DISCIPLINES = [
  {
    num: "01",
    title: "Parkour",
    desc: "Move from A to B efficiently using only the human body. Real-world spatial intelligence built on Calicut's sea walls, benches, and plazas.",
    skills: ["Precision Jumps", "Kong & Speed Vaults", "Cat Leaps", "Safety Rolls"],
  },
  {
    num: "02",
    title: "Freerunning",
    desc: "Where parkour meets personal expression — flow, style, and aerial fluidity blended into seamless movement transitions.",
    skills: ["Wall Runs & Tic-Tacs", "Side & Front Flips", "Flow Sequencing", "Bar Swings"],
  },
  {
    num: "03",
    title: "Tricking",
    desc: "High-octane aesthetic discipline combining kicks, spins, and flips drawn from Taekwondo, Capoeira, and gymnastics.",
    skills: ["540 & Tornado Kicks", "Butterfly Twists", "Aerials & Websters", "Corkscrews"],
  },
  {
    num: "04",
    title: "Workshops",
    desc: "Custom movement programs for schools, universities, corporate teams, and events across Kerala. Safety-first.",
    skills: ["Youth Motor Skills", "Stunt Choreography", "Injury Prevention", "Team Bonding"],
  },
  {
    num: "05",
    title: "Community Jams",
    desc: "Open jams where beginners train alongside seasoned practitioners. We share spots, trade techniques, and build friendships.",
    skills: ["Spot Etiquette", "Partner Spotting", "Sunset Gatherings", "City Travel Meets"],
  },
];

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
  const [activeTab, setActiveTab] = useState<"story" | "disciplines" | "community">("story");

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
            {(["story", "disciplines", "community"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab === "story" ? "Our Story" : tab === "disciplines" ? "What We Do" : "Community"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB: OUR STORY ── */}
      {activeTab === "story" && (
        <>
          <section className="py-20 sm:py-28 bg-brand-cream text-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                    OUR STORY
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-brand-dark">
                    HOW NARA STARTED
                  </h2>

                  <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                    <p>
                      Team NARA began with a straightforward question: why should human
                      movement be confined to four walls and paid gyms?
                    </p>
                    <p>
                      In the early mornings along Calicut Beach, a small group of friends
                      began gathering to practice landings, balance strides across concrete
                      ledges, and explore bodyweight coordination. Without fancy trampolines
                      or foam pits, we honed our discipline directly on hard ground—where
                      technique, patience, and joint conditioning matter most.
                    </p>
                    <p>
                      Today, Team NARA has evolved into an active brotherhood and sisterhood
                      of traceurs, trickers, and movers of all skill levels across Kerala.
                    </p>
                    <p className="text-sm font-semibold text-neutral-900 border-l-4 border-brand-orange pl-4 py-1">
                      From beachside concrete benches to seaside promenades, we transform
                      the city of Calicut into our canvas.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("disciplines")}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow"
                    >
                      <span>See What We Train</span>
                      <ArrowRight className="w-4 h-4 text-brand-orange" />
                    </button>
                    <button
                      onClick={() => setActiveTab("community")}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-black/5 hover:bg-black/10 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-300 transition"
                    >
                      Our Community
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
                    <Image
                      src="/images/IMG_3116.PNG"
                      alt="Team NARA parkour athletes and coaches gathered at Calicut South Beach during an outdoor movement jam"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-mono tracking-wider uppercase bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/20">
                      Calicut South Beach • Sunset Training Jam
                    </div>
                  </div>
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

      {/* ── TAB: DISCIPLINES ── */}
      {activeTab === "disciplines" && (
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                DISCIPLINES &amp; SPECIALTIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white mt-1">
                5 PILLARS OF THE NARA METHOD
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-2xl">
                From pure utilitarian obstacle traversal to creative flow and explosive
                acrobatics. You don&apos;t have to pick just one — our sessions integrate all five.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {DISCIPLINES.map((d) => (
                <div
                  key={d.num}
                  className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black font-headline text-brand-orange/30">{d.num}</span>
                    <h3 className="text-xl font-black font-headline uppercase text-white">{d.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{d.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    {d.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                        <Check className="w-3 h-3 text-brand-orange flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <div className="bg-brand-orange rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl shadow-brand-orange/20">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/70">
                    All disciplines, one crew
                  </span>
                  <h3 className="text-2xl font-black font-headline uppercase text-white mt-2">
                    Ready to Start?
                  </h3>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed">
                    Mon, Wed &amp; Fri · 6:00 AM · Outdoors across Calicut
                  </p>
                </div>
                <button
                  onClick={() => openRegister()}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow active:scale-98"
                >
                  <span>Join a Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB: COMMUNITY ── */}
      {activeTab === "community" && (
        <>
          {/* Sunday Jam */}
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
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => openRegister("Weekend Sunset Session — Calicut Beach (5:00 PM)")}
                      className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20"
                    >
                      Join Next Sunday Jam →
                    </button>
                    <Link
                      href="/sessions"
                      className="px-6 py-3.5 bg-black/5 hover:bg-black/10 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-300 transition"
                    >
                      View Paid Training Schedule
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900">
                    <Image
                      src="/images/IMG_3116.PNG"
                      alt="Team NARA movement community gathering during Sunday sunset jam at Calicut South Beach promenade"
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
                      <span className="text-brand-orange font-mono font-black text-lg">0{idx + 1}.</span>
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
        </>
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
            <Link
              href="/sessions"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition active:scale-98"
            >
              View Schedule &amp; Batches
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black/30 hover:bg-black/40 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition active:scale-98"
            >
              Contact Coaches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
