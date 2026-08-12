import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "cert-001",
    title: "Sample Certificate",
    issuer: "Issuing Organization",
    issuerLogo: "/images/logos/issuer-logo.svg",
    category: "frontend",
    issueDate: "2025-06",
    credentialId: "CERT-12345",
    credentialUrl: "https://example.com/verify/12345",
    image: "/images/certificates/cert-001.webp",
    skills: ["React", "TypeScript", "Next.js"],
    featured: true,
    order: 1,
  },
];
