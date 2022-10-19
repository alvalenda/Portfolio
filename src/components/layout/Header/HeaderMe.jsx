import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxHello, boxName, letterAnimation } from "@/utils/motion";

export const HeaderMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const stack = [..."Fullstack Developer"];

  useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");
  }, [control, inView]);

  return (
    <>
      <h5>Hello, I'm</h5>

      <motion.div
        className="name__box"
        ref={ref}
        variants={boxName}
        initial="hidden"
        animate={control}
        whileHover={() => control.start("hover")}
        onHoverEnd={() => control.start("hoverend")}
        exitBeforeEnter
      >
        <h1>Flávio Alvarenga.</h1>
      </motion.div>

      <h5 className="header__job-text">
        {stack.map((letter, index) => (
          <motion.span
            key={index}
            ref={ref}
            initial="hidden"
            animate={control}
            exitBeforeEnter
            variants={letterAnimation(index)}
          >
            <span key={index}>{letter}</span>
          </motion.span>
        ))}
      </h5>
    </>
  );
};
