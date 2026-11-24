"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Cpu, Activity, Terminal, Sparkles } from "lucide-react";

export function HolographicBadge() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate glare position in percent
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    // Reset back to level
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full max-w-sm mx-auto select-none py-2"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-3xl border border-neutral-700/80 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 text-neutral-100 shadow-2xl transition-transform duration-150 ease-out will-change-transform overflow-hidden cursor-crosshair group"
      >
        {/* Dynamic Holographic Foil Glare Sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, ${glarePos.opacity}) 0%, rgba(59, 130, 246, ${
              glarePos.opacity * 0.7
            }) 30%, transparent 65%)`,
          }}
        />

        {/* Ambient Top Circuit Lines */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DEV IDENTIFIER</span>
          </div>
          <span className="text-[10px] text-neutral-400 px-2 py-0.5 rounded-full bg-neutral-800/80 border border-neutral-700/50">
            ID: HF-MDEV-2026
          </span>
        </div>

        {/* Card Body with Monogram & Stats */}
        <div className="py-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                <span>Herdiyana F.</span>
                <Sparkles className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="text-xs text-neutral-400 font-medium">
                PT. MDEV (Astra Otoparts Group)
              </span>
            </div>

            {/* Glowing Hex Monogram */}
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-emerald-500/50 flex items-center justify-center font-black text-lg text-emerald-400 shadow-lg shadow-emerald-500/10">
              HF
            </div>
          </div>

          {/* Real-Time Live Telemetry Bar */}
          <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 font-mono text-[11px] space-y-1">
            <div className="flex items-center justify-between text-neutral-400">
              <span>SYSTEM UPTIME:</span>
              <span className="text-emerald-400 font-bold">99.98% [NOMINAL]</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span>ACTIVE CLUSTER:</span>
              <span className="text-neutral-200">ASTRA-ERP-GOLANG</span>
            </div>
          </div>

          {/* Micro Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Golang", "Next.js", "PostgreSQL", "Docker", "RabbitMQ"].map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-800/70 text-neutral-300 border border-neutral-700/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Micro-Note */}
        <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <div className="flex items-center gap-1">
            <Terminal className="h-3 w-3 text-emerald-400" />
            <span>3D Interactive Foil</span>
          </div>
          <span className="text-emerald-400">Hover untuk Tilt</span>
        </div>
      </div>
    </div>
  );
}
