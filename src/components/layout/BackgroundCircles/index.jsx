import { motion } from "framer-motion";
import "./BackgroundCircles.css";

export const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [0.75, 2, 2, 3, 1],
        opacity: [0, 0.1, 0.2, 0.4, 0.65, 0.3],
        // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        delay: 5,
        duration: 2.5,
      }}
      exitBeforeEnter
      className="bgcircle bgcircle__container"
    >
      <div className="bgcircle bgcircle__1" />
      <div className="bgcircle bgcircle__2" />
      <div className="bgcircle bgcircle__3" />
      <div className="bgcircle bgcircle__4" />
      <div className="bgcircle bgcircle__5" />
    </motion.div>
  );
};
