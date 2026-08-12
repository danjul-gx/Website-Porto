import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectDetail({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-zinc-400 text-lg max-w-3xl">
          {project.tagline}
        </p>
      </div>

      {/* Gallery */}
      {project.images?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={image}
                alt={`${project.title} ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Overview
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Tags
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline */}
      {project.events?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">
            Development Timeline
          </h2>

          <div className="space-y-4">
            {project.events.map((event) => (
              <div
                key={event.id}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">
                    {event.title}
                  </h3>

                  <span className="text-sm text-zinc-500">
                    {event.date}
                  </span>
                </div>

                <p className="text-zinc-400">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {project.links.github &&
          project.links.github !== "-" && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              GitHub
            </a>
          )}

        {project.links.live &&
          project.links.live !== "-" && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
            >
              Live Demo
            </a>
          )}
      </div>
    </section>
  );
}