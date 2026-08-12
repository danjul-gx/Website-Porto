"use client";

import { useState } from "react";

import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/react-bits/sections/projects/ProjectModal";

import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "archived", label: "Archived" },
] as const;

export default function ProjectsGrid() {
  const [activeStatus, setActiveStatus] = useState("all");
  const [activeTag, setActiveTag] = useState("all");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const allTags = [
    "all",
    ...Array.from(
      new Set(projects.flatMap((p) => p.tags))
    ).sort(),
  ];

  const filtered = projects
    .filter(
      (p) =>
        activeStatus === "all" ||
        p.status === activeStatus
    )
    .filter(
      (p) =>
        activeTag === "all" ||
        p.tags.includes(activeTag)
    )
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() =>
                setActiveStatus(f.value)
              }
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all",
                activeStatus === f.value
                  ? "text-white"
                  : "text-zinc-400 border-white/10"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setActiveTag(tag)
              }
              className={cn(
                "px-3 py-1 rounded-md text-xs border",
                activeTag === tag
                  ? "text-white border-purple-500"
                  : "text-zinc-500 border-white/10"
              )}
            >
              {tag === "all"
                ? "All Tags"
                : tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <FadeIn className="py-24 text-center text-zinc-500">
            No projects match the selected filters.
          </FadeIn>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </StaggerContainer>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );
}