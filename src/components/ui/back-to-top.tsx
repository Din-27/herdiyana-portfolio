"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Floating Actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2.5 animate-fade-in"
    >
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll back to top"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-lg hover:bg-muted hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200 active:scale-95 group"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </aside>
  );
}
