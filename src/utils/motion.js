///////////////////// PROTFOLIO CARDS /////////////////////
export const boxFromLeft = {
  visible: {
    x: 0,
    opacity: 1,
    // filter: `blur(0px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    x: -100,
    // filter: `blur(2px)`,
    opacity: 0,
  },
};

export const boxFromRight = {
  visible: {
    x: 0,
    opacity: 1,
    // filter: `blur(0px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    x: 100,
    // filter: `blur(2px)`,
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

// export const boxJob = {
//   visible: {
//     y: 0,
//     opacity: 1,
//     rotate: [0, 1080],
//     scale: [0, 1],
//     transition: {
//       duration: 1.2,
//       delay: 2.0,
//     },
//   },
//   hidden: {
//     y: -200,
//     opacity: 0,
//     scale: 0,
//   },
// };

export const letterAnimation = (i, j = 2.0) => ({
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: j + i * 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
});

////////////////////// GENERAL //////////////////////
export const boxBottom = ({ duration, posY = 100 }) => ({
  visible: {
    y: 0,
    opacity: [0.5, 0.5, 0.5, 1],
    scale: 1,
    transition: {
      duration: 0.1 * duration,
    },
  },
  hidden: {
    y: posY ?? 100,
    opacity: 0,
    scale: 0,
  },
});

export const boxShow = ({ duration, posY = 0, posX = 0 }) => ({
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.1 * duration,
    },
  },
  hidden: {
    x: posX ?? 100,
    y: posY ?? 100,
    opacity: 0,
  },
});
