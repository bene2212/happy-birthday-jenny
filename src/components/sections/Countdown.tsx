"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import GoldDivider from "@/components/ui/GoldDivider";
import Sparkles from "@/components/ui/Sparkles";

const TARGET_DATE = new Date("2026-09-27T09:00:00");

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(() => getTimeLeft(TARGET_DATE));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount flag avoids SSR/client clock hydration mismatch
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft(TARGET_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units = useMemo(
    () => [
      { label: "Tage", value: time.days },
      { label: "Stunden", value: time.hours },
      { label: "Minuten", value: time.minutes },
      { label: "Sekunden", value: time.seconds },
    ],
    [time]
  );

  return (
    <section className="relative w-full bg-champagne/50 py-32 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow>Der Countdown</Eyebrow>
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Bis Paris</h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <div className="relative mx-auto overflow-hidden rounded-sm border border-gold/40 bg-ink px-6 py-12 shadow-[0_40px_80px_-30px_rgba(22,19,15,0.5)] sm:px-14 sm:py-16">
            <Sparkles count={16} />
            <div className="relative z-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
              {units.map((unit, i) => (
                <div
                  key={unit.label}
                  className={`flex flex-col items-center ${
                    i < 3 ? "sm:border-r sm:border-gold/25" : ""
                  }`}
                >
                  <span
                    suppressHydrationWarning
                    className="font-serif text-5xl tabular-nums text-soft-white sm:text-6xl"
                  >
                    {mounted ? String(unit.value).padStart(2, "0") : "--"}
                  </span>
                  <span className="mt-3 text-[0.65rem] uppercase tracking-[0.4em] text-gold-light/80">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <p className="font-display text-lg italic text-ink-soft/80 sm:text-xl">
            Ende September. Noch nichts gebucht außer dem Versprechen — der
            Rest ist noch Teil des Abenteuers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
