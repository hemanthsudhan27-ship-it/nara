import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-16 sm:py-24 bg-brand-cream text-brand-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Headline, Eyebrow */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-orange font-mono">
                MORE THAN JUST TRAINING
              </span>
            </div>

            <h2 className="font-headline font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl tracking-[0.04em] sm:tracking-[0.06em] leading-[0.98] uppercase text-brand-dark">
              A COMMUNITY <br />
              <span className="text-brand-orange">THAT MOVES</span>
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              <p>
                NARA started as a simple idea in Calicut: people coming together to
                reclaim public spaces and rediscover the joy of human movement.
              </p>
              <p>
                Over the years, it grew into an authentic street-sport community
                connected by parkour, freerunning, tricking, and mutual respect.
                We don&apos;t wait for fancy indoor facilities or specialized equipment.
                All you need is a little space, an open mind, the right people beside
                you, and a reason to try.
              </p>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-neutral-900 border-l-4 border-brand-orange pl-3.5 sm:pl-4 py-1">
                From beachside concrete benches to seaside promenades, we transform
                the city of Calicut into our canvas.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow"
              >
                <span>Read Our Community Story &amp; Ethos</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>
          </div>

          {/* Right Column: Photo of 4 people silhouetted at ocean sunset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
                <Image
                  src="/images/IMG_3116.PNG"
                  alt="Team NARA movement community running along the coastline during Sunday sunset jam in Calicut Kerala"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5 text-white bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-xs font-mono uppercase tracking-widest text-brand-orange">
                    Team NARA Collective
                  </p>
                  <p className="text-sm font-bold font-headline uppercase mt-0.5">
                    Calicut Beach Promenade • Sunset Jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
