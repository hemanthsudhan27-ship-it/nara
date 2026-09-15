"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, X, Instagram, ArrowRight } from "lucide-react";
import { EXTENDED_GALLERY, type GalleryItem } from "@/lib/galleryData";
import { useRegister } from "@/context/RegisterContext";

const CATEGORIES = [
  { id: "all", label: "All Frames" },
  { id: "parkour", label: "Parkour" },
  { id: "freerunning", label: "Freerunning" },
  { id: "tricking", label: "Tricking" },
  { id: "jams", label: "Sunset Jams" },
];

export default function GalleryClient() {
  const { openRegister } = useRegister();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloatingCta(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? EXTENDED_GALLERY
      : EXTENDED_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-14 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              RAW VISUAL ARCHIVE
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              MOVEMENT IN <br />
              <span className="text-brand-orange">CALICUT</span>
            </h1>
            <p className="text-sm sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              Action frames, sunset sessions, precision leaps, and athlete progression along the
              Malabar coast of Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery & Filter Tabs */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 border-b border-white/10 pb-4 sm:pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition active:scale-95 ${
                  activeCategory === cat.id
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                    : "bg-[#1C1C1C] text-neutral-400 hover:text-white hover:bg-[#252525]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {filteredItems.map((item) => {
              const imageAlt = `${item.title} - Team NARA ${item.category} athlete training at ${item.location}, Calicut, Kerala`;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-neutral-900 border border-white/10 hover:border-brand-orange/60 transition-all duration-300 shadow-xl"
                >
                  <Image
                    src={item.src}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Hover zoom badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-widest">
                      {item.category}
                    </span>
                    <h2 className="text-base font-bold font-headline uppercase text-white truncate mt-0.5">
                      {item.title}
                    </h2>
                    <p className="text-xs text-neutral-400 font-mono truncate">
                      {item.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Internal Cross-link banner */}
          <div className="p-8 rounded-3xl bg-[#1C1C1C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-headline font-bold uppercase text-white">
                Want to Learn These Moves?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Join our outdoor morning parkour and freerunning batches in Calicut. Beginners guided step-by-step.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openRegister()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition shadow-lg shadow-brand-orange/25"
              >
                <span>Join a Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://instagram.com/teamnara.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider border border-white/10 transition"
              >
                <Instagram className="w-4 h-4 text-brand-orange" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA pill — appears after scrolling past gallery images */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          showFloatingCta
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => openRegister()}
          className="group flex items-center gap-2.5 pl-4 pr-5 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full shadow-2xl shadow-brand-orange/40 text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>Want to train these moves?</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#181818] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full bg-black flex-1 min-h-0">
              <Image
                src={selectedImage.src}
                alt={`${selectedImage.title} - Team NARA Parkour in Calicut`}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition active:scale-95 z-20"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 flex items-center justify-between border-t border-white/10 flex-shrink-0">
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-brand-orange uppercase font-bold">
                  {selectedImage.category}
                </span>
                <h3 className="text-base sm:text-xl font-headline font-bold uppercase text-white mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">
                  {selectedImage.location}
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
                Team NARA Calicut
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
