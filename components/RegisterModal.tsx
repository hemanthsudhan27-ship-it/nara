"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, User, Phone, Mail, AlertTriangle, Hash, ShieldCheck, Check, Copy, ZoomIn } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBatch?: string;
}

const BATCH_OPTIONS = [
  "Outdoor Parkour & Freerunning — Mon, Wed & Fri (6:00 AM – 7:30 AM)",
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  sessionBatch: string;
  message: string;
}

export default function RegisterModal({
  isOpen,
  onClose,
  defaultBatch,
}: RegisterModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isQrExpanded, setIsQrExpanded] = useState(false);
  const upiId = "sarathnad-2@okicici";
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    sessionBatch: defaultBatch || BATCH_OPTIONS[0],
    message: "",
  });
  const [riskAgreed, setRiskAgreed] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [closeGuard, setCloseGuard] = useState(false);

  const isDirty = !!(formData.fullName || formData.phone || formData.email || formData.age);

  useEffect(() => {
    if (defaultBatch) {
      setFormData((prev) => ({ ...prev, sessionBatch: defaultBatch }));
    }
  }, [defaultBatch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isQrExpanded) {
          setIsQrExpanded(false);
        } else if (isOpen) {
          handleCloseAttempt();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isDirty, step, isQrExpanded]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateField = (name: string, value: string): string => {
    if (name === "fullName") {
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (!value.trim()) return "WhatsApp number is required.";
      if (digits.length < 10) return "Enter a valid 10-digit mobile number.";
    }
    if (name === "email") {
      if (!value.trim()) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
    }
    if (name === "age") {
      if (!value.trim()) return "Age is required.";
      const n = parseInt(value, 10);
      if (isNaN(n) || n < 12 || n > 60) return "Age must be between 12 and 60.";
    }
    if (name === "upiReference") {
      if (!value.trim()) return "UPI Transaction ID is required.";
    }
    if (name === "bankAccountName") {
      if (!value.trim()) return "Bank Account Name is required.";
    }
    return "";
  };

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(upiId).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleFieldBlur = (name: string, value: string) => {
    const err = validateField(name, value);
    if (err) setFieldErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleCloseAttempt = () => {
    if (isDirty && step !== 2) {
      setCloseGuard(true);
      setTimeout(() => setCloseGuard(false), 3000);
    } else {
      resetModal();
    }
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "🔥 *TEAM NARA — TRIAL SESSION REGISTRATION*",
      "",
      `👤 *Name:* ${formData.fullName.trim()}`,
      `🔢 *Age:* ${formData.age.trim()}`,
      `📞 *Phone:* ${formData.phone.trim()}`,
      `✉️ *Email:* ${formData.email.trim()}`,
      `🏃 *Class:* ${formData.sessionBatch}`,
      `💰 *Trial Session Fee:* ₹499`,
      `🏦 *Bank A/c Name:* ${formData.bankAccountName || ""}`,
      `🧾 *UPI UTR:* ${formData.upiReference || ""}`,
      `👟 *Coaching:* Team NARA Trainers`,
      `📅 *Schedule:* Mon, Wed & Fri • 6:00 AM – 7:30 AM`,
      `🧘 *Requirements:* Yoga mat & bottle of water`,
      "",
      `✅ *Risk Awareness:* Participant has acknowledged the physical risks of parkour and freerunning.`,
    ];

    if (formData.message?.trim()) {
      lines.push("", `📝 *Notes:* ${formData.message.trim()}`);
    }

    return lines.join("\n");
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();

    const fields = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      age: formData.age,
      upiReference: formData.upiReference || "",
      bankAccountName: formData.bankAccountName || "",
    };
    const errors: Record<string, string> = {};
    let hasError = false;
    for (const [key, val] of Object.entries(fields)) {
      const err = validateField(key, val);
      if (err) { errors[key] = err; hasError = true; }
    }
    setFieldErrors(errors);

    if (hasError) {
      setError("Please fix the highlighted fields above.");
      return;
    }

    if (!riskAgreed) {
      setError("You must acknowledge the risk awareness clause to proceed.");
      return;
    }

    setError(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect directly to WhatsApp
      const text = buildWhatsAppMessage();
      const targetUrl = `https://wa.me/918593912936?text=${encodeURIComponent(text)}`;
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = targetUrl;
      } else {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }

      // Celebrate + move to confirmation
      setStep(2);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#F4571E", "#FFFFFF", "#141414"],
        });
      } catch {
        // safe fallback
      }
    }, 800);
  };

  const resetModal = () => {
    setStep(1);
    setError(null);
    setFieldErrors({});
    setCloseGuard(false);
    setRiskAgreed(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      age: "",
      sessionBatch: BATCH_OPTIONS[0],
      message: "",
    });
    onClose();
  };

  const handleOpenWhatsAppAgain = () => {
    const text = buildWhatsAppMessage();
    const targetUrl = `https://wa.me/918593912936?text=${encodeURIComponent(text)}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = targetUrl;
    } else {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-orange via-[#FF7B47] to-brand-orange flex-shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 flex items-start justify-between border-b border-white/5 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-orange uppercase">
                {step === 1 && "Details & Payment"}
                {step === 2 && "WhatsApp Sent"}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black font-headline text-white tracking-[0.04em] sm:tracking-[0.06em] uppercase">
                {step === 1 && "Book Trial Session"}
                {step === 2 && "You're All Set!"}
            </h3>
          </div>
          <button
            onClick={handleCloseAttempt}
            className="p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Close Guard Warning */}
        {closeGuard && (
          <div className="mx-4 sm:mx-6 mt-0 mb-0 py-2 px-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-between gap-3 text-xs">
            <span className="text-yellow-400">You have unsaved progress. Are you sure you want to close?</span>
            <button onClick={resetModal} className="text-white font-bold underline flex-shrink-0">Yes, close</button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">

          {/* ── STEP 1: Details + Risk Clause ── */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-4">

              {/* Class Info Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-brand-orange font-bold font-mono uppercase tracking-wider">
                    Outdoor Parkour &amp; Freerunning
                  </span>
                  <span className="text-[11px] font-mono text-neutral-300">
                    Coaching: <strong className="text-brand-orange">Team NARA</strong>
                  </span>
                </div>
                <div className="flex items-center justify-between text-neutral-300 border-t border-white/5 pt-2">
                  <span>📅 Mon, Wed &amp; Fri • 6:00 AM – 7:30 AM</span>
                  <span className="font-bold text-white">Trial: ₹499</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Conducting across Calicut. <span className="text-brand-orange font-semibold">Note:</span> Please bring your own yoga mat &amp; water bottle for every session.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Athul Das"
                    value={formData.fullName}
                    onChange={(e) => handleFieldChange("fullName", e.target.value)}
                    onBlur={(e) => handleFieldBlur("fullName", e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition text-base sm:text-sm ${
                      fieldErrors.fullName ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                    }`}
                  />
                </div>
                {fieldErrors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><span>⚠</span> {fieldErrors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Phone Number (WhatsApp) <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    onBlur={(e) => handleFieldBlur("phone", e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition text-base sm:text-sm ${
                      fieldErrors.phone ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                    }`}
                  />
                </div>
                {fieldErrors.phone && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><span>⚠</span> {fieldErrors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Email Address <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="email"
                    type="email"
                    placeholder="athul@example.com"
                    value={formData.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    onBlur={(e) => handleFieldBlur("email", e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition text-base sm:text-sm ${
                      fieldErrors.email ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                    }`}
                  />
                </div>
                {fieldErrors.email && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><span>⚠</span> {fieldErrors.email}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Age <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Hash className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="age"
                    type="number"
                    min={12}
                    max={60}
                    placeholder="e.g. 21"
                    value={formData.age}
                    onChange={(e) => handleFieldChange("age", e.target.value)}
                    onBlur={(e) => handleFieldBlur("age", e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition text-base sm:text-sm ${
                      fieldErrors.age ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                    }`}
                  />
                </div>
                {fieldErrors.age && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><span>⚠</span> {fieldErrors.age}</p>
                )}
              </div>

              {/* Session Batch */}
              <div>
                <label htmlFor="sessionBatch" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Preferred Session / Batch <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-brand-orange absolute left-3.5 top-3 sm:top-3.5 pointer-events-none" />
                  <select
                    id="sessionBatch"
                    value={formData.sessionBatch}
                    onChange={(e) => setFormData({ ...formData, sessionBatch: e.target.value })}
                    className="w-full pl-10 pr-8 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-orange transition text-base sm:text-sm appearance-none cursor-pointer"
                  >
                    {BATCH_OPTIONS.map((batch) => (
                      <option key={batch} value={batch} className="bg-[#1C1C1C] text-white">{batch}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional notes */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Movement Background / Notes <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={2}
                  placeholder="Any prior sports, injuries, or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm resize-none"
                />
              </div>

              {/* ── PAYMENT SECTION ── */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 text-white mt-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div>
                    <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase">
                      Trial Session Fee
                    </span>
                    <h4 className="text-2xl font-bold font-headline text-white">
                      ₹499
                    </h4>
                  </div>
                </div>

                {/* QR Code & Instructions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 my-2">
                  <div
                    onClick={() => setIsQrExpanded(true)}
                    className="group relative w-32 h-32 bg-white p-2 rounded-xl flex-shrink-0 shadow-lg border-2 border-brand-orange/40 cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-105"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsQrExpanded(true);
                      }
                    }}
                    title="Click to expand QR Code"
                  >
                    <Image
                      src="/qr/qrcode.png"
                      alt="Team NARA Official UPI Payment QR Code"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white text-[11px] font-bold p-1 text-center backdrop-blur-[2px]">
                      <ZoomIn className="w-5 h-5 text-brand-orange" />
                      <span>Expand</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] font-medium uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Payment Verification</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed">
                      Pay the ₹499 fee using any UPI app, or transfer directly to the UPI ID below. Tap QR to enlarge.
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                      <code className="px-3 py-1.5 bg-black/60 rounded-lg text-xs font-mono font-bold text-neutral-200 border border-white/10 select-all">
                        {upiId}
                      </code>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-brand-orange/20 hover:bg-brand-orange/30 text-brand-orange border border-brand-orange/40 rounded-lg text-[10px] font-bold uppercase transition"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction Reference Input */}
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="upiReference" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    UPI Transaction ID / UTR Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    id="upiReference"
                    type="text"
                    required
                    placeholder="e.g. 423589123456"
                    value={formData.upiReference || ""}
                    onChange={(e) => handleFieldChange("upiReference", e.target.value)}
                    onBlur={(e) => handleFieldBlur("upiReference", e.target.value)}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-[#1C1C1C] border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition text-base sm:text-sm ${
                      fieldErrors.upiReference ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                    }`}
                  />
                  {fieldErrors.upiReference && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><span>⚠</span> {fieldErrors.upiReference}</p>
                  )}
                </div>

                {/* Name as in Bank Account */}
                <div>
                  <label htmlFor="bankAccountName" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Name as in Bank Account <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    id="bankAccountName"
                    type="text"
                    required
                    placeholder="As shown in GPay, PhonePe or Bank"
                    value={formData.bankAccountName || ""}
                    onChange={(e) => handleFieldChange("bankAccountName", e.target.value)}
                    onBlur={(e) => handleFieldBlur("bankAccountName", e.target.value)}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-[#1C1C1C] border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition text-base sm:text-sm ${
                      fieldErrors.bankAccountName ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                    }`}
                  />
                  {fieldErrors.bankAccountName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><span>⚠</span> {fieldErrors.bankAccountName}</p>
                  )}
                </div>
              </div>

              {/* WhatsApp Payment Screenshot Upload Clause */}
              <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-left space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">
                    Payment Verification Notice
                  </span>
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  📢 <strong>Please upload / send the screenshot of the payment to WhatsApp</strong> (+91 85939 12936). When you submit this form, WhatsApp will open automatically with your trial details and Bank Account Name pre-filled. Simply attach your payment screenshot directly in the WhatsApp chat.
                </p>
              </div>

              {/* ── RISK AWARENESS CLAUSE ── */}
              <div className={`p-4 rounded-xl border transition-all mt-4 ${
                riskAgreed
                  ? "bg-brand-orange/10 border-brand-orange/40"
                  : "bg-[#1C1C1C] border-white/15"
              }`}>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <input
                      id="riskAwareness"
                      type="checkbox"
                      checked={riskAgreed}
                      onChange={(e) => {
                        setRiskAgreed(e.target.checked);
                        if (e.target.checked && error?.includes("risk")) setError(null);
                      }}
                      className="w-4 h-4 rounded accent-orange-500 cursor-pointer mt-0.5"
                    />
                  </div>
                  <label htmlFor="riskAwareness" className="text-xs text-neutral-300 leading-relaxed cursor-pointer select-none">
                    <span className="flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span className="font-bold uppercase tracking-wide text-white text-[11px]">Risk Awareness &amp; Acknowledgement</span>
                    </span>
                    I understand and acknowledge that <strong className="text-white">parkour, freerunning, and tricking</strong> involve inherent physical risks including falls, impacts, and potential injury. I confirm that I am voluntarily participating in Team NARA training sessions and take full personal responsibility for my safety and wellbeing. I have read and agree to follow all coach instructions and safety guidelines.{" "}
                    <span className="text-brand-orange font-semibold">This acknowledgement must be checked to proceed.</span>
                  </label>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={!riskAgreed || isSubmitting || !formData.upiReference?.trim() || !formData.bankAccountName?.trim()}
                className="w-full py-3.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide transition flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Complete Registration →
                  </>
                )}
              </button>
            </form>
          )}

          {/* ── STEP 2: Confirmation ── */}
          {step === 2 && (
            <div className="text-center py-3 space-y-5">
              <div className="w-14 h-14 bg-brand-orange/20 border-2 border-brand-orange rounded-full flex items-center justify-center mx-auto text-brand-orange shadow-lg shadow-brand-orange/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-white uppercase tracking-[0.06em]">
                  WhatsApp Opened!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Your admission details have been pre-filled in WhatsApp. Our coach will get back to you shortly with class confirmation and fee payment details.
                </p>
              </div>

              {/* Summary */}
              <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-4 text-left space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Name:</span>
                  <span className="text-white font-medium">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Age:</span>
                  <span className="text-white">{formData.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Phone:</span>
                  <span className="text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Batch:</span>
                  <span className="text-white truncate max-w-[180px]">{formData.sessionBatch}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-1.5">
                  <span className="text-neutral-500">Risk Acknowledged:</span>
                  <span className="text-brand-orange font-bold">✓ Yes</span>
                </div>
              </div>

              {/* WhatsApp again button */}
              <button
                type="button"
                onClick={handleOpenWhatsAppAgain}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm tracking-wide transition flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 active:scale-98"
              >
                <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Didn&apos;t open? Tap to Open WhatsApp Again</span>
              </button>

              <button
                type="button"
                onClick={resetModal}
                className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-bold text-sm tracking-wide transition"
              >
                Done / Back to Team NARA
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expanded QR Modal */}
      {isQrExpanded && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsQrExpanded(false)}
        >
          <div
            className="relative bg-[#181818] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsQrExpanded(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition border border-white/10 active:scale-95"
              aria-label="Close QR preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-orange">
                SCAN TO PAY
              </span>
              <h3 className="text-xl font-headline font-black uppercase text-white mt-1">
                UPI PAYMENT QR
              </h3>
              <p className="text-xs text-neutral-400">
                Trial Session: <strong className="text-white">₹499</strong>
              </p>
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto bg-white p-3.5 rounded-2xl shadow-xl border-2 border-brand-orange flex items-center justify-center">
              <Image
                src="/qr/qrcode.png"
                alt="Team NARA Official UPI Payment QR Code"
                width={288}
                height={288}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-center gap-2">
                <code className="px-3 py-1.5 bg-black/60 rounded-lg text-xs font-mono font-bold text-neutral-200 border border-white/10 select-all">
                  {upiId}
                </code>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-orange/20 hover:bg-brand-orange/30 text-brand-orange border border-brand-orange/40 rounded-lg text-xs font-semibold transition active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy UPI
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-neutral-400">
                Works with Google Pay, PhonePe, Paytm, BHIM, or any UPI App
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsQrExpanded(false)}
              className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
