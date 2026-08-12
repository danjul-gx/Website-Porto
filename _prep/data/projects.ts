import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-001",
    slug: "portfolio-website",

    title: "Personal Portfolio",

    tagline:
      "A dark, minimal portfolio built with Next.js 15 and Framer Motion.",

    description:
      "A fully responsive personal portfolio website featuring smooth animations, interactive backgrounds, and a case-study-driven projects section. Built with Next.js 15 App Router, TypeScript, Tailwind CSS v4, and Framer Motion.",

    status: "in-progress",

    featured: true,

    thumbnail: "/images/projects/portfolio-thumb.webp",

    images: [
      "/images/projects/portfolio-1.webp",
      "/images/projects/portfolio-2.webp",
      "/images/projects/portfolio-3.webp",
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    technologies: [
      {
        name: "Next.js",
        color: "#ffffff",
      },
      {
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        color: "#38BDF8",
      },
      {
        name: "Framer Motion",
        color: "#BB4AE8",
      },
    ],

    links: {
      github: "https://github.com/danjul-gx",

      live: "https://danjul.vercel.app",

      game: "https://www.roblox.com/games/123456789",

      demo: "https://youtube.com",
    },

    events: [
      {
        id: "event-001-1",
        projectId: "project-001",
        title: "Project Kickoff",
        date: "2026-08-01",
        type: "milestone",
        description:
          "Architecture plan finalized and repository initialized.",
      },
    ],

    startDate: "2026-08-01",

    order: 1,
  },
];