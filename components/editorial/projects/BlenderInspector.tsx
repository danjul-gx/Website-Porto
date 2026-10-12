"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import type { Project, ProjectVisualStudy } from "@/types";

interface BlenderInspectorProps {
  project: Project;
}

export default function BlenderInspector({ project }: BlenderInspectorProps) {
  const studies: ProjectVisualStudy[] = project.visualStudies || [];
  const [selectedAssetId, setSelectedAssetId] = useState<string>(
    studies[0]?.id || ""
  );

  const activeAsset =
    studies.find((a) => a.id === selectedAssetId) || studies[0];

  const externalUrl = project.links.live || project.links.demo || "";

  if (!activeAsset) return null;

  return (
    <article className="border border-paper-rule bg-paper p-6 sm:p-8 lg:p-10 rounded-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-paper-rule">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            <span>Project {String(project.order || 3).padStart(2, "0")}</span>
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

        {externalUrl && (
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-colors duration-150"
            >
              Drive Project Files
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {/* Main Inspection Area */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Large Viewport and Details for Selected Study */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-video group">
            <Image
              src={activeAsset.src}
              alt={activeAsset.title}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
            />
          </div>

          {/* Study Header & Category */}
          <div className="mt-4 pb-3 border-b border-paper-rule">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                {activeAsset.category || "3D Visual Study"}
              </span>
              <span className="font-mono text-xs text-ink-muted">
                {activeAsset.subtitle}
              </span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink">
              {activeAsset.title}
            </h4>
            <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
              {activeAsset.notes}
            </p>
          </div>

          {/* Detailed Study Breakdown */}
          {activeAsset.details && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {activeAsset.details.goal && (
                <div className="p-3 rounded-sm border border-paper-rule bg-paper-warm">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block font-semibold mb-1">
                    Study Focus & Goal
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {activeAsset.details.goal}
                  </p>
                </div>
              )}

              {activeAsset.details.composition && (
                <div className="p-3 rounded-sm border border-paper-rule bg-paper-warm">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block font-semibold mb-1">
                    Composition & Framing
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {activeAsset.details.composition}
                  </p>
                </div>
              )}

              {activeAsset.details.lightingAndShading && (
                <div className="p-3 rounded-sm border border-paper-rule bg-paper-warm sm:col-span-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block font-semibold mb-1">
                    Lighting, Materials & Shaders
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {activeAsset.details.lightingAndShading}
                  </p>
                </div>
              )}

              {activeAsset.details.techniques && activeAsset.details.techniques.length > 0 && (
                <div className="sm:col-span-2 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block font-semibold mb-2">
                    Verified Viewport & Scene Techniques
                  </span>
                  <ul className="space-y-1.5 text-xs text-ink-secondary">
                    {activeAsset.details.techniques.map((tech, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-mono text-accent-editorial select-none">—</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Thumbnail Selector Rail */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
              <Eye size={13} aria-hidden="true" />
              Select Render to Inspect
            </span>
            <span className="font-mono text-xs text-ink-muted">
              {studies.length} Studies
            </span>
          </div>

          <div
            role="list"
            aria-label="3D visual study thumbnails"
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2.5"
          >
            {studies.map((asset) => {
              const isSelected = asset.id === selectedAssetId;
              return (
                <button
                  key={asset.id}
                  type="button"
                  onClick={() => setSelectedAssetId(asset.id)}
                  aria-pressed={isSelected}
                  className={`text-left p-2.5 rounded-sm border flex items-center gap-3 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent-editorial ${isSelected
                      ? "border-ink bg-paper-warm shadow-xs ring-1 ring-ink/10"
                      : "border-paper-rule bg-paper hover:border-paper-muted"
                    }`}
                >
                  <div className="relative w-16 h-12 shrink-0 overflow-hidden rounded-sm border border-paper-rule bg-paper-muted">
                    <Image
                      src={asset.src}
                      alt={asset.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1 hidden sm:block lg:block">
                    <div className="text-xs font-semibold text-ink truncate">
                      {asset.title}
                    </div>
                    <div className="text-[11px] font-mono text-accent-editorial truncate">
                      {asset.category || asset.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contextual Specs */}
          <div className="mt-2 pt-3 border-t border-paper-rule">
            <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
              Workflow & Tooling
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="font-mono text-xs px-2 py-0.5 bg-paper-warm border border-paper-rule text-ink rounded-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
