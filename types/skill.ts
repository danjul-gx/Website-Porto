export type SkillCategory =
  | "language"
  | "framework"
  | "tool"
  | "database"
  | "cloud"
  | "design"
  | "soft-skill";

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  category: SkillCategory;
  proficiency: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience?: number;
  featured: boolean;
}
