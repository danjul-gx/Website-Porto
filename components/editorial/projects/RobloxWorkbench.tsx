"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ProjectStage } from "@/types";

interface RobloxWorkbenchProps {
  project: Project;
}

export default function RobloxWorkbench({ project }: RobloxWorkbenchProps) {
  const stages: ProjectStage[] = project.stages || [];
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex] || stages[0];

  const gameUrl = project.links.game || project.links.live || "";

  if (!activeStage) return null;

  return (
    <article className="border border-paper-rule bg-paper p-6 sm:p-8 lg:p-10 rounded-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-paper-rule">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            <span>Project {String(project.order || 1).padStart(2, "0")}</span>
            {project.tierLabel && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-accent-editorial">{project.tierLabel}</span>
              </>
            )}
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-ink-secondary max-w-2xl">
            {project.description}
          </p>
        </div>

        {gameUrl && (
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-colors duration-150"
            >
              Play on Roblox
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {/* Stage Selector Controls */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
            <Layers size={13} aria-hidden="true" />
            Progression Stages (Select to inspect)
          </span>
          <span className="font-mono text-xs text-ink-muted">
            Stage {activeStage.number} of {String(stages.length).padStart(2, "0")}
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Quest progression stages"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          {stages.map((stage, idx) => {
            const isSelected = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                role="tab"
                id={`roblox-tab-${stage.id}`}
                aria-controls={`roblox-panel-${stage.id}`}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-3.5 rounded-sm border transition-all duration-150 ${isSelected
                  ? "border-ink bg-paper-warm text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  : "border-paper-rule bg-paper text-ink-secondary hover:text-ink hover:border-paper-muted"
                  }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-1">
                  <span
                    className={
                      isSelected
                        ? "text-accent-editorial font-bold"
                        : "text-ink-muted"
                    }
                  >
                    Stage {stage.number}
                  </span>
                  <span className="text-[11px] text-ink-muted">{stage.role}</span>
                </div>
                <div className="font-medium text-sm line-clamp-1">{stage.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          id={`roblox-panel-${activeStage.id}`}
          role="tabpanel"
          aria-labelledby={`roblox-tab-${activeStage.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="mt-6 pt-6 border-t border-paper-rule grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Visual Inspection of Selected Stage */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-video group">
              <Image
                src={stageImageSrc(activeStage.image)}
                alt={activeStage.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              />
            </div>
            <p className="mt-2 text-xs font-mono text-ink-muted">
              Stage {stageNumber(activeStage.number)} · {activeStage.imageAlt}
            </p>
          </div>

          {/* Detailed Mechanics & Architecture */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                Stage Logic & Luau Scripting
              </span>
              <h4 className="font-display font-bold text-lg text-ink mt-1">
                {activeStage.name}
              </h4>

              <ul className="mt-4 space-y-2.5 text-sm text-ink-secondary leading-relaxed">
                {activeStage.mechanics.map((mech, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-accent-editorial mt-0.5 select-none">
                      —
                    </span>
                    <span>{mech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contextual Tech Stack */}
            <div className="mt-6 pt-5 border-t border-paper-rule">
              <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                Verified Tech & Tools
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="font-mono text-xs px-2.5 py-1 bg-paper-warm border border-paper-rule text-ink rounded-sm"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </article>
  );
}

function stageImageSrc(src?: string): string {
  return src || "/images/projects/roblox/images.png";
}

function stageNumber(num?: string): string {
  return num || "01";
}
