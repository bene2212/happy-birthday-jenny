"use client";

import { motion } from "framer-motion";

export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 0.7 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`gold-divider ${className}`}
    />
  );
}
