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
  organization?: string;
  division?: string;
  companyUrl?: string;
  companyLogo?: string;
  location: string;
  type: ExperienceType;
  startDate: string; // ISO 8601 "YYYY-MM" or "YYYY"
  endDate: string | "present";
  description: string;
  highlights: string[];
  responsibilities?: string[];
  technologies: string[];
  order: number;
  attachments?: string[];
  images?: string[];
  logo?: string;
}


