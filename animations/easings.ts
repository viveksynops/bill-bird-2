export const revealTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const revealItem = {
  hidden: { y: 36, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: revealTransition },
};
