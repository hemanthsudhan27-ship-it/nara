"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Flame,
} from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

interface PhotoItem {
  src: string;
  alt: string;
  label: string;
}

const RENJITH_PHOTOS: PhotoItem[] = [
  {
    src: "/coaches/renjith/IMG_2007.webp",
    alt: "Coach Renjith vaulting over obstacle in Calicut",
    label: "Vault Dynamics",
  },
  {
    src: "/coaches/renjith/IMG_9167.webp",
    alt: "Coach Renjith sunset coastal backflip at Calicut Beach",
    label: "Beach Backflip",
  },
  {
    src: "/coaches/renjith/IMG_1956.webp",
    alt: "Coach Renjith rail precision jump",
    label: "Rail Precision",
  },
  {
    src: "/coaches/renjith/IMG_9166.webp",
    alt: "Coach Renjith beach handstand balance",
    label: "Beach Handstand",
  },
];

const NITHIN_PHOTOS: PhotoItem[] = [
  {
    src: "/coaches/nithin/IMG_8202.JPG.webp",
    alt: "Coach Nithin aerial urban gap leap",
    label: "Aerial Gap Jump",
  },
  {
    src: "/coaches/nithin/IMG_5413.JPG.webp",
    alt: "Coach Nithin curved wall climb-up",
    label: "Wall Climb-Up",
  },
  {
    src: "/coaches/nithin/IMG_2483.JPG.webp",
    alt: "Coach Nithin rooftop cat pass",
    label: "Cat Pass Precision",
  },
  {
    src: "/coaches/nithin/IMG_7480.JPG.webp",
    alt: "Coach Nithin architectural stair gap precision drop",
    label: "Stair Gap Drop",
  },
  {
    src: "/coaches/nithin/IMG_5466.JPG.webp",
    alt: "Coach Nithin street hurdle leap",
    label: "Street Hurdle",
  },
];

export default function CoachesClient() {
  const { openRegister } = useRegister();

  const [renjithPhotoIdx, setRenjithPhotoIdx] = useState(0);
  const [nithinPhotoIdx, setNithinPhotoIdx] = useState(0);

  const [lightbox, setLightbox] = useState<{
    coach: "renjith" | "nithin";
    idx: number;
  } | null>(null);

  const currentPhotos =
    lightbox?.coach === "renjith" ? RENJITH_PHOTOS : NITHIN_PHOTOS;
  const currentPhoto = lightbox !== null ? currentPhotos[lightbox.idx] : null;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* ── HEADER (Spacious & Clean) ── */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-orange uppercase block mb-3">
              Team NARA &bull; Leadership
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] uppercase text-white leading-none">
              OUR <span className="text-brand-orange">COACHES</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mt-4">
              Meet the movement pioneers behind Team NARA. Built on grounded
              fundamentals, patient progressions, and real urban exploration across
              Calicut.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (Generous Black Space) ── */}
      <div className="py-20 sm:py-32 space-y-28 sm:space-y-40 max-w-6xl mx-auto px-5 sm:px-8">
        {/* ════════════════════════════════════════════════════════════════
            01 // COACH RENJITH (BATCH 1: WANDRU)
        ════════════════════════════════════════════════════════════════ */}
        <section id="renjith" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Interactive Visual Showcase */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
                <Image
                  src={RENJITH_PHOTOS[renjithPhotoIdx].src}
                  alt={RENJITH_PHOTOS[renjithPhotoIdx].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Lightbox Trigger */}
                <button
                  onClick={() =>
                    setLightbox({ coach: "renjith", idx: renjithPhotoIdx })
                  }
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-brand-orange text-white backdrop-blur-md transition border border-white/15"
                  aria-label="View full image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase bg-black/60 px-3 py-1 rounded-md backdrop-blur-md border border-white/10">
                    {RENJITH_PHOTOS[renjithPhotoIdx].label}
                  </span>
                </div>
              </div>

              {/* Thumbnails row to switch photos cleanly */}
              <div className="grid grid-cols-4 gap-2.5">
                {RENJITH_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.src}
                    onClick={() => setRenjithPhotoIdx(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                      renjithPhotoIdx === idx
                        ? "border-brand-orange ring-2 ring-brand-orange/30 scale-95"
                        : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Clean Profile & Batch 1: Wandru Details */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold uppercase tracking-wider">
                  <Flame className="w-3 h-3" />
                  <span>Batch 1 &bull; Wandru</span>
                </div>

                <h2 className="text-5xl sm:text-7xl font-black font-headline tracking-[0.04em] uppercase text-white leading-none">
                  RENJITH
                </h2>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
                  Head Coach &bull; Movement Specialist
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Coach Renjith leads Team NARA with a focus on grounded vaults,
                rail precision, and safe acrobatic progressions. He breaks down
                complex street movements into step-by-step fundamentals tailored
                for all fitness levels.
              </p>

              {/* Clean Batch Card: Wandru */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                      Lead Batch
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-headline tracking-wide uppercase text-brand-orange">
                      BATCH 1: WANDRU
                    </h3>
                  </div>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                    <span>Mon, Wed &amp; Fri &bull; 6:00 – 7:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                    <span>South Beach &amp; Promenade</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() =>
                      openRegister(
                        "Batch 1: Wandru (Outdoor Parkour & Freerunning) — Mon, Wed & Fri (6:00 AM – 7:30 AM)"
                      )
                    }
                    className="w-full py-3 px-5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 active:scale-98 shadow-lg shadow-brand-orange/20"
                  >
                    <span>Join Batch 1: Wandru</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            02 // COACH NITHIN (SENIOR COACH - NO BATCH)
        ════════════════════════════════════════════════════════════════ */}
        <section id="nithin" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Clean Profile & Movement Focus */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <span>Technical Freerunning</span>
                </div>

                <h2 className="text-5xl sm:text-7xl font-black font-headline tracking-[0.04em] uppercase text-white leading-none">
                  NITHIN
                </h2>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
                  Senior Coach &bull; Movement Architect
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Coach Nithin specializes in high-elevation urban precision,
                vertical wall climb-up velocity, and aerial momentum. With years of
                street exploration, he guides movers through spatial awareness,
                fear management, and high-impact control.
              </p>

              {/* Clean Discipline Card (No batch name) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                      Specialization
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-headline tracking-wide uppercase text-white">
                      URBAN ARCHITECTURE &bull; GAPS
                    </h3>
                  </div>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                    Senior Coach
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    High Gap Precision
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Wall Climb Velocity
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Cat Pass Transits
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Fear Conditioning
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openRegister()}
                    className="flex-1 py-3 px-5 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Train with Team NARA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/contact"
                    className="px-5 py-3 rounded-xl border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/5 transition text-center"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Interactive Visual Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
                <Image
                  src={NITHIN_PHOTOS[nithinPhotoIdx].src}
                  alt={NITHIN_PHOTOS[nithinPhotoIdx].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Lightbox Trigger */}
                <button
                  onClick={() =>
                    setLightbox({ coach: "nithin", idx: nithinPhotoIdx })
                  }
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-brand-orange text-white backdrop-blur-md transition border border-white/15"
                  aria-label="View full image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase bg-black/60 px-3 py-1 rounded-md backdrop-blur-md border border-white/10">
                    {NITHIN_PHOTOS[nithinPhotoIdx].label}
                  </span>
                </div>
              </div>

              {/* Thumbnails row to switch photos cleanly */}
              <div className="grid grid-cols-5 gap-2.5">
                {NITHIN_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.src}
                    onClick={() => setNithinPhotoIdx(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                      nithinPhotoIdx === idx
                        ? "border-white ring-2 ring-white/30 scale-95"
                        : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── CLEAN BOTTOM CTA (Minimalist with black space) ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#070707] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase">
            Start Training in Calicut
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-headline tracking-[0.04em] uppercase text-white">
            READY TO MOVE WITH US?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
            Experience outdoor parkour on the Calicut coastline. Trial sessions
            available for all fitness levels.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() =>
                openRegister(
                  "Batch 1: Wandru (Outdoor Parkour & Freerunning) — Mon, Wed & Fri (6:00 AM – 7:30 AM)"
                )
              }
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
            >
              Join Batch 1: Wandru
            </button>
          </div>
        </div>
      </section>

      {/* ── MINIMALIST LIGHTBOX ── */}
      {lightbox !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({
                coach: lightbox.coach,
                idx:
                  lightbox.idx === 0
                    ? currentPhotos.length - 1
                    : lightbox.idx - 1,
              });
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-brand-orange text-white transition z-10 border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({
                coach: lightbox.coach,
                idx:
                  lightbox.idx === currentPhotos.length - 1
                    ? 0
                    : lightbox.idx + 1,
              });
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-brand-orange text-white transition z-10 border border-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-4xl max-h-[82vh] w-full h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-300 mt-4">
              {currentPhoto.label} &bull; Coach{" "}
              {lightbox.coach === "renjith" ? "Renjith" : "Nithin"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
