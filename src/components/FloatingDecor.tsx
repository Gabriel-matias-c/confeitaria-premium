"use client";

import { motion } from "framer-motion";

type Item = {
  emoji: string;
  className: string;
  size: number;
  duration: number;
  delay: number;
  xRange?: number;
};

const items: Item[] = [
  { emoji: "🍓", className: "top-[12%] left-[6%]", size: 40, duration: 6, delay: 0 },
  { emoji: "🌸", className: "top-[20%] right-[8%]", size: 34, duration: 7, delay: 0.4 },
  { emoji: "🍥", className: "bottom-[22%] left-[10%]", size: 36, duration: 8, delay: 0.8 },
  { emoji: "🍃", className: "top-[42%] left-[2%]", size: 30, duration: 5.5, delay: 0.2 },
  { emoji: "🌿", className: "bottom-[14%] right-[6%]", size: 32, duration: 6.5, delay: 0.6 },
  { emoji: "🧁", className: "bottom-[32%] right-[14%]", size: 34, duration: 7.5, delay: 1 },
  { emoji: "🍓", className: "bottom-[8%] right-[28%]", size: 26, duration: 6, delay: 0.3 },
  { emoji: "🌺", className: "top-[8%] left-[32%]", size: 26, duration: 6.8, delay: 0.9 },
];

export default function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {items.map((item, i) => (
        <motion.span
          key={i}
          className={`absolute ${item.className} drop-shadow-lg`}
          style={{ fontSize: item.size }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 1],
            y: [20, -18, 0, -18],
            x: [0, item.xRange ?? 8, 0, -(item.xRange ?? 8)],
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}
