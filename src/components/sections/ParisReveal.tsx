"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { images } from "@/lib/images";

export default function ParisReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 0.55]);
  const wipe = useTransform(scrollYProgress, [0.05, 0.5], ["0%", "100%"]);
  const subOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.6, 0.85], [24, 0]);
  const clipPath = useTransform(wipe, (w) => `inset(0 ${100 - parseFloat(w)}% 0 0)`);

  return (
    <section ref={sectionRef} className="relative h-[220vh] w-full bg-ink">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <motion.div style={{ opacity: imageOpacity, scale: imageScale }} className="absolute inset-0">
          <Image
            src={images.parisSkylineGolden}
            alt="Die Pariser Skyline im goldenen Licht"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60"
        />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
          <div className="relative">
            <h2
              aria-hidden
              className="select-none font-serif text-[20vw] font-bold leading-none tracking-tight sm:text-[18vw]"
              style={{
                WebkitTextStroke: "1px rgba(198,166,100,0.5)",
                color: "transparent",
              }}
            >
              PARIS
            </h2>
            <motion.h2
              style={{ clipPath }}
              className="text-gradient-gold absolute inset-0 select-none font-serif text-[20vw] font-bold leading-none tracking-tight sm:text-[18vw]"
            >
              PARIS
            </motion.h2>
            <span className="sr-only">PARIS</span>
          </div>

          <motion.p
            style={{ opacity: subOpacity, y: subY }}
            className="mt-10 max-w-xl text-center font-display text-2xl italic text-soft-white sm:text-3xl md:text-4xl"
          >
            Wir verbringen fünf unvergessliche Tage zusammen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
