import aboutMe from "@assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";
import { AboutCard } from "./AboutCard";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="a picture of me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              title="Experience"
              subtitle={"1+ year Fullstack experience"}
            >
              <FaAward className="about__icon" />
            </AboutCard>

            <AboutCard
              title="Technologies"
              subtitle={"Always learning new technologies"}
            >
              <FiUsers className="about__icon" />
            </AboutCard>

            <AboutCard title="Projects" subtitle={"30+ Completed Projects"}>
              <VscFolderLibrary className="about__icon" />
            </AboutCard>
          </div>

          <p>
            I am a Computer Systems Analyst student and passionate about my
            work. I have a steady source of motivation that drives me to do my
            best. This passion led me to challenge myself daily and learn new
            skills that helped me to do a better work.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
