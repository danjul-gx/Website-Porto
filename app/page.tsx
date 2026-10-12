import type { Metadata } from "next";

import EditorialNavbar from "@/components/editorial/EditorialNavbar";
import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHero from "@/components/editorial/EditorialHero";
import ProjectsStream from "@/components/editorial/projects/ProjectsStream";
import FieldworkArchive from "@/components/editorial/fieldwork/FieldworkArchive";
import TechnicalIndex from "@/components/editorial/TechnicalIndex";
import ContactDispatch from "@/components/editorial/ContactDispatch";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "Personal portfolio of Zuldan Fahrizal Rahman, an informatics student at President University building software, games, 3D assets, IoT projects, and digital forensics investigations.",
};

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-paper">
      <EditorialNavbar />

      <EditorialHero />

      {/* Section: Selected Work */}
      <section
        id="work"
        className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-paper-rule"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
              Selected Work · 2024–2025
            </span>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight mt-1 mb-2">
              Projects & Technical Investigations
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg max-w-2xl">
              Real projects built across coursework, independent experiments, and university exhibitions.
              Explore interactive workbenches, visual models, and investigation timelines below.
            </p>
          </div>

          <ProjectsStream />
        </div>
      </section>

      {/* Section: Campus & Fieldwork */}
      <section
        id="fieldwork"
        className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-paper-rule bg-paper-warm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
              Field Records · 2025
            </span>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight mt-1 mb-2">
              Campus & Fieldwork Archive
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg max-w-2xl">
              Documented organizational work, corporate visits, institutional outreach, and community
              social initiatives through PUMA Informatics and President University.
            </p>
          </div>

          <FieldworkArchive />
        </div>
      </section>

      {/* Section: Technical Index */}
      <TechnicalIndex />

      {/* Section: Contact Dispatch */}
      <ContactDispatch />

      <EditorialFooter />
    </main>
  );
}