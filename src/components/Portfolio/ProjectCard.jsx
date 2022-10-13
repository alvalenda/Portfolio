import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxFromLeft = {
  visible: {
    x: 0,
    opacity: 1,
    filter: `blur(0px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    x: -100,
    filter: `blur(2px)`,
    opacity: 0,
  },
};
const boxFromRight = {
  visible: {
    x: 0,
    opacity: 1,
    filter: `blur(0px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    x: 100,
    filter: `blur(2px)`,
    opacity: 0,
  },
};

export const ProjectCard = ({ project, number }) => {
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
    <motion.div
      className="box"
      ref={ref}
      variants={number % 2 === 0 ? boxFromLeft : boxFromRight}
      initial="hidden"
      animate={control}
    >
      <article className="portfolio__item" key={number}>
        <div className="portfolio__item-image">
          <img src={project.image} alt={`image of ${project.title}`} />
        </div>
        <h3>{project.title}</h3>

        <div className="portfolio__item-cta">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Github
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Deploy
          </a>
        </div>
      </article>
    </motion.div>
  );
};
