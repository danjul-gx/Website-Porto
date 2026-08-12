import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.07] bg-[#111116]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span
              className="font-bold text-xl text-gradient-accent"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {siteConfig.name}
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              Navigation
            </h3>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              Connect
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Mail size={14} />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with{" "}
            <span className="text-zinc-500">Next.js · Tailwind · Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
