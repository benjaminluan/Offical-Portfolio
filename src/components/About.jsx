import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <section id="about">
      <div
        className={
          "about__me--container dark__mode cursor" + (clicked === true ? " expand" : "")
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
              <FontAwesomeIcon
                icon={
                  "fa-solid" +
                  (clicked === true ? " fa-chevron-up " : " fa-chevron-down")
                }
              />
            </figure>
          </div>
          <div className={"about__me--expanded" + (clicked === true ? " show" : " hide")}>
            <div className="about__me--expanded-left-column">
              <p className="about__me--expanded-para">
                I'm a 20 year old <span className="bold">frontend software engineer</span> attending Georgia
                Gwinnett College with a 3.8 GPA. I have a <span className="bold">strong passion</span> to
                develop fully <span className="bold">responsive</span> and <span className="bold">asesthetic</span> websites that will
                capture the users attention.
              </p>
              <p className="about__me--expanded-para2">
                I welcome new <span className="bold">challenges</span> to transform them into engaging solutions in order to refine my craft and implement <span className="bold">new
                skills</span> to my collections. Therefore, I am <span className="bold">consistently</span> working
                on new projects to improve on my <span className="bold">critical thinking</span>, <span className="bold">problem-solving</span>,
                and <span className="bold">web development abilities</span>.
              </p>
              <div className="quote__container">
                <p className="quote">
                  “A smooth sea never made a skilled sailor.”
                </p>
                <p className="quote__author">by Franklin D. Roosevelt</p>
              </div>
            </div>
            <div className="about__me--expanded-right-column">
              <h2 className="header__language">Technology Stack</h2>
              <div className="language__img--container">
                <figure className="language__img--wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="" className="language__img popup__animation-1" />
                </figure>
                <figure className="language__img--wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" className="language__img popup__animation-2" />
                </figure>
                <figure className="language__img--wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" className="language__img popup__animation-3" />
                </figure>
                <figure className="language__img--wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="" className="language__img popup__animation-4" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
