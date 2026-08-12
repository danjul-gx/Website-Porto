import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import CertificatesFilter from "@/components/react-bits/sections/certificates/CertificatesFilter";
import CertificatesGrid from "@/components/react-bits/sections/certificates/CertificatesGrid";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Professional certifications and credentials I've earned across cloud, frontend, and development.",
};

export default function CertificatesPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main id="main-content" className="pt-16">
          <Section>
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl font-bold font-display text-gradient-hero mb-4">
                Certificates
              </h1>
              <p className="text-zinc-400 max-w-xl text-lg">
                Credentials and certifications I&apos;ve earned along the way.
              </p>
            </FadeIn>
            <CertificatesFilter />
            <CertificatesGrid />
          </Section>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
