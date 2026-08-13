"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import GooeyNav from "@/components/GooeyNav";
import { NAV_LINKS, RESUME_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const items = NAV_LINKS.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  const activeIndex = NAV_LINKS.findIndex(
    (item) => item.href === pathname
  );

  // Close mobile menu on route change
  useEffect(() => {
    const id = setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        ref={menuRef}
        className="rounded-[24px] border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden"
      >
        {/* Main bar */}
        <div
          className="
            flex items-center justify-between
            px-4 md:px-6
            py-3
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              font-bold
              text-lg md:text-2xl
              text-[#F8F8FF]
              whitespace-nowrap
            "
          >
            Zuldan.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <GooeyNav
              key={pathname}
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Resume Button */}
            <a
              href={RESUME_URL}
              download
              className="shrink-0"
            >
              <Button
                size="sm"
                variant="secondary"
                icon={Download}
                className="text-xs md:text-sm"
              >
                Resume
              </Button>
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={cn(
                "md:hidden p-2 rounded-xl border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all",
                mobileOpen && "bg-white/[0.08] text-white"
              )}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-nav-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="px-4 pb-4 pt-1 border-t border-white/[0.08] space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === pathname;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#8B5CF6]/15 text-white border border-[#8B5CF6]/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}