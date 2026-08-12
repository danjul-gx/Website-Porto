"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Wraps children in a fade-in-up scroll reveal animation.
 * Use `delay` to stagger siblings manually; prefer StaggerContainer for automatic stagger.
 */
export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.4,
}: FadeInProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay, duration }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
