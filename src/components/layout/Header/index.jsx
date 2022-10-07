import "./Header.css";
import "./CTA";
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";
import ME from "@assets/me.png";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Flávio Alvarenga.</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="picture of me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
