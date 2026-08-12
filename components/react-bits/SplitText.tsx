"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDuration?: number;
  wordClassName?: string;
  charClassName?: string;
}

/**
 * React Bits - SplitText Component Wrapper
 * Splits a text string into individual animated characters with smooth GPU-accelerated motion.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  staggerDuration = 0.03,
  wordClassName,
  charClassName,
}: SplitTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={cn("inline-block whitespace-nowrap", wordClassName)}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={childVariants}
              className={cn("inline-block", charClassName)}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
