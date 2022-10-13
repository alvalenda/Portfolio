export const ProjectCard = ({ project, number }) => {
  return (
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
  );
};
