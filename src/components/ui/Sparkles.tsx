"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type SparklesProps = {
  count?: number;
  className?: string;
  color?: string;
};

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function Sparkles({
  count = 24,
  className = "",
  color = "var(--color-gold-light)",
}: SparklesProps) {
  const particles = useMemo(() => {
    const rand = seededRandom(count * 7919 + 13);
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size: 1.5 + rand() * 2.5,
      delay: rand() * 6,
      duration: 3 + rand() * 4,
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
