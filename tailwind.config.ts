import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        brand: {
          orange: "#F4571E",
          "orange-hover": "#e0460f",
          "orange-light": "#FFF3EE",
          dark: "#141414",
          "dark-card": "#1c1c1c",
          "dark-border": "#2c2c2c",
          cream: "#F5F3EF",
          "cream-dark": "#ECE8E1",
          muted: "#888888",
        },
      },
      fontFamily: {
        headline: ["'Bebas Neue'", "var(--font-headline)", "sans-serif"],
        body: ["'Poppins'", "var(--font-body)", "sans-serif"],
        sub: ["'Poppins'", "var(--font-body)", "sans-serif"],
        mono: ["'Poppins'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tightest: "-0.06em",
        widest: "0.2em",
        ultra: "0.3em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
