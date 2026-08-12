import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import ProfileSection from "@/components/react-bits/sections/about/ProfileSection";
import ExperienceTimeline from "@/components/react-bits/sections/about/ExperienceTimeline";
import SkillsGrid from "@/components/react-bits/sections/about/SkillsGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background, experience, and the technologies I work with.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main id="main-content" className="pt-16">
          <ProfileSection />
          <ExperienceTimeline />
          <SkillsGrid />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
