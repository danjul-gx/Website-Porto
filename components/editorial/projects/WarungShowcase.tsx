"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, LayoutTemplate } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ProjectFlowStep } from "@/types";

interface WarungShowcaseProps {
  project: Project;
}

export default function WarungShowcase({ project }: WarungShowcaseProps) {
  const steps: ProjectFlowStep[] = project.flowSteps || [];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const activeStep = steps[currentStepIndex] || steps[0];

  const handlePrev = () => {
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setCurrentStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const githubUrl = project.links.github || "";

  if (!activeStep) return null;

  return (
    <article className="border border-paper-rule bg-paper p-6 sm:p-8 lg:p-10 rounded-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-paper-rule">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            <span>Project {String(project.order || 4).padStart(2, "0")}</span>
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

        {githubUrl && (
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-colors duration-150"
            >
              GitHub Repository
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {/* 3-Step Screen Stepper */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
            <LayoutTemplate size={13} aria-hidden="true" />
            Workflow Stages (Select view to inspect)
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous view"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-sm border border-paper-rule bg-paper hover:bg-paper-warm text-ink focus-visible:outline-2 focus-visible:outline-accent-editorial transition-colors"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <span className="font-mono text-xs text-ink-muted min-w-[44px] text-center">
              {activeStep.stepNumber} / {String(steps.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next view"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-sm border border-paper-rule bg-paper hover:bg-paper-warm text-ink focus-visible:outline-2 focus-visible:outline-accent-editorial transition-colors"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Step Buttons */}
        <div
          role="tablist"
          aria-label="Application workflow stages"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          {steps.map((step, idx) => {
            const isSelected = idx === currentStepIndex;
            return (
              <button
                key={step.id}
                role="tab"
                id={`flow-tab-${step.id}`}
                aria-controls={`flow-panel-${step.id}`}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setCurrentStepIndex(idx)}
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
                    View {step.stepNumber}
                  </span>
                  <span className="text-[11px] text-ink-muted">{step.role}</span>
                </div>
                <div className="font-medium text-sm line-clamp-1">{step.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen Inspector Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          id={`flow-panel-${activeStep.id}`}
          role="tabpanel"
          aria-labelledby={`flow-tab-${activeStep.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="mt-6 pt-6 border-t border-paper-rule grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Screenshot Viewport */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-video shadow-xs group">
              <Image
                src={activeStep.src}
                alt={`${activeStep.name} - Real screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              />
            </div>
            <p className="mt-2 text-xs font-mono text-ink-muted">
              Source capture · {activeStep.role}
            </p>
          </div>

          {/* Technical Explanations */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                View {activeStep.stepNumber} · Architecture & Code
              </span>
              <h4 className="font-display font-bold text-xl text-ink mt-1">
                {activeStep.name}
              </h4>

              <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                {activeStep.description}
              </p>

              <div className="mt-5">
                <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                  Implementation Details & Architecture
                </span>
                <ul className="space-y-2 text-sm text-ink-secondary leading-relaxed">
                  {activeStep.technicalHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-accent-editorial mt-0.5 select-none">
                        —
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tooling */}
            <div className="mt-6 pt-5 border-t border-paper-rule">
              <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                Verified Tech & Environment
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
