"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const EDITORIAL_NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Fieldwork", href: "#fieldwork" },
  { label: "Contact", href: "#contact" },
] as const;

export default function EditorialNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["work", "fieldwork", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMobile();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen, closeMobile]);

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
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-paper-rule">
      <div
        ref={menuRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main bar */}
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Identity */}
          <Link
            href="/"
            className="font-display font-bold text-ink text-sm sm:text-base md:text-lg tracking-tight truncate min-w-0 pr-2"
          >
            Zuldan Fahrizal Rahman
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {EDITORIAL_NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 rounded-xs",
                    isActive
                      ? "text-ink font-semibold"
                      : "text-ink-secondary hover:text-ink hover:bg-paper-warm/60"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-editorial rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger - mobile only */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="editorial-mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={cn(
              "md:hidden shrink-0 min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-sm text-ink-secondary hover:text-ink transition-colors",
              mobileOpen && "text-ink"
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="editorial-mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-200 ease-in-out",
            mobileOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-paper-rule">
            {EDITORIAL_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 text-sm font-medium text-ink-secondary hover:text-ink hover:bg-paper-warm rounded-sm transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
