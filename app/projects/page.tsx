import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import ProjectsFilter from "@/components/react-bits/sections/projects/ProjectsFilter";
import ProjectsGrid from "@/components/react-bits/sections/projects/ProjectsGrid";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've built — from web applications to open-source tools.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main id="main-content" className="pt-16">
          <Section>
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl font-bold font-display text-gradient-hero mb-4">
                Projects
              </h1>
              <p className="text-zinc-400 max-w-xl text-lg">
                Things I&apos;ve built and learned from.
              </p>
            </FadeIn>
            <ProjectsFilter />
            <ProjectsGrid />
          </Section>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
