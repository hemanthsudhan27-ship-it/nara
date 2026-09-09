"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, Instagram } from "lucide-react";

interface GalleryItem {
  id: string;
  category: "parkour" | "freerunning" | "tricking" | "jams";
  title: string;
  location: string;
  src: string;
  span?: string;
}

const EXTENDED_GALLERY: GalleryItem[] = [
  {
    id: "p-2282",
    category: "parkour",
    title: "Sea Wall Leap & Precision",
    location: "Calicut Beach Coastal Wall",
    src: "/photos/IMG_2282.webp",
  },
  {
    id: "p-2899",
    category: "jams",
    title: "Team Plaza Lineup & Footwork Drills",
    location: "South Beach Promenade",
    src: "/photos/IMG_2899.webp",
  },
  {
    id: "p-2900",
    category: "jams",
    title: "Crew Forward Fold Mobility",
    location: "Calicut Seaside Plazas",
    src: "/photos/IMG_2900.webp",
  },
  {
    id: "p-2268",
    category: "freerunning",
    title: "Sunrise Flow & Sun Alignment",
    location: "Kozhikode Promenade",
    src: "/photos/IMG_2268.webp",
  },
  {
    id: "p-2264",
    category: "freerunning",
    title: "Morning Promenade Stride",
    location: "Calicut Coastal Art Walk",
    src: "/photos/IMG_2264.webp",
  },
  {
    id: "p-2920",
    category: "jams",
    title: "Joint Preparation & Mobility Circle",
    location: "South Beach Training Ground",
    src: "/photos/IMG_2920.webp",
  },
  {
    id: "p-2902",
    category: "jams",
    title: "Calf & Hamstring Stretch Sequence",
    location: "Calicut Seaside Plaza",
    src: "/photos/IMG_2902.webp",
  },
  {
    id: "img-3117",
    category: "parkour",
    title: "Sunset Landing Mechanics",
    location: "South Beach Promenade",
    src: "/images/IMG_3117.PNG",
  },
  {
    id: "img-3116",
    category: "jams",
    title: "Seaside Squad Flow",
    location: "Kozhikode Coastal Horizon",
    src: "/images/IMG_3116.PNG",
  },
  {
    id: "img-3115",
    category: "parkour",
    title: "Cat Pass & Wall Preparation",
    location: "South Beach Breakwater",
    src: "/images/IMG_3115.PNG",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Frames" },
  { id: "parkour", label: "Parkour" },
  { id: "freerunning", label: "Freerunning" },
  { id: "tricking", label: "Tricking" },
  { id: "jams", label: "Sunset Jams" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

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
              Action frames, sunset sessions, and athlete progression along the
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
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-neutral-900 border border-white/10 hover:border-brand-orange/60 transition-all duration-300 shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
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
                  <p className="text-base font-bold font-headline uppercase text-white truncate mt-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono truncate">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Share Callout */}
          <div className="p-8 rounded-3xl bg-[#1C1C1C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-headline font-bold uppercase text-white">
                Tag Us in Your Training Clips
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Post your parkour strides and tricking clips with{" "}
                <span className="text-brand-orange font-bold">#TeamNARA</span> to be featured.
              </p>
            </div>
            <a
              href="https://instagram.com/teamnara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition"
            >
              <Instagram className="w-4 h-4" />
              <span>@teamnara.in</span>
            </a>
          </div>
        </div>
      </section>

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
                alt={selectedImage.title}
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
                <h4 className="text-base sm:text-xl font-headline font-bold uppercase text-white mt-0.5">
                  {selectedImage.title}
                </h4>
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
