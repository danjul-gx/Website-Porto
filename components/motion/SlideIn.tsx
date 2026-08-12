"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeInUp, fadeInDown, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SlideDirection = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: React.ReactNode;
  direction?: SlideDirection;
  className?: string;
  delay?: number;
}

const variantMap = {
  left: slideInLeft,
  right: slideInRight,
  up: fadeInUp,
  down: fadeInDown,
};

/**
 * Directional slide-in scroll reveal animation wrapper.
 */
export default function SlideIn({
  children,
  direction = "up",
  className,
  delay = 0,
}: SlideInProps) {
  return (
    <motion.div
      variants={variantMap[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
