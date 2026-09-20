"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */
interface Discipline {
  id: string;
  num: string;
  title: string;
  tagline: string;
  detail: string;
  curriculum: string[];
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "parkour",
    num: "01",
    title: "Parkour",
    tagline: "Move with precision",
    detail:
      `What is Parkour?

Parkour is a discipline where you learn to move through your surroundings using your body. Walls, rails, gaps, stairs and other obstacles become part of the movement.

It involves things like running, jumping, landing, vaulting, climbing, balancing, swinging, rolling and precision jumps.

The goal isn't simply to do impressive movements. It's about developing strength, control, coordination, awareness and the ability to adapt to your environment.

And this is where we need to clear up one common misconception:

So, where do flips come in?

Flips are a part of the movement world, but Parkour isn't built around flips.

As you progress, you can explore more dynamic and acrobatic movements. This is where Freerunning comes into the picture — taking the foundation of Parkour and adding more creativity, style, flow and acrobatics such as flips, spins and twists.

So if you're joining NARA expecting to learn a backflip on your first day, that's probably not where we'll start. 😄

We'll first build the strength, technique, control and confidence that allow you to eventually perform those movements properly.

Parkour is much bigger than flips.

And that's exactly what we're here to teach.`,
    curriculum: [
      "Quadrupedal movement & ground work",
      "Precision jumps & balance training",
      "Vault progressions (speed, safety, dash)",
      "Wall runs & cat leaps",
      "Flow routing & line selection",
    ],
    image: "/images/IMG_3115.PNG",
  },
  {
    id: "freerunning",
    num: "02",
    title: "Freerunning",
    tagline: "Express through motion",
    detail:
      `What is Freerunning?

Freerunning is a movement discipline built around creativity, flow and self-expression.

It takes many of the movement foundations you find in Parkour and gives you more freedom to explore how you want to move. Instead of focusing only on the most efficient way to overcome an obstacle, Freerunning allows you to add your own style and creativity to the movement.

It can involve vaults, jumps, wall movements, spins, flips, twists, tricks and different combinations of movements.

The same obstacle can be approached in completely different ways, and that's part of what makes Freerunning interesting.

So, while Parkour focuses more on efficient movement and overcoming obstacles, Freerunning gives you the freedom to make that movement your own.

And yes, this is where you'll see a lot more of the flips and acrobatics people usually associate with Parkour.

But even here, it's not just about doing a flip.

It's about learning how to control your body, connect movements, develop your own style and create your own flow.

At NARA, Freerunning is where we take the foundations we've built and start exploring what we can do with them.`,
    curriculum: [
      "Forward & backward rolls to flips",
      "Dive rolls & aerial foundations",
      "Wall flips & tic-tac combos",
      "Creative line chaining",
      "Spatial awareness & flow state",
    ],
    image: "/images/IMG_3117.PNG",
  },
  {
    id: "tricking",
    num: "03",
    title: "Tricking",
    tagline: "Defy gravity with style",
    detail:
      `What is Tricking?

Tricking is a movement discipline that combines kicks, spins, flips and acrobatic movements into creative combinations.

It has its roots in martial arts, gymnastics, breakdancing and other movement disciplines. Over time, it developed into its own style of movement, with a strong focus on technique, body control, power and creativity.

You'll see movements like 360 kicks, 540s, aerials, butterfly kicks, twists, flips and many different combinations.

Unlike Parkour, where the environment and obstacles play a major role, Tricking is mostly focused on what you can do with your own body.

And it's not just about learning individual tricks.

The goal is to understand how movements connect, build the strength and technique needed to perform them safely, and eventually develop your own combinations and style.

At NARA, Tricking is where we explore the more dynamic and acrobatic side of movement — while building the foundations that allow you to progress properly.`,
    curriculum: [
      "Foundational kicks (crescent, hook, swing)",
      "Tornado kick & butterfly kick",
      "Aerial & raiz mechanics",
      "Gainer & flash family",
      "Combo chaining & set-ups",
    ],
    image: "/images/IMG_3116.PNG",
  },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function WhatWeDo() {
  const [activeId, setActiveId] = useState<string>("parkour");

  return (
    <section
      id="what-we-do"
      className="relative py-24 sm:py-32 bg-brand-dark text-white border-t border-b border-white/5 overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-14 border-b border-white/10 pb-5 sm:pb-6">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-orange">
              WHAT WE DO
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white mt-1">
              DISCIPLINES &amp; CRAFT
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
            MOVEMENT IN MANY FORMS
          </span>
        </div>

        {/* ── Desktop: Horizontal Accordion ── */}
        <div className="hidden md:flex gap-3 h-[540px]">
          {DISCIPLINES.map((disc) => {
            const isActive = disc.id === activeId;
            return (
              <div
                key={disc.id}
                onClick={() => setActiveId(disc.id)}
                style={{
                  flex: isActive ? "6 1 0%" : "1 1 0%",
                  transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer border ${
                  isActive
                    ? "border-brand-orange/50"
                    : "border-white/10 hover:border-white/30"
                } shadow-xl shadow-black/50`}
              >
                {/* Background Image */}
                <Image
                  src={disc.image}
                  alt={`Team NARA ${disc.title}`}
                  fill
                  sizes="(max-width: 1280px) 70vw, 800px"
                  className={`object-cover object-center transition-all duration-700 ${
                    isActive
                      ? "scale-100 opacity-40"
                      : "scale-110 opacity-20 grayscale"
                  }`}
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-dark/95 via-brand-dark/65 to-brand-dark/20"
                      : "bg-brand-dark/75"
                  }`}
                />

                {/* ── Collapsed Tab ── */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="tab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-7 px-3 select-none"
                    >
                      <span className="text-[10px] font-mono font-bold text-brand-orange tracking-widest">
                        {disc.num}
                      </span>
                      <span
                        className="font-headline font-black text-lg tracking-[0.12em] text-white/70 uppercase"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {disc.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-neutral-600" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Expanded Content ── */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 flex flex-row gap-6 p-8 lg:p-10 overflow-hidden"
                    >
                      {/* LEFT — scrollable content */}
                      <div className="flex-1 overflow-y-auto pr-1 scrollbar-hide">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-5">
                          <span className="px-2.5 py-1 rounded-md bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-mono font-bold text-[10px] tracking-wider">
                            {disc.num}
                          </span>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                            {disc.tagline}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-headline font-black text-5xl lg:text-6xl uppercase tracking-wider text-white drop-shadow-lg mb-5 leading-none">
                          {disc.title}
                        </h3>

                        {/* Detail — multi-paragraph */}
                        <div className="space-y-3 mb-6">
                          {disc.detail.split("\n\n").map((para, i) => (
                            <p key={i} className="text-xs leading-relaxed text-neutral-300">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Curriculum */}
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">Curriculum</p>
                          <ul className="space-y-2">
                            {disc.curriculum.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-neutral-400"
                              >
                                <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* RIGHT — progression nav strip */}
                      <div className="flex flex-col items-end justify-between border-l border-white/10 pl-6 py-1 flex-shrink-0">
                        {/* Discipline switcher — vertical */}
                        <div className="flex flex-col items-end gap-5">
                          {DISCIPLINES.map((d) => (
                            <button
                              key={d.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveId(d.id);
                              }}
                              className={`flex flex-col items-end gap-1 text-right transition-all ${
                                d.id === activeId
                                  ? "opacity-100"
                                  : "opacity-30 hover:opacity-70"
                              }`}
                            >
                              <span className={`text-[9px] font-mono tracking-widest ${d.id === activeId ? "text-brand-orange" : "text-neutral-400"}`}>
                                {d.num}
                              </span>
                              <span className={`text-xs font-headline font-black uppercase tracking-wider ${d.id === activeId ? "text-white" : "text-neutral-400"}`}>
                                {d.title}
                              </span>
                              {d.id === activeId && (
                                <span className="w-full h-px bg-brand-orange" />
                              )}
                            </button>
                          ))}
                        </div>

                        {/* Explore Curriculum — bottom of right strip */}
                        <div className="flex flex-col items-end gap-1.5 text-brand-orange">
                          <ArrowRight className="w-3.5 h-3.5" />
                          <span
                            className="text-[9px] font-mono uppercase tracking-widest"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                          >
                            Explore Curriculum
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: Vertical Accordion ── */}
        <div className="md:hidden flex flex-col gap-3">
          {DISCIPLINES.map((disc) => {
            const isActive = disc.id === activeId;
            return (
              <div
                key={disc.id}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isActive ? "border-brand-orange/50" : "border-white/10"
                }`}
              >
                {/* Header / Tab button */}
                <button
                  onClick={() => setActiveId(disc.id)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-brand-dark-card text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold text-brand-orange tracking-widest">
                      {disc.num}
                    </span>
                    <span className="font-headline font-black text-xl uppercase tracking-wider text-white">
                      {disc.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                  </motion.div>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={disc.image}
                          alt={`Team NARA ${disc.title}`}
                          fill
                          sizes="100vw"
                          className="object-cover object-center opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-card to-transparent" />
                      </div>

                      {/* Text */}
                      <div className="px-5 pb-6 pt-4 bg-brand-dark-card space-y-4">
                        <div className="space-y-3">
                          {disc.detail.split("\n\n").map((para, i) => (
                            <p key={i} className="text-xs text-neutral-300 leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">Curriculum</p>
                          <ul className="space-y-2.5">
                            {disc.curriculum.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-neutral-400"
                              >
                                <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-1.5 pt-3 border-t border-white/10 text-[11px] font-mono uppercase tracking-widest text-brand-orange">
                          <span>Explore Curriculum</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
