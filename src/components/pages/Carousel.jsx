import React from "react";
import projects from "./Project-list";

const CardCarousel = () => {
  return (
    <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="card">
              <img
                src={project.image}
                className="card-img-top"
                alt={`Card ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CardCarousel;