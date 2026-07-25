"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";
import { images } from "@/lib/images";

const highlights = [
  {
    title: "Der Spiegelsaal",
    text: "Siebzehn hohe Bogenspiegel den Gärten zugewandt, gebaut, um jede Stunde des Lichts einzufangen.",
  },
  {
    title: "Die Königlichen Gärten",
    text: "Bis auf den Zentimeter genau angelegt — Fontänen, Marmor und Geometrie, so weit das Auge reicht.",
  },
  {
    title: "Marie-Antoinettes Anwesen",
    text: "Ein verstecktes Dorf, erbaut für eine Königin, die sich einmal ein ruhigeres Leben wünschte.",
  },
];

export default function VersaillesHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink py-32"
    >
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image
          src={images.day3HallOfMirrors}
          alt="Der Spiegelsaal im Schloss Versailles"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />

      {/* corner flourishes */}
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-gold/40 sm:left-10 sm:top-10 sm:h-24 sm:w-24" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-gold/40 sm:right-10 sm:top-10 sm:h-24 sm:w-24" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-gold/40 sm:bottom-10 sm:left-10 sm:h-24 sm:w-24" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-gold/40 sm:bottom-10 sm:right-10 sm:h-24 sm:w-24" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal>
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-gold-light/90 sm:text-sm">
            Tag Drei &middot; Das Highlight
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <h2 className="text-gradient-gold animate-shimmer font-serif text-6xl italic sm:text-8xl">
            Versailles
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <p className="max-w-xl font-display text-xl italic leading-relaxed text-champagne/95 sm:text-2xl">
            Ein ganzer Tag, gewidmet einem der schönsten Schlösser der Welt —
            weil du Schlösser schon immer geliebt hast, und dieses hier
            gemacht wurde, um unvergesslich zu sein.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-12 w-full">
          <GoldDivider className="mx-auto w-24" />
        </Reveal>

        <div className="mt-14 grid w-full grid-cols-1 gap-10 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={0.15 + i * 0.12}>
              <div className="flex flex-col items-center text-center">
                <span className="mb-4 h-px w-8 bg-gold/60" />
                <h3 className="font-serif text-lg italic text-soft-white sm:text-xl">
                  {h.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-champagne/75">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
