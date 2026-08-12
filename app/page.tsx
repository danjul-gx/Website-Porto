import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/react-bits/sections/home/HeroSection";
import LiquidEther from "@/components/LiquidEther";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      
      {/* Liquid background */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          colors={[
            "#5227FF",
            "#FF9FFC",
            "#B497CF",
          ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <Navbar />

      <PageWrapper className="min-h-dvh flex flex-col justify-between overflow-hidden">
        <main
          id="main-content"
          className="flex-1 flex flex-col justify-center"
        >
          <HeroSection />
        </main>

        <Footer />
      </PageWrapper>

    </main>
  );
}