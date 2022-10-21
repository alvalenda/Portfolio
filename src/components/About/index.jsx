import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AboutCard } from "./AboutCard";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { aboutStrings } from "@/utils/about";
import aboutMe from "@assets/me-about.png";
import Typewriter from "typewriter-effect";
import "./About.css";

export const About = () => {
  const [ref, inView] = useInView();

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
              posX={window.innerWidth > 600 ? -200 : -100}
            >
              <FaAward className="about__icon" />
            </AboutCard>

            <AboutCard
              title="Technologies"
              subtitle={"Always learning new technologies"}
              duration={12}
              posX={window.innerWidth > 600 ? -450 : -225}
            >
              <FiUsers className="about__icon" />
            </AboutCard>

            <AboutCard
              title="Projects"
              subtitle={"40+ Completed Projects"}
              duration={12}
              posX={window.innerWidth > 600 ? -650 : -100}
            >
              <VscFolderLibrary className="about__icon" />
            </AboutCard>
          </div>

          <div ref={ref} className="about__typewriter">
            {inView && (
              <Typewriter
                id="typewriter"
                options={{
                  performant: true,
                  strings: aboutStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  delay: 50,
                  pauseFor: 4000,
                }}
              />
            )}
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
