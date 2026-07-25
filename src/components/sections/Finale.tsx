"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Sparkles from "@/components/ui/Sparkles";
import GoldDivider from "@/components/ui/GoldDivider";
import { images } from "@/lib/images";

export default function Finale() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const brightness = useTransform(scrollYProgress, [0, 0.5], [0.55, 1.05]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 0.4, 0.65]);
  const glowOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 0.7]);
  const sparkleOpacity = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);

  const headlineOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);

  const subOpacity = useTransform(scrollYProgress, [0.45, 0.62], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.45, 0.62], [20, 0]);

  const signatureOpacity = useTransform(scrollYProgress, [0.68, 0.92], [0, 1]);
  const signatureY = useTransform(scrollYProgress, [0.68, 0.92], [16, 0]);

  const imageFilter = useTransform(brightness, (b) => `brightness(${b}) saturate(1.1)`);

  return (
    <section ref={sectionRef} className="relative h-[280vh] w-full bg-ink">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <motion.div style={{ filter: imageFilter }} className="absolute inset-0 scale-[1.08]">
          <Image
            src={images.eiffelNight}
            alt="Der Eiffelturm bei Nacht, festlich beleuchtet"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-ink"
        />

        <motion.div
          aria-hidden
          style={{ opacity: glowOpacity }}
          className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,_rgba(227,202,160,0.55),_transparent_65%)]"
        />

        <motion.div style={{ opacity: sparkleOpacity }} className="absolute inset-0">
          <Sparkles count={40} />
        </motion.div>

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <motion.h2
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="font-serif text-5xl leading-tight text-soft-white sm:text-7xl md:text-8xl"
          >
            Alles Gute zum Geburtstag, Jenny{" "}
            <span className="text-rose-gold">❤</span>
          </motion.h2>

          <motion.p
            style={{ opacity: subOpacity, y: subY }}
            className="mt-8 font-display text-2xl italic text-champagne/90 sm:text-3xl md:text-4xl"
          >
            Paris wartet auf uns.
          </motion.p>

          <motion.div
            style={{ opacity: signatureOpacity, y: signatureY }}
            className="mt-16 flex flex-col items-center"
          >
            <GoldDivider className="mb-8 w-20" />
            <p
              className="text-4xl text-gold-light sm:text-5xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              In Liebe,
            </p>
            <p
              className="-mt-2 text-5xl text-gold-light sm:text-6xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Bene ❤
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
