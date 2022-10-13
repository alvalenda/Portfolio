import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const HeaderMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.div
        className="box"
        ref={ref}
        variants={boxHello}
        initial="hidden"
        animate={control}
      >
        <h5>Hello, I'm</h5>
      </motion.div>

      <motion.div
        className="box"
        ref={ref}
        variants={boxName}
        initial="hidden"
        animate={control}
      >
        <h1>Flávio Alvarenga.</h1>
      </motion.div>

      <motion.div
        className="box"
        ref={ref}
        variants={boxJob}
        initial="hidden"
        animate={control}
      >
        <h5 className="header__job-text">Fullstack Developer</h5>
      </motion.div>
    </>
  );
};

const boxHello = {
  visible: {
    x: 0,
    opacity: 1,
    scale: [0, 1],
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

const boxName = {
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
    x: -200,
    opacity: 0,
    scale: 0,
  },
};

const boxJob = {
  visible: {
    y: [-150, -100, -50, 0, -50, 0],
    opacity: 1,
    rotate: [0, 1080],
    scale: [0, 1.5, 1],
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
