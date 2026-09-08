"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, User, Phone, Mail, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import PaymentStep from "./PaymentStep";
import { RegistrationData, RegistrationResponse } from "@/types/registration";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBatch?: string;
}

const BATCH_OPTIONS = [
  "Weekend Sunset Session — Calicut Beach (5:00 PM)",
  "Weekend Dawn Flow — Beach Promenade (6:30 AM)",
  "Weekday Movement & Strength — Urban Spots (6:00 AM)",
  "Freerunning & Tricking Clinic — Open Level",
];

export default function RegisterModal({
  isOpen,
  onClose,
  defaultBatch,
}: RegisterModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    phone: "",
    email: "",
    sessionBatch: defaultBatch || BATCH_OPTIONS[0],
    message: "",
    upiReference: "",
    amount: 799,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registrationId, setRegistrationId] = useState<string>("");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [savedScreenshotUrl, setSavedScreenshotUrl] = useState<string | null>(null);
  const [imageCopied, setImageCopied] = useState(false);

  useEffect(() => {
    if (defaultBatch) {
      setFormData((prev) => ({ ...prev, sessionBatch: defaultBatch }));
    }
  }, [defaultBatch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Convert Base64 data URL to standard PNG Blob for Clipboard API
  const convertDataUrlToPngBlob = async (dataUrl: string): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || 800;
        canvas.height = img.naturalHeight || 600;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas 2D context unavailable"));
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Canvas blob conversion failed"));
        }, "image/png");
      };
      img.onerror = () => reject(new Error("Failed to load image for canvas"));
      img.src = dataUrl;
    });
  };

  const handleCopyImage = async () => {
    if (!formData.screenshotBase64) return false;
    try {
      const pngBlob = await convertDataUrlToPngBlob(formData.screenshotBase64);
      const item = new ClipboardItem({ "image/png": pngBlob });
      await navigator.clipboard.write([item]);
      setImageCopied(true);
      setTimeout(() => setImageCopied(false), 3000);
      return true;
    } catch (err) {
      console.warn("Clipboard image copy failed", err);
      return false;
    }
  };

  const handleShareOrOpenWhatsApp = async (customRegId?: string) => {
    const activeRegId = customRegId || registrationId;
    const textMessage = [
      "🔥 *TEAM NARA — SESSION BOOKING & PAYMENT PROOF*",
      "",
      `📋 *Registration ID:* ${activeRegId}`,
      `👤 *Name:* ${formData.fullName.trim()}`,
      `📞 *Phone:* ${formData.phone.trim()}`,
      `✉️ *Email:* ${formData.email.trim()}`,
      `🏃 *Session Batch:* ${formData.sessionBatch}`,
      `💰 *Amount:* ₹${formData.amount}`,
      `💳 *UPI Ref / UTR:* ${formData.upiReference?.trim()}`,
      formData.message?.trim() ? `📝 *Notes:* ${formData.message.trim()}` : "",
      formData.screenshotName ? `\n📸 *Payment Screenshot:* ${formData.screenshotName} (Attached)` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // 1. Check if native Web Share API with files is supported (Android Chrome / iOS Safari)
    if (formData.screenshotBase64 && typeof navigator !== "undefined" && navigator.canShare) {
      try {
        const res = await fetch(formData.screenshotBase64);
        const blob = await res.blob();
        const ext = blob.type.includes("png") ? "png" : "jpg";
        const file = new File(
          [blob],
          formData.screenshotName || `payment-receipt.${ext}`,
          { type: blob.type }
        );

        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "Team NARA Session Booking Proof",
            text: textMessage,
            files: [file],
          });
          return;
        }
      } catch (shareErr) {
        if ((shareErr as Error).name !== "AbortError") {
          console.warn("Web Share API failed, using clipboard & WhatsApp Web fallback", shareErr);
        } else {
          return;
        }
      }
    }

    // 2. Desktop / Fallback: automatically copy image to clipboard
    if (formData.screenshotBase64) {
      await handleCopyImage();
    }

    // 3. Open WhatsApp Web / App
    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank");
    } else {
      const fallbackUrl = `https://wa.me/917907318843?text=${encodeURIComponent(textMessage)}`;
      window.open(fallbackUrl, "_blank");
    }
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.upiReference?.trim()) {
      setError("Please enter your UPI transaction / reference ID.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: RegistrationResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || "Failed to submit registration");
      }

      const assignedId = data.registrationId || `NARA-${Date.now().toString().slice(-6)}`;
      setRegistrationId(assignedId);

      if (data.whatsappUrl) {
        setWhatsappUrl(data.whatsappUrl);
      }
      if (data.screenshotUrl) {
        setSavedScreenshotUrl(data.screenshotUrl);
      }

      setStep(3);

      // Trigger automatic share or clipboard copy + WhatsApp open
      await handleShareOrOpenWhatsApp(assignedId);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#F4571E", "#FFFFFF", "#141414"],
        });
      } catch {
        // Safe fallback
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setStep(1);
    setError(null);
    setWhatsappUrl(null);
    setSavedScreenshotUrl(null);
    setImageCopied(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      sessionBatch: BATCH_OPTIONS[0],
      message: "",
      upiReference: "",
      amount: 799,
      screenshotBase64: undefined,
      screenshotName: undefined,
      screenshotUrl: undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar with brand accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-orange via-[#FF7B47] to-brand-orange flex-shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 flex items-start justify-between border-b border-white/5 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-orange uppercase">
                {step === 1 && "Step 1 of 2 • Details"}
                {step === 2 && "Step 2 of 2 • Payment"}
                {step === 3 && "Spot Reserved"}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black font-headline text-white tracking-[0.04em] sm:tracking-[0.06em] uppercase">
              {step === 1 && "Join A Session"}
              {step === 2 && "UPI Admission Payment"}
              {step === 3 && "Registration Received"}
            </h3>
          </div>
          <button
            onClick={resetModal}
            className="p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                >
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Athul Das"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                >
                  Phone Number (WhatsApp) <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                >
                  Email Address <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="athul@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                  />
                </div>
              </div>

              {/* Preferred Session/Batch */}
              <div>
                <label
                  htmlFor="sessionBatch"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                >
                  Preferred Session / Batch <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-brand-orange absolute left-3.5 top-3 sm:top-3.5 pointer-events-none" />
                  <select
                    id="sessionBatch"
                    value={formData.sessionBatch}
                    onChange={(e) =>
                      setFormData({ ...formData, sessionBatch: e.target.value })
                    }
                    className="w-full pl-10 pr-8 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-orange transition text-base sm:text-sm appearance-none cursor-pointer"
                  >
                    {BATCH_OPTIONS.map((batch) => (
                      <option key={batch} value={batch} className="bg-[#1C1C1C] text-white">
                        {batch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
                >
                  Movement Background / Notes <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 sm:top-3.5" />
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Any prior sports, injuries, or goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1C1C1C] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm tracking-wide transition flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 mt-2"
              >
                Proceed to Payment (₹{formData.amount}) →
              </button>
            </form>
          )}

          {step === 2 && (
            <PaymentStep
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep(1)}
              onSubmit={handleFinalSubmit}
              isSubmitting={isSubmitting}
              error={error}
            />
          )}

          {step === 3 && (
            <div className="text-center py-3 space-y-4">
              <div className="w-14 h-14 bg-brand-orange/20 border-2 border-brand-orange rounded-full flex items-center justify-center mx-auto text-brand-orange shadow-lg shadow-brand-orange/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl sm:text-2xl font-headline font-bold text-white uppercase tracking-[0.06em]">
                  Spot Reserved!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Your booking details and payment reference have been recorded.
                  Our team will verify your payment and confirm your spot.
                </p>
              </div>

              {/* WhatsApp Direct Action Button */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleShareOrOpenWhatsApp()}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm tracking-wide transition flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 active:scale-98 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Share Image & Details to WhatsApp</span>
                </button>
                <p className="text-[11px] text-neutral-400">
                  Directs to <strong className="text-white">+91 7907318843</strong>. On phones, attaches the image file directly; on computer, paste with <kbd className="px-1 py-0.5 bg-neutral-800 rounded text-[10px] text-neutral-300">Ctrl+V</kbd>.
                </p>
              </div>

              {/* Receipt Preview & Clipboard Action */}
              {(formData.screenshotBase64 || savedScreenshotUrl) && (
                <div className="p-3 bg-[#1C1C1C] border border-white/10 rounded-xl flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={formData.screenshotBase64 || savedScreenshotUrl || ""}
                        alt="Payment Receipt"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white truncate max-w-[150px]">
                        {formData.screenshotName || "Payment Receipt Screenshot"}
                      </p>
                      <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        {imageCopied ? "✓ Copied to clipboard! Just paste in chat" : "Attached screenshot"}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyImage}
                    className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition flex-shrink-0 font-medium active:scale-95"
                  >
                    {imageCopied ? "✓ Copied" : "Copy Image"}
                  </button>
                </div>
              )}

              {/* Summary Details */}
              <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-4 max-w-sm mx-auto text-left space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Ref ID:</span>
                  <span className="font-mono font-bold text-white">{registrationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Name:</span>
                  <span className="text-white truncate max-w-[140px]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Batch:</span>
                  <span className="text-white truncate max-w-[150px]">{formData.sessionBatch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">UPI Ref:</span>
                  <span className="font-mono text-brand-orange truncate max-w-[140px]">
                    {formData.upiReference}
                  </span>
                </div>
              </div>

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
    </div>
  );
}
