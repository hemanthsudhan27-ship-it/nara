"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Mail, ArrowUp } from "lucide-react";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sessions", href: "/sessions" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Community", href: "/community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#0f0f0f] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex mb-1">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="Team NARA Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="font-headline text-3xl sm:text-4xl font-black tracking-[0.08em] text-brand-orange group-hover:scale-105 transition-transform duration-200">
                NARA
              </span>
            </Link>

            <p className="text-sm font-semibold tracking-wider text-neutral-300 uppercase">
              Parkour • Freerunning • Tricking / Calicut, Kerala
            </p>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Kerala&apos;s premier street movement community. Reclaiming open spaces,
              mastering body control, and fostering progression on the coastline of Kozhikode.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/teamnara.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-neutral-300 hover:text-white flex items-center justify-center transition border border-white/10"
                aria-label="Follow Team NARA on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <div className="text-xs font-mono text-neutral-400">
                <span>@teamnara.in</span>
              </div>
            </div>
          </div>

          {/* Nav Links Repeated */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              Training Grounds
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>South Beach Promenade &amp; Coastal Spots, Kozhikode, Kerala 673001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>teamnara.in@gmail.com</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline font-mono uppercase"
                >
                  <span>View Location Directions &amp; Guide →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p className="font-mono text-neutral-400">
            Adapt. Evolve. Keep Moving.
          </p>

          <p className="font-mono">
            &copy; 2026 Team NARA. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-brand-orange transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
