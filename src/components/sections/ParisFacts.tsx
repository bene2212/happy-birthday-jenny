"use client";

import { motion } from "framer-motion";
import { Sunset, Heart, Coffee, Eye, Landmark } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import GoldDivider from "@/components/ui/GoldDivider";

const facts = [
  {
    icon: Sunset,
    label: "Schönster Sonnenuntergang",
    text: "Von der Sacré-Cœur aus färbt sich die ganze Stadt in unter zehn Minuten rosegold.",
  },
  {
    icon: Heart,
    label: "Romantischste Straße",
    text: "Rue Crémieux — pastellfarbene Häuser, keine Autos, gemacht für langsames Schlendern.",
  },
  {
    icon: Coffee,
    label: "Versteckte Cafés",
    text: "Das beste Croissant in Paris ist selten das, vor dem eine Schlange steht.",
  },
  {
    icon: Eye,
    label: "Schönste Aussichtspunkte",
    text: "Der Arc de Triomphe sieht nur einen Bruchteil der Besucher des Eiffelturms — bei fast derselben Aussicht.",
  },
  {
    icon: Landmark,
    label: "Ein bisschen Geschichte",
    text: "Paris wurde seit dem 1. Jahrhundert immer wieder neu erbaut und wiedergeboren — und fühlt sich bis heute an, als wäre es nie ganz fertig, im besten Sinne.",
  },
];

export default function ParisFacts() {
  return (
    <section className="relative w-full bg-ivory py-32 sm:py-40">
      <div className="mx-auto mb-16 max-w-2xl px-6 text-center">
        <Reveal>
          <Eyebrow>Kleine Dinge, die man wissen sollte</Eyebrow>
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Notizen über Paris</h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>
      </div>

      <div className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:justify-center sm:gap-8 sm:px-12">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-[78vw] shrink-0 snap-center rounded-sm border border-gold/25 bg-soft-white p-8 shadow-[0_20px_45px_-25px_rgba(22,19,15,0.25)] transition-transform duration-500 hover:-translate-y-2 sm:w-72"
          >
            <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <fact.icon className="h-6 w-6 text-gold-deep" strokeWidth={1.25} />
            <h3 className="mt-6 font-serif text-xl italic text-ink">{fact.label}</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft/80">
              {fact.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
