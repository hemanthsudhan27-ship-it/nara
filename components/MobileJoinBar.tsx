"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function MobileJoinBar() {
  const { openRegister } = useRegister();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#141414]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest leading-none">Admission Open</p>
          <p className="text-xs font-bold text-white truncate mt-0.5">Mon, Wed &amp; Fri · 6:00 AM · ₹2,500</p>
        </div>
        <button
          onClick={() => openRegister("Outdoor Parkour & Freerunning — Mon, Wed & Fri (6:00 AM – 7:30 AM)")}
          className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-brand-orange/30 active:scale-95"
        >
          <span>Join</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
