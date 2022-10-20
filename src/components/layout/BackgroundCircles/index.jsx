import { motion } from "framer-motion";
import "./BackgroundCircles.css";

export const BackgroundCircles = ({ children }) => {
  return (
    <div className="bgcircle bgcircle__container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scaleX: [1, 2, 1, 1.5, 1, 1.25, 1, 1.15, 1, 1.05, 1],
          scaleY: [2, 1, 2, 1, 1.5, 1, 1.25, 1, 1.15, 1, 1.05, 1],
          opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.3, 0.5, 0.65, 0.65, 0.3],
          // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          delay: 1,
          duration: 5,
        }}
        exitBeforeEnter
        className="bgcircle bgcircle__container-motion"
      >
        <div className="bgcircle bgcircle__1" />
        <div className="bgcircle bgcircle__2" />
        <div className="bgcircle bgcircle__3" />
        <div className="bgcircle bgcircle__4" />
        <div className="bgcircle bgcircle__5" />
      </motion.div>
      {children}
    </div>
  );
};
