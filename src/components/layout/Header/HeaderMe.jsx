import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxHello, boxName, boxJob } from "@/utils/motion";

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
