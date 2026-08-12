"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Building2, ExternalLink, CheckCircle2 } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/data/experiences";
import { formatDate } from "@/lib/utils";
import type { Experience } from "@/types";

const typeLabel: Record<Experience["type"], string> = {
  "full-time": "Full-Time",
  "part-time": "Part-Time",
  freelance: "Freelance",
  internship: "Internship",
  contract: "Contract",
  organization: "Organization",
};

export default function ExperienceTimeline() {
  // Default open the first item
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section className="border-t border-white/[0.06] py-16 sm:py-24">
      <FadeIn className="mb-12">
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-accent-light)" }}
        >
          Career & Journey
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold mt-2 text-white"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Work & Organization Experience
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
          A timeline of roles, key achievements, and organizations I&apos;ve contributed to along my developer journey.
        </p>
      </FadeIn>

      <div className="space-y-4">
        {experiences
          .sort((a, b) => a.order - b.order)
          .map((exp) => {
            const isOpen = openId === exp.id;
            const responsibilitiesList = exp.responsibilities || exp.highlights;
            const attachmentsList = exp.attachments || exp.images || [];

            // Format year / date display
            const startYear = exp.startDate.split("-")[0];
            const endYear = exp.endDate === "present" ? "Present" : exp.endDate.split("-")[0];
            const dateDisplay = startYear === endYear ? startYear : `${startYear} - ${endYear}`;

            return (
              <FadeIn key={exp.id}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-purple-500/40 bg-[#14141B] shadow-xl shadow-purple-900/10"
                      : "border-white/10 bg-[#0E0E13] hover:border-white/20 hover:bg-[#121218]"
                  }`}
                >
                  {/* Header Item (Closed/Toggle) */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(exp.id)}
                    className="w-full p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <Badge
                          variant={exp.type === "internship" ? "accent" : exp.type === "organization" ? "warning" : "default"}
                          className="text-xs py-0.5 px-2.5"
                        >
                          {typeLabel[exp.type]}
                        </Badge>
                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                          <Calendar size={12} />
                          {dateDisplay}
                        </span>
                      </div>

                      <h3
                        className="text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-purple-300"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {exp.role}
                      </h3>

                      <p className="text-sm text-zinc-400 mt-1 flex flex-wrap items-center gap-2 font-medium">
                        <span className="text-purple-300 font-semibold">{exp.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span>{exp.organization || exp.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400">{dateDisplay}</span>
                      </p>
                    </div>

                    <div
                      className={`p-2 rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-white bg-purple-500/20 border-purple-500/30" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Body Item (Dropdown Content) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/[0.06] space-y-6">
                          {/* Location & Company Link */}
                          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={14} className="text-purple-400" />
                              {exp.location}
                            </span>

                            {exp.companyUrl && (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-purple-300 hover:text-white transition-colors"
                              >
                                <Building2 size={14} />
                                Visit Website <ExternalLink size={12} />
                              </a>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                            {exp.description}
                          </p>

                          {/* Key Responsibilities & Achievements */}
                          {responsibilitiesList.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                                Key Responsibilities & Achievements
                              </h4>
                              <ul className="space-y-2.5">
                                {responsibilitiesList.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          {exp.technologies.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                                Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Image Attachments / Photos Gallery Grid */}
                          {attachmentsList.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                                Event & Activity Gallery
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {attachmentsList.map((imgSrc, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 group"
                                  >
                                    <Image
                                      src={imgSrc}
                                      alt={`${exp.role} activity photo ${imgIndex + 1}`}
                                      fill
                                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                                      sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                      <span className="text-xs text-white font-medium truncate">
                                        {exp.company} — Gallery #{imgIndex + 1}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
      </div>
    </Section>
  );
}

