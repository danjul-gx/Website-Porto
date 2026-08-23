import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import { siteConfig } from "@/data/site";

export default function AboutSnippet() {
  return (
    <Section className="border-t border-white/[0.06]">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent-light)" }}>
            About
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-3 mb-5 text-white"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Crafting experiences, not just interfaces.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            I&apos;m a frontend developer passionate about building beautiful,
            performant, and accessible web experiences. I specialize in React
            and Next.js, and I care deeply about design quality and developer
            experience.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:gap-3 duration-200"
            style={{ color: "var(--color-accent-light)" }}
          >
            More about me <ArrowRight size={15} />
          </Link>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Total Projects", value: "7" },
              { label: "Certificates", value: "4" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 border border-white/[0.07]"
                style={{ background: "var(--color-bg-surface)" }}
              >
                <p
                  className="text-3xl font-bold text-gradient-accent"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </StaggerContainer>
    </Section>
  );
}
