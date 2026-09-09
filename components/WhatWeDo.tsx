import React from "react";
import Image from "next/image";

interface Discipline {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "parkour",
    num: "01",
    title: "Parkour",
    description:
      "Learn to move through your environment with better control, strength, coordination and awareness.",
    image: "/images/IMG_3115.PNG",
  },
  {
    id: "freerunning",
    num: "02",
    title: "Freerunning",
    description:
      "Explore movement through flow, creativity, style and personal expression.",
    image: "/images/IMG_3117.PNG",
  },
  {
    id: "tricking",
    num: "03",
    title: "Tricking",
    description:
      "A dynamic combination of kicks, spins, flips and martial-arts-inspired movement.",
    image: "/images/IMG_3116.PNG",
  },
  {
    id: "workshops",
    num: "04",
    title: "Workshops",
    description:
      "Special training sessions conducted for groups, schools, communities and events.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "community",
    num: "05",
    title: "Community",
    description:
      "A place to train, meet people, learn together and keep moving.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative py-24 sm:py-32 bg-brand-dark text-white border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow + Right-aligned label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-16 border-b border-white/10 pb-5 sm:pb-6">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-orange">
              WHAT WE DO
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white mt-1">
              DISCIPLINES &amp; CRAFT
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
              MOVEMENT IN MANY FORMS
            </span>
          </div>
        </div>

        {/* 5-Column Grid (stack on mobile, scroll/grid on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {DISCIPLINES.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-brand-dark-card rounded-2xl border border-white/10 overflow-hidden hover:border-brand-orange/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/40"
            >
              {/* Image Container with high contrast overlay */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-110 filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-card via-transparent to-transparent opacity-90" />

                {/* Number Tag (01 - 05) */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-brand-orange font-mono font-bold text-xs tracking-wider">
                  {item.num}
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-headline font-black uppercase tracking-[0.04em] text-white group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 sm:mt-2 leading-relaxed line-clamp-3 group-hover:text-neutral-200 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-brand-orange transition-colors">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
