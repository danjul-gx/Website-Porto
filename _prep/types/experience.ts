export type ExperienceType =
  | "full-time"
  | "part-time"
  | "freelance"
  | "internship"
  | "contract"
  | "organization";

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  location: string;
  type: ExperienceType;
  startDate: string; // ISO 8601 "YYYY-MM"
  endDate: string | "present";
  division?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  order: number;
  organization?: string;
}
