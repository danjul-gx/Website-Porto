import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date menjadi format yang lebih readable.
 *
 * Contoh:
 * "2025-01-15" -> "Jan 2025"
 */
export function formatDate(date: string): string {
  if (!date || date === "present") {
    return "Present";
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

/**
 * Menghitung durasi experience.
 *
 * Contoh:
 * "2024-01-01" -> "2025-06-01" = "1 yr 5 mos"
 * "2025-01-01" -> "present" = "1 yr 7 mos" (tergantung tanggal sekarang)
 */
export function getDuration(
  startDate: string,
  endDate: string
): string {
  if (!startDate) {
    return "";
  }

  const start = new Date(`${startDate}T00:00:00`);

  if (Number.isNaN(start.getTime())) {
    return "";
  }

  const end =
    endDate === "present"
      ? new Date()
      : new Date(`${endDate}T00:00:00`);

  if (Number.isNaN(end.getTime())) {
    return "";
  }

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Kalau tanggal akhir belum mencapai tanggal mulai,
  // kurangi 1 bulan agar hasil lebih akurat.
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  months = Math.max(months, 0);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (remainingMonths > 0) {
    parts.push(
      `${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"
      }`
    );
  }

  if (parts.length === 0) {
    return "Less than a month";
  }

  return parts.join(" ");
}