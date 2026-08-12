"use client";

import { cn } from "@/lib/utils";

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  speed?: string;
}

/**
 * React Bits - StarBorder Component Wrapper
 * Adds a glowing animated border beam effect to card containers.
 */
export default function StarBorder({
  children,
  className,
  color = "#8B5CF6",
  speed = "6s",
}: StarBorderProps) {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-2xl group", className)}>
      {/* Animated gradient border glow */}
      <div
        className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${color} 50%, transparent 100%)`,
          animationDuration: speed,
        }}
      />
      {/* Inner card surface */}
      <div className="relative z-10 w-full h-full rounded-[15px] bg-[#111116]">
        {children}
      </div>
    </div>
  );
}
