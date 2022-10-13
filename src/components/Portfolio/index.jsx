import { ProjectCard } from "./ProjectCard";
import { portifolioData as data } from "@/utils/portifolio";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => (
          <ProjectCard project={item} number={index} />
        ))}
      </div>
    </section>
  );
};
