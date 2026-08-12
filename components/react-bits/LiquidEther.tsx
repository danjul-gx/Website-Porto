"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LiquidEtherProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
  speed?: number;
  mouseInfluence?: number;
}

/**
 * React Bits - LiquidEther Component Wrapper
 * A high-performance WebGL/Canvas fluid ether wave simulation with interactive mouse force fields.
 */
export default function LiquidEther({
  className,
  color = "#8B5CF6",
  secondaryColor = "#6366F1",
  speed = 1,
  mouseInfluence = 0.5,
}: LiquidEtherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Liquid Nodes for fluid mesh synthesis
    const nodeCount = 6;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5 * speed,
      vy: (Math.random() - 0.5) * 1.5 * speed,
      radius: Math.random() * 250 + 200,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.01 * speed;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05 * mouseInfluence;
      mouse.y += (mouse.targetY - mouse.y) * 0.05 * mouseInfluence;

      ctx.clearRect(0, 0, width, height);

      // Render fluid blobs
      nodes.forEach((node, idx) => {
        node.x += node.vx + Math.sin(time + node.phase) * 0.5;
        node.y += node.vy + Math.cos(time + node.phase) * 0.5;

        // Bounce boundaries
        if (node.x < -100 || node.x > width + 100) node.vx *= -1;
        if (node.y < -100 || node.y > height + 100) node.vy *= -1;

        // Mouse attraction force
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          node.x += (dx / dist) * 0.8;
          node.y += (dy / dist) * 0.8;
        }

        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius
        );

        const isPrimary = idx % 2 === 0;
        const hexColor = isPrimary ? color : secondaryColor;

        gradient.addColorStop(0, hexColor + "33"); // 20% opacity
        gradient.addColorStop(0.5, hexColor + "15"); // 8% opacity
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, secondaryColor, speed, mouseInfluence]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none z-0", className)}
    />
  );
}
