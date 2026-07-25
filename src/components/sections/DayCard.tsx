"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export type DayCardProps = {
  day: number;
  title: string;
  image: string;
  imageAlt: string;
  teaser: string;
  items: string[];
  reverse?: boolean;
};

export default function DayCard({
  day,
  title,
  image,
  imageAlt,
  teaser,
  items,
  reverse = false,
}: DayCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal className="mx-auto w-full max-w-5xl px-6">
      <div
        className={`flex flex-col items-center gap-10 sm:gap-14 md:gap-20 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2px] shadow-[0_30px_60px_-20px_rgba(22,19,15,0.35)] md:w-1/2">
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 font-serif text-lg italic text-soft-white/90">
            0{day}
          </span>
        </div>

        <div className="w-full md:w-1/2">
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep/80">
            Tag {day}
          </span>
          <h3 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">{title}</h3>
          <p className="mt-4 font-display text-xl italic leading-relaxed text-ink-soft/85 sm:text-2xl">
            {teaser}
          </p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="group mt-7 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-deep transition-colors hover:text-ink"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-gold">
              <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            {open ? "Tag schließen" : "Tag entfalten"}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 overflow-hidden border-l border-gold/30 pl-6"
              >
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="mb-3 font-sans text-[0.95rem] text-ink-soft/90 last:mb-0"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
