
"use client";

import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { fadeInUp, hoverLift, tapScale } from "@/lib/motion";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
  className?: string;
  onOpen?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  variant = "default",
  className,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={hoverLift}
      whileTap={tapScale}
      onClick={() => onOpen?.(project)}
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer",
        "border-white/[0.07] hover:border-white/[0.14]",
        "hover:shadow-xl hover:shadow-black/40",
        variant === "featured" && "md:col-span-2",
        className
      )}
      style={{ background: "var(--color-bg-surface)" }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-white/[0.03]">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span
              className="text-5xl font-bold text-white/10"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Status Chip */}
        {project.status === "in-progress" && (
          <span className = "absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/20 text-white border border-white/10 backdrop-blur-md">
            < span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        In Progress
      </span>
        )}

      {project.status === "completed" && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Completed
        </span>
      )}

      {project.status === "archived" && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Archived
        </span>
      )}
    </div>

      {/* Body */ }
  <div className="flex flex-1 flex-col p-5">
    <h3
      className="mb-1 text-base font-semibold text-white transition-colors duration-200 group-hover:text-[#A78BFA]"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      {project.title}
    </h3>

    <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
      {project.tagline}
    </p>

    {/* Tags */}
    <div className="mb-4 flex flex-wrap gap-1.5">
      {project.tags.slice(0, 4).map((tag) => (
        <Badge key={tag} variant="default" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
      <div className="flex items-center gap-2">
        {project.links.github &&
          project.links.github !== "-" && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-1.5 text-zinc-500 transition-all hover:bg-white/[0.07] hover:text-white"
            >
              <Github size={16} />
            </a>
          )}

        {project.links.live &&
          project.links.live !== "-" && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-1.5 text-zinc-500 transition-all hover:bg-white/[0.07] hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
          )}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpen?.(project);
        }}
        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
        style={{
          color: "var(--color-accent-light)",
        }}
      >
        View Details
        <ArrowUpRight size={13} />
      </button>
    </div>
  </div>
    </motion.article >
  );
}
