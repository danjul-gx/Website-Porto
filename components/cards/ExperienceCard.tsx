import { cn, formatDate, getDuration } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const typeLabel: Record<Experience["type"], string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  freelance: "Freelance",
  internship: "Internship",
  contract: "Contract",
  organization: "Organization",
};


export default function ExperienceCard({
  experience,
  className,
}: ExperienceCardProps) {
  const duration = getDuration(experience.startDate, experience.endDate);
  const isPresent = experience.endDate === "present";

  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.07] p-6 transition-colors hover:border-white/[0.12]",
        className
      )}
      style={{ background: "var(--color-bg-surface)" }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3
            className="text-base font-semibold text-white"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {experience.role}
          </h3>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: "var(--color-accent-light)" }}
            >
              {experience.company}
            </a>
          ) : (
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-accent-light)" }}
            >
              {experience.company}
            </span>
          )}
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
          <div className="flex items-center gap-2">
            {isPresent && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current
              </span>
            )}
            <Badge variant="outline">{typeLabel[experience.type]}</Badge>
          </div>
          <span className="text-xs text-zinc-500">
            {formatDate(experience.startDate)} —{" "}
            {isPresent ? "Present" : formatDate(experience.endDate)} · {duration}
          </span>
          <span className="text-xs text-zinc-600">{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Highlights */}
      {experience.highlights.length > 0 && (
        <ul className="space-y-2 mb-4">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
              <span
                className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                style={{ background: "var(--color-accent)" }}
              />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {/* Tech Stack */}
      {experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="default" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
