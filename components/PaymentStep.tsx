"use client";

// TODO: replace manual UPI verification with Razorpay Checkout integration once live
import React, { useState } from "react";
import Image from "next/image";
import { Check, Copy, AlertCircle, Upload, ShieldCheck } from "lucide-react";
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
  const [previewUrl, setPreviewUrl] = useState<string | null>(formData.screenshotBase64 || null);
  const upiId = "teamnara@upi";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("Screenshot image size is too large (max 10MB). Please select a smaller file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setPreviewUrl(base64);
        setFormData((prev) => ({
          ...prev,
          screenshotBase64: base64,
          screenshotName: file.name,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveScreenshot = () => {
    setPreviewUrl(null);
    setFormData((prev) => ({
      ...prev,
      screenshotBase64: undefined,
      screenshotName: undefined,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 text-white">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase">
              Admission Fee
            </span>
            <h4 className="text-2xl font-bold font-headline">
              ₹{formData.amount}
            </h4>
          </div>
          <div className="text-right">
            <span className="text-xs text-neutral-400">Selected Batch</span>
            <p className="text-sm font-medium text-white truncate max-w-[180px]">
              {formData.sessionBatch || "Weekend Session"}
            </p>
          </div>
        </div>

        {/* QR Code & Instructions */}
        <div className="flex flex-col sm:flex-row items-center gap-5 my-3">
          <div className="relative w-36 h-36 bg-white p-2 rounded-xl flex-shrink-0 shadow-lg border-2 border-brand-orange/40">
            <Image
              src="/upi-qr.svg"
              alt="Team NARA UPI Payment QR Code"
              width={144}
              height={144}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Manual UPI Verification</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Scan the QR code using Google Pay, PhonePe, Paytm, or any UPI app,
              or pay directly to the UPI ID below.
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

        {/* Screenshot Upload with Preview */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
              Payment Screenshot
            </label>
            <span className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
              📲 Sent to +91 7907318843
            </span>
          </div>

          {previewUrl ? (
            <div className="relative p-3 bg-[#181818] border border-white/20 rounded-xl flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Payment receipt preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">
                  {formData.screenshotName || "Payment Receipt"}
                </p>
                <p className="text-[11px] text-brand-orange flex items-center gap-1 mt-0.5">
                  <Check className="w-3 h-3" /> Ready for WhatsApp & verification
                </p>
              </div>
              <button
                type="button"
                onClick={handleRemoveScreenshot}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-white/5 transition text-xs"
                title="Remove screenshot"
              >
                ✕
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-1.5 w-full px-4 py-4 border border-dashed border-white/20 hover:border-brand-orange/60 rounded-xl cursor-pointer bg-[#181818]/60 transition group">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-neutral-400 group-hover:text-brand-orange transition" />
                <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition">
                  Attach payment screenshot (Image / Receipt)
                </span>
              </div>
              <span className="text-[11px] text-neutral-500">
                Automatically forwards with booking info to WhatsApp (+91 7907318843)
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          )}
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
          disabled={isSubmitting || !formData.upiReference?.trim()}
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
  );
}
