"use client";

import React from "react";
import { Instagram } from "lucide-react";

// 8 real NARA images from /public/gallery/
const GALLERY_IMAGES = [
  // 3 Dadu images
  {
    src: "/gallery/IMG_2986.webp",
    alt: "Coach Dadu dynamic promenade stride in Calicut",
  },
  {
    src: "/gallery/IMG_2268.webp",
    alt: "Coach Dadu sunrise balance and flow sequence",
  },
  {
    src: "/gallery/IMG_2282.webp",
    alt: "Coach Dadu sea wall precision leap at Calicut Beach",
  },
  // 3 Renjith images
  {
    src: "/coaches/renjith/IMG_2007.webp",
    alt: "Coach Renjith vaulting over obstacle in Calicut",
  },
  {
    src: "/coaches/renjith/IMG_9167.webp",
    alt: "Coach Renjith sunset coastal backflip at Calicut Beach",
  },
  {
    src: "/coaches/renjith/IMG_1956.webp",
    alt: "Coach Renjith rail precision jump",
  },
  // 3 Nithin images
  {
    src: "/coaches/nithin/IMG_8202.JPG.webp",
    alt: "Coach Nithin aerial urban gap leap",
  },
  {
    src: "/coaches/nithin/IMG_5413.JPG.webp",
    alt: "Coach Nithin curved wall climb-up",
  },
  {
    src: "/coaches/nithin/IMG_2483.JPG.webp",
    alt: "Coach Nithin rooftop cat pass",
  },
];

// 9th tile blurred CTA background
const CTA_BG_IMAGE = "/gallery/IMG_3096.webp";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-[#0e0e0e] text-white relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "rgba(244,87,30,0.07)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-brand-orange text-[10px] font-mono font-extrabold uppercase tracking-widest mb-4"
            style={{ background: "rgba(244,87,30,0.10)", borderColor: "rgba(244,87,30,0.25)" }}
          >
            <Instagram className="w-3 h-3" aria-hidden="true" />
            <span>Gallery</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black font-headline uppercase text-white leading-none"
              style={{ letterSpacing: "0.05em" }}
            >
              CAPTURED IN MOTION
              <span
                aria-hidden="true"
                className="block h-1 w-24 bg-brand-orange mt-3 rounded-full"
                style={{ boxShadow: "0 0 14px rgba(244,87,30,0.55)" }}
              />
            </h2>
            <p className="text-[11px] sm:text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-[200px] sm:text-right leading-relaxed">
              RAW FRAMES&nbsp;&middot;&nbsp;KERALA ATHLETES&nbsp;&middot;&nbsp;COASTAL FLOW
            </p>
          </div>
        </div>

        {/* 3x3 Instagram-style Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2"
          role="list"
          aria-label="NARA Parkour photo gallery"
        >
          {/* Tiles 1-8 */}
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.src}
              role="listitem"
              className="relative overflow-hidden bg-neutral-900 cursor-pointer group"
              style={{ aspectRatio: "1 / 1", borderRadius: "4px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading={idx < 4 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Dark hover overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-out"
              />

              {/* Orange accent bottom line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
                style={{ boxShadow: "0 0 8px rgba(244,87,30,0.8)" }}
              />
            </div>
          ))}

          {/* Tile 10 - Instagram CTA */}
          <a
            href="https://www.instagram.com/teamnara.in"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            aria-label="View Team NARA on Instagram — opens in a new tab"
            className="relative overflow-hidden bg-neutral-900 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e]"
            style={{ aspectRatio: "1 / 1", borderRadius: "4px" }}
          >
            {/* Blurred NARA background */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_BG_IMAGE}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out"
              style={{ filter: "blur(3px) brightness(0.30) saturate(0.4)", transform: "scale(1.12)" }}
            />

            {/* Dark scrim */}
            <div
              aria-hidden="true"
              className="absolute inset-0 transition-colors duration-400"
              style={{ background: "rgba(0,0,0,0.50)" }}
            />

            {/* Orange border ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: "4px", boxShadow: "inset 0 0 0 1px rgba(244,87,30,0.28)" }}
            />

            {/* CTA Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 px-3 text-center">

              {/* Instagram icon with gradient */}
              <div
                aria-hidden="true"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-400 ease-out group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #F4571E 0%, #d62976 55%, #962fbf 100%)" }}
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  View more on
                </p>
                <p
                  className="text-base sm:text-xl lg:text-2xl font-black font-headline uppercase text-white leading-tight transition-colors duration-300 group-hover:text-brand-orange"
                  style={{ letterSpacing: "0.08em" }}
                >
                  INSTAGRAM
                </p>
              </div>

              <div
                aria-hidden="true"
                className="flex items-center gap-1.5 font-mono uppercase tracking-widest text-brand-orange transition-colors duration-300 mt-0.5"
                style={{ fontSize: "9px" }}
              >
                <span>@teamnara.in</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <path
                    d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest text-center sm:text-left">
            Calicut &middot; Kerala &middot; India &mdash; Shot on location
          </p>
          <a
            href="https://www.instagram.com/teamnara.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Team NARA on Instagram"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brand-orange hover:text-brand-orange text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e]"
            style={{ borderColor: "rgba(244,87,30,0.35)" }}
          >
            <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
            <span>@teamnara.in</span>
          </a>
        </div>
      </div>
    </section>
  );
}
