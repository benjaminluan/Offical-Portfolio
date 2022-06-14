import React, { useState, useEffect } from "react";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <div className="projects__container">
        <div className="projects__row">
          <h1 className="projects__header">My Projects</h1>
          <div className="projects">
            {projects.map((project) => (
              <div className="project__wrapper">
                <figure className="project__img--wrapper">
                  <img src={project.img} alt="" className="project__img" />
                  <div className="project__bg"></div>
                </figure>
                <div className="project__info">
                  <h2 className="project__title">{project.title}</h2>
                  <h3 className="project__language">{project.language}</h3>
                  
                </div>
                <div className="project__btn">
                    <a href={project.preview} target="_blank" className="project__preview">Preview</a>
                    <a href={project.source}   target="_blank" className="project__source">Source</a>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
