import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "omron",
    role: "IT Developer Intern — Quality Assurance DMS",
    company: "PT. Omron Manufacturing Indonesia",
    companyUrl: "https://www.omron.com",
    location: "Indonesia",
    type: "internship",
    startDate: "2025-05",
    endDate: "2025-08",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    highlights: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],

    technologies: [
      "Python",
      "SQL Server",
      "Power BI",
      "Excel",
    ],

    order: 1,

    logo: "/images/logos/omron.png",

    images: [
      "/images/experience/omron-1.jpg",
    ],
  },

  {
    id: "mandiri",
    role: "",
    company: "PT Bank Mandiri Tbk x Rakamin Academy",
    companyUrl: "https://bankmandiri.co.id",
    location: "Indonesia",
    type: "internship",
    startDate: "2026-05",
    endDate: "present",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    highlights: [
      "Developing scalable mobile applications in a simulated banking environment.",
      "Implementing modern mobile development practices and UI/UX workflows.",
      "Collaborating on fintech-focused product development projects.",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Figma",
    ],

    order: 2,

    logo: "/images/logos/mandiri.png",

    images: [
      "/images/certificates/mandiri-certificate.jpg",
    ],
  },
];