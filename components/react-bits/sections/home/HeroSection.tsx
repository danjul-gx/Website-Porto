"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Instagram, Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import HeroBackground from "@/components/backgrounds/HeroBackground";
import { SplitText, RotatingText, MagneticButton, StarBorder, TiltedCard } from "@/components/react-bits";
import { siteConfig } from "@/data/site";
import { RESUME_URL } from "@/lib/constants";

export default function HeroSection() {
  const roles = [
    "Web Development",
    "3D Modeler",
    "Android Development",
  ];

  return (
    <Section
      className="min-h-[92dvh] flex items-center relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16"
      as="div"
    >
      {/* Isolated Animated Background */}
      <HeroBackground />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column — Core Content & CTAs (col-span-7) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Availability Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]" />
              </span>
              {siteConfig.location} · Available for hire
            </span>
          </motion.div>

          {/* Name & Headline with React Bits SplitText */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4 font-display"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            <span className="text-zinc-400 block text-2xl sm:text-3xl font-medium mb-1">
              Hello, I&apos;m
            </span>
            <SplitText
              text={siteConfig.name}
              className="text-gradient-hero"
              delay={0.1}
              staggerDuration={0.04}
            />
          </motion.h1>

          {/* Rotating Role Title */}
          <motion.div variants={fadeInUp} className="text-lg sm:text-2xl lg:text-3xl font-semibold text-zinc-300 mb-6 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Specializing as a</span>
            <RotatingText
              texts={roles}
              interval={2800}
              className="text-gradient-accent font-bold"
            />
          </motion.div>

          {/* Short Introduction */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <MagneticButton strength={0.2}>
              <Link href="/projects" id="hero-view-projects">
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="glow-accent"
                >
                  View Projects
                </Button>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a href={RESUME_URL} download id="hero-download-resume">
                <Button size="lg" variant="secondary" icon={Download}>
                  Download Resume
                </Button>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links & Quick Stack */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-6 pt-6 border-t border-white/[0.08] w-full max-w-md"
          >
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>

            <div className="h-4 w-[1px] bg-white/[0.1]" />

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs py-1">
                Next.js 15
              </Badge>
              <Badge variant="outline" className="text-xs py-1">
                TypeScript
              </Badge>
              <Badge variant="outline" className="text-xs py-1">
                Tailwind
              </Badge>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Premium Profile Showcase Visual (col-span-5) */}
        {/* Right Column — Premium Profile Showcase Visual */}
        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-none"
        >
          <TiltedCard
            maxTilt={8}
            scaleOnHover={1.02}
            glareEnable
            className="w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[460px]"
          >
            <div
              className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden h-[320px] sm:h-[420px] lg:h-[550px]"
              style={{
                border: "2px solid rgba(139,92,246,0.45)",
                boxShadow: "0 0 40px rgba(139,92,246,0.2)",
              }}
            >
              {/* Developer Badge */}
              <div className="absolute top-5 right-5 z-20">
                <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
                  <span className="text-xs font-semibold tracking-[0.15em] text-white">
                    DEVELOPER
                  </span>
                </div>
              </div>

              {/* Image */}
              <Image
                src="/images/profile/zuldan.png"
                alt="Zuldan Fahrizal Rahman"
                fill
                priority
                draggable={false}
                sizes="(max-width:768px) 100vw, 460px"
                style={{
                  objectFit: "cover",

                  // Geser foto ke atas
                  objectPosition: "center 100%",

                  // Zoom biar badan lebih dominan
                  transform: "scale(1.12)",

                  // Biar zoom tetap dari tengah atas
                  transformOrigin: "center top",
                }}
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.25), transparent 30%)",
                }}
              />
            </div>
          </TiltedCard>
        </motion.div>
      </div>
    </Section>
  );
}
