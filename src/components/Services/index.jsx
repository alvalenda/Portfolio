import { BiCheck } from "react-icons/bi";
import "./Services.css";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* STARTING POINT OF THE CARDS */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Criation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* END OF CREATION */}
        {/* END OF THE SERVICE CARDS */}
      </div>
    </section>
  );
};
