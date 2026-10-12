"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, MapPin, Calendar, FileText, Users, ArrowUpRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import PhotoLightbox, { LightboxImage } from "@/components/editorial/PhotoLightbox";

interface FieldworkRecord {
  id: string;
  tag: string;
  title: string;
  organization: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  coreResponsibilities: string[];
  documentationImages: LightboxImage[];
  externalLink?: { label: string; url: string };
}

const FIELDWORK_RECORDS: FieldworkRecord[] = [
  {
    id: "temu-alumni",
    tag: "Record 01 · University Organization",
    title: "Temu Alumni — Informatics Alumni Gathering",
    organization: "PUMA Informatics (President University Major Association)",
    role: "Secretary & Documentation Workflow",
    location: "Campus Auditorium, President University",
    period: "2025",
    summary:
      "Handled official administrative correspondence, event proposals, and archival documentation for the annual Informatics Alumni Gathering. Ensured institutional compliance between student committees and university faculty.",
    coreResponsibilities: [
      "Drafted formal faculty proposals and official event invitation letters for alumni speakers",
      "Organized and archived physical and digital event records ensuring traceability",
      "Recorded meeting minutes during internal evaluations and committee planning sessions",
    ],
    documentationImages: [
      {
        src: "/images/experiences/alumni/2.png",
        alt: "Temu Alumni committee gathering and documentation",
        title: "Temu Alumni — Committee & Alumni Session",
        caption:
          "Campus Auditorium · Informatics Alumni Gathering documentation organized with PUMA Informatics.",
      },
      {
        src: "/images/experiences/alumni/1.png",
        alt: "Temu Alumni presentation and participants",
        title: "Temu Alumni — Stage Presentation & Gathering",
        caption:
          "President University · Alumni sharing session and student interaction records.",
      },
    ],
  },
  {
    id: "cti-group",
    tag: "Record 02 · Corporate Field Visit",
    title: "CTI Group Company Visit",
    organization: "PUMA Informatics",
    role: "Secretary — Liaison & Event Administration",
    location: "CTI Group Tower, Gatot Subroto, Jakarta Selatan",
    period: "2025",
    summary:
      "Managed administrative workflows and formal correspondence between university faculty and corporate partners at PT Computrade Technology International (CTI Group) to secure official site visit approval and participant permits.",
    coreResponsibilities: [
      "Drafted formal partnership correspondence, participant manifests, and faculty permit requests",
      "Maintained organized archives of institutional approvals and corporate visit credentials",
      "Coordinated with student delegates and corporate host representatives during the Jakarta site tour",
    ],
    documentationImages: [
      {
        src: "/images/experiences/comvis/comvis.png",
        alt: "CTI Group visit group photograph in corporate lobby",
        title: "CTI Group Tower — Company Visit Delegation",
        caption:
          "CTI Group Tower, Jakarta · Official site visit delegation with students and company executives.",
      },
      {
        src: "/images/experiences/comvis/comvis1.png",
        alt: "CTI Group presentation and technology briefing",
        title: "CTI Group — Industry Technology Briefing",
        caption:
          "Corporate auditorium · Technology infrastructure briefing and enterprise solutions overview.",
      },
    ],
    externalLink: {
      label: "Computrade Tech Website",
      url: "https://computradetech.com/id/beranda/",
    },
  },
  {
    id: "bssn-outreach",
    tag: "Record 03 · Public Relations & Outreach",
    title: "BSSN Institutional Outreach & Guest Lecture",
    organization: "PUMA Informatics",
    role: "Public Relations — Participant Engagement & Media",
    location: "Badan Siber dan Sandi Negara (BSSN), Sawangan, Depok",
    period: "2025",
    summary:
      "Led digital communications, attendee registration, and live event documentation for a student institutional visit and guest lecture at the National Cyber and Crypto Agency (BSSN).",
    coreResponsibilities: [
      "Designed and published digital promotional materials and registration countdown announcements",
      "Coordinated direct attendee messaging and itinerary broadcast updates via WhatsApp channels",
      "Executed live photo and social media documentation during the institutional tour at BSSN",
    ],
    documentationImages: [
      {
        src: "/images/experiences/guest_lecture/gl1.png",
        alt: "BSSN institutional visit delegation in auditorium",
        title: "BSSN Headquarters — Guest Lecture Delegation",
        caption:
          "BSSN Sawangan, Depok · Student delegation in the main auditorium for national cyber briefing.",
      },
      {
        src: "/images/experiences/guest_lecture/gl.png",
        alt: "BSSN session discussion with instructors",
        title: "BSSN — Cyber Agency Briefing Session",
        caption:
          "Interactive guest lecture session regarding government cybersecurity and crypto infrastructure.",
      },
      {
        src: "/images/experiences/guest_lecture/gl2.png",
        alt: "Group documentation with BSSN officials",
        title: "BSSN — Group Documentation with Officials",
        caption:
          "Commemorative photograph with BSSN institutional speakers and President University faculty delegates.",
      },
    ],
    externalLink: {
      label: "BSSN Official Profile",
      url: "https://www.bssn.go.id/tentang-bssn/",
    },
  },
  {
    id: "oilcycle",
    tag: "Record 04 · Community Social Project",
    title: "OilCycle — Community Used Cooking Oil Recycling",
    organization: "President University Student Social Initiative",
    role: "Project Secretary — Community Outreach & Administration",
    location: "Kelurahan Harapan Jaya, Bekasi Utara, Kota Bekasi",
    period: "2025",
    summary:
      "Community environmental education initiative aimed at educating local households in Bekasi on proper collection and recycling of used cooking oil (minyak jelantah) to prevent domestic water contamination.",
    coreResponsibilities: [
      "Drafted social project proposals and secured official permissions from university faculty",
      "Authored partnership letters and coordinated scheduling with neighborhood community leaders (Ibu RW)",
      "Recorded meeting minutes, scheduled field collection rounds, and archived project documentation",
    ],
    documentationImages: [
      {
        src: "/images/experiences/oil/oil1.jpg",
        alt: "OilCycle workshop with local residents and neighborhood representatives in Bekasi",
        title: "OilCycle — Community Education Workshop",
        caption:
          "Kelurahan Harapan Jaya, Bekasi · Educating neighborhood families on cooking oil collection.",
      },
      {
        src: "/images/experiences/oil/oil.jpg",
        alt: "OilCycle team and local community members holding collection canisters",
        title: "OilCycle — Field Collection & Community Handover",
        caption:
          "Bekasi Utara · Demonstration of safe storage canisters and community handover session.",
      },
    ],
    externalLink: {
      label: "OilCycle Instagram Record",
      url: "https://www.instagram.com/oilcycle_?igsi=MXRnN2tsdTB3ank5ZQ==",
    },
  },
];

export default function FieldworkArchive() {
  // Lightbox state
  const [activeLightboxImages, setActiveLightboxImages] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenLightbox = (images: LightboxImage[], initialIndex: number) => {
    setActiveLightboxImages(images);
    setLightboxIndex(initialIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {FIELDWORK_RECORDS.map((record) => {
        const leadImage = record.documentationImages[0];
        const secondaryImages = record.documentationImages.slice(1);

        return (
          <article
            key={record.id}
            className="border border-paper-rule bg-paper p-6 sm:p-8 lg:p-10 rounded-sm"
          >
            {/* Header / Tag & Meta */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-5 border-b border-paper-rule">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold">
                {record.tag}
              </span>
              <div className="flex items-center gap-4 text-xs font-mono text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} aria-hidden="true" />
                  {record.location.split(",")[0]}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} aria-hidden="true" />
                  {record.period}
                </span>
              </div>
            </div>

            {/* Main Editorial Grid */}
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Documentation Rail */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                {/* Lead Documentary Photo */}
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(record.documentationImages, 0)}
                  className="group relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-video w-full text-left focus-visible:outline-2 focus-visible:outline-accent-editorial shadow-xs"
                >
                  <Image
                    src={leadImage.src}
                    alt={leadImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-paper/95 text-ink rounded-sm shadow-xs">
                      <Maximize2 size={12} aria-hidden="true" />
                      Inspect documentation
                    </span>
                  </div>
                </button>

                {/* Caption beneath lead photo */}
                <div className="flex items-baseline justify-between text-xs font-mono text-ink-muted">
                  <span className="truncate pr-2">{leadImage.title}</span>
                  <span className="shrink-0 text-accent-editorial">
                    {record.documentationImages.length} {record.documentationImages.length > 1 ? "Photos" : "Photo"}
                  </span>
                </div>

                {/* Supporting Thumbnail Rail (if multiple photos) */}
                {secondaryImages.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    {secondaryImages.map((img, idx) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => handleOpenLightbox(record.documentationImages, idx + 1)}
                        className="group relative overflow-hidden rounded-sm border border-paper-rule bg-paper-warm aspect-[16/10] text-left focus-visible:outline-2 focus-visible:outline-accent-editorial"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="220px"
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <div className="absolute bottom-1 right-1 p-1 bg-paper/90 rounded-xs text-ink opacity-70 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={11} aria-hidden="true" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Context, Role & Verified Field Duties */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-ink tracking-tight">
                    {record.title}
                  </h3>

                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                      <Users size={12} className="text-accent-editorial shrink-0" aria-hidden="true" />
                      <span>{record.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-ink">
                      <FileText size={12} className="text-accent-editorial shrink-0" aria-hidden="true" />
                      <span>Role: {record.role}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-ink-secondary leading-relaxed">
                    {record.summary}
                  </p>

                  <div className="mt-5">
                    <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                      Documented Duties & Operations
                    </span>
                    <ul className="space-y-2 text-xs text-ink-secondary leading-relaxed">
                      {record.coreResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-mono text-xs text-accent-editorial select-none">
                            —
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* External link if available */}
                {record.externalLink && (
                  <div className="mt-6 pt-4 border-t border-paper-rule">
                    <a
                      href={record.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-editorial hover:text-ink transition-colors"
                    >
                      {record.externalLink.label}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}

      {/* Shared Lightbox Component */}
      <AnimatePresence>
        {lightboxOpen && (
          <PhotoLightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            images={activeLightboxImages}
            currentIndex={lightboxIndex}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
