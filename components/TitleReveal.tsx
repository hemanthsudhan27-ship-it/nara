"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TitleReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Collect all headings across the current page
    const headings = document.querySelectorAll<HTMLElement>(
      "h1, h2, h3, h4, .font-headline"
    );

    if (!headings.length) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      headings.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("revealed");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    headings.forEach((heading, idx) => {
      // Don't re-animate already revealed headings
      if (!heading.classList.contains("revealed")) {
        heading.classList.add("title-reveal");
        
        // Check if element is already in the viewport on initial mount
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Stagger slightly for visible headings
          setTimeout(() => {
            heading.classList.add("revealed");
          }, 80 + idx * 60);
        } else {
          observer.observe(heading);
        }
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
