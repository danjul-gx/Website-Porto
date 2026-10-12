export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Technology {
  name: string;
  icon?: string;
  color?: string;
}

export interface ProjectLink {
  live?: string;
  github?: string;
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

export type ProjectPresentation =
  | "workbench"   // Tier 1: Multi-stage sequential gameplay or quest mechanics
  | "investigation" // Tier 1: Multi-phase forensic examination flow
  | "visual"      // Tier 2: Thumbnail selector with large-format visual study inspector
  | "flow"        // Tier 2: Multi-view mobile / application workflow & IDE inspector
  | "exhibition"  // Tier 2: Dual project showcase / hardware schematic & documentation
  | "light";      // Tier 3: Editorial presentation card with verified links & preview

export type ProjectTier = "tier-1" | "tier-2" | "tier-3";

export interface ProjectStage {
  id: string;
  number: string;
  name: string;
  role: string;
  mechanics: string[];
  image: string;
  imageAlt: string;
}

export interface ProjectPhase {
  id: string;
  step: string;
  title: string;
  tools: string[];
  description: string;
  findings: string[];
}

export interface ProjectVisualStudy {
  id: string;
  title: string;
  subtitle: string;
  category?: string;
  src: string;
  aspectRatio?: string;
  notes: string;
  details?: {
    goal?: string;
    composition?: string;
    lightingAndShading?: string;
    techniques?: string[];
  };
}

export interface ProjectFlowStep {
  id: string;
  stepNumber: string;
  name: string;
  role: string;
  src: string;
  aspectRatio?: string;
  description: string;
  technicalHighlights: string[];
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

  // Editorial Workbench Data-Driven Metadata
  presentation?: ProjectPresentation;
  tier?: ProjectTier;
  tierLabel?: string;
  contextLabel?: string;
  category?: string;
  highlights?: string[];
  stages?: ProjectStage[];
  phases?: ProjectPhase[];
  visualStudies?: ProjectVisualStudy[];
  flowSteps?: ProjectFlowStep[];
}
