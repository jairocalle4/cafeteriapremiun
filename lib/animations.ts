import { Variants } from "framer-motion";

// Simple Fade In transition
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none', duration = 0.6, delay = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Cubic-bezier for premium smoothness
      },
    },
  };
};

// Slide up animation with a slight rotation for editorial feel
export const slideUp: Variants = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // EaseOutExpo
    },
  },
};

// Container staggering variants
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0): Variants => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Scale In animation
export const scaleIn = (duration = 0.5, delay = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Blur reveal animation (highly popular in Awwwards websites)
export const blurReveal = (duration = 0.8, delay = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };
};

// Word / Letter Reveal stagger parent and child
export const charRevealParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export const charRevealChild: Variants = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.215, 0.61, 0.355, 1], duration: 0.5 },
  },
};

// Premium card hover animations (for use on framer-motion items)
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
