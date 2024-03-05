import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const CardCarousel = () => {
  return (
    <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card">
            <img
              src="../../assets/FlavorFusion.png"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h5 className="card-title">Flavor Fusion _Group Project</h5>
              <p className="card-text">
                FlavourFusion is a real-world front-end application that was
                built with the mission to bring you the app that will empower
                you to become a kitchen maestro effortlessly! I was part of the fron-end team were I designed the framewords and the recipes page. 
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card">
            <img
              src="../../assets/Bootstrap-Portfolio.png"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Bootstrap Portfolio _Project</h5>
              <p className="card-text">
              This project's requirement was to leverage Bootstrap elements to craft a dynamic portfolio showcasing my latest work. It builds upon the previous portfolio, which was created exclusively using HTML
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item active">
          <div className="card">
            <img
              src="../../assets/Password-generator.png"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                This project's requirement was to create an application that an
                employee can use to generate a random password based on criteria
                they’ve selected. The prompts that appear at the top of the
                screen aks the user to select what they would like to include in
                the password.
              </p>
            </div>
          </div>
        </div>

           
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CardCarousel;
