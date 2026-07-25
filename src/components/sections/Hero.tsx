"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import Sparkles from "@/components/ui/Sparkles";
import { images } from "@/lib/images";

const headline = "Alles Gute zum Geburtstag, Jenny";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.12]">
        <Image
          src={images.heroEiffelSunset}
          alt="Der Eiffelturm im goldenen Sonnenuntergang"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* cinematic color grade */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/70" />

      {/* drifting cloud glows */}
      <motion.div
        aria-hidden
        className="absolute -top-1/4 left-[10%] h-[50vh] w-[50vh] rounded-full bg-gold-light/20 blur-[110px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-[10%] right-[5%] h-[40vh] w-[40vh] rounded-full bg-blush/20 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <Sparkles count={30} />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs sm:text-sm tracking-[0.5em] uppercase text-champagne/80 font-sans"
        >
          Ein Geburtstag. Ein Geheimnis. Eine Stadt.
        </motion.span>

        <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] text-soft-white sm:text-7xl md:text-8xl">
          {headline.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "backOut" }}
            className="inline-block text-rose-gold"
          >
            ❤
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl font-display italic text-xl text-champagne/90 sm:text-2xl md:text-[1.75rem]"
        >
          Ich wollte dir etwas schenken, das für immer bei uns bleibt.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-champagne/70 font-sans">
          Scrollen
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
