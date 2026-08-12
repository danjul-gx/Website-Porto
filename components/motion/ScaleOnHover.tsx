"use client";

import { motion } from "framer-motion";
import { hoverScale, hoverLift, tapScale } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ScaleOnHoverProps {
  children: React.ReactNode;
  className?: string;
  lift?: boolean;
}

/**
 * Wraps a child element with a subtle scale (and optionally lift) on hover.
 * Use for cards, images, and interactive elements that benefit from hover feedback.
 */
export default function ScaleOnHover({
  children,
  className,
  lift = false,
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={lift ? hoverLift : hoverScale}
      whileTap={tapScale}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
