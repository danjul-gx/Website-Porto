"use client";

import Image from "next/image";
import { useState } from "react";
import { Cpu, Gamepad2, Award, ArrowRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoLightbox, { LightboxImage } from "@/components/editorial/PhotoLightbox";
import type { Project } from "@/types";

const EXHIBITION_IMAGES: LightboxImage[] = [
  {
    src: "/images/projects/game/game.png",
    alt: "Development team at the Living Plaza Jababeka exhibition booth",
    title: "Exhibition Team Photo",
    caption:
      "Living Plaza Jababeka · 4th Economic Survival Exhibition 2025. Team presenting Trust Your Friends and Project HUE.",
  },
  {
    src: "/images/projects/game/game2.png",
    alt: "Certificate of Appreciation for 2nd Place in Best Software Category",
    title: "Certificate of Appreciation (2nd Place)",
    caption:
      "President University · 4th Economic Survival Exhibition 2025. Awarded 2nd Place for Best Group in the Software category.",
  },
];

interface HueSchematicProps {
  project?: Project;
}

export default function HueSchematic({ project }: HueSchematicProps) {
  const [activeTab, setActiveTab] = useState<"tyf" | "hue">("tyf");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const title = project?.title || "Trust Your Friends & Project HUE";
  const description =
    project?.description ||
    "Two distinct games developed and exhibited for the Economic Survival Exhibition 2025 at Living Plaza Jababeka, earning 2nd Place in the Best Software Category.";

  return (
    <article className="border border-paper-rule bg-paper p-6 sm:p-8 lg:p-10 rounded-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-paper-rule">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            <span>Project {String(project?.order || 5).padStart(2, "0")}</span>
            <span aria-hidden="true">·</span>
            <span>Tier 2: Dual Exhibition Project</span>
            <span aria-hidden="true">·</span>
            <span className="text-accent-editorial">{project?.tierLabel || "Exhibition Showcase"}</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-base text-ink-secondary max-w-2xl">
            {description}
          </p>
        </div>

        {/* 2nd Place Award Badge */}
        <div className="flex items-center gap-2 px-3 py-2 bg-paper-warm border border-paper-rule rounded-sm shrink-0">
          <Award size={16} className="text-accent-editorial" aria-hidden="true" />
          <div className="text-xs font-mono">
            <span className="font-bold text-ink block">2nd Place</span>
            <span className="text-ink-muted text-[11px]">Best Software · 2025</span>
          </div>
        </div>
      </div>

      {/* Project Switcher */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Exhibition Lineup (Select game to inspect)
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Exhibition projects"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        >
          <button
            type="button"
            role="tab"
            id="tab-tyf"
            aria-controls="panel-tyf"
            aria-selected={activeTab === "tyf"}
            tabIndex={activeTab === "tyf" ? 0 : -1}
            onClick={() => setActiveTab("tyf")}
            className={`text-left p-3.5 rounded-sm border transition-all duration-150 flex items-start gap-3 ${
              activeTab === "tyf"
                ? "border-ink bg-paper-warm text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                : "border-paper-rule bg-paper text-ink-secondary hover:text-ink hover:border-paper-muted"
            }`}
          >
            <Cpu size={18} className="text-accent-editorial shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <div className="font-mono text-xs font-bold text-accent-editorial mb-0.5">
                Game A · IoT + Web Co-op
              </div>
              <div className="font-medium text-sm text-ink">Trust Your Friends?</div>
              <p className="text-xs text-ink-muted mt-1">
                2-player bomb-defusal puzzle pairing physical IoT hardware with a web interface.
              </p>
            </div>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-hue"
            aria-controls="panel-hue"
            aria-selected={activeTab === "hue"}
            tabIndex={activeTab === "hue" ? 0 : -1}
            onClick={() => setActiveTab("hue")}
            className={`text-left p-3.5 rounded-sm border transition-all duration-150 flex items-start gap-3 ${
              activeTab === "hue"
                ? "border-ink bg-paper-warm text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                : "border-paper-rule bg-paper text-ink-secondary hover:text-ink hover:border-paper-muted"
            }`}
          >
            <Gamepad2 size={18} className="text-accent-editorial shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <div className="font-mono text-xs font-bold text-accent-editorial mb-0.5">
                Game B · 3D Unity Shooter
              </div>
              <div className="font-medium text-sm text-ink">Project HUE</div>
              <p className="text-xs text-ink-muted mt-1">
                Third-person action shooter built in Unity with C# emphasizing fast-paced mechanics.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Active Tab Panel */}
      <div className="mt-6 pt-6 border-t border-paper-rule">
        <AnimatePresence mode="wait">
          {activeTab === "tyf" ? (
            <motion.div
              key="panel-tyf"
              id="panel-tyf"
              role="tabpanel"
              aria-labelledby="tab-tyf"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
            {/* Visual Schematic Diagram */}
            <div className="lg:col-span-7">
              <div className="p-5 border border-paper-rule bg-paper-warm rounded-sm">
                <span className="block font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold mb-3">
                  Hardware-to-Web Interaction Architecture
                </span>

                {/* 2-Player Co-op Relationship Schematic */}
                <div className="space-y-4">
                  {/* Player 1 Box */}
                  <div className="p-4 bg-paper border border-paper-rule rounded-sm">
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="font-bold text-ink">Player 1: The Defuser</span>
                      <span className="text-accent-editorial">Physical Hardware Station</span>
                    </div>
                    <p className="text-xs text-ink-secondary">
                      Interacts with the custom physical IoT hardware box fitted with toggle switches,
                      push buttons, and indicator LEDs. The player cannot see the manual and must follow instructions.
                    </p>
                  </div>

                  {/* Relationship Link */}
                  <div className="flex items-center justify-center gap-3 py-1 text-ink-muted">
                    <div className="h-px bg-paper-rule flex-1" />
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 border border-paper-rule bg-paper rounded-sm">
                      Verbal Communication & Defusal Inputs
                    </span>
                    <div className="h-px bg-paper-rule flex-1" />
                  </div>

                  {/* Player 2 Box */}
                  <div className="p-4 bg-paper border border-paper-rule rounded-sm">
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="font-bold text-ink">Player 2: The Expert</span>
                      <span className="text-accent-editorial">Web Application Station</span>
                    </div>
                    <p className="text-xs text-ink-secondary">
                      Operates the browser interface displaying the defusal manuals, rules, logic tables,
                      and time countdown. The expert cannot see the physical device and must direct Player 1.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-paper-rule flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>Input: Hardware buttons & toggles</span>
                  <span className="flex items-center gap-1">
                    State synchronization
                    <ArrowRight size={11} aria-hidden="true" />
                  </span>
                  <span>Display: Web app instructions</span>
                </div>
              </div>

              <p className="mt-2 text-xs font-mono text-ink-muted">
                Architectural breakdown: Pure hardware-to-web co-op communication model.
              </p>
            </div>

            {/* Game A Description & Facts */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                  Game A Details
                </span>
                <h4 className="font-display font-bold text-xl text-ink mt-1">
                  Trust Your Friends? Defuse or Detonate
                </h4>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                  Inspired by asynchronous cooperative puzzles, Trust Your Friends divides responsibility
                  between two players in different roles. One player operates the physical IoT box, while
                  the second player reads the defusal instructions on a web interface.
                </p>

                <div className="mt-4">
                  <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                    Verified Components
                  </span>
                  <ul className="space-y-1.5 text-xs text-ink-secondary">
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-accent-editorial">—</span>
                      <span>Physical IoT hardware device with interactive buttons and toggles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-accent-editorial">—</span>
                      <span>Web application delivering manual instructions and game countdown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-accent-editorial">—</span>
                      <span>Exhibited live with public participants at Living Plaza Jababeka</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-paper-rule">
                <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                  Verified Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["IoT Hardware", "JavaScript", "HTML/CSS", "Physical Computing"].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-0.5 bg-paper-warm border border-paper-rule text-ink rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </motion.div>
          ) : (
            <motion.div
              key="panel-hue"
              id="panel-hue"
              role="tabpanel"
              aria-labelledby="tab-hue"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Visual: Exhibition Booth Asset */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-video group">
                  <Image
                    src="/images/projects/game/game1.png"
                    alt="Project HUE and Trust Your Friends exhibition booth"
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </div>
                <p className="mt-2 text-xs font-mono text-ink-muted">
                  Exhibition booth showing Project HUE running on laptop display alongside the Trust Your Friends hardware box.
                </p>
              </div>

              {/* Game B Details */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                    Game B Details
                  </span>
                  <h4 className="font-display font-bold text-xl text-ink mt-1">
                    Project HUE: Visual Overload
                  </h4>
                  <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                    Project HUE is a dynamic 3D third-person action shooter developed in Unity with C#.
                    Created for the exhibition showcase, it features character mobility, responsive shooting
                    mechanics, and custom 3D level geometry.
                  </p>

                  <div className="mt-4">
                    <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                      Verified Technical Mechanics
                    </span>
                    <ul className="space-y-1.5 text-xs text-ink-secondary">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-accent-editorial">—</span>
                        <span>Third-person character controller with sprint and jump physics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-accent-editorial">—</span>
                        <span>Weapon firing system, projectile raycasting, and hit detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-accent-editorial">—</span>
                        <span>Built natively in Unity engine using C# gameplay scripts</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-paper-rule">
                  <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                    Verified Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Unity Engine", "C#", "3D Physics", "Third-Person Controller"].map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-0.5 bg-paper-warm border border-paper-rule text-ink rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Exhibition Photo & Certificate Strip */}
      <div className="mt-8 pt-6 border-t border-paper-rule">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Exhibition Documentation (Click to inspect)
          </span>
          <span className="font-mono text-xs text-accent-editorial">
            2 Items
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="flex items-center justify-between p-3 bg-paper-warm border border-paper-rule rounded-sm hover:border-paper-muted focus-visible:outline-2 focus-visible:outline-accent-editorial transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 shrink-0 rounded-sm overflow-hidden border border-paper-rule bg-paper">
                <Image
                  src="/images/projects/game/game.png"
                  alt="Development team at exhibition booth"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-ink group-hover:text-accent-editorial transition-colors">
                  Exhibition Team Photo
                </div>
                <div className="text-[11px] font-mono text-ink-muted">Living Plaza Jababeka Booth</div>
              </div>
            </div>
            <Maximize2 size={14} className="text-ink-muted group-hover:text-ink shrink-0 ml-2" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => openLightbox(1)}
            className="flex items-center justify-between p-3 bg-paper-warm border border-paper-rule rounded-sm hover:border-paper-muted focus-visible:outline-2 focus-visible:outline-accent-editorial transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 shrink-0 rounded-sm overflow-hidden border border-paper-rule bg-paper">
                <Image
                  src="/images/projects/game/game2.png"
                  alt="2nd Place Certificate of Appreciation"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-ink group-hover:text-accent-editorial transition-colors">
                  Certificate of Appreciation
                </div>
                <div className="text-[11px] font-mono text-ink-muted">2nd Place · Software Category</div>
              </div>
            </div>
            <Maximize2 size={14} className="text-ink-muted group-hover:text-ink shrink-0 ml-2" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Accessible Photo Lightbox */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={EXHIBITION_IMAGES}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </article>
  );
}
