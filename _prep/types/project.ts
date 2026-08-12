export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Technology {
  name: string;
  icon?: string;
  color?: string;
}

export interface ProjectLink {
  live?: string;
  github?: string;
  roblox?: string;
  demo?: string;
  case_study?: string;
  game?: string;
}

export type ProjectEventType = "milestone" | "release" | "issue" | "update";

export interface ProjectEvent {
  id: string;
  projectId: string;
  title: string;
  date: string; // ISO 8601
  type: ProjectEventType;
  description: string;
  attachments?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  featured: boolean;
  thumbnail: string;
  images: string[];
  tags: string[];
  technologies: Technology[];
  links: ProjectLink;
  events: ProjectEvent[];
  startDate: string; // ISO 8601
  endDate?: string;
  order: number;
}
