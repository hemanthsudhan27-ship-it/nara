"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import CarouselStacked from "@/components/ui/carousel-07";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 bg-[#141414] text-white relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-mono font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gallery Sneakpeek</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white relative inline-block">
              MOVEMENT IN CALICUT
              {/* Underlined Accent */}
              <span className="block h-1.5 w-full bg-brand-orange mt-2 rounded-full shadow-[0_0_12px_rgba(244,87,30,0.6)]" />
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-wider max-w-xs sm:text-right">
            RAW FRAMES • KERALA ATHLETES • COASTAL FLOW
          </p>
        </div>

        {/* 3D Interactive Stacked Carousel */}
        <div className="w-full">
          <CarouselStacked />
        </div>

        {/* Bottom Actions Row */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider text-center sm:text-left">
            Swipe left or right to browse recent beach and street sessions
          </p>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center w-full sm:w-auto">
            <Link
              href="/gallery"
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#d94814] transition-all shadow-lg shadow-brand-orange/20 active:scale-95"
            >
              <span>View Full Archive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://instagram.com/teamnara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-neutral-300 hover:text-white hover:border-brand-orange/50 transition-all text-xs sm:text-sm font-bold uppercase tracking-wider active:scale-95"
            >
              <Instagram className="w-4 h-4 text-brand-orange" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
