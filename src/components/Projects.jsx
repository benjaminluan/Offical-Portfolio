import React, { useState, useEffect } from "react";
import pengu from "../assets/pingu1.png";
import CircleSlider from "./ui/CircleSlider";

const Projects = ({ projects }) => {
  const [project, setProject] = useState(projects[0]);
  const [count, setCount] = useState(0);

  function nextProject() {
    if (count !== projects.length - 1) {
      setCount((prevCount) => prevCount + 1);
    } else if (count === projects.length - 1) {
      setCount(0);
    }
  }

  function prevProject() {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    } else if (count === 0) {
      setCount(projects.length - 1);
    }
  }

  useEffect(() => {
    setProject(projects[count]);
  }, [count]);

  return (
    <section id="projects">
      <div className="projects--container ">
        <h1 className="header__projects">My Projects</h1>
        <div className="projects">
          <button
            className="project__btn-left cursor"
            onClick={() => prevProject()}
          >
            Previous
          </button>
          <div className="project--wrapper">
            <div className="project">
                <img src={project.img} alt="" className="project__img" />
              <div className="project__info--wrapper">
                <div className="project__info-left-column">
                  <h2 className="project__title">{project.title}</h2>
                  <p className="project__para">{project.para}</p>
                </div>
                <div className="project__info-right-column">
                  <div className="project__language">
                    <h2 className="project__language--header">Language Used</h2>
                    <figure className="project__language--img-wrapper">
                      <img src="" alt="" className="project__language--img" />
                    </figure>
                  </div>
                  <div className="project__btn">
                    <a
                      href={project.preview}
                      target="_blank"
                      className="project__preview "
                    >
                      Preview
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      className="project__source "
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <CircleSlider />
          </div>
          <button
            className="project__btn-right cursor"
            onClick={() => nextProject()}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
