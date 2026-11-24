"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

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
    <aside aria-label="Floating Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2.5 animate-fade-in">
      {/* Floating WhatsApp Quick Action for Mobile & Tablet */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="flex sm:hidden h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 active:scale-90 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll back to top"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/90 text-foreground shadow-lg backdrop-blur-md hover:bg-muted hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-300 active:scale-95 group"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </aside>
  );
}
