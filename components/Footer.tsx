"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Mail, ArrowUp, Phone } from "lucide-react";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/teamnara"; // Replace with real invite link

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
                  alt="Team NARA Parkour, Freerunning & Tricking Collective Calicut Kerala - Emblem Logo"
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

            {/* WhatsApp Community CTA */}
            <a
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 text-[#25D366] text-xs font-bold tracking-wide transition-all group"
              aria-label="Join Team NARA WhatsApp Community"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.837L.057 23.43a.5.5 0 0 0 .613.613l5.593-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.359-.214-3.72.976.993-3.624-.233-.373A9.814 9.814 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/>
              </svg>
              <span>Join our WhatsApp Community</span>
            </a>
          </div>

          {/* Nav Links Repeated */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              Explore Pages
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
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:+918593912936" className="hover:text-white transition">
                  +91 85939 12936
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>teamnara.in@gmail.com</span>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <Link
                  href="/sessions"
                  className="text-xs text-brand-orange hover:underline font-mono uppercase font-bold"
                >
                  Outdoor Parkour Classes &amp; Fees (₹2,500) →
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-neutral-400 hover:text-white font-mono uppercase"
                >
                  Training Spots &amp; Directions →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keyword Hub / Movement Directory Strip */}
        <div className="py-6 border-b border-white/10 text-[11px] text-neutral-400 space-y-2">
          <p className="font-mono uppercase text-brand-orange font-bold tracking-wider">
            Popular Movement Searches &amp; Topics:
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-normal">
            <Link href="/sessions" className="hover:text-white transition">Parkour Classes Calicut</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/what-we-do" className="hover:text-white transition">Freerunning Flow Kerala</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/sessions" className="hover:text-white transition">Parkour Training Fees Kozhikode</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/community" className="hover:text-white transition">Calicut Beach Sunset Jams</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/what-we-do" className="hover:text-white transition">Martial Arts Tricking Kerala</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/gallery" className="hover:text-white transition">Kerala Traceurs Action Frames</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/about" className="hover:text-white transition">Team NARA Movement Method</Link>
            <span className="text-neutral-600">•</span>
            <Link href="/contact" className="hover:text-white transition">South Beach Promenade Spot Guide</Link>
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
