import type { Variants } from "framer-motion";

// ─── Duration Tokens ──────────────────────────────────────────────────────────
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
} as const;

// ─── Easing Tokens ────────────────────────────────────────────────────────────
export const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  spring: { type: "spring", stiffness: 300, damping: 30 },
  bounce: { type: "spring", stiffness: 400, damping: 15 },
  snappy: [0.4, 0, 0.2, 1] as const,
} as const;

// ─── Animation Variants ───────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ─── Page Transition ──────────────────────────────────────────────────────────
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.smooth },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: duration.fast, ease: ease.smooth },
  },
};

// ─── Hover / Tap Presets ──────────────────────────────────────────────────────
export const hoverScale = {
  scale: 1.04,
  transition: { duration: duration.fast, ease: ease.smooth },
};

export const tapScale = {
  scale: 0.97,
};

export const hoverLift = {
  y: -4,
  transition: { duration: duration.fast, ease: ease.smooth },
};

// ─── Viewport Settings ────────────────────────────────────────────────────────
export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;
