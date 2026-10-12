"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

type ContactIntentId = "internship" | "collaboration" | "project" | "hello";

interface ContactIntent {
  id: ContactIntentId;
  label: string;
  badge: string;
  prompt: string;
  subjectTemplate: string;
  bodyTemplate: string;
}

const CONTACT_INTENTS: ContactIntent[] = [
  {
    id: "internship",
    label: "Internship / Opportunity",
    badge: "Student Career",
    prompt:
      "Interested in discussing an internship, junior position, or technical opportunity in software, systems, or digital forensics.",
    subjectTemplate: "Inquiry: Internship / Opportunity for Zuldan Fahrizal Rahman",
    bodyTemplate:
      "Hi Zuldan,\n\nI came across your portfolio and would like to discuss an opportunity with our team regarding...\n\nBest regards,",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    badge: "Projects & Teams",
    prompt:
      "Have a collaborative software project, game development challenge, or student initiative you'd like to build together?",
    subjectTemplate: "Collaboration Proposal: Let's build something together",
    bodyTemplate:
      "Hi Zuldan,\n\nI have an idea for a project involving...\n\nWould you be interested in connecting to discuss details?\n\nCheers,",
  },
  {
    id: "project",
    label: "Project Discussion",
    badge: "Technical Exchange",
    prompt:
      "Want to exchange notes on the Roblox quest logic, digital forensics methodology, Android setup, or 3D Blender workflows?",
    subjectTemplate: "Questions regarding your portfolio projects",
    bodyTemplate:
      "Hi Zuldan,\n\nI saw your work on [Roblox / Forensics / Blender / Warung] and wanted to ask about...\n\nBest,",
  },
  {
    id: "hello",
    label: "Just Saying Hi",
    badge: "Open Message",
    prompt:
      "Always glad to connect with fellow developers, students, researchers, or tech enthusiasts.",
    subjectTemplate: "Saying hello from your portfolio",
    bodyTemplate:
      "Hi Zuldan,\n\nJust dropping by after exploring your portfolio!\n\nBest regards,",
  },
];

export default function ContactDispatch() {
  const [selectedIntentId, setSelectedIntentId] = useState<ContactIntentId>("internship");
  const [copied, setCopied] = useState(false);

  const activeIntent =
    CONTACT_INTENTS.find((intent) => intent.id === selectedIntentId) || CONTACT_INTENTS[0];

  const recipientEmail = siteConfig.email || "";

  // Gmail Web Compose URL with view=cm and fs=1
  const gmailParams = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: recipientEmail,
    su: activeIntent.subjectTemplate,
    body: activeIntent.bodyTemplate,
  });
  const gmailComposeHref = `https://mail.google.com/mail/?${gmailParams.toString()}`;

  // Default system mailto URI fallback
  const mailtoParams = new URLSearchParams({
    subject: activeIntent.subjectTemplate,
    body: activeIntent.bodyTemplate,
  });
  const mailtoHref = recipientEmail
    ? `mailto:${recipientEmail}?${mailtoParams.toString()}`
    : "#";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-paper-rule bg-paper"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Context, Intent Selection & Direct Email Action */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                Direct Dispatch
              </span>
              <h2
                id="contact-heading"
                className="font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight mt-1 mb-3"
              >
                Get in Touch
              </h2>
              <p className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                I&apos;m based in Cikarang and always interested in hearing about internships,
                software collaborations, or technical projects. Select your reason for reaching
                out to prepare a direct email dispatch.
              </p>
            </div>

            {/* Intent Selector Buttons */}
            <div className="p-5 rounded-sm border border-paper-rule bg-paper-warm">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-3">
                Reason for Contact (Select intent)
              </span>

              <div
                role="tablist"
                aria-label="Contact inquiry intent options"
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5"
              >
                {CONTACT_INTENTS.map((intent) => {
                  const isSelected = intent.id === selectedIntentId;
                  return (
                    <button
                      key={intent.id}
                      type="button"
                      role="tab"
                      id={`intent-tab-${intent.id}`}
                      aria-controls={`intent-panel-${intent.id}`}
                      aria-selected={isSelected}
                      tabIndex={0}
                      onClick={() => setSelectedIntentId(intent.id)}
                      className={`text-left p-3 rounded-sm border transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent-editorial ${
                        isSelected
                          ? "border-ink bg-paper text-ink shadow-xs"
                          : "border-paper-rule bg-paper/60 text-ink-secondary hover:text-ink hover:border-paper-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider ${
                            isSelected ? "text-accent-editorial font-bold" : "text-ink-muted"
                          }`}
                        >
                          {intent.badge}
                        </span>
                        {isSelected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-editorial" />
                        )}
                      </div>
                      <div className="font-medium text-sm text-ink">{intent.label}</div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Intent Message & Action Dispatch */}
              <div className="pt-4 border-t border-paper-rule min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIntent.id}
                    id={`intent-panel-${activeIntent.id}`}
                    role="tabpanel"
                    aria-labelledby={`intent-tab-${activeIntent.id}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16 }}
                  >
                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                      {activeIntent.prompt}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {/* Primary Action: Open Gmail Web Compose */}
                      <a
                        href={gmailComposeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-paper bg-ink hover:bg-ink-secondary rounded-sm transition-all duration-150 active:scale-98 shadow-xs"
                      >
                        <Send size={13} aria-hidden="true" />
                        <span>Send Email with Template</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>

                      {/* Action: Copy Email Address */}
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-mono font-medium text-ink bg-paper hover:bg-paper-warm border border-paper-rule rounded-sm transition-all duration-150 active:scale-98"
                      >
                        {copied ? (
                          <>
                            <Check size={13} className="text-accent-editorial" aria-hidden="true" />
                            <span className="text-accent-editorial font-semibold">Copied: {siteConfig.email}</span>
                          </>
                        ) : (
                          <>
                            <Mail size={13} aria-hidden="true" />
                            <span>Copy Email Address</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Secondary Fallback & Contextual Note */}
                    <div className="mt-3.5 pt-3 border-t border-paper-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] font-mono text-ink-muted">
                      <span>Opens Gmail compose (requires active Gmail sign-in).</span>
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-1 text-accent-editorial hover:underline hover:text-ink transition-colors"
                      >
                        <span>Open default email app</span>
                        <ArrowUpRight size={11} aria-hidden="true" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Coordinates & Profile Links */}
          <div className="lg:col-span-5 flex flex-col gap-6 pt-2">
            <div className="p-6 border border-paper-rule bg-paper rounded-sm space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold block">
                Direct Coordinates
              </span>

              <div>
                <span className="text-xs font-mono text-ink-muted block mb-0.5">Primary Email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm font-semibold text-ink hover:text-accent-editorial transition-colors underline decoration-paper-rule underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-ink-muted block mb-0.5">Location</span>
                <span className="text-sm text-ink font-medium">
                  {siteConfig.location}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-ink-muted block mb-0.5">Institution</span>
                <span className="text-sm text-ink-secondary">
                  President University · Faculty of Computer Science
                </span>
              </div>
            </div>

            {/* Verified External Profiles */}
            <div className="p-6 border border-paper-rule bg-paper rounded-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-3">
                Verified Profiles
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-ink hover:text-accent-editorial transition-colors py-1 border-b border-paper-rule"
                  >
                    <span>GitHub: danjul-gx</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-ink hover:text-accent-editorial transition-colors py-1 border-b border-paper-rule"
                  >
                    <span>LinkedIn: Zuldan Fahrizal Rahman</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-ink hover:text-accent-editorial transition-colors py-1"
                  >
                    <span>Instagram: @fxrzall_</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
