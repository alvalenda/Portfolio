import { ProjectCard } from "./ProjectCard";
import { FiGithub } from "react-icons/fi";
import { portfolioData as data } from "@/utils/portfolio";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => (
          <ProjectCard project={item} number={index} key={index} />
        ))}
      </div>

      <div className="container portfolio__button">
        <a
          href="https://github.com/alvalenda"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          See More
          <FiGithub />
        </a>
      </div>
    </section>
  );
};
