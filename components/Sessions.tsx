"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SessionsProps {
  onOpenRegister: (batch?: string) => void;
}

const SESSION_STEPS = [
  {
    num: "01",
    title: "Book a Trial",
    desc: "Complete the registration form and pay ₹500 via UPI. You'll receive a WhatsApp welcome with class details.",
  },
  {
    num: "02",
    title: "Show Up Outdoors",
    desc: "Mon, Wed & Fri at 6:00 AM across Calicut. Bring your yoga mat & water bottle.",
  },
  {
    num: "03",
    title: "Move with Coaches",
    desc: "Step-by-step parkour progressions from grounded basics to dynamic movement flow.",
  },
];

export default function Sessions({ onOpenRegister }: SessionsProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="sessions"
      className="relative py-20 sm:py-28 bg-brand-cream text-brand-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Copy, CTA & Eyebrow */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-orange font-mono">
                OUTDOOR CLASSES • CALICUT
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl tracking-[0.04em] sm:tracking-[0.06em] leading-[0.98] uppercase text-brand-dark">
              PARKOUR &amp; <br className="hidden sm:inline" />
              <span className="text-brand-orange">FREERUNNING</span>
            </h2>

            {/* Realistic Copy */}
            <div className="space-y-4 text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
              <p>
                Currently, we conduct our outdoor Parkour &amp; Freerunning classes at
                different locations across Calicut. Led by experienced Team NARA trainers.
              </p>
              <p>
                Learn real parkour fundamentals, build functional strength, master vault
                mechanics, and progress safely from grounded drills to dynamic movement flow.
              </p>
            </div>

            {/* Schedule & Fee Highlights Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Class Schedule
                  </span>
                  <p className="font-extrabold text-neutral-900 mt-0.5">
                    Mon, Wed &amp; Fri
                  </p>
                  <p className="text-xs text-neutral-600">6:00 AM – 7:30 AM</p>
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Fee Structure
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-brand-dark">
                      Trial Session: ₹500
                    </h5>
                    <p className="text-xs text-neutral-600">Single Class Pass</p>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-600">
                <span className="text-brand-orange font-bold font-mono">REQUIRED:</span>
                <span>Bring your own yoga mat &amp; water bottle for every session.</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
              <button
                onClick={() => onOpenRegister("Outdoor Parkour & Freerunning — Mon, Wed & Fri (6:00 AM – 7:30 AM)")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
              >
                <span>Book Trial Session (₹500)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setShowDetails((prev) => !prev)}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border transition cursor-pointer ${
                  showDetails
                    ? "bg-brand-dark text-white border-brand-dark shadow-md"
                    : "bg-black/5 hover:bg-black/10 text-brand-dark border-neutral-300"
                }`}
                aria-expanded={showDetails}
              >
                <span>{showDetails ? "Hide Details & FAQs" : "View Full Details & FAQs"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showDetails ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Revealed 3-Step Flow */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden pt-2 max-w-xl"
                >
                  <div className="space-y-3 pt-2 border-t border-neutral-200/80">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-orange">
                      HOW IT WORKS • 3-STEP JOURNEY
                    </p>
                    <div className="space-y-3">
                      {SESSION_STEPS.map((step, idx) => (
                        <motion.div
                          key={step.num}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: idx * 0.1,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex items-start gap-4 hover:border-brand-orange/40 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                            <span className="font-mono font-black text-sm text-brand-orange">
                              {step.num}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-headline font-black text-base sm:text-lg uppercase tracking-wide text-brand-dark">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
                <Image
                  src="/gallery/IMG_2902.webp"
                  alt="Outdoor Parkour & Freerunning morning training class on Calicut South Beach promenade led by Team NARA coaches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/20 space-y-0.5">
                  <p className="font-bold text-brand-orange">Coaching: Team NARA</p>
                  <p className="text-[11px] text-neutral-300">Mon, Wed &amp; Fri • 6:00 AM – 7:30 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
