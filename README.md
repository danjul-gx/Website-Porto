This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## How to Add a New Project

The portfolio's project presentation system is data-driven. Normal projects do not require creating any new `.tsx` components.

### 1. Add Project Assets
Place your project media under:
```
public/images/projects/<project-id>/
```

### 2. Register Project Data
Add a new typed entry to [`data/projects.ts`](file:///data/projects.ts):

```typescript
{
  id: "my-project",
  slug: "portfolio-website",
  title: "My Project",
  tagline: "Brief editorial tagline...",
  description: "Detailed description of the project...",
  status: "completed",
  featured: true,
  thumbnail: "/images/projects/my-project/preview.png",
  images: ["/images/projects/my-project/preview.png"],
  tags: ["Web Development", "TypeScript"],
  technologies: [
    { name: "TypeScript", color: "#3178C6" },
    { name: "Next.js", color: "#000000" },
  ],
  links: {
    github: "https://github.com/...",
    live: "https://...",
  },
  events: [],
  startDate: "2026-08-01",
  order: 8,

  // Presentation metadata
  presentation: "light", // "light" | "visual" | "flow" | "workbench" | "investigation" | "exhibition"
  tier: "tier-3",        // "tier-1" | "tier-2" | "tier-3"
  tierLabel: "Coursework Highlight",
  category: "Web Application",
  highlights: [
    "Key engineering highlight or feature",
    "Verified deployment architecture",
  ],
}
```

### 3. Choose a Presentation Template
Pick from the existing registered presentation templates:
- `"light"`: Clean editorial card with metadata, metric tags, and links (Tier 3 default).
- `"visual"`: Interactive asset/study inspector with split preview, tag filters, and asset metrics (e.g. 3D models, creative assets).
- `"flow"`: Multi-step process or application lifecycle flow with responsive frame showcases.
- `"workbench"`: Multi-stage progressive engineering workbench with stage navigation, telemetry, and architecture details.
- `"investigation"`: Forensic or case-study format with investigative phases, methodology, and evidence galleries.
- `"exhibition"`: Interactive installation or hardware schematic with component breakdowns and lightbox media.

### 4. When is a New `.tsx` Component Needed?
Only create a new presentation component if a future project genuinely requires a fundamentally new interaction pattern that none of the 6 templates above can support. If needed, create the component under `components/editorial/projects/` and register it in `PRESENTATION_REGISTRY` in [`components/editorial/projects/ProjectRenderer.tsx`](file:///components/editorial/projects/ProjectRenderer.tsx).
