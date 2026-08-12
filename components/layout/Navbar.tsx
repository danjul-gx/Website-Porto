"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

import GooeyNav from "@/components/GooeyNav";
import { NAV_LINKS, RESUME_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();

  const items = NAV_LINKS.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  const activeIndex = NAV_LINKS.findIndex(
    (item) => item.href === pathname
  );

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        className="
          flex items-center justify-between
          px-4 md:px-6
          py-3
          rounded-[24px]
          border border-white/10
          bg-black/30
          backdrop-blur-xl
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
      </div>
    </header>
  );
}