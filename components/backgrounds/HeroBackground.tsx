"use client";

import { LiquidEther } from "@/components/react-bits";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  className?: string;
}

/**
 * HeroBackground - Isolated animated background component.
 * Integrates React Bits LiquidEther canvas simulation alongside ambient noise and grid overlays.
 * Kept isolated so the background renderer can be extended or configured seamlessly.
 */
export default function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Official React Bits LiquidEther Fluid Canvas */}
      <LiquidEther
        color="#8B5CF6"
        secondaryColor="#6366F1"
        speed={1}
        mouseInfluence={0.6}
      />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial Masking Vignette */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 20%, #0B0B0F 90%)",
        }}
      />
    </div>
  );
}
