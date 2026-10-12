"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  caption?: string;
}

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export default function PhotoLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: PhotoLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  const currentImage = images[currentIndex] || images[0];
  const hasMultiple = images.length > 1;

  // Track the element that triggered open for focus restoration
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else if (triggerElementRef.current) {
      triggerElementRef.current.focus();
      triggerElementRef.current = null;
    }
  }, [isOpen]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    if (!hasMultiple) return;
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  }, [currentIndex, hasMultiple, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (!hasMultiple) return;
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, hasMultiple, images.length, onNavigate]);

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <motion.div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.title || "Exhibition image inspection"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xs"
    >
      {/* Lightbox Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-paper rounded-xs border border-paper-rule shadow-2xl overflow-hidden"
      >
        {/* Top Bar: Title & Controls */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-paper-rule bg-paper-warm">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-editorial font-semibold shrink-0">
              Inspection
            </span>
            {hasMultiple && (
              <span className="font-mono text-xs text-ink-muted shrink-0">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <h3 className="text-sm font-medium text-ink truncate">
              {currentImage.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image inspection"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-xs text-ink-secondary hover:text-ink hover:bg-paper-muted focus-visible:outline-2 focus-visible:outline-accent-editorial transition-colors"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Center: Image Display */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] max-h-[620px] min-h-[280px] p-2 sm:p-4 bg-paper flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1024px) 95vw, 1024px"
              className="object-contain"
              priority
            />
          </div>

          {/* Previous / Next buttons when multiple images */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-xs bg-paper/90 border border-paper-rule text-ink hover:bg-paper-warm hover:text-ink focus-visible:outline-2 focus-visible:outline-accent-editorial transition-colors shadow-xs"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-xs bg-paper/90 border border-paper-rule text-ink hover:bg-paper-warm hover:text-ink focus-visible:outline-2 focus-visible:outline-accent-editorial transition-colors shadow-xs"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Bar: Caption / Details */}
        {currentImage.caption && (
          <div className="px-4 py-2.5 border-t border-paper-rule bg-paper-warm text-xs text-ink-secondary font-mono">
            {currentImage.caption}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
