"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Clock, Send, CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function ContactClient() {
  const { openRegister } = useRegister();
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    contact: "",
    subject: "Session Inquiry",
    message: "",
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="bg-[#141414] text-white pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              GET IN TOUCH &amp; TRAINING SPOTS
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white leading-[0.92]">
              FIND US ON <br />
              <span className="text-brand-orange">THE COAST</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              Have questions about batch timings, beginner fitness, workshops, or
              session fees? Reach out to the Team NARA coaches in Calicut, Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact & Spot Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                  TRAINING GROUNDS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-headline uppercase text-white">
                  WHERE WE MEET
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Currently, we conduct our outdoor Parkour &amp; Freerunning classes at
                  different locations across Calicut (including South Beach promenade and Mananchira Square). Led by experienced Team NARA trainers.
                </p>
              </div>

              {/* Spot Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-brand-orange font-bold text-sm uppercase font-headline">
                    <Clock className="w-4 h-4" />
                    <span>Class Schedule</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    Monday, Wednesday &amp; Friday • 6:00 AM – 7:30 AM
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Different outdoor spots across Calicut, Kerala</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-brand-orange font-bold text-sm uppercase font-headline">
                    <MapPin className="w-4 h-4" />
                    <span>Fees &amp; Requirements</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    Trial Session: <strong className="text-white">₹500</strong> (one-time)
                  </p>
                  <div className="text-[11px] text-brand-orange font-mono pt-1">
                    ⚠ Required: Bring your own yoga mat &amp; water bottle
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/sessions"
                      className="text-xs text-brand-orange hover:underline font-mono inline-flex items-center gap-1"
                    >
                      <span>Read full session FAQ &amp; batch breakdown</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Communication Channels */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                  DIRECT CONTACT
                </span>
                <div className="space-y-3 text-sm text-neutral-300">
                  <a
                    href="tel:+918593912936"
                    className="flex items-center gap-3 hover:text-brand-orange transition"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>+91 85939 12936</span>
                  </a>
                  <a
                    href="https://wa.me/918593912936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#25D366] transition"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>+91 85939 12936 (WhatsApp)</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <span>teamnara.in@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-brand-orange font-bold font-mono text-xs">IG</span>
                    <a
                      href="https://instagram.com/teamnara.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-orange transition"
                    >
                      @teamnara.in (Instagram DM)
                    </a>
                  </div>
                </div>
              </div>

              {/* Admission CTA Box */}
              <div className="p-6 rounded-2xl bg-brand-orange text-white space-y-3 shadow-xl">
                <h3 className="text-2xl font-headline font-black uppercase">
                  Ready to Register?
                </h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  Skip the inquiry form and secure your spot directly with our
                  online UPI admission step.
                </p>
                <button
                  onClick={() => openRegister()}
                  className="w-full py-3 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow"
                >
                  Join a Session Now →
                </button>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#1C1C1C] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                SEND A MESSAGE
              </span>
              <h2 className="text-xl sm:text-3xl font-black font-headline uppercase text-white mt-1 mb-5 sm:mb-6">
                ASK US ANYTHING
              </h2>

              {inquirySent ? (
                <div className="text-center py-10 sm:py-12 space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-orange/20 border-2 border-brand-orange text-brand-orange flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline font-bold uppercase text-white">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out. One of our senior coaches will
                    contact you via WhatsApp or Email within 24 hours.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase text-white transition active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={inquiryData.name}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#141414] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      WhatsApp Phone or Email
                    </label>
                    <input
                      id="contact"
                      type="text"
                      required
                      placeholder="+91 85939 12936 or email@example.com"
                      value={inquiryData.contact}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, contact: e.target.value })
                      }
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#141414] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={inquiryData.subject}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#141414] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                    >
                      <option value="Session Inquiry">Outdoor Sessions &amp; Batches</option>
                      <option value="Workshops">School or College Workshop</option>
                      <option value="Beginner Questions">Beginner Fitness &amp; Injuries</option>
                      <option value="Collaborations">Brand &amp; Media Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="msg"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Message / Questions
                    </label>
                    <textarea
                      id="msg"
                      rows={4}
                      required
                      placeholder="Tell us what you'd like to know..."
                      value={inquiryData.message}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#141414] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/20 active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
