import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxBottom } from "@/utils/motion";

export const AboutCard = ({ children, title, subtitle }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView && control.start("visible");
  }, [control, inView]);
  return (
    <motion.article
      className="box"
      ref={ref}
      variants={boxBottom}
      initial="hidden"
      animate={control}
    >
      <article className="about__card">
        {children}
        <h5>{title}</h5>
        <small>{subtitle}</small>
      </article>
    </motion.article>
  );
};
