import React from "react";
import CardCarousel from "./Carousel";
import "./HomePage.css";

const HomeItem = () => {
  return (
    <>
      <div className="about full-height ">
        <div className="about-text col-6 container-fluid ">
          <h1> About me</h1>
          Hello, I'm Nadine. From the vibrant streets of Greece in '88 to the
          pulse of London's fashion scene my journey weaves through design,
          styling, and textile patterns. In the tech world, I found my stride at
          Microsoft, explored at OneTrust, and landed as a Modern Workplace
          Senior Analyst at Avanade. As a trainer, I learned to prioritize the
          end user. Now, stepping into web development, I bring a fresh
          perspective. Though new to this, I'm eager to use code as a means to
          express and create compelling digital experiences.
        </div>
        <div className="col-6 carousel container-fluid ">
          <CardCarousel />
        </div>
      </div>
    </>
  );
};

export default HomeItem;
