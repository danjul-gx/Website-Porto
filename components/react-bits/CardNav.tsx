"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

interface CardNavProps {
  items: readonly NavItem[];
  logo: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
}

/**
 * React Bits - CardNav Component Wrapper
 * A floating card navigation dock with glassmorphism, animated active pill indicator, and mobile menu.
 */
export default function CardNav({
  items,
  logo,
  cta,
  className,
}: CardNavProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none",
        className
      )}
    >
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          className={cn(
            "relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300",
            "border border-white/[0.08]",
            isScrolled
              ? "bg-[#0B0B0F]/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-white/[0.12]"
              : "bg-[#111116]/70 backdrop-blur-md shadow-lg shadow-black/20"
          )}
          aria-label="Main navigation"
        >
          {/* Logo Slot */}
          <div className="flex items-center gap-2">{logo}</div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 block",
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="cardnav-active-pill"
                        className="absolute inset-0 rounded-xl bg-white/[0.1] border border-white/[0.08]"
                        transition={{ type: "spring", stiffness: 380, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action / CTA Slot (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {cta}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="cardnav-mobile-toggle"
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-4 rounded-2xl bg-[#111116]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-1.5">
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "bg-white/[0.1] text-white font-semibold"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {cta && <div className="mt-2 pt-2 border-t border-white/[0.08]">{cta}</div>}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
