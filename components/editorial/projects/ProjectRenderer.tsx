import type { ComponentType } from "react";
import type { Project, ProjectPresentation } from "@/types";

import RobloxWorkbench from "./RobloxWorkbench";
import ForensicsWorkbench from "./ForensicsWorkbench";
import BlenderInspector from "./BlenderInspector";
import WarungShowcase from "./WarungShowcase";
import HueSchematic from "./HueSchematic";
import LightProjectCard from "./LightProjectCard";

export interface ProjectRendererProps {
  project: Project;
}

/**
 * Type-safe registry mapping project presentation identifiers
 * to their respective reusable template components.
 */
export const PRESENTATION_REGISTRY: Record<
  ProjectPresentation,
  ComponentType<ProjectRendererProps>
> = {
  workbench: RobloxWorkbench,
  investigation: ForensicsWorkbench,
  visual: BlenderInspector,
  flow: WarungShowcase,
  exhibition: HueSchematic,
  light: LightProjectCard,
};

interface ProjectRendererComponentProps {
  project: Project;
}

/**
 * Dynamic project renderer: Resolves template from the project's
 * `presentation` metadata, with fallback to `LightProjectCard`.
 */
export default function ProjectRenderer({ project }: ProjectRendererComponentProps) {
  const presentationType = project.presentation || "light";
  const Component = PRESENTATION_REGISTRY[presentationType] || LightProjectCard;

  return <Component project={project} />;
}
