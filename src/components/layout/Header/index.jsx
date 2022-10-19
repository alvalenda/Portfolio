import { HeaderMe } from "./HeaderMe";
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";
import ME from "@assets/me.png";
import ME2 from "@assets/me2.png";
import "./Header.css";
import { BackgroundCircles } from "@/components/layout/BackgroundCircles";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <HeaderMe />

        <CTA />
        <HeaderSocials />

        <BackgroundCircles />
        {/* <div className="me">
          <img src={ME} alt="picture of me" />
        </div> */}
        <div className="me2">
          <img src={ME2} alt="picture of me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
