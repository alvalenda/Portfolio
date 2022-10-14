import { ProjectCard } from "./ProjectCard";
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
    </section>
  );
};
