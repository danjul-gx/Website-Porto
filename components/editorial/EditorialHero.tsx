"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard";

type LensKey = "ALL" | "BUILD" | "INVESTIGATE" | "CREATE" | "CONNECT";

interface LensConfig {
  key: LensKey;
  label: string;
  focusTitle: string;
  narrative: string;
  projectPills: { name: string; anchor: string }[];
}

const LENSES: LensConfig[] = [
  {
    key: "ALL",
    label: "ALL",
    focusTitle: "General Perspective",
    narrative:
      "Most of what you see here started as coursework, student organization projects, or things I built because I wanted to understand how they work.",
    projectPills: [
      { name: "Roblox Studio", anchor: "#work" },
      { name: "Digital Forensics", anchor: "#work" },
      { name: "Blender 3D", anchor: "#work" },
      { name: "Android App", anchor: "#work" },
      { name: "Campus Fieldwork", anchor: "#fieldwork" },
    ],
  },
  {
    key: "BUILD",
    label: "BUILD",
    focusTitle: "Systems & Software",
    narrative:
      "Focusing on game mechanics, native application logic, and full-stack software. I design state-driven systems that connect user actions to backend services.",
    projectPills: [
      { name: "Roblox Co-op Quest", anchor: "#work" },
      { name: "Warung Android App", anchor: "#work" },
      { name: "PharmaTrack Web", anchor: "#work" },
    ],
  },
  {
    key: "INVESTIGATE",
    label: "INVESTIGATE",
    focusTitle: "Forensics & Security",
    narrative:
      "Digging into digital evidence, network packet streams, file carving, and defensive cybersecurity challenges completed for university examinations.",
    projectPills: [
      { name: "Digital Forensics Exam", anchor: "#work" },
      { name: "Capture the Flag (CTF)", anchor: "#work" },
    ],
  },
  {
    key: "CREATE",
    label: "CREATE",
    focusTitle: "3D & Creative Computing",
    narrative:
      "Constructing 3D environments, props, lighting studies in Blender, and exhibition-grade interactive games with custom physical computing and Unity.",
    projectPills: [
      { name: "Blender 3D Environments", anchor: "#work" },
      { name: "Project HUE & Trust Your Friends", anchor: "#work" },
    ],
  },
  {
    key: "CONNECT",
    label: "CONNECT",
    focusTitle: "Campus & Outreach",
    narrative:
      "Serving across student committees, managing university guest lectures, organizing student alumni events, and coordinating tech initiatives.",
    projectPills: [
      { name: "Campus & Fieldwork Archive", anchor: "#fieldwork" },
      { name: "Get in Touch", anchor: "#contact" },
    ],
  },
];

export default function EditorialHero() {
  const [activeLensKey, setActiveLensKey] = useState<LensKey>("ALL");
  const activeLens = LENSES.find((l) => l.key === activeLensKey) || LENSES[0];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left Column — Identity, Lens Selector & Introduction */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Coordinates / Status Line */}
            <motion.p
              variants={fadeInUp}
              className="font-mono text-xs text-ink-muted tracking-wide mb-6 sm:mb-8 break-words"
            >
              Cikarang, Indonesia / Informatics @ President University
            </motion.p>

            {/* Name — large editorial display */}
            <motion.h1
              variants={fadeInUp}
              className="font-display font-extrabold text-ink text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6 break-words"
            >
              Zuldan Fahrizal Rahman
            </motion.h1>

            {/* Default Introduction — grounded student voice */}
            <motion.div variants={fadeInUp} className="space-y-4 mb-6">
              <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-xl">
                Hey, I&apos;m Zuldan. I&apos;m an informatics student based in Cikarang.
                I like building things across software, game mechanics, 3D modeling,
                electronics, and digital forensics.
              </p>
            </motion.div>

            {/* Interactive Lens Selector */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 p-4 sm:p-5 rounded-sm border border-paper-rule bg-paper-warm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  What are you curious about?
                </span>
                <span className="font-mono text-xs text-accent-editorial font-medium">
                  {activeLens.focusTitle}
                </span>
              </div>

              {/* Lens Buttons */}
              <div
                role="tablist"
                aria-label="Portfolio curiosity lens selector"
                className="flex flex-wrap gap-1.5 mb-4"
              >
                {LENSES.map((lens) => {
                  const isSelected = lens.key === activeLensKey;
                  return (
                    <button
                      key={lens.key}
                      type="button"
                      role="tab"
                      id={`lens-tab-${lens.key}`}
                      aria-controls={`lens-panel-${lens.key}`}
                      aria-selected={isSelected}
                      tabIndex={0}
                      onClick={() => setActiveLensKey(lens.key)}
                      className={`relative px-3 py-1.5 text-xs font-mono font-medium rounded-sm border transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent-editorial active:scale-95 ${isSelected
                        ? "bg-ink text-paper border-ink shadow-xs"
                        : "bg-paper text-ink-secondary border-paper-rule hover:text-ink hover:border-paper-muted"
                        }`}
                    >
                      {lens.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Lens Content Reveal */}
              <div
                id={`lens-panel-${activeLens.key}`}
                role="tabpanel"
                aria-labelledby={`lens-tab-${activeLens.key}`}
                className="pt-3 border-t border-paper-rule"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLens.key}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <p className="text-sm text-ink-secondary leading-relaxed mb-3">
                      {activeLens.narrative}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                        Relevant:
                      </span>
                      {activeLens.projectPills.map((pill) => (
                        <a
                          key={pill.name}
                          href={pill.anchor}
                          className="inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-sm bg-paper border border-paper-rule text-ink hover:text-accent-editorial hover:border-accent-editorial transition-colors"
                        >
                          {pill.name}
                          <ArrowUpRight size={11} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Navigational Anchors */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 pt-2 border-t border-paper-rule"
            >
              <a
                href="#work"
                className="text-sm font-medium text-accent-editorial hover:text-ink transition-colors duration-150"
              >
                See my work
              </a>
              <a
                href="#fieldwork"
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-150"
              >
                Campus fieldwork
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-150"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right Column — Portrait */}
          <motion.div
            variants={fadeInUp}
            initial="visible"
            animate="visible"
            className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-none"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] group">
              <div
                className="relative group"
                style={{ aspectRatio: "3 / 4" }}
              >
                <TiltedCard
                  imageSrc="/images/profile/zuldan.png"
                  altText="Zuldan Fahrizal Rahman"
                  captionText="Cikarang, Indonesia"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={6}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  cardClassName="rounded-[12px] border border-paper-rule bg-paper-warm overflow-hidden shadow-xs transition-shadow duration-300 group-hover:shadow-sm"
                  imageClassName="rounded-[12px] object-cover object-center transform scale-115 -translate-y-[6%]"
                />
              </div>
              {/* Caption beneath portrait */}
              <p className="mt-3 font-mono text-xs text-ink-faint text-center lg:text-left">
                Cikarang, 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
