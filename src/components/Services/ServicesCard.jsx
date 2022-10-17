import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxBottom, letterAnimation } from "@/utils/motion";
import { BiCheck } from "react-icons/bi";

export const ServicesCard = ({ children, service }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView && control.start("visible");
  }, [control, inView]);

  return (
    <motion.article
      className="service__box service"
      ref={ref}
      variants={boxBottom({ duration: 5, posY: 0 })}
      initial="hidden"
      animate={control}
    >
      <div className="service__head">
        <h3>{service.title}</h3>
      </div>

      <ul className="service__list">
        {service.items.map((item, index) => (
          <motion.li
            key={index}
            ref={ref}
            variants={letterAnimation(index * 5, 1)}
            initial="hidden"
            animate={control}
          >
            <BiCheck className="service__list-icon" />
            <p>{item}</p>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
};
