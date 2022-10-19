import { motion } from "framer-motion";
import ME2 from "@assets/me2.png";
import "./BackgroundCircles.css";

export const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0, 0.1, 0.2, 0.4, 0.8, 0.3],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        delay: 5,
        duration: 2.5,
      }}
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
