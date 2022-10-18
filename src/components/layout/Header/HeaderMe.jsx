import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxHello, boxName, letterAnimation } from "@/utils/motion";

export const HeaderMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const stack = [..."Fullstack Developer"];

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
        className="hello__box"
        ref={ref}
        variants={boxHello}
        initial="hidden"
        animate={control}
      >
        <h5>Hello, I'm</h5>
      </motion.div>

      <motion.div
        className="name__box"
        ref={ref}
        variants={boxName}
        initial="hidden"
        animate={control}
        whileHover={() => control.start("hover")}
        onHoverEnd={() => control.start("hoverend")}
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
            variants={letterAnimation(index)}
          >
            <span key={index}>{letter}</span>
          </motion.span>
        ))}
      </h5>
    </>
  );
};
