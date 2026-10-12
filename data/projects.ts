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
      game: "https://www.roblox.com/share?code=32834a4eab0e3d48bc0f6fd202fe9bf5&type=ExperienceDetails&stamp=1786193767501",
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

    // Data-driven presentation metadata
    presentation: "workbench",
    tier: "tier-1",
    tierLabel: "Sequential Quest",
    category: "Game Development",
    stages: [
      {
        id: "stage-1",
        number: "01",
        name: "NPC Directives & Tool Discovery",
        role: "Briefing & Search",
        mechanics: [
          "NPC-directed quest initialization communicating mission objectives",
          "Player searches industrial facility interiors for repair tools and replacement parts",
          "Proximity-based prompt detection via Luau scripts",
        ],
        image: "/images/projects/roblox/images.png",
        imageAlt: "Player interacting with NPC inside the industrial facility",
      },
      {
        id: "stage-2",
        number: "02",
        name: "Generator Repair & Power Grid",
        role: "Sequential Interaction",
        mechanics: [
          "Locating malfunctioning generator stations across the facility",
          "State-tracked multi-step repair requiring discovered fuse components",
          "Facility power restoration triggering environment lighting and gate power state",
        ],
        image: "/images/projects/roblox/roblox2.png",
        imageAlt: "Industrial generator room environment with custom 3D assets",
      },
      {
        id: "stage-3",
        number: "03",
        name: "Exit Gate Unlock & Escape",
        role: "Completion & Victory",
        mechanics: [
          "Access control validation confirming all facility generators are online",
          "Dynamic physical gate opening powered by Luau server-authoritative logic",
          "Co-op session completion checkpoint",
        ],
        image: "/images/projects/roblox/roblox1.png",
        imageAlt: "Exit gate unlocking after restoring power to the facility",
      },
    ],
  },

  {
    id: "project-007",
    slug: "portfolio-website",
    title: "Digital Forensics Investigation",
    tagline: "Combining the characteristics of a criminal operation from digital evidence, hidden items, and network activity.",
    description:
      "University final examination project which looks into simulated transnational criminal operation with a digital forensic approach. Restored hidden files, emails, browser history, encrypted email files, and financial records from an image forensic disk and network traffic, matched various artifacts and recreated a timeline for the investigations.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/df/df.png",
    images: ["/images/projects/df/df.png"],
    tags: [
      "Digital Forensics",
      "Cybersecurity",
      "Incident Investigation",
      "Evidence Analysis",
    ],
    technologies: [
      { name: "Autopsy", color: "#6C63FF" },
      { name: "FTK Imager", color: "#4A90E2" },
      { name: "Wireshark", color: "#1679A7" },
      { name: "NetworkMiner", color: "#5C6BC0" },
      { name: "AperiSolve", color: "#1679A7" },
      { name: "ExifTool", color: "#8B5CF6" },
      { name: "Steganography", color: "#10B981" },
      { name: "Cryptography", color: "#F59E0B" },
      { name: "PCAP Analysis", color: "#EF4444" },
      { name: "MFT Analysis", color: "#14B8A6" },
      { name: "Timeline Reconstruction", color: "#EC4899" },
    ],
    links: {
      github: "",
      live: "https://www.pdffiller.com/s/ao8vr64X",
      case_study: "",
      game: "",
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
    order: 2,

    // Data-driven presentation metadata
    presentation: "investigation",
    tier: "tier-1",
    tierLabel: "Final Exam Investigation",
    category: "Cybersecurity & Forensics",
    contextLabel: "Course: Digital Forensics & Incident Investigation · President University",
    phases: [
      {
        id: "phase-1",
        step: "Phase 01",
        title: "Disk Acquisition & Integrity",
        tools: ["FTK Imager"],
        description:
          "Bit-stream physical forensic image verification to preserve evidence state and maintain strict chain of custody without data alteration.",
        findings: [
          "Target storage drive physical image mounted read-only via FTK Imager",
          "MD5 and SHA-256 cryptographic hashes verified against initial acquisition logs",
          "Partition layout and Master File Table (MFT) structures identified for extraction",
        ],
      },
      {
        id: "phase-2",
        step: "Phase 02",
        title: "Network PCAP Packet Analysis",
        tools: ["Wireshark", "NetworkMiner"],
        description:
          "Inspection of captured network packet streams (.pcap) to trace communication endpoints, protocols, and data transfer during the incident window.",
        findings: [
          "Protocol hierarchy and IP conversation streams inspected in Wireshark",
          "NetworkMiner used to reconstruct transmitted artifact files, images, and session credentials",
          "Outbound connection timestamps mapped against host system event logs",
        ],
      },
      {
        id: "phase-3",
        step: "Phase 03",
        title: "File Carving & Artifact Recovery",
        tools: ["Autopsy", "AperiSolve", "ExifTool"],
        description:
          "Automated and manual file carving across unallocated clusters to recover deleted evidence, hidden media, and metadata.",
        findings: [
          "Autopsy ingest modules configured for deleted file recovery and keyword indexing",
          "Steganographic inspection with AperiSolve to check suspect image containers",
          "ExifTool metadata extraction documenting creation, modification, and access timestamps",
        ],
      },
      {
        id: "phase-4",
        step: "Phase 04",
        title: "Timeline & Evidence Reconstruction",
        tools: ["Autopsy Timeline", "MFT Analysis"],
        description:
          "Synthesizing disk artifacts, communication logs, and file system timestamps into a chronological timeline for the final examination report.",
        findings: [
          "Merged host event timestamps, email records, and network logs into a unified timeline",
          "Corroborated file access sequences with user activity records",
          "Structured investigative findings into the final academic examination report",
        ],
      },
    ],
  },

  {
    id: "project-002",
    slug: "portfolio-website",
    title: "Blender 3D Modeling & Environment Design",
    tagline: "Showcasing 3D environments, assets, and modeling workflows.",
    description:
      "A curated showcase of 3D models and environments crafted in Blender. Explores hard-surface modeling, node-based shaders, lighting setups, and game-ready asset creation.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/blender/blender.png",
    images: [
      "/images/projects/blender/blender1.png",
      "/images/projects/blender/blender2.png",
      "/images/projects/blender/blender3.png",
      "/images/projects/blender/blender4.png",
    ],
    tags: ["Blender 3D"],
    technologies: [{ name: "Blender 3D", color: "#F58025" }],
    links: {
      github: "",
      live: "https://drive.google.com/drive/u/1/folders/1SMH9Jf2xUZEZnuLrwXKttS7JBjAfHoaz",
      case_study: "",
      game: "",
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
    order: 3,

    // Data-driven presentation metadata
    presentation: "visual",
    tier: "tier-2",
    tierLabel: "3D Environments & Props",
    category: "3D Design & Modeling",
    visualStudies: [
      {
        id: "blender-1",
        title: "Japanese Torii Gate & Mountain Landscape",
        subtitle: "Blender 4.5.3 LTS Viewport",
        category: "Environment & Scene Assembly",
        src: "/images/projects/blender/blender1.png",
        aspectRatio: "16 / 9",
        notes:
          "Full environment layout constructed in Blender 4.5.3 LTS featuring a traditional red Japanese Torii shrine gate, sculpted mountain backdrop, foliage clusters, and a stylized character standing on stone steps.",
        details: {
          goal: "Constructing an atmospheric exterior environment combining hard-surface architecture with organic terrain.",
          composition: "Camera frustum framing with Torii gate centrally aligned, flanked by bare branch trees, tall pines, and snow-capped peaks.",
          lightingAndShading: "Dual directional sun lamps ('Sun' and 'Sun.001') combined with atmospheric moon rim lighting for contrasting highlights.",
          techniques: [
            "Outliner organization across 6 dedicated scene collections",
            "Principled BSDF material setup ('Material.029') with custom roughness and color parameters",
            "Roundcube and subdivided geometry for natural rock foundations",
          ],
        },
      },
      {
        id: "blender-2",
        title: "Procedural Shading & Node Tree Network",
        subtitle: "Shader Editor Graph Overview",
        category: "Material & Node Shading",
        src: "/images/projects/blender/blender2.png",
        aspectRatio: "16 / 9",
        notes:
          "Multi-material node graph inspection displaying procedural texture blending, vector mapping, color ramps, and Principled BSDF setups configured for foliage, bark, and environment assets.",
        details: {
          goal: "Developing non-destructive procedural surface textures without relying on static external image maps.",
          composition: "Quad-split inspection displaying specialized graphs for Material.036 (trees), Material.029, Material.035, and Material.037.",
          lightingAndShading: "ColorRamp interpolation coupled with Vector Mapping coordinate inputs feeding Principled BSDF surface channels.",
          techniques: [
            "Procedural noise and texture coordinate mapping",
            "Multi-channel roughness, specular, and base color routing",
            "World background node and color distribution tuning",
          ],
        },
      },
      {
        id: "blender-3",
        title: "Black Hole & Accretion Disk",
        subtitle: "Cosmic Phenomenon Render",
        category: "Volumetric & Gravitational Lensing",
        src: "/images/projects/blender/blender3.png",
        aspectRatio: "16 / 9",
        notes:
          "Cinematic high-contrast simulation of an interstellar black hole inspired by Gargantua, featuring extreme relativistic gravitational lensing and a glowing accretion disk wrapping over the event horizon.",
        details: {
          goal: "Simulating gravitational light bending and turbulent plasma rotation around a central singularity.",
          composition: "Diagonal orbital axis with photon sphere circular boundary and distorted rear accretion disk visible above and below.",
          lightingAndShading: "High-energy emissive gradients with dense particle-like procedural dust textures and shadow contrast.",
          techniques: [
            "Radial texture coordinates distorted around spherical singularity",
            "High dynamic range emissive plasma gradient with fine striation details",
            "Pure black event horizon void with stark relativistic rim highlighting",
          ],
        },
      },
      {
        id: "blender-4",
        title: "Stylized Character Armature & Rigging",
        subtitle: "Pose Mode & Bone Hierarchy",
        category: "Character Modeling & Rigging",
        src: "/images/projects/blender/blender4.png",
        aspectRatio: "16 / 9",
        notes:
          "Character modeling and skeletal rigging inspection of the stylized crewmate figure in Blender Pose Mode, showing the octahedral bone structure controlling the body, visor, and legs.",
        details: {
          goal: "Rigging a low-poly stylized character with an internal skeletal system ready for keyframe animation.",
          composition: "Front-perspective view highlighting the root bone, spine chain, leg bones, and visor control bone.",
          lightingAndShading: "Smooth red glossy surface with dual-tone curved cyan visor shader and subtle rim reflection.",
          techniques: [
            "Octahedral armature bone chain weighted to mesh geometry",
            "Timeline keyframing workflow configured for walk and idle loops",
            "Subdivision-surface modeling with soft organic beveling",
          ],
        },
      },
    ],
  },

  {
    id: "project-003",
    slug: "portfolio-website",
    title: "Warung Ordering App",
    tagline: "Modernizing the traditional local eatery experience by bridging authentic culinary flavors with seamless digital ordering.",
    description:
      "A native Android application built in Android Studio using Java, XML, and Cloud Firestore to digitalize the local warung ordering experience. Inspect the actual IDE development environment, item customization interface, and real database order documents below.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/warung/warung.png",
    images: [
      "/images/projects/warung/warung1.png",
      "/images/projects/warung/warung2.png",
      "/images/projects/warung/warung3.png",
    ],
    tags: ["Android Studio", "Java", "Cloud Firestore"],
    technologies: [
      { name: "Android Studio", color: "#F58025" },
      { name: "Java", color: "#3178C6" },
      { name: "Cloud Firestore", color: "#FFA611" },
    ],
    links: {
      github: "https://github.com/danjul-gx/Warung-FinalProject",
      live: "",
      case_study: "",
      game: "",
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
    order: 4,

    // Data-driven presentation metadata
    presentation: "flow",
    tier: "tier-2",
    tierLabel: "Native Android & Firestore",
    category: "Mobile Application",
    flowSteps: [
      {
        id: "catalog",
        stepNumber: "01",
        name: "Menu Catalog & Item Details",
        role: "Android Studio & Emulator View",
        src: "/images/projects/warung/warung1.png",
        aspectRatio: "16 / 9",
        description:
          "Android Studio IDE showing the PaymentActivity Java implementation alongside the running Medium Phone emulator displaying the warung food catalog (Nasi Goreng, Mie Sambal Matah).",
        technicalHighlights: [
          "Custom XML layout with bottom navigation (Home, Cart, Profile)",
          "Dynamic food catalog presentation with price calculations and cart add buttons",
          "PaymentActivity.java handling order submission logic in Android Studio",
        ],
      },
      {
        id: "customization",
        stepNumber: "02",
        name: "Item Customization & Spicy Level",
        role: "Order Options Screen",
        src: "/images/projects/warung/warung2.png",
        aspectRatio: "16 / 9",
        description:
          "Detailed dish order screen (Mie Goreng Sambal Matah) with spicy level selection (Tidak Pedas, Sedang, Pedas), optional customer notes input, quantity counter, and Add button.",
        technicalHighlights: [
          "RadioGroup logic binding spicy preference state to the item payload",
          "Quantity increment/decrement controls with dynamic total calculation",
          "EditText customer notes passed to the cart data structure",
        ],
      },
      {
        id: "backend",
        stepNumber: "03",
        name: "Cloud Firestore Database Orders",
        role: "Database State View",
        src: "/images/projects/warung/warung3.png",
        aspectRatio: "16 / 10",
        description:
          "Firebase Cloud Firestore console showing the actual live stored 'orders' collection with order payload: item details, pricing, status ('Sedang Diantar'), timestamp, and user ID.",
        technicalHighlights: [
          "Cloud Firestore NoSQL document structure with nested menu map objects",
          "Live order status tracking ('Sedang Diantar') and total price summation",
          "User ID and email mapping connecting authenticated customer to order history",
        ],
      },
    ],
  },

  {
    id: "project-005",
    slug: "portfolio-website",
    title: "Trust Your Friends & Project HUE",
    tagline: "Two fun survival games featuring a 2-player IoT bomb defusal puzzle and a 3D action shooter.",
    description:
      "Two distinct games developed and exhibited for the Economic Survival Exhibition 2025 at Living Plaza Jababeka, earning 2nd Place in the Best Software Category.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/game/game1.png",
    images: [
      "/images/projects/game/game.png",
      "/images/projects/game/game1.png",
      "/images/projects/game/game2.png",
    ],
    tags: ["Game Development", "IoT", "Web Development"],
    technologies: [
      { name: "Unity", color: "#FFFFFF" },
      { name: "C#", color: "#239120" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "IoT Hardware", color: "#00979C" },
      { name: "HTML/CSS", color: "#E34F26" },
    ],
    links: {
      github: "",
      live: "",
      case_study: "",
      game: "",
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
    order: 5,

    // Data-driven presentation metadata
    presentation: "exhibition",
    tier: "tier-2",
    tierLabel: "Exhibition Showcase",
    category: "Game & Physical Computing",
  },

  {
    id: "project-004",
    slug: "portfolio-website",
    title: "PharmaTrack",
    tagline: "Online clinic order & click-and-collect prescription management system.",
    description:
      "A web-based healthcare e-commerce and clinic management application designed to eliminate pharmacy wait queues. Patients browse medicine stock, make digital payments, and select in-clinic pickup or delivery.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/pt/pt.png",
    images: [
      "/images/projects/pt/pt.png",
      "/images/projects/pt/pt3.png",
      "/images/projects/pt/pt2.png",
      "/images/projects/pt/pt1.png",
    ],
    tags: ["Web Development", "JavaScript", "Vercel"],
    technologies: [
      { name: "JavaScript", color: "#F58025" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "Vercel", color: "#000000" },
    ],
    links: {
      github: "https://github.com/danjul-gx/PharmaTrack",
      live: "https://se-group5.vercel.app/",
      case_study: "",
      game: "",
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
    order: 6,

    // Data-driven presentation metadata
    presentation: "light",
    tier: "tier-3",
    tierLabel: "Coursework Highlight",
    contextLabel: "Software Engineering Group Project · Live Deployment",
    category: "Web Application",
    highlights: [
      "Digital medicine catalog with categorized inventory display",
      "Prescription ordering simulation with clinic pickup option",
      "Collaborative software engineering coursework project deployed to Vercel",
    ],
  },

  {
    id: "project-006",
    slug: "portfolio-website",
    title: "Capture the Flag (CTF) Examination",
    tagline: "Hands-on cybersecurity challenges for the university final exam.",
    description:
      "Practical CTF examination completed as part of university coursework. Addressed multidisciplinary challenges spanning image steganography, HTTP web interception, and cryptographic encoding to recover hidden system flags.",
    status: "completed",
    featured: true,
    thumbnail: "/images/projects/ctf/ctf.png",
    images: ["/images/projects/ctf/ctf.png"],
    tags: ["Cybersecurity", "CTF", "Problem Solving"],
    technologies: [
      { name: "Kali Linux", color: "#FCC624" },
      { name: "AperiSolve", color: "#1679A7" },
      { name: "Burp Suite", color: "#FF6633" },
      { name: "Cryptography", color: "#4CAF50" },
      { name: "Base64", color: "#E34F26" },
      { name: "Bash / CLI", color: "#E34F26" },
      { name: "WSL", color: "#E34F26" },
      { name: "CyberChef", color: "#E34F26" },
    ],
    links: {
      github: "",
      live: "https://www.pdffiller.com/s/NLJAK8SwT",
      case_study: "",
      game: "",
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
    order: 7,

    // Data-driven presentation metadata
    presentation: "light",
    tier: "tier-3",
    tierLabel: "Cybersecurity Exam",
    contextLabel: "University Final Exam · Cybersecurity Coursework",
    category: "Security Examination",
    highlights: [
      "Steganographic analysis extracting hidden strings from image files using AperiSolve",
      "Web request inspection and parameter manipulation via Burp Suite",
      "Cryptographic cipher translation and multi-layer Base64 decoding in CyberChef",
    ],
  },
];
