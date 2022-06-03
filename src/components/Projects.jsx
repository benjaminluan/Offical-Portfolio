import React from "react";
import pengu from "../assets/pingu1.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects--container ">
        <h1 className="header__projects">My Projects</h1>
        <div className="projects">
          <button className="project__btn-left cursor">Previous</button>
          <div className="project--wrapper">
            <div className="project">
              <figure className="project__img--wrapper">
                <img src={pengu} alt="" className="project__img" />
              </figure>
              <div className="project__info--wrapper">
                <div className="project__info-left-column">
                  <h2 className="project__title">League</h2>
                  <p className="project__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, tempore aspernatur, ipsum odio ducimus harum
                    molestias, quam maxime eaque animi vitae? Perferendis,
                    tempora ipsam inventore vero perspiciatis dolor repellendus
                    quos?
                  </p>
                </div>
                <div className="project__info-right-column">
                  <div className="project__language">
                    <h2 className="project__language--header">Language Used</h2>
                    <figure className="project__language--img-wrapper">
                      <img src="" alt="" className="project__language--img" />
                    </figure>
                  </div>
                  <div className="project__btn">
                    <a href="" className="project__preview ">
                      Preview
                    </a>
                    <a href="" className="project__source ">
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project__slider--container">
              <div className="project__slider">
                <div className="project__slider-circle"></div>
              </div>
            </div>
          </div>
          <button className="project__btn-right cursor">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
