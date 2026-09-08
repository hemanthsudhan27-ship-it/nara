"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

interface NavbarProps {
  onOpenRegister?: (batch?: string) => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sessions", href: "/sessions" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Community", href: "/community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const registerCtx = useRegister();

  const handleOpen = (batch?: string) => {
    if (onOpenRegister) {
      onOpenRegister(batch);
    } else {
      registerCtx.openRegister(batch);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#141414]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-xl shadow-black/30"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo with Emblem */}
        <Link
          href="/"
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Team NARA Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-2xl sm:text-3xl font-black tracking-[0.08em] text-brand-orange leading-none group-hover:brightness-110 transition-colors duration-200">
              NARA
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase leading-none mt-1">
              Calicut
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs uppercase font-bold tracking-widest transition-colors relative py-1 group ${
                  isActive
                    ? "text-brand-orange font-black"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleOpen()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md shadow-brand-orange/25 active:scale-95"
          >
            <span>Join a Session</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-neutral-200 hover:text-white rounded-xl hover:bg-white/10 transition active:scale-95"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[62px] sm:top-[70px] bg-black/60 backdrop-blur-sm z-30 md:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 md:hidden bg-[#141414] border-b border-white/10 px-5 sm:px-6 py-6 space-y-4 max-h-[calc(100dvh-70px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-sm font-bold uppercase tracking-wider transition py-2.5 px-3 rounded-lg ${
                      isActive
                        ? "text-brand-orange bg-brand-orange/10 font-black"
                        : "text-neutral-200 hover:text-brand-orange hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpen();
                }}
                className="w-full py-3.5 px-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 active:scale-98"
              >
                <span>Join a Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
