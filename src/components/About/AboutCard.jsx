import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxShow } from "@/utils/motion";

export const AboutCard = ({ children, title, subtitle, duration, posX }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView && control.start("visible");
  }, [control, inView]);

  return (
    <motion.article
      className="box"
      ref={ref}
      variants={boxShow({ duration: duration, posX: posX })}
      initial="hidden"
      animate={control}
      exitBeforeEnter
    >
      <article className="about__card">
        {children}
        <h5>{title}</h5>
        <small>{subtitle}</small>
      </article>
    </motion.article>
  );
};

AboutCard.defaultProps = {
  duration: 5,
  posX: -200,
};
