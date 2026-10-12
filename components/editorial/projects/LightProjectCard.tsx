import Image from "next/image";
import { ExternalLink, Github, FileText, CheckCircle2 } from "lucide-react";
import type { Project } from "@/types";

export interface LightProjectProps {
  project?: Project;
  // Backward compatibility props for direct usage
  index?: string;
  title?: string;
  tagline?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  technologies?: string[];
  contextLabel?: string;
  category?: string;
  links?: {
    live?: string;
    github?: string;
    document?: string;
  };
  highlights?: string[];
}

export default function LightProjectCard(props: LightProjectProps) {
  const { project } = props;

  // Resolve values either from `project: Project` or fallback direct props
  const title = project?.title || props.title || "";
  const tagline = project?.tagline || props.tagline || "";
  const description = project?.description || props.description || "";
  const category = project?.category || props.category || "Project";
  const contextLabel = project?.contextLabel || props.contextLabel || "";
  const index = project ? String(project.order).padStart(2, "0") : props.index || "01";

  const imageSrc =
    project?.thumbnail ||
    (project?.images && project.images[0]) ||
    props.imageSrc ||
    "";
  const imageAlt = props.imageAlt || `${title} preview`;

  const techList: string[] =
    project?.technologies.map((t) => t.name) || props.technologies || [];

  const highlights: string[] = project?.highlights || props.highlights || [];

  const liveLink = project?.links.live || props.links?.live;
  const githubLink = project?.links.github || props.links?.github;
  const docLink = props.links?.document || (project?.links.live?.includes("pdf") ? project.links.live : undefined);

  return (
    <article className="border border-paper-rule bg-paper p-6 sm:p-8 rounded-sm group transition-shadow duration-300 hover:shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Compact Image Preview */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-video">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-xs text-ink-muted">
                No Preview
              </div>
            )}
          </div>
          {contextLabel && (
            <p className="mt-2 text-xs font-mono text-ink-muted">
              {contextLabel}
            </p>
          )}
        </div>

        {/* Right Column: Project Information & Verified Links */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              <span>Project {index}</span>
              <span aria-hidden="true">·</span>
              <span className="text-accent-editorial">{category}</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-ink tracking-tight">
              {title}
            </h3>

            {tagline && (
              <p className="mt-1 font-medium text-sm text-ink-secondary">
                {tagline}
              </p>
            )}

            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              {description}
            </p>

            {/* Key Facts / Highlights */}
            {highlights.length > 0 && (
              <div className="mt-4">
                <ul className="space-y-1.5 text-xs text-ink-secondary">
                  {highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-accent-editorial shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer: Tags and Action Links */}
          <div className="mt-6 pt-5 border-t border-paper-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2 py-0.5 bg-paper-warm border border-paper-rule text-ink rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-ink bg-paper-warm hover:bg-paper-muted border border-paper-rule rounded-sm transition-colors duration-150"
                >
                  <Github size={13} aria-hidden="true" />
                  GitHub
                </a>
              )}
              {liveLink && !liveLink.includes("pdf") && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-colors duration-150"
                >
                  Visit Site
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              )}
              {(docLink || (liveLink && liveLink.includes("pdf"))) && (
                <a
                  href={docLink || liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-colors duration-150"
                >
                  <FileText size={13} aria-hidden="true" />
                  Exam Report
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
