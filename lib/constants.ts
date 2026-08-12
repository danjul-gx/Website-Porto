export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
] as const;

export const RESUME_URL = "/documents/resume.pdf";

export const SOCIAL_LINKS = {
  github: "https://github.com/danjul-gx",
  linkedin: "https://www.linkedin.com/in/zuldan-fahrizal-rahman-8a405a325/",
  instagram: "https://www.instagram.com/fxrzall_/",
} as const;

export const SITE_URL = "https://yourportfolio.com";

export const CERTIFICATE_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "cloud", label: "Cloud" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "ai-ml", label: "AI / ML" },
  { value: "design", label: "Design" },
  { value: "security", label: "Security" },
  { value: "other", label: "Other" },
] as const;

export const PROJECT_STATUSES = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "archived", label: "Archived" },
] as const;
