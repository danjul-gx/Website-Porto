"use client";

import {
  X,
  Github,
  Globe,
  Gamepad2,
  PlayCircle,
} from "lucide-react";

import { useEffect } from "react";

import MorphSlider from "@/components/MorphSlider";

import type { Project } from "@/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener(
      "keydown",
      handleEsc
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEsc
      );
  }, [onClose]);

  if (!project) return null;

  const sliderItems =
    project.images?.map((img) => ({
      image: img,
      caption: project.title,
    })) || [];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden border border-white/10 bg-[#050505]"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2 rounded-full bg-black/60 hover:bg-black text-white"
        >
          <X size={22} />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Slider */}
          <div className="aspect-[27/15] w-full overflow-hidden bg-black/20">
            <MorphSlider
              items={sliderItems}
              transition="melt"
              autoplay
              showCaptions={false}
              intensity={0.55}
              aberration={0.3}
              drift={0.4}
            />
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[700px]">
            <h2 className="text-4xl font-bold text-white mb-4">
              {project.title}
            </h2>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <h3 className="font-semibold text-white mb-3">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(
                (tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-sm"
                  >
                    {tech.name}
                  </span>
                )
              )}
            </div>

            <h3 className="font-semibold text-white mb-3">
              Tags
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LINKS */}

            <h3 className="font-semibold text-white mb-4">
              Links
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
                >
                  <Globe size={18} />
                  Website
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition"
                >
                  <Github size={18} />
                  Github
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                >
                  <PlayCircle size={18} />
                  Demo
                </a>
              )}

              {project.links.game && (
                <a
                  href={project.links.game}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
                >
                  <Gamepad2 size={18} />
                  Play Game
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}