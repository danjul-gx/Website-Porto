"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import GlareHover from "@/components/react-bits/GlareHover";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/types";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  if (!month) return dateStr;
  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function CertificatesGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCertTitle, setSelectedCertTitle] = useState<string>("");

  const handleOpenModal = (cert: Certificate) => {
    setSelectedImage(cert.image);
    setSelectedCertTitle(cert.title);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedCertTitle("");
  }, []);

  // Menutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, handleCloseModal]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => {
          const dateFormatted = formatDate(cert.issueDate);
          return (
            <div
              key={`${cert.id}-${index}`}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-lg group"
            >
              {/* Image Container with GlareHover */}
              <div className="mb-4 overflow-hidden rounded-xl">
                <GlareHover
                  width="100%"
                  height="210px"
                  borderRadius="12px"
                  borderColor="transparent"
                  glareColor="#ffffff"
                  glareOpacity={0.25}
                  onClick={() => handleOpenModal(cert)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </GlareHover>
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 font-medium">
                    {cert.issuer} {dateFormatted ? `• ${dateFormatted}` : ""}
                  </p>
                </div>

                {cert.credentialUrl && (
                  <div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:underline gap-1 transition-colors"
                    >
                      View Credential <ExternalLink size={14} className="ml-0.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md cursor-pointer"
          >
            {/* Close Button at Top-Right */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700/80 transition-colors z-10"
              aria-label="Close Preview"
            >
              <X size={24} />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl p-2 sm:p-4 flex flex-col items-center cursor-default"
            >
              <div className="relative w-full h-[60vh] max-h-[700px]">
                <Image
                  src={selectedImage}
                  alt={selectedCertTitle || "Certificate Preview"}
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>

              {selectedCertTitle && (
                <div className="mt-3 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-zinc-200">
                    {selectedCertTitle}
                  </h4>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}