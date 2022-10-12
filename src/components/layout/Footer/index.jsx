import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import LOGO from "@assets/logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        <img src={LOGO} alt="Alva Logo" />
        ALVA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Alva {new Date().getFullYear()}. All rights reserved.
        </small>
      </div>
    </footer>
  );
};
