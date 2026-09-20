"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { BATCHES, FAQS } from "@/lib/sessionsData";
import TestimonialsStrip from "@/components/TestimonialsStrip";

const HOW_IT_WORKS = [
  { step: "01", title: "Book a Trial", desc: "Complete the registration form and pay ₹499 via UPI. You'll receive a WhatsApp welcome with class details." },
  { step: "02", title: "Show Up Outdoors", desc: "Mon, Wed & Fri at 6:00 AM across Calicut. Bring your yoga mat & water bottle." },
  { step: "03", title: "Move with Coaches", desc: "Step-by-step parkour progressions from grounded basics to dynamic movement flow." },
];

const spotsConfig = {
  open:        { label: (n: number) => `${n} Spots Open`,    dot: "bg-green-400",  text: "text-green-400",  border: "border-green-400/30",  bg: "bg-green-400/10" },
  filling:     { label: (n: number) => `${n} Spots Left`,    dot: "bg-yellow-400", text: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/10" },
  "almost-full": { label: (n: number) => `Only ${n} Left!`,  dot: "bg-red-400",    text: "text-red-400",   border: "border-red-400/30",   bg: "bg-red-400/10" },
};

export default function SessionsClient() {
  const { openRegister } = useRegister();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileBar, setShowMobileBar] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowMobileBar(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              OUTDOOR TRAINING SCHEDULE &amp; ADMISSION
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              JOIN OUR <br />
              <span className="text-brand-orange">OUTDOOR CLASSES</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              Currently, we conduct our outdoor Parkour &amp; Freerunning classes at
              different locations across Calicut. Led by experienced Team NARA trainers.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-10 sm:py-14 bg-[#0f0f0f] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6">How it works</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="text-4xl font-black font-headline text-brand-orange/25 leading-none flex-shrink-0 mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wide">{title}</p>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule & Pricing Detailed Section */}
      <section className="py-16 sm:py-24 bg-[#181818] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                CLASS SCHEDULE &amp; FEES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-headline tracking-[0.06em] uppercase text-white mt-1">
                REGULAR TRAINING
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase">
              OUTDOOR SESSIONS ACROSS KOZHIKODE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Class Card (7 cols) */}
            {BATCHES.map((batch) => {
              const sc = spotsConfig[batch.spotsStatus];
              return (
                <div
                  key={batch.id}
                  className="lg:col-span-7 bg-[#141414] border border-white/10 hover:border-brand-orange/60 rounded-3xl p-6 sm:p-10 space-y-6 sm:space-y-8 transition-all duration-300 shadow-2xl"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap border-b border-white/10 pb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold uppercase">
                        {batch.badge}
                      </span>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold font-mono uppercase border ${sc.bg} ${sc.border} ${sc.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} animate-pulse`} />
                        {sc.label(batch.spots)}
                      </div>
                    </div>
                    <a
                      href={batch.trainerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-300 hover:text-brand-orange transition flex items-center gap-1"
                    >
                      <span>Trainer:</span>
                      <span className="font-bold text-brand-orange">{batch.trainer}</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-black font-headline uppercase text-white mb-4">
                      {batch.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {batch.focus} Learn more about our five core{" "}
                      <Link href="/what-we-do" className="text-brand-orange font-bold hover:underline">
                        training disciplines
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Schedule & Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-brand-orange text-xs font-mono font-bold uppercase">
                        <Calendar className="w-4 h-4" />
                        <span>Days</span>
                      </div>
                      <p className="font-bold text-sm text-white">Monday, Wednesday &amp; Friday</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-brand-orange text-xs font-mono font-bold uppercase">
                        <Clock className="w-4 h-4" />
                        <span>Timings</span>
                      </div>
                      <p className="font-bold text-sm text-white">6:00 AM – 7:30 AM</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-brand-orange text-xs font-mono font-bold uppercase">
                        <MapPin className="w-4 h-4" />
                        <span>Locations</span>
                      </div>
                      <p className="font-bold text-sm text-white">Different spots across Calicut</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-brand-orange text-xs font-mono font-bold uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>Experience Level</span>
                      </div>
                      <p className="font-bold text-sm text-white">{batch.level}</p>
                    </div>
                  </div>

                  {/* Mandatory Requirement Note */}
                  <div className="p-4 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-start gap-3">
                    <span className="text-base sm:text-lg">🧘</span>
                    <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                      <span className="font-bold text-brand-orange uppercase block font-mono text-[11px] mb-0.5">
                        Required for Every Session:
                      </span>
                      You are required to bring your own <strong className="text-white font-semibold">yoga mat</strong> and a <strong className="text-white font-semibold">bottle of water</strong> for every session.
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => openRegister("Outdoor Parkour & Freerunning — Mon, Wed & Fri (6:00 AM – 7:30 AM)")}
                      className="w-full py-4 px-6 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/25 active:scale-98"
                    >
                      <span>Book Trial Session (₹499)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-neutral-400 mt-2 font-mono">
                      &quot;We look forward to seeing you in class!&quot;
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Fee Structure Summary Box (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                    TRANSPARENT PRICING
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white mt-1">
                    FEE STRUCTURE
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 font-mono uppercase block">
                        Trial Session
                      </span>
                      <h4 className="text-lg font-bold text-white mt-0.5">Single Class Pass</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black font-headline text-brand-orange">
                        ₹499
                      </span>
                      <span className="text-[10px] text-neutral-400 block font-mono">one-time</span>
                    </div>
                  </div>
                </div>

                {/* Coaching Highlight */}
                <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange font-headline text-xl font-bold flex-shrink-0">
                    TN
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Coaching Team
                    </span>
                    <h5 className="text-base font-bold text-white truncate">Team NARA Coaches</h5>
                    <a
                      href="https://instagram.com/teamnara.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-orange hover:underline inline-flex items-center gap-1 font-mono"
                    >
                      <span>Follow on Instagram</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Trial Guarantee */}
                <div className="space-y-2 text-xs text-neutral-300 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Structured step-by-step coaching for all levels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Direct WhatsApp coordination &amp; spot updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Outdoor real-world movement mastery</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="block text-center text-xs font-mono text-neutral-400 hover:text-white uppercase transition underline underline-offset-4"
                  >
                    Have questions about batches? Contact coaches →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Mobile Bottom CTA */}
          <div className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${showMobileBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
            <div className="bg-[#141414]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest leading-none">Admission Open</p>
                <p className="text-xs font-bold text-white truncate mt-0.5">Mon, Wed &amp; Fri · 6:00 AM · ₹499</p>
              </div>
              <button
                onClick={() => openRegister("Outdoor Parkour & Freerunning — Mon, Wed & Fri (6:00 AM – 7:30 AM)")}
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/30 active:scale-95"
              >
                <span>Book Trial (₹499)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Grounds in Calicut — Compact */}
      <section className="py-14 sm:py-20 bg-brand-cream text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
            TRAINING SPOTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-headline tracking-[0.06em] uppercase text-brand-dark mt-1 mb-8">
            CALICUT IS OUR GYM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "South Beach Promenade", desc: "Granite ledges, sea-facing steps & sandy areas. Perfect for vaults, balances & soft landings." },
              { name: "Mananchira Square", desc: "Heritage walls & architectural steps for cat leaps, wall runs & precision stride drills." },
              { name: "Coastal Pier Breakwater", desc: "Open horizons & elevated concrete pads for sunset jams and freerunning challenges." },
            ].map((spot, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white shadow-sm border border-neutral-200 hover:border-brand-orange/40 transition">
                <span className="text-brand-orange font-mono font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-black text-brand-dark font-headline uppercase text-base mt-1">{spot.name}</h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{spot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — social proof before the final ask */}
      <TestimonialsStrip theme="dark" heading="What Our Members Say" />

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

          <div className="text-center pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openRegister()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
            >
              Book Trial Session Now →
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition"
            >
              Contact Coach for Queries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
