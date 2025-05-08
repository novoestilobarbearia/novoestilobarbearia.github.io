/**
 * Animation utility functions for enhancing UI interactions
 */

// Fade in animation style
export const fadeIn = (delay: number = 0): string => {
  return `animate-[fadeIn_0.6s_ease-in-out_${delay}s]`;
};

// Slide up animation style
export const slideUp = (delay: number = 0): string => {
  return `animate-[slideUp_0.5s_ease-out_${delay}s]`;
};

// Pulse animation for buttons
export const pulsate = (): string => {
  return "animate-[pulsate_2s_ease-in-out_infinite]";
};

// Scale animation for hover effects
export const scaleOnHover = (): string => {
  return "transition-transform duration-300 hover:scale-105";
};

// Custom animation definitions for Tailwind
export const customAnimations = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes pulsate {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

export default {
  fadeIn,
  slideUp,
  pulsate,
  scaleOnHover,
  customAnimations
};