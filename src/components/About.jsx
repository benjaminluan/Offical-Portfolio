import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <section id="about">
      <div
        className={
          "about__me--container cursor" + (clicked === true ? " expand" : "")
        }
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <div className="about__me">
          <div className="header__about--wrapper">
            <h1
              className={
                "header__about" + (clicked === true ? " about__expanded" : "")
              }
            >
              Here's a bit more <span className="bold">about me</span>
            </h1>
            <figure
              className={
                "icon__wrapper" + (clicked === true ? " icon__expanded" : "")
              }
            >
              <FontAwesomeIcon icon={"fa-solid" + (clicked === true ? " fa-chevron-up " : " fa-chevron-down")} />
            </figure>
          </div>
          <div className="about__me--expanded"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
