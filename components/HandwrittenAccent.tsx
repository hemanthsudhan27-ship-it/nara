import React from "react";

interface HandwrittenAccentProps {
  text: string;
  className?: string;
  rotate?: string;
  underlineColor?: string;
}

export default function HandwrittenAccent({
  text,
  className = "",
  rotate = "-rotate-2",
  underlineColor = "#F4571E",
}: HandwrittenAccentProps) {
  return (
    <div
      className={`relative inline-flex flex-col items-center tracking-wider font-script select-none ${rotate} ${className}`}
    >
      <span className="text-xl sm:text-2xl md:text-3xl text-brand-orange font-bold uppercase drop-shadow-sm whitespace-nowrap">
        {text}
      </span>
      {/* Hand-drawn organic squiggle underline */}
      <svg
        className="w-full h-3 sm:h-4 -mt-1 overflow-visible"
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M3 14C35 4 80 20 120 12C160 4 200 18 237 9"
          stroke={underlineColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18C45 10 95 22 135 15C175 8 210 19 232 14"
          stroke={underlineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
}
