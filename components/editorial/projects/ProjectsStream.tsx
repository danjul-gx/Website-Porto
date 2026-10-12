import { projects } from "@/data/projects";
import ProjectRenderer from "./ProjectRenderer";

export default function ProjectsStream() {
  // Filter and group projects by tier from the authoritative projects dataset
  const tier1Projects = projects.filter((p) => p.tier === "tier-1");
  const tier2Projects = projects.filter((p) => p.tier === "tier-2");
  const tier3Projects = projects.filter(
    (p) => p.tier === "tier-3" || (!p.tier && p.presentation === "light")
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Tier 1: Deep Interaction Workbenches */}
      {tier1Projects.length > 0 && (
        <section aria-labelledby="heading-tier1" className="space-y-8 sm:space-y-10">
          <div className="border-b border-paper-rule pb-2">
            <h3
              id="heading-tier1"
              className="font-mono text-xs uppercase tracking-wider text-ink-muted"
            >
              Tier 1 — Deep Interactive Workbenches
            </h3>
          </div>
          {tier1Projects.map((project) => (
            <ProjectRenderer key={project.id} project={project} />
          ))}
        </section>
      )}

      {/* Tier 2: Focused Visual Inspection & Hardware-Web Relationship */}
      {tier2Projects.length > 0 && (
        <section aria-labelledby="heading-tier2" className="space-y-8 sm:space-y-10">
          <div className="border-b border-paper-rule pb-2">
            <h3
              id="heading-tier2"
              className="font-mono text-xs uppercase tracking-wider text-ink-muted"
            >
              Tier 2 — Focused Visual & System Inspection
            </h3>
          </div>
          {tier2Projects.map((project) => (
            <ProjectRenderer key={project.id} project={project} />
          ))}
        </section>
      )}

      {/* Tier 3: Light Presentation Cards */}
      {tier3Projects.length > 0 && (
        <section aria-labelledby="heading-tier3" className="space-y-8 sm:space-y-10">
          <div className="border-b border-paper-rule pb-2">
            <h3
              id="heading-tier3"
              className="font-mono text-xs uppercase tracking-wider text-ink-muted"
            >
              Tier 3 — Coursework & Exam Highlights
            </h3>
          </div>
          <div className="space-y-6">
            {tier3Projects.map((project) => (
              <ProjectRenderer key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
