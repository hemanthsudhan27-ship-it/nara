"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Users, Zap, CalendarCheck } from "lucide-react";

interface HeroProps {
  onOpenRegister: () => void;
}

const STATS = [
  { icon: Users, label: "Coaching", value: "Experienced Team" },
  { icon: CalendarCheck, label: "Class Days", value: "Mon / Wed / Fri" },
  { icon: Zap, label: "Morning Class", value: "6:00 – 7:30 AM" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Apply for Admission", desc: "Admission Fee ₹2,500 (Monthly: ₹2,000) via quick UPI." },
  { step: "02", title: "Show Up Outdoors", desc: "Mon, Wed & Fri at 6:00 AM across Calicut. Bring yoga mat & water." },
  { step: "03", title: "Move with Coaches", desc: "Step-by-step parkour progressions from basics to dynamic flow." },
];

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
      {/* Background Image with Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_3117.PNG"
          alt="Team NARA Parkour athletes jumping on Calicut seaside promenade at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Top Eyebrow */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="space-y-1">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-brand-orange uppercase">
            Kerala&apos;s Movement Collective
          </span>
          <p className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-neutral-400 uppercase pt-1">
            PARKOUR / FREERUNNING / TRICKING / CALICUT, KERALA
          </p>
        </div>
      </div>

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-12">
        <div className="max-w-4xl space-y-5 sm:space-y-7">
          {/* Massive Stacked Headline */}
          <h1 className="font-headline font-black text-[14vw] sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.92] tracking-[0.03em] sm:tracking-[0.06em] uppercase select-none drop-shadow-2xl">
            <span className="block text-white hover:tracking-[0.06em] transition-all duration-300 whitespace-nowrap">
              TEAM
            </span>
            <span className="block text-brand-orange hover:brightness-110 transition-all duration-300 whitespace-nowrap">
              NARA
            </span>
          </h1>

          {/* Tagline */}
          <div className="pt-1 sm:pt-2">
            <p className="text-xs xs:text-sm sm:text-lg md:text-xl font-bold tracking-[0.18em] xs:tracking-[0.25em] sm:tracking-[0.35em] text-neutral-300 uppercase leading-snug">
              ADAPT. EVOLVE. KEEP MOVING.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <button
              onClick={onOpenRegister}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/40 active:scale-98"
            >
              <span>Join a Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/30 hover:border-white transition-all active:scale-98"
            >
              Contact Us
            </button>
          </div>

          {/* Social Proof Stats Strip */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-orange/15 border border-brand-orange/25 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-black text-white leading-none">{value}</p>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider leading-none mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works — 3 Step Visual */}
          <div className="pt-3 sm:pt-5 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">How it works</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {HOW_IT_WORKS.map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-3 flex-1">
                  <span className="text-2xl font-black font-headline text-brand-orange/40 leading-none flex-shrink-0 mt-0.5">{step}</span>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">{title}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
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
