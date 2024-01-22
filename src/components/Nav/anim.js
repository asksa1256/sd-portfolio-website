export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateX: -20,
    translateY: 80,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
