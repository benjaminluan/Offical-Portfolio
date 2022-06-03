import React from "react";
import pengu from "../assets/pingu1.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects--container">
        <h1 className="header__projects">My Projects</h1>
        <div className="projects">
          <button className="project__btn-left">Previous Project</button>
          <div className="project--wrapper">
            <div className="project">
              <figure className="project__img--wrapper">
                <img src={pengu} alt="" className="project__img" />
              </figure>
            </div>
            <div className="project__btn">
              <a href="" className="project__preview">Preview</a>
              <a href="" className="project__source">Source</a>
            </div>
          </div>
          <button className="project__btn-right">Next Project</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
