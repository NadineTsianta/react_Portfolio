import React from "react";
import "./Contact.css";

const ContactEl = () => {
  return (
    <>
      <div className="scaffolder-layout container">
        <div className="row">
          <div className="col scaffolder-sidebar"></div>
          
          <section className="card">
            <div className="mb4 pt5 p3">
              <div className="display-flex justify-space-between social">
                <h2>Contact me</h2>

                <a href="https://github.com/NadineTsianta">
                  <img src="../src/assets/github.svg" alt="github" style={{maxWidth: "5%"}}/> 
                </a>
                <a href="https://www.linkedin.com/in/nadine-tsianta/">
                  <img src="../src/assets/linkedin.svg" alt="LinkedIn" style={{maxWidth: "5%"}}/>
                
                </a>
                <a href="#">
                  <img src="../src/assets/envelope-solid.svg" alt="mail" style={{maxWidth: "5%"}} />
                  
                </a>
              </div>
            </div>
          </section>
        

          <div className="col-8">2</div>

          
        </div>

        
        <div className="scaffolder-main"></div>
        <div className="scaffolder-aside"></div>
      </div>
    </>
  );
};

export default ContactEl;
