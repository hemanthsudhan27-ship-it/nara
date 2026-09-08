"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Award, ArrowRight } from "lucide-react";
import HandwrittenAccent from "./HandwrittenAccent";

interface SessionsProps {
  onOpenRegister: (batch?: string) => void;
}

export default function Sessions({ onOpenRegister }: SessionsProps) {
  return (
    <section
      id="sessions"
      className="relative py-20 sm:py-28 bg-brand-cream text-brand-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy, CTA & Eyebrow */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-orange font-mono">
                TRAIN WITH US
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl tracking-[0.04em] sm:tracking-[0.06em] leading-[0.98] uppercase text-brand-dark">
              OUTDOOR PARKOUR <br className="hidden sm:inline" />
              <span className="text-brand-orange">SESSIONS</span>
            </h2>

            {/* Two Short Paragraphs */}
            <div className="space-y-4 text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
              <p>
                Our sessions run outdoors across Calicut&apos;s coastline, public parks,
                and architectural plazas. Designed for anyone who wants to learn
                parkour, build raw functional strength, improve spatial coordination,
                and discover what their body is truly capable of.
              </p>
              <p>
                No gymnastics or athletic background required. We meet every mover
                exactly where they are at—progressing safely from grounded fundamentals,
                balance drills, and low vaults to dynamic flow and explosive freerunning.
              </p>
            </div>

            {/* CTA + Mobile Handwritten Accent */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                onClick={() => onOpenRegister("Weekend Sunset Session — Calicut Beach (5:00 PM)")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
              >
                <span>Register for a Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="sm:hidden">
                <HandwrittenAccent
                  text="CALICUT MOVES DIFFERENTLY"
                  rotate="-rotate-2"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo + Handwritten Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Gritty Offset Accent */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
                <Image
                  src="/images/IMG_3115.PNG"
                  alt="Parkour session training along palm-lined seaside promenade in Calicut"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                  Calicut Beach Coastal Plaza • 06:30 AM
                </div>
              </div>

              {/* Handwritten Accent Float on Desktop */}
              <div className="hidden sm:block absolute -top-8 -right-6 z-20">
                <HandwrittenAccent
                  text="CALICUT MOVES DIFFERENTLY"
                  rotate="rotate-3"
                  className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-brand-orange/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row of 3 Icon + Label Stats Below */}
        <div className="mt-12 sm:mt-24 pt-8 sm:pt-10 border-t border-neutral-300/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Stat 1: Location */}
          <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 border border-neutral-200/80 shadow-sm hover:border-brand-orange/40 transition">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
                Location
              </span>
              <h3 className="text-base sm:text-lg font-black font-headline uppercase text-brand-dark mt-0.5">
                Calicut Beach
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                South Beach Promenade, Kozhikode, Kerala
              </p>
            </div>
          </div>

          {/* Stat 2: Sessions */}
          <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 border border-neutral-200/80 shadow-sm hover:border-brand-orange/40 transition">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
                Sessions
              </span>
              <h3 className="text-base sm:text-lg font-black font-headline uppercase text-brand-dark mt-0.5">
                Regular Outdoor
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Weekend morning/sunset and weekday drills
              </p>
            </div>
          </div>

          {/* Stat 3: Level */}
          <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 border border-neutral-200/80 shadow-sm hover:border-brand-orange/40 transition">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
                Level
              </span>
              <h3 className="text-base sm:text-lg font-black font-headline uppercase text-brand-dark mt-0.5">
                All Levels Welcome
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Beginners to experienced practitioners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
