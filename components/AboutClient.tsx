"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Compass } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function AboutClient() {
  const { openRegister } = useRegister();

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
        </div>
      </section>

      {/* Story & Origins */}
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
                  Explore our{" "}
                  <Link
                    href="/what-we-do"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    movement disciplines
                  </Link>{" "}
                  or read about our weekly{" "}
                  <Link
                    href="/community"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Sunday sunset jams
                  </Link>
                  .
                </p>
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

      {/* The 3 Core Pillars */}
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
            {/* Pillar 1 */}
            <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4 hover:border-brand-orange/50 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">
                ADAPTATION
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Life and environments present unexpected obstacles. Parkour trains
                your mind and body to assess risk calmly, calculate trajectories, and
                adapt fluidly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4 hover:border-brand-orange/50 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">
                SAFETY FIRST
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Longevity is the true hallmark of a great mover. We prioritize
                fundamental joint preparation, safe roll mechanics, and zero-ego
                progression over reckless stunts.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4 hover:border-brand-orange/50 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">
                PROGRESS TOGETHER
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                No one trains alone. We celebrate every newcomer&apos;s first safe
                vault with the same enthusiasm as a veteran landing a double cork.
                The community is our greatest strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section with Internal Links */}
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
