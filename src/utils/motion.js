///////////////////// PROTFOLIO CARDS /////////////////////
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

////////////////////// ME //////////////////////
export const boxHello = {
  visible: {
    x: 0,
    opacity: 1,
    scale: [0, 1.25, 1],
    transition: {
      duration: 1.2,
    },
  },
  hidden: {
    x: 200,
    opacity: 0,
    scale: 0,
  },
};

export const boxName = {
  visible: {
    x: 0,
    opacity: 1,
    scale: [0, 1.5, 1],
    transition: {
      duration: 1.2,
      delay: 1.0,
    },
  },
  hidden: {
    x: 200,
    opacity: 0,
    scale: 0,
  },
};

export const boxJob = {
  visible: {
    y: 0,
    opacity: 1,
    rotate: [0, 1080],
    scale: [0, 1],
    transition: {
      duration: 1.2,
      delay: 2.0,
    },
  },
  hidden: {
    y: -200,
    opacity: 0,
    scale: 0,
  },
};
