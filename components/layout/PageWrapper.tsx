"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps every page in a Framer Motion fade+slide transition.
 * Must be a client component to use AnimatePresence-compatible variants.
 */
export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn("flex-1 flex flex-col", className)}
    >
      {children}
    </motion.div>
  );
}
