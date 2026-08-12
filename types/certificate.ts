export type CertificateCategory =
  | "cloud"
  | "frontend"
  | "backend"
  | "devops"
  | "ai-ml"
  | "design"
  | "security"
  | "other";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  category: CertificateCategory;
  issueDate: string; // ISO 8601 "YYYY-MM"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  featured: boolean;
  order: number;
}
