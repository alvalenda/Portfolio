import { HeaderMe } from "./HeaderMe";
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";
import ME from "@assets/me.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <HeaderMe />

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
