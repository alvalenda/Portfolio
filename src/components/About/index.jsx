import aboutMe from "@assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { AboutCard } from "./AboutCard";
import "./About.css";

export const About = () => {
  const aboutStrings = [
    "I don't drink coffee to wake up. I wake up to drink coffee. <3",
    "< And I drink coffee to code. />",
    "Because I'm a developer and I love what I do.",
    "A Computer Systems Analyst student and Fullstack Developer...",
    "Click this button and let's talk about your project!",
  ];

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
            {/* I am a Computer Systems Analyst student and passionate about my
            work. I have a steady source of motivation that drives me to do my
            best. This passion led me to challenge myself daily and learn new
            skills that helped me to do a better work. */}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
