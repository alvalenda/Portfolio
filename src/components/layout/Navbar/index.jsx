import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(() => "#");
  const handleClick = (ref) => setActiveNavbar(() => `#${ref}`);

  return (
    <nav>
      <a
        href="#"
        className={activeNavbar === "#" ? "active" : ""}
        onClick={() => handleClick("")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNavbar === "#about" ? "active" : ""}
        onClick={() => handleClick("about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNavbar === "#experience" ? "active" : ""}
        onClick={() => handleClick("experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNavbar === "#services" ? "active" : ""}
        onClick={() => handleClick("services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNavbar === "#contact" ? "active" : ""}
        onClick={() => handleClick("contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
