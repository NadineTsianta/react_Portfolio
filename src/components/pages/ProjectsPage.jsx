import React from "react";
import projects from "./Project-list";


const ProjectEl = () => {
  const imageHeight = "280px"; // Set the desired height for the images

  return (
    <div className="container-fluid" style={{ overflowY: "scroll", height: "100vh", paddingTop: "55px" }}>
      <div className="row d-flex justify-content-center align-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 mb-4"
          >
            <div className={`card ${index === 0 ? "active" : ""}`} >
              <img
                src={project.image}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                style={{ height: imageHeight, objectFit: "cover" }}
              />
              <div className="card-body" style={{ height: `calc(50% - ${imageHeight})` }}>
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-dark">
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectEl;
