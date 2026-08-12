import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-001",
    slug: "portfolio-website",
    title: "Roblox Co-op Quest System",
    tagline: "An industrial escape room experience where players tackle NPC-assigned tasks to repair generators, restore power, and unlock the exit.",
    description:
      "An immersive industrial escape room experience built on Roblox. Players are challenged to complete sequential NPC-driven tasks: locating tools to repair malfunctioning generators, gathering fuses to restore the facility's power, and unlocking the final gate to escape. Powered by robust, scalable Luau scripting for seamless core mechanics and elevated by custom 3D assets modeled in Blender.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/roblox/images.png",
    images: [
      "/images/projects/roblox/roblox1.png",
      "/images/projects/roblox/images.png",
      "/images/projects/roblox/roblox2.png",
    ],
    tags: ["Roblox Studio", "Blender 3D"],
    technologies: [
      { name: "Roblox Studio", color: "#fff" },
      { name: "Luau", color: "#3178C6" },
      { name: "Blender 3D", color: "#F58025" },

    ],
    links: {
      github: "",
      live: "",
      case_study: "",
      game: "https://www.roblox.com/share?code=32834a4eab0e3d48bc0f6fd202fe9bf5&type=ExperienceDetails&stamp=1786193767501"
    },
    events: [
      {
        id: "event-001-1",
        projectId: "project-001",
        title: "Project Kickoff",
        date: "2026-08-01",
        type: "milestone",
        description: "Architecture plan finalized and repository initialized.",
      },
    ],
    startDate: "2026-08-01",
    order: 1,

  },


  {
    id: "project-002",
    slug: "portfolio-website",
    title: "Blender 3D",
    tagline: "Showcasing 3D environments, assets, and modeling workflows.",
    description:
      "A curated showcase of 3D models and environments crafted in Blender. This gallery features a collection of personal projects, from raw project files to fully rendered scenes, highlighting a continuous exploration of 3D modeling, texturing, and lighting techniques.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/blender/blender.png",
    images: [
      "/images/projects/blender/blender1.png",
      "/images/projects/blender/blender2.png",
      "/images/projects/blender/blender3.png",

    ],
    tags: ["Blender 3D"],
    technologies: [
      { name: "Blender 3D", color: "#F58025" },

    ],
    links: {
      github: "",
      live: "https://drive.google.com/drive/u/1/folders/1SMH9Jf2xUZEZnuLrwXKttS7JBjAfHoaz",
      case_study: "",
      game: ""
    },
    events: [
      {
        id: "event-001-1",
        projectId: "project-001",
        title: "Project Kickoff",
        date: "2026-08-01",
        type: "milestone",
        description: "Architecture plan finalized and repository initialized.",
      },
    ],
    startDate: "2026-08-01",
    order: 1,

  },

  {
    id: "project-003",
    slug: "portfolio-website",
    title: "Warung App",
    tagline: "Modernizing the traditional local eatery experience by bridging authentic culinary flavors with seamless, intuitive digital ordering.",
    description:
      "A native Android application designed to digitalize and streamline the ordering experience for local culinary businesses, such as a traditional warung or warmindo. Developed natively in Android Studio using Java and XML, the app features a user-friendly UI for browsing menus, managing cart items, and simulating a complete checkout flow ready for modern digital payment integration.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/warung/warung.png",
    images: [
      "/images/projects/warung/warung1.png",
      "/images/projects/warung/warung2.png",
      "/images/projects/warung/warung3.png",

    ],
    tags: ["Android Studio"],
    technologies: [
      { name: "Android Studio", color: "#F58025" },
      { name: "Java", color: "#3178C6" },

    ],
    links: {
      github: "https://github.com/danjul-gx/Warung-FinalProject",
      live: "",
      case_study: "",
      game: ""
    },
    events: [
      {
        id: "event-001-1",
        projectId: "project-001",
        title: "Project Kickoff",
        date: "2026-08-01",
        type: "milestone",
        description: "Architecture plan finalized and repository initialized.",
      },
    ],
    startDate: "2026-08-01",
    order: 1,

  },

  {
    id: "project-004",
    slug: "portfolio-website",
    title: "PharmaTrack",
    tagline: "Order online, pay seamlessly, and pick up directly at the clinic—taking the wait out of your healthcare routine.",
    description:
      "A web-based e-pharmacy platform enabling online purchases and digital payments, featuring a seamless click-and-collect system for direct in-clinic medicine pickup.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/pt/pt.png",
    images: [
      "/images/projects/pt/pt3.png",
      "/images/projects/pt/pt2.png",
      "/images/projects/pt/pt1.png",

    ],
    tags: ["Web Development"],
    technologies: [
      { name: "JavaScript", color: "#F58025" },

    ],
    links: {
      github: "https://github.com/danjul-gx/PharmaTrack",
      live: "https://se-group5.vercel.app/",
      case_study: "",
      game: ""
    },
    events: [
      {
        id: "event-001-1",
        projectId: "project-001",
        title: "Project Kickoff",
        date: "2026-08-01",
        type: "milestone",
        description: "Architecture plan finalized and repository initialized.",
      },
    ],
    startDate: "2026-08-01",
    order: 1,

  },


];

