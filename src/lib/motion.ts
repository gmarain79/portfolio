import type { Variants } from 'motion/react';

export const EASE_SETTLE = [0.16, 1, 0.3, 1] as const;

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_SETTLE,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const viewportReveal = {
  once: true,
  amount: 0.15,
} as const;
