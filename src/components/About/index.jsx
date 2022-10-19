import aboutMe from "@assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { AboutCard } from "./AboutCard";
import { aboutStrings } from "@/utils/about";
import "./About.css";

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
              duration={12}
              posX={-200}
            >
              <FaAward className="about__icon" />
            </AboutCard>

            <AboutCard
              title="Technologies"
              subtitle={"Always learning new technologies"}
              duration={12}
              posX={-450}
            >
              <FiUsers className="about__icon" />
            </AboutCard>

            <AboutCard
              title="Projects"
              subtitle={"40+ Completed Projects"}
              duration={12}
              posX={window.innerWidth > 600 ? -650 : -200}
            >
              <VscFolderLibrary className="about__icon" />
            </AboutCard>
          </div>

          <Typewriter
            options={{
              strings: aboutStrings,
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 50,
              pauseFor: 5000,
            }}
          />

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
