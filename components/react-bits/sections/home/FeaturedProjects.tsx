import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  return (
    <Section className="border-t border-white/[0.06]">
      <FadeIn className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent-light)" }}>
            Work
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-3 text-white"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 duration-200"
          style={{ color: "var(--color-accent-light)" }}
        >
          All projects <ArrowRight size={15} />
        </Link>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StaggerContainer>

      <FadeIn className="mt-8 sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--color-accent-light)" }}
        >
          All projects <ArrowRight size={15} />
        </Link>
      </FadeIn>
    </Section>
  );
}
