"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerStartedRef = useRef(false);

  const dismissSplash = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 700);
  };

  const startFiveSecondTimer = () => {
    if (timerStartedRef.current) return;
    timerStartedRef.current = true;

    // Guaranteed full 5-second display duration once video plays
    setTimeout(() => {
      dismissSplash();
    }, 5000);
  };

  useEffect(() => {
    // Freeze body scroll while splash screen is active
    document.body.style.overflow = "hidden";

    // Start video playback in mute
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => {
          startFiveSecondTimer();
        })
        .catch(() => {
          // If browser delays autoplay, fallback to timer immediately
          startFiveSecondTimer();
        });
    }

    // Safety fallback: if video event doesn't fire, ensure dismiss after 5.5s
    const fallbackTimer = setTimeout(() => {
      dismissSplash();
    }, 5500);

    return () => {
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] w-screen h-screen overflow-hidden bg-black transition-opacity duration-700 select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Full-Screen Video Background */}
      <video
        ref={videoRef}
        src="/logo/logo-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        onPlaying={startFiveSecondTimer}
        onLoadedData={startFiveSecondTimer}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle cinematic gradient vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

      {/* Skip Button in bottom right corner */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-30">
        <button
          onClick={dismissSplash}
          className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/70 hover:bg-brand-orange text-white backdrop-blur-md text-[11px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-300 border border-white/20 hover:border-brand-orange shadow-2xl active:scale-95"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Subtle bottom brand watermark */}
      <div className="absolute bottom-8 left-8 z-30 pointer-events-none hidden sm:block">
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">
          TEAM NARA • CALICUT
        </p>
      </div>
    </div>
  );
}
