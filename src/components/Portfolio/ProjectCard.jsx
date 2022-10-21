import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxFromLeft, boxFromRight } from "@/utils/motion";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export const ProjectCard = ({ project, number }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");

    // inView && control.start("visible");
  }, [control, inView]);

  return (
    <motion.div
      className="portfolio__item-box"
      ref={ref}
      variants={number % 2 === 0 ? boxFromLeft : boxFromRight}
      initial="hidden"
      animate={control}
      exitBeforeEnter
    >
      <article className="portfolio__item">
        <div className="portfolio__item-cta">
          <AiOutlineFolder id="portfolio__item-folder" />

          <div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>

            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <HiOutlineExternalLink />
            </a>
          </div>
        </div>

        <h3 className="portfolio__item-title">{project.title}</h3>
        <p className="portfolio__item-description">{project.description}</p>

        <div className="portfolio__item-tech">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </article>
    </motion.div>
  );
};

{
  /* <article className="portfolio__item">
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
</article> */
}
