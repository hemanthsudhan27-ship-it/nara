"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const sessions = document.querySelector("#sessions");
    if (sessions) sessions.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector("#footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 bg-brand-dark text-white overflow-hidden"
    >
      {/* Background Image with Lighter, Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing.PNG"
          alt="Team NARA Parkour athletes on ledge overlooking clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[25%_center] lg:object-center opacity-90 transition-all duration-700 ease-out"
        />
        {/* Soft top gradient for navbar readability */}
        <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-brand-dark/75 via-brand-dark/30 to-transparent pointer-events-none" />
        
        {/* Soft bottom gradient to smoothly blend into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent pointer-events-none" />

        {/* Subtle right-side gradient to ensure text readability over bright clouds */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/35 pointer-events-none" />
        
        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Main Hero Content — situated over the cloud section (right side) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="flex justify-end w-full">
          <div className="w-full sm:max-w-xl lg:max-w-2xl flex flex-col items-start lg:items-end text-left lg:text-right space-y-4 sm:space-y-6">
            
            {/* Top Eyebrow */}
            <div className="space-y-1.5">
              <span className="inline-block px-3.5 py-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-brand-orange uppercase shadow-lg">
                Kerala&apos;s Movement Collective
              </span>
              <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-neutral-200 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                PARKOUR / FREERUNNING / TRICKING
              </p>
            </div>

            {/* TEAM NARA Headline */}
            <div>
              <h1 className="font-headline font-black text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-[0.03em] sm:tracking-[0.05em] uppercase select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                <span className="block text-white hover:tracking-[0.06em] transition-all duration-300 whitespace-nowrap">
                  TEAM <span className="text-brand-orange drop-shadow-[0_0_35px_rgba(244,87,30,0.65)]">NARA</span>
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-[0.16em] sm:tracking-[0.25em] text-neutral-100 uppercase leading-snug drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                ADAPT. EVOLVE. KEEP MOVING.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenRegister}
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-2xl shadow-black/70 hover:shadow-brand-orange/50 active:scale-98"
              >
                <span>Join a Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 bg-black/45 hover:bg-black/70 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/30 hover:border-white transition-all backdrop-blur-md shadow-xl active:scale-98"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span className="uppercase tracking-widest text-[11px] font-mono text-neutral-300">
            Open Outdoor Registrations Active
          </span>
        </div>
        <a
          href="#sessions"
          onClick={handleScrollDown}
          className="hidden sm:inline-flex items-center gap-2 hover:text-white transition group py-2"
        >
          <span className="uppercase tracking-widest text-[11px] font-mono">Explore Sessions</span>
          <ChevronDown className="w-4 h-4 text-brand-orange group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
