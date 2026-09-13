"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Check } from "lucide-react";

interface CtaBannerProps {
  onOpenRegister: () => void;
}

export default function CtaBanner({ onOpenRegister }: CtaBannerProps) {
  return (
    <section className="relative w-full bg-brand-orange text-white py-12 sm:py-20 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10">
          {/* Left Side: Headline & Direct Action */}
          <div className="space-y-3.5 sm:space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-black/20 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-white">
              JOIN A SESSION
            </span>

            <h2
              onClick={() => onOpenRegister()}
              className="cursor-pointer group flex flex-wrap items-center gap-2.5 sm:gap-3 font-headline font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight uppercase tracking-[0.04em] sm:tracking-[0.06em] select-none hover:text-black transition-colors duration-200"
            >
              <span>START MOVING WITH US.</span>
              <div className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-black text-white group-hover:bg-white group-hover:text-brand-orange group-hover:translate-x-2 transition-all shadow-xl flex-shrink-0">
                <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
            </h2>

            <p className="text-white/90 text-xs sm:text-base font-medium max-w-lg">
              Reserve your spot for our next Calicut coastal session. Beginner friendly,
              progression-first coaching.
            </p>

            <div className="pt-2">
              <Link
                href="/sessions"
                className="inline-flex items-center gap-2 text-xs uppercase font-mono font-bold tracking-wider text-black bg-white/90 hover:bg-white px-4 py-2 rounded-xl transition shadow"
              >
                <span>View Class Schedule &amp; Fees (₹2,500) →</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Features List + Instagram Handle */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-6 border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0 lg:pl-10">
            {/* List: Calicut Beach / Real People / Real Movement */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider uppercase font-headline">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Calicut Beach</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider uppercase font-headline">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Real People</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider uppercase font-headline">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Real Movement</span>
              </div>
            </div>

            {/* Instagram Handle Link */}
            <div className="pt-2">
              <a
                href="https://instagram.com/teamnara.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-black/25 hover:bg-black text-white rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-200 border border-white/20 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>@teamnara.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
