"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Gamepad2, 
  Volume2, 
  VolumeX, 
  Crosshair, 
  Zap, 
  Terminal, 
  ShieldCheck, 
  Trophy,
  Flame,
  Radio
} from "lucide-react";

// Web Audio API lightweight synthesizer (0 dependencies, 100% offline & instant)
function playSound(type: "click" | "powerup" | "laser" | "levelUp" | "blip") {
  if (typeof window === "undefined") return;
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "blip") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.setValueAtTime(1600, now + 0.03);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === "powerup") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === "laser") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "levelUp") {
      osc.type = "square";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch {
    // Ignore audio errors on unsupported browsers
  }
}

export function GameHUD() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [xp, setXp] = useState(1337);
  const [level, setLevel] = useState(42);
  const [combo, setCombo] = useState(0);
  const [turboMode, setTurboMode] = useState(false);
  const [showHUD, setShowHUD] = useState(true);
  const [floatingParticles, setFloatingParticles] = useState<Array<{ id: number; x: number; y: number; text: string }>>([]);

  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Click anywhere to gain XP & trigger game sound
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't trigger if clicked on an input or button
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("input") || target.closest("textarea")) {
        if (soundEnabled) playSound("click");
        return;
      }

      if (soundEnabled) playSound("blip");

      setXp((prev) => {
        const next = prev + 15;
        if (next >= (level + 1) * 35) {
          setLevel((l) => l + 1);
          if (soundEnabled) playSound("levelUp");
        }
        return next;
      });

      setCombo((c) => Math.min(c + 1, 99));

      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      comboTimerRef.current = setTimeout(() => {
        setCombo(0);
      }, 3500);

      // Add a small floating XP indicator at click location
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        text: `+15 XP`,
      };
      setFloatingParticles((p) => [...p.slice(-12), newParticle]);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("click", handleGlobalClick);
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
    };
  }, [soundEnabled, level]);

  // Clean up floating particles
  useEffect(() => {
    if (floatingParticles.length === 0) return;
    const timer = setTimeout(() => {
      setFloatingParticles((p) => p.slice(1));
    }, 1200);
    return () => clearTimeout(timer);
  }, [floatingParticles]);

  const toggleTurboMode = () => {
    const nextState = !turboMode;
    setTurboMode(nextState);
    if (soundEnabled) playSound(nextState ? "powerup" : "laser");
    if (nextState) {
      document.documentElement.classList.add("turbo-mode");
    } else {
      document.documentElement.classList.remove("turbo-mode");
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) playSound("powerup");
  };

  return (
    <>
      {/* Floating XP Popups */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {floatingParticles.map((pt) => (
          <div
            key={pt.id}
            style={{ left: pt.x - 20, top: pt.y - 30 }}
            className="absolute font-mono text-xs font-black text-emerald-400 select-none animate-float-fade"
          >
            {pt.text}
          </div>
        ))}
      </div>

      {/* Cyberpunk Scanlines Overlay (Toggleable / Subtle) */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.06)_50%)] bg-[length:100%_4px] opacity-25 dark:opacity-40" />

      {/* Top Floating Mini Gamer Status Pill */}
      <aside 
        aria-label="Developer HUD & Game Telemetry"
        className="fixed top-20 right-4 z-40 hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-card/90 backdrop-blur-md shadow-lg shadow-emerald-500/10 text-xs font-mono select-none"
      >
        <div className="flex items-center gap-1.5 text-emerald-500">
          <Radio className="h-3.5 w-3.5 animate-pulse text-emerald-500" />
          <span className="font-extrabold uppercase tracking-widest text-[10px]">OPERATOR LVL {level}</span>
        </div>
        <div className="h-3 w-px bg-border" />
        <div className="flex items-center gap-1 text-muted-foreground">
          <Zap className="h-3 w-3 text-amber-500" />
          <span className="text-foreground font-bold">{xp}</span>
          <span className="text-[10px] text-muted-foreground">XP</span>
        </div>
        {combo > 1 && (
          <>
            <div className="h-3 w-px bg-border" />
            <div className="flex items-center gap-1 text-rose-500 font-extrabold animate-bounce">
              <Flame className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
              <span>{combo}x COMBO</span>
            </div>
          </>
        )}
      </aside>

      {/* Bottom Floating Game Controller Dock */}
      <aside 
        aria-label="Interactive Game Controller Dock"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 p-1.5 rounded-2xl border border-emerald-500/30 bg-card/95 backdrop-blur-md shadow-xl text-xs select-none"
      >
        {/* Toggle HUD expanded state */}
        <button
          type="button"
          onClick={() => {
            setShowHUD(!showHUD);
            if (soundEnabled) playSound("click");
          }}
          className="flex items-center justify-center h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all shadow-xs"
          title="Toggle Game Mode"
        >
          <Gamepad2 className="h-4 w-4" />
        </button>

        {showHUD && (
          <div className="flex items-center gap-1.5 pr-1">
            {/* 8-bit Synthesizer Sound Button */}
            <button
              type="button"
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono font-bold transition-all text-xs ${
                soundEnabled
                  ? "bg-emerald-500 text-white border-emerald-500 shadow-xs"
                  : "bg-muted/60 text-muted-foreground border-border/80 hover:text-foreground"
              }`}
              title="Toggle Retro 8-bit Audio Feedback"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="h-3.5 w-3.5 animate-pulse" />
                  <span className="hidden sm:inline text-[11px]">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline text-[11px]">SFX OFF</span>
                </>
              )}
            </button>

            {/* Overdrive Turbo Mode Button */}
            <button
              type="button"
              onClick={toggleTurboMode}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border font-mono font-bold transition-all text-xs ${
                turboMode
                  ? "bg-amber-500 text-black border-amber-400 ring-2 ring-amber-500/30 shadow-md animate-pulse"
                  : "bg-muted/60 text-muted-foreground border-border/80 hover:text-foreground"
              }`}
              title="Overdrive Cyberpunk Mode (Neon Matrix Grid & Hyper Glow)"
            >
              <Flame className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-[11px]">
                {turboMode ? "OVERDRIVE ON" : "TURBO"}
              </span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
