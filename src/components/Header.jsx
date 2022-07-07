import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/Resume.pdf"

const Header = () => {
  return (
    <header>
      <div className="header__content">
        <h1 className="header__name">Hey! My name is Benjamin</h1>
        <p className="header__greeting">
          I am a <span className="bold">Frontend Software Engineer</span> with a
          desire to construct high quality and responsive websites to provide
          users with the best experience!
        </p>
      </div>
      <div className="header__btns--container">
        <div className="header__btn--container">
          <a
            href="https://www.linkedin.com/in/benjamin-bui-b41934222/"
            target="_blank"
            className="header__btn--icon box__shadow-popup "
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-bui-b41934222/"
            target="_blank"
            className="header__btn "
          >
            LinkedIn
          </a>
        </div>
        <div className="header__btn--container">
          <a href="https://github.com/benjaminluan" target="_blank" className="header__btn--icon box__shadow-popup ">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a href="https://github.com/benjaminluan" target="_blank" className="header__btn ">
            Github
          </a>
        </div>
        <div className="header__btn--container">
          <a href={Resume} target="_blank" className="header__btn--icon box__shadow-popup ">
            <FontAwesomeIcon icon="fa-solid fa-file" />
          </a>
          <a href={Resume} target="_blank" className="header__btn">
            Resume
          </a>
        </div>
      </div>
      <p className="header__cred">
        E-portfolio design was inspired by the Neumorphism User Interface visual
        style.
      </p>
    </header>
  );
};

export default Header;
