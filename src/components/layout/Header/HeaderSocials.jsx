import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/flavio-alvarenga/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/alvarengaflavio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://discordapp.com/users/246040430494351362"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsDiscord />
      </a>
    </div>
  );
};
