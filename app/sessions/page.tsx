"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import HandwrittenAccent from "@/components/HandwrittenAccent";
import { useRegister } from "@/context/RegisterContext";

const BATCHES = [
  {
    id: "sunset",
    title: "Weekend Sunset Session",
    time: "Saturday & Sunday • 5:00 PM – 6:45 PM",
    location: "Calicut Beach South Promenade",
    focus: "Flow, vaults, seaside obstacles & sunset community jams",
    level: "All Levels (Beginners warmly welcome)",
    price: 799,
    badge: "Most Popular",
  },
  {
    id: "dawn",
    title: "Weekend Dawn Flow",
    time: "Saturday & Sunday • 6:30 AM – 8:00 AM",
    location: "Kozhikode Coastal Breakwater",
    focus: "Quiet morning clarity, precision jumps, balance & joint conditioning",
    level: "Beginner to Intermediate",
    price: 799,
    badge: "Morning Energy",
  },
  {
    id: "weekday",
    title: "Weekday Movement & Strength",
    time: "Tuesday & Thursday • 6:00 AM – 7:15 AM",
    location: "Mananchira Urban Spot / Beach Area",
    focus: "Raw functional conditioning, animal locomotion, explosive power",
    level: "All Levels",
    price: 699,
    badge: "Conditioning",
  },
  {
    id: "tricking",
    title: "Freerunning & Tricking Clinic",
    time: "Every Alternate Sunday • 4:00 PM – 6:30 PM",
    location: "Calicut Beach Soft Sand & Plazas",
    focus: "Acrobatics, 540 kicks, webster flips, corkscrews & martial style",
    level: "Open Level Progression",
    price: 999,
    badge: "Acrobatic Focus",
  },
];

const FAQS = [
  {
    q: "Do I need any previous gymnastics, martial arts, or fitness experience?",
    a: "None whatsoever. Most of our members started without being able to do a pull-up or touch their toes. We teach step-by-step progressions suited to your current body.",
  },
  {
    q: "What should I wear and bring to my first session?",
    a: "Comfortable sweatpants or athletic shorts, a breathable t-shirt, flexible running sneakers with good grip (e.g. flat rubber soles), and a 1-liter water bottle.",
  },
  {
    q: "Is parkour dangerous on outdoor concrete?",
    a: "We train with safety as our top priority. We don't throw dangerous moves on hard concrete. We drill landing mechanics, rolling, and low-risk vaults first so your body develops genuine shock absorption.",
  },
  {
    q: "How does the admission payment work?",
    a: "Currently, registrations are verified via UPI (Google Pay, PhonePe, Paytm). After submitting your registration form and UPI reference ID, our team manually verifies the transaction and sends confirmation to your WhatsApp.",
  },
];

export default function SessionsPage() {
  const { openRegister } = useRegister();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              OUTDOOR TRAINING SCHEDULE
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              FIND YOUR <br />
              <span className="text-brand-orange">BATCH &amp; SPOT</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              Outdoor parkour and movement sessions run weekly across the scenic
              coastline of Calicut. Progress safely with experienced coaches.
            </p>
          </div>

          <div className="absolute right-8 bottom-4 hidden lg:block">
            <HandwrittenAccent
              text="CALICUT MOVES DIFFERENTLY"
              rotate="rotate-3"
            />
          </div>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="py-20 sm:py-28 bg-[#181818] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                ACTIVE BATCHES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white mt-1">
                SELECT A SESSION
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase">
              ALL SESSIONS OUTDOORS IN KOZHIKODE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {BATCHES.map((batch) => (
              <div
                key={batch.id}
                className="relative bg-[#141414] border border-white/10 hover:border-brand-orange/60 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold uppercase">
                      {batch.badge}
                    </span>
                    <span className="text-xl sm:text-2xl font-black font-headline text-white">
                      ₹{batch.price}{" "}
                      <span className="text-xs font-normal text-neutral-400">
                        / month
                      </span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black font-headline uppercase text-white mb-3">
                    {batch.title}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{batch.time}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{batch.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{batch.level}</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mt-4 leading-relaxed border-t border-white/5 pt-4">
                    {batch.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => openRegister(`${batch.title} (${batch.time})`)}
                    className="w-full py-3.5 px-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 active:scale-98"
                  >
                    <span>Register for this Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Grounds in Calicut */}
      <section className="py-20 sm:py-28 bg-brand-cream text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                TRAINING SPOTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-brand-dark">
                CALICUT IS OUR GYM
              </h2>
              <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 font-headline uppercase text-lg">
                    1. South Beach Promenade
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Smooth granite ledges, broad sea-facing steps, low railings,
                    and soft sandy areas ideal for drilling rail balances, safety
                    vaults, and soft landings.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 font-headline uppercase text-lg">
                    2. Mananchira Square Perimeter
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Heritage walls and architectural steps provide varied height
                    progressions for cat leaps, wall runs, and precision stride drills.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 font-headline uppercase text-lg">
                    3. Coastal Pier Breakwater
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Open horizons and elevated concrete pads where we hold our
                    sunset jams and freerunning flow challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900">
                <Image
                  src="/images/IMG_3115.PNG"
                  alt="Parkour athletes practicing on Calicut beach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 sm:py-28 bg-[#141414] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              CLEAR YOUR DOUBTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white">
              SESSION FAQS
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#1C1C1C] border border-white/10 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 font-headline uppercase text-base sm:text-xl text-white hover:text-brand-orange transition min-h-[52px]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-brand-orange text-xl sm:text-2xl font-mono flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-6 sm:pt-8">
            <button
              onClick={() => openRegister()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
            >
              Apply for Admission Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
