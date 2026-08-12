import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { id: "sk-ts", name: "TypeScript", category: "language", proficiency: 5, featured: true },
  { id: "sk-js", name: "JavaScript", category: "language", proficiency: 5, featured: true },
  { id: "sk-py", name: "Python", category: "language", proficiency: 3, featured: false },

  // Frameworks
  { id: "sk-next", name: "Next.js", category: "framework", proficiency: 5, featured: true },
  { id: "sk-react", name: "React", category: "framework", proficiency: 5, featured: true },
  { id: "sk-tailwind", name: "Tailwind CSS", category: "framework", proficiency: 5, featured: true },
  { id: "sk-framer", name: "Framer Motion", category: "framework", proficiency: 4, featured: false },

  // Tools
  { id: "sk-git", name: "Git", category: "tool", proficiency: 4, featured: false },
  { id: "sk-figma", name: "Figma", category: "design", proficiency: 3, featured: false },

  // Databases
  { id: "sk-postgres", name: "PostgreSQL", category: "database", proficiency: 3, featured: false },
];
