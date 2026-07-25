"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import GoldDivider from "@/components/ui/GoldDivider";

type Pin = {
  id: string;
  name: string;
  x: number;
  y: number;
  day: string;
  text: string;
  side: "left" | "right";
};

const pins: Pin[] = [
  {
    id: "sacre-coeur",
    name: "Sacré-Cœur",
    x: 47,
    y: 16,
    day: "Tag 1",
    text: "Hoch über Montmartre, während sich die ganze Stadt bei Sonnenuntergang golden färbt.",
    side: "right",
  },
  {
    id: "moulin-rouge",
    name: "Moulin Rouge",
    x: 42,
    y: 25,
    day: "Tag 1",
    text: "Federboas und Scheinwerferlicht am Fuß von Montmartre — ein Cabaret-Abend, auf den sie sich am meisten freut.",
    side: "right",
  },
  {
    id: "louvre",
    name: "Der Louvre",
    x: 54,
    y: 46,
    day: "Tag 2",
    text: "Glas, Marmor und Jahrhunderte der Kunst, direkt an der Seine.",
    side: "right",
  },
  {
    id: "arc",
    name: "Arc de Triomphe",
    x: 21,
    y: 36,
    day: "Tag 4",
    text: "Oben an der Prachtstraße stehen, während zwölf Straßen sternförmig auseinanderlaufen.",
    side: "left",
  },
  {
    id: "champs",
    name: "Champs-Élysées",
    x: 33,
    y: 41,
    day: "Tag 4",
    text: "Louis Vuitton, Dior, Cartier — goldenes Licht in jedem Schaufenster.",
    side: "left",
  },
  {
    id: "lv-cafe",
    name: "Café Louis Vuitton",
    x: 26,
    y: 39,
    day: "Tag 4",
    text: "Kaffee hoch über der Champs-Élysées — der eine Stopp, den sie sich unbedingt gewünscht hat.",
    side: "left",
  },
  {
    id: "eiffel",
    name: "Eiffelturm",
    x: 17,
    y: 57,
    day: "Tag 4",
    text: "Die eine Silhouette, die unverkennbar Paris bedeutet.",
    side: "right",
  },
  {
    id: "versailles",
    name: "Versailles",
    x: 9,
    y: 84,
    day: "Tag 3",
    text: "Eine kurze Fahrt außerhalb der Stadt — ein ganzes Schloss, erbaut für jemanden, der Schlösser genauso liebte.",
    side: "right",
  },
];

export default function ParisMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-ink py-32 sm:py-40">
      <div className="mx-auto mb-20 max-w-2xl px-6 text-center">
        <Reveal>
          <Eyebrow className="text-gold-light/80">Wo wir sein werden</Eyebrow>
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <h2 className="font-serif text-4xl text-soft-white sm:text-5xl">
            Eine Karte, nur für diese Reise gezeichnet
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-gold/20 bg-[radial-gradient(ellipse_at_center,_rgba(198,166,100,0.08),_transparent_65%)] sm:aspect-[16/10]">
          {/* hairline grid */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.15]" aria-hidden>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* stylised Seine */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <motion.path
              d="M -5 40 C 20 45, 30 55, 45 50 S 70 40, 60 60 S 80 78, 105 72"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.55 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          {/* dashed line to Versailles, slightly outside the city */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
            <line
              x1="17" y1="60" x2="10" y2="82"
              stroke="var(--color-gold)"
              strokeWidth="0.3"
              strokeDasharray="1.5 1.5"
              opacity="0.4"
            />
          </svg>

          {pins.map((pin, i) => (
            <div
              key={pin.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "backOut" }}
                onClick={() => setActive(active === pin.id ? null : pin.id)}
                className="group relative flex h-4 w-4 items-center justify-center"
                aria-label={pin.name}
              >
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-gold-light/40" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-gold-light shadow-[0_0_12px_rgba(227,202,160,0.8)] transition-transform group-hover:scale-125" />
              </motion.button>

              <AnimatePresence>
                {active === pin.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`glass-dark absolute top-6 z-20 w-56 rounded-sm p-4 shadow-2xl sm:w-64 ${
                      pin.side === "left" ? "left-0" : "right-0"
                    }`}
                  >
                    <button
                      onClick={() => setActive(null)}
                      className="absolute right-2 top-2 text-champagne/60 hover:text-champagne"
                      aria-label="Close"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gold-light/80">
                      {pin.day}
                    </span>
                    <h3 className="mt-1 font-serif text-lg italic text-soft-white">
                      {pin.name}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-champagne/80">
                      {pin.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
