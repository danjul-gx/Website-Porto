import { Github, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function EditorialFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-paper-rule bg-paper"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: Identity & Colophon */}
          <div className="flex flex-col gap-1.5">
            <span className="font-display font-bold text-ink text-sm tracking-tight">
              {siteConfig.name}
            </span>
            <p className="text-xs text-ink-muted leading-relaxed">
              Informatics student at President University, Cikarang.
            </p>
            <p className="text-xs text-ink-faint font-mono">
              {year} / Built with Next.js and Tailwind CSS
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-sm text-ink-muted hover:text-ink hover:bg-paper-warm transition-colors duration-150"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-sm text-ink-muted hover:text-ink hover:bg-paper-warm transition-colors duration-150"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-sm text-ink-muted hover:text-ink hover:bg-paper-warm transition-colors duration-150"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
