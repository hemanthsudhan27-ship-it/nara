"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

interface WhoCanJoinProps {
  onOpenRegister: (batch?: string) => void;
}

export default function WhoCanJoin({ onOpenRegister }: WhoCanJoinProps) {
  return (
    <section className="relative bg-[#0d0d0d] text-white border-t border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[520px]">
        {/* Left Column: Dark Photo (Partnering / Piggyback at dusk near water) */}
        <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
            alt="Parkour partners training near the water at dusk"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center filter grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d0d0d]/40 to-[#0d0d0d] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-brand-orange rounded border border-white/10">
              Community Spirit • Partner Drills
            </span>
          </div>
        </div>

        {/* Center Column: Core Invitation & Explanation */}
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 bg-[#141414] border-y lg:border-y-0 lg:border-x border-white/10 space-y-5 sm:space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-orange">
              OPEN INVITATION
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white">
              WHO CAN JOIN?
            </h2>
          </div>

          <div className="space-y-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              Anyone with curiosity and a willingness to learn. You do{" "}
              <strong className="text-white">not</strong> need prior upper-body
              strength, flexibility, or an acrobatic background.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              Every drill is progression-based. We break every jump, landing, and
              vault down into safe, approachable micro-steps. Come as you are,
              lace up comfortable sneakers, and let your journey begin.
            </p>
          </div>

          <ul className="space-y-2 text-xs font-medium text-neutral-300">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>Ages 12+ • All fitness backgrounds</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>Step-by-step coaching &amp; injury prevention</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>Zero ego, 100% supportive crew</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onOpenRegister()}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
            >
              <span>Join a Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Dark Textured Wall with Bold White Graffiti "PROGRESS TOGETHER" */}
        <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12 overflow-hidden bg-[#111111] group">
          {/* Concrete/gritty texture background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-700 via-black to-black" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Bold Graffiti / Stencil Street Typography */}
          <div className="relative z-10 text-center select-none transform group-hover:scale-105 transition-transform duration-500 w-full">
            <div className="font-headline font-black text-3xl xs:text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.05em] sm:tracking-[0.08em] leading-none text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
              <span className="block border-b-4 border-brand-orange pb-2">PROGRESS</span>
              <span className="block text-brand-orange pt-2">TOGETHER</span>
            </div>

            {/* Spray paint splatter accent */}
            <div className="mt-4 inline-block px-3.5 py-1.5 rounded-full border border-brand-orange/40 bg-brand-orange/10 text-brand-orange font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
              No One Trains Alone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
