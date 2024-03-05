import React from "react";
import projects from "./Project-list";

const ProjectEl = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className={`card ${index === 0 ? 'active' : ''}`}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={project.image}
              className="card-img-top"
              alt={`Card ${index + 1}`}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.link} className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectEl;
