"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

/**
 * React Bits - RotatingText Component Wrapper
 * Cycles through a list of titles/roles with smooth height-aware crossfade animations.
 * Ensures text gradient and overflow compatibility across mobile WebKit iOS browsers.
 */
export default function RotatingText({
  texts,
  interval = 3000,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className="inline-flex relative max-w-full align-bottom py-0.5 min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: "80%", opacity: 0.01, filter: "blur(3px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-80%", opacity: 0, filter: "blur(3px)" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ opacity: 1 }}
          className={cn("inline-block whitespace-nowrap max-w-full [will-change:transform,opacity]", className)}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}


