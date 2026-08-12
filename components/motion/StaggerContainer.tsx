"use client";

import { motion } from "framer-motion";
import { staggerContainer, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}

/**
 * Wraps a list of children and staggers their entrance animations.
 * Children should use FadeIn or SlideIn (variants-based) to participate in the stagger.
 *
 * @param fast - Use a faster stagger interval (0.06s vs 0.1s) for dense lists.
 */
export default function StaggerContainer({
  children,
  className,
  fast = false,
}: StaggerContainerProps) {
  const variants = fast
    ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
      }
    : staggerContainer;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
