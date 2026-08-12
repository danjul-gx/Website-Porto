export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  social: SocialLinks;
  resumeUrl: string;
  ogImage: string;
}
