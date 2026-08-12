import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 * The primary utility for conditional class composition.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a string into a URL-safe slug.
 * e.g. "My Project Name!" → "my-project-name"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Formats an ISO 8601 date string (YYYY-MM or YYYY-MM-DD) into a human-readable label.
 * e.g. "2024-03" → "Mar 2024"
 */
export function formatDate(dateStr: string): string {
  if (dateStr === "present") return "Present";
  const date = new Date(dateStr + (dateStr.length === 7 ? "-01" : ""));
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/**
 * Returns the duration string between two ISO dates.
 * e.g. ("2023-01", "2024-06") → "1 yr 5 mos"
 */
export function getDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate + "-01");
  const end = endDate === "present" ? new Date() : new Date(endDate + "-01");
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "< 1 mo";
}

/**
 * Checks whether the user prefers reduced motion.
 * Use this in JS contexts; CSS uses @media (prefers-reduced-motion).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
