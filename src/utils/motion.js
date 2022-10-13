export const boxFromLeft = {
  visible: {
    x: 0,
    opacity: 1,
    filter: `blur(0px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    x: -100,
    filter: `blur(2px)`,
    opacity: 0,
  },
};

export const boxFromRight = {
  visible: {
    x: 0,
    opacity: 1,
    filter: `blur(0px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    x: 100,
    filter: `blur(2px)`,
    opacity: 0,
  },
};
