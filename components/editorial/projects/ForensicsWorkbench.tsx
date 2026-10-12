"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Search, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ProjectPhase } from "@/types";

interface ForensicsWorkbenchProps {
  project: Project;
}

export default function ForensicsWorkbench({ project }: ForensicsWorkbenchProps) {
  const phases: ProjectPhase[] = project.phases || [];
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = phases[activePhaseIndex] || phases[0];

  const reportUrl = project.links.live || project.links.demo || "";
  const reportCoverImage = project.thumbnail || (project.images && project.images[0]) || "/images/projects/df/df.png";

  if (!activePhase) return null;

  return (
    <article className="border border-paper-rule bg-paper p-6 sm:p-8 lg:p-10 rounded-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-paper-rule">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            <span>Project {String(project.order || 2).padStart(2, "0")}</span>
            <span aria-hidden="true">·</span>
            <span>Tier 1: Deep Interaction</span>
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

        {reportUrl && (
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-colors duration-150"
            >
              <FileText size={13} aria-hidden="true" />
              View Examination Report
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {/* Investigation Phases Stepper */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
            <Search size={13} aria-hidden="true" />
            4-Phase Examination Flow (Select to explore phase)
          </span>
          <span className="font-mono text-xs text-ink-muted">
            {activePhase.step} of {String(phases.length).padStart(2, "0")}
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Digital forensics examination phases"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
        >
          {phases.map((phase, idx) => {
            const isSelected = idx === activePhaseIndex;
            return (
              <button
                key={phase.id}
                role="tab"
                id={`forensics-tab-${phase.id}`}
                aria-controls={`forensics-panel-${phase.id}`}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActivePhaseIndex(idx)}
                className={`text-left p-3.5 rounded-sm border transition-all duration-150 ${
                  isSelected
                    ? "border-ink bg-paper-warm text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    : "border-paper-rule bg-paper text-ink-secondary hover:text-ink hover:border-paper-muted"
                }`}
              >
                <div className="font-mono text-xs text-accent-editorial font-bold mb-1">
                  {phase.step}
                </div>
                <div className="font-medium text-sm line-clamp-1">{phase.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phase Investigation Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase.id}
          id={`forensics-panel-${activePhase.id}`}
          role="tabpanel"
          aria-labelledby={`forensics-tab-${activePhase.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="mt-6 pt-6 border-t border-paper-rule grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Left Column: Academic Report Cover Asset */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm p-4 flex flex-col items-center group">
              <div className="relative w-full max-w-[240px] aspect-[4/5]">
                <Image
                  src={reportCoverImage}
                  alt={`${project.title} Cover`}
                  fill
                  sizes="(max-width: 1024px) 240px, 280px"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 text-xs font-mono text-ink-muted text-center">
                President University · Digital Forensic Examination Report
              </p>
            </div>
          </div>

          {/* Right Column: Phase Scope, Procedures, and Verified Findings */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                  {activePhase.step} Methodology
                </span>
                <span className="text-ink-muted text-xs">·</span>
                <div className="flex items-center gap-1">
                  {activePhase.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 bg-paper-warm border border-paper-rule text-ink rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="font-display font-bold text-xl text-ink">
                {activePhase.title}
              </h4>

              <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                {activePhase.description}
              </p>

              <div className="mt-5">
                <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                  Documented Procedures & Artifacts
                </span>
                <ul className="space-y-2 text-sm text-ink-secondary leading-relaxed">
                  {activePhase.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-accent-editorial mt-0.5 select-none">
                        —
                      </span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Academic Context Footer */}
            <div className="mt-6 pt-5 border-t border-paper-rule">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
                <span>{project.contextLabel || "Course: Digital Forensics & Incident Investigation"}</span>
                <span>Institution: President University</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </article>
  );
}
