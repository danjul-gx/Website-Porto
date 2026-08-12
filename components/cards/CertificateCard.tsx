"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, Calendar, Hash } from "lucide-react";
import { fadeInUp, hoverLift, tapScale } from "@/lib/motion";
import Badge from "@/components/ui/Badge";
import { cn, formatDate } from "@/lib/utils";
import type { Certificate } from "@/types";

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

export default function CertificateCard({
  certificate,
  className,
}: CertificateCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={hoverLift}
      whileTap={tapScale}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-300",
        "border-white/[0.07] hover:border-white/[0.14]",
        "hover:shadow-xl hover:shadow-black/40",
        className
      )}
      style={{ background: "var(--color-bg-surface)" }}
    >
      {/* Certificate Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181F]">
        {certificate.image ? (
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Award size={40} className="text-zinc-700" />
          </div>
        )}

        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && certificate.credentialUrl && (
            <motion.a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
              style={{ background: "rgba(11,11,15,0.7)" }}
              aria-label={`Verify ${certificate.title} credential`}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: "var(--color-accent)" }}
              >
                <ExternalLink size={15} />
                Verify Credential
              </span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-5">
        {/* Issuer + Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-500 font-medium">
            {certificate.issuer}
          </span>
          <Badge variant="accent" className="text-xs capitalize">
            {certificate.category}
          </Badge>
        </div>

        <h3
          className="text-base font-semibold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-200"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {certificate.title}
        </h3>

        {/* Meta */}
        <div className="mt-auto flex flex-col gap-1.5 pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Calendar size={12} />
            <span>Issued {formatDate(certificate.issueDate)}</span>
          </div>
          {certificate.credentialId && (
            <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
              <Hash size={12} />
              <span className="truncate">{certificate.credentialId}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
