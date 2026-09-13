"use client";

// TODO: replace manual UPI verification with Razorpay Checkout integration once live
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check, Copy, AlertCircle, ShieldCheck, ZoomIn, X } from "lucide-react";
import { RegistrationData } from "@/types/registration";

interface PaymentStepProps {
  formData: RegistrationData;
  setFormData: React.Dispatch<React.SetStateAction<RegistrationData>>;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  error?: string | null;
}

export default function PaymentStep({
  formData,
  setFormData,
  onBack,
  onSubmit,
  isSubmitting,
  error,
}: PaymentStepProps) {
  const [copied, setCopied] = useState(false);
  const [isQrExpanded, setIsQrExpanded] = useState(false);
  const upiId = "sarathnad-2@okicici";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsQrExpanded(false);
      }
    };
    if (isQrExpanded) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isQrExpanded]);

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(upiId).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase">
                Admission Fee (One-Time)
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold font-headline text-white">
                ₹{formData.amount}
              </h4>
              <span className="text-[11px] text-neutral-400 font-mono block">
                + Monthly Fee: ₹2,000
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-neutral-400">Class &amp; Schedule</span>
              <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px]">
                Mon, Wed &amp; Fri • 6:00 AM
              </p>
              <p className="text-[11px] text-brand-orange font-mono">
                Team NARA Coaching
              </p>
            </div>
          </div>

          {/* Gear Requirement Reminder */}
          <div className="mb-4 p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center gap-2 text-xs text-neutral-200">
            <span className="text-sm">🧘</span>
            <span><strong>Required:</strong> Bring your own yoga mat &amp; water bottle to every class.</span>
          </div>

          {/* QR Code & Instructions */}
          <div className="flex flex-col sm:flex-row items-center gap-5 my-3">
            {/* Click to expand QR thumbnail */}
            <div
              onClick={() => setIsQrExpanded(true)}
              className="group relative w-36 h-36 bg-white p-2 rounded-xl flex-shrink-0 shadow-lg border-2 border-brand-orange/40 cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-105"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsQrExpanded(true);
                }
              }}
              aria-label="Click to expand QR Code preview"
              title="Click to expand QR Code"
            >
              <Image
                src="/upi-qr.svg"
                alt="Team NARA Official UPI Payment QR Code for Parkour Admission Fee in Calicut Kerala"
                width={144}
                height={144}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white text-[11px] font-bold p-1 text-center backdrop-blur-[2px]">
                <ZoomIn className="w-5 h-5 text-brand-orange" />
                <span>Click to Expand</span>
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admission Verification</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Pay the ₹2,500 admission fee using Google Pay, PhonePe, Paytm, or any UPI app,
                or transfer directly to the UPI ID below. Tap QR to enlarge.
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                <code className="px-3 py-1.5 bg-black/60 rounded-lg text-xs font-mono font-bold text-neutral-200 border border-white/10 select-all">
                  {upiId}
                </code>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-brand-orange/20 hover:bg-brand-orange/30 text-brand-orange border border-brand-orange/40 rounded-lg text-xs font-semibold transition"
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
            </div>
          </div>
        </div>

        {/* Transaction Reference Input */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="upiReference"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
            >
              UPI Transaction ID / UTR Number <span className="text-brand-orange">*</span>
            </label>
            <input
              id="upiReference"
              name="upiReference"
              type="text"
              required
              placeholder="e.g. 423589123456 or bank reference"
              value={formData.upiReference || ""}
              onChange={(e) =>
                setFormData({ ...formData, upiReference: e.target.value })
              }
              className="w-full px-4 py-2.5 sm:py-3 bg-[#181818] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
            />
            <p className="text-[11px] text-neutral-400 mt-1">
              Locate the 12-digit UPI Ref / UTR number in your payment receipt.
            </p>
          </div>

          {/* Name as in Bank Account */}
          <div>
            <label
              htmlFor="bankAccountName"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
            >
              Name as in Bank Account <span className="text-brand-orange">*</span>
            </label>
            <input
              id="bankAccountName"
              name="bankAccountName"
              type="text"
              required
              placeholder="e.g. Rahul K / As shown in GPay, PhonePe or Bank"
              value={formData.bankAccountName || ""}
              onChange={(e) =>
                setFormData({ ...formData, bankAccountName: e.target.value })
              }
              className="w-full px-4 py-2.5 sm:py-3 bg-[#181818] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition text-base sm:text-sm"
            />
            <p className="text-[11px] text-neutral-400 mt-1">
              The account holder name from which the UPI payment was sent.
            </p>
          </div>

          {/* WhatsApp Payment Screenshot Upload Clause */}
          <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-left space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">
                Payment Verification Notice
              </span>
            </div>
            <p className="text-xs text-neutral-200 leading-relaxed">
              📢 <strong>Please upload / send the screenshot of the payment to WhatsApp</strong> (+91 85939 12936). When you submit this form, WhatsApp will open automatically with your admission details and Bank Account Name pre-filled. Simply attach your payment screenshot directly in the WhatsApp chat.
            </p>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-2.5 sm:gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="w-full sm:w-1/3 py-3 px-4 rounded-xl border border-white/20 text-neutral-300 hover:text-white hover:bg-white/5 font-semibold text-sm transition active:scale-98"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !formData.upiReference?.trim() || !formData.bankAccountName?.trim()}
            className="w-full sm:w-2/3 py-3.5 sm:py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide transition flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 active:scale-98"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              "Complete Registration →"
            )}
          </button>
        </div>
      </form>

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
                Admission Fee: <strong className="text-white">₹{formData.amount || 2500}</strong>
              </p>
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto bg-white p-3.5 rounded-2xl shadow-xl border-2 border-brand-orange flex items-center justify-center">
              <Image
                src="/upi-qr.svg"
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
    </>
  );
}

