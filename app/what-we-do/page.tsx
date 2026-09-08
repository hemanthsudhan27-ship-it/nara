"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import HandwrittenAccent from "@/components/HandwrittenAccent";
import { useRegister } from "@/context/RegisterContext";

const DISCIPLINES_DETAILED = [
  {
    num: "01",
    title: "Parkour",
    subtitle: "The Art of Overcoming Physical Obstacles Efficiently",
    desc: "Parkour is the discipline of moving from point A to point B using only the human body in the most efficient, fluid, and safe way possible. In Calicut, we use sea walls, benches, and concrete plazas to build real-world spatial intelligence.",
    keySkills: [
      "Precision Jumps & Stick Landings",
      "Kong, Speed, and Lazy Vaults",
      "Cat Leaps & Wall Climbs",
      "Parkour Roll & Shock Dissipation",
    ],
    image:
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Freerunning",
    subtitle: "Creative Flow, Personal Expression & Aerial Fluidity",
    desc: "Where parkour emphasizes pure efficiency, freerunning emphasizes personal expression, style, and flow. It blends parkour mechanics with acrobatic flourishes, wall flips, and seamless movement transitions.",
    keySkills: [
      "Wall Runs & Tic-Tacs",
      "Side Flips & Front Flips",
      "Flow Line Sequencing",
      "Bar Swings & Lache Transfers",
    ],
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Tricking",
    subtitle: "Martial Arts Kicks, Twists & Ground Acrobatics",
    desc: "A high-octane aesthetic discipline combining aesthetic elements from Taekwondo, Capoeira, Wushu, and gymnastics. Tricking takes flight on open beach sands with breathtaking kicks and airborne rotations.",
    keySkills: [
      "540 & Tornado Kicks",
      "Butterfly Twists (B-Twist)",
      "Aerials & Webster Flips",
      "Corkscrews & Swing-Through Combos",
    ],
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Workshops & Clinics",
    subtitle: "Custom Movement Programs for Groups, Schools & Events",
    desc: "We conduct hands-on introductory and intensive clinics for schools, universities, dance crews, corporate wellness teams, and sports academies across Kerala. Safety, teamwork, and confidence-building are front and center.",
    keySkills: [
      "Youth Fundamentals & Motor Skill Development",
      "Stunt & Action Choreography Basics",
      "Injury Prevention & Joint Conditioning",
      "Group Challenge & Team Bonding Drills",
    ],
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Community Jams",
    subtitle: "Open Jams, Mentorship & Mutual Camaraderie",
    desc: "Team NARA is first and foremost a family of movers. Our open jams allow beginners to train alongside seasoned practitioners with zero barriers. We share spots, trade techniques, and build lasting friendships.",
    keySkills: [
      "Spot Etiquette & Environmental Respect",
      "Spotting & Partner Assistance",
      "Community Sunset Gatherings",
      "Inter-city Movement Travel Meets",
    ],
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhatWeDoPage() {
  const { openRegister } = useRegister();

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              DISCIPLINES &amp; SPECIALTIES
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              WHAT <br />
              <span className="text-brand-orange">WE DO</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              From pure utilitarian obstacle traversal to creative flow and explosive
              acrobatics. Explore the 5 pillars of the NARA movement method.
            </p>
          </div>

          <div className="absolute right-8 bottom-4 hidden lg:block">
            <HandwrittenAccent
              text="MOVEMENT IN MANY FORMS"
              rotate="-rotate-2"
            />
          </div>
        </div>
      </section>

      {/* Disciplines Deep-Dive List */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {DISCIPLINES_DETAILED.map((d, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={d.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-neutral-900 group">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-brand-orange font-mono font-bold text-xs uppercase">
                      Pillar {d.num}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono uppercase bg-black/50 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      Team NARA Calicut Coaching Program
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-orange uppercase">
                      Discipline {d.num}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-brand-orange" />
                    <span className="text-xs text-neutral-400 uppercase font-mono">
                      Active Curriculum
                    </span>
                  </div>

                  <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white">
                    {d.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-brand-orange font-headline uppercase tracking-wide">
                    {d.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {d.desc}
                  </p>

                  {/* Core skills checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                      Key Curriculum Elements:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {d.keySkills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-xs text-neutral-200 bg-[#1C1C1C] border border-white/5 px-3 py-2 rounded-xl"
                        >
                          <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <button
                      onClick={() => openRegister(`Focus: ${d.title}`)}
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
                    >
                      <span>Train {d.title} with Us</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 sm:py-24 bg-[#1C1C1C] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
            ALL DISCIPLINES, ONE CREW
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white">
            START YOUR MOVEMENT PATH
          </h2>
          <p className="text-xs sm:text-base text-neutral-300 max-w-lg mx-auto leading-relaxed">
            You don&apos;t have to pick just one. Our outdoor parkour sessions
            integrate parkour, flow, and acrobatic fundamentals into every session.
          </p>
          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => openRegister()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-xl shadow-brand-orange/20 active:scale-98"
            >
              Join Next Session in Calicut →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
