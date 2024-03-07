import React, { useState } from "react";
import "./Contact.css";

const ContactEl = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const handleDownload = () => {
    const pdfPath = process.env.PUBLIC_URL + "../../../N.Tsianta_CV_.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="dg-dark">
      <div
        className="container mt-5 border p-4 bg-dark text-light"
        style={{ borderRadius: "20px" }}
      >
        <div
          className="card-header mb-4 "
          style={{ alignItems: "flex-start", margin: " 10px" }}
        >
          <h2>Interested? Get in touch</h2>

        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>

        <div >

          <div style={{ paddingTop: "20px"}}>
            <a href="https://github.com/NadineTsianta" target="_blank">
              <img
                src="../../../square-github.svg"
                alt="github"
                className="contact-icon"
                style={{ maxWidth: "45px" }}
              />
            </a>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <a
              href="https://www.linkedin.com/in/nadine-tsianta/"
              target="_blank"
            >
              <img
                src="../../../linkedin (1).svg"
                alt="LinkedIn"
                className="contact-icon"
                style={{ maxWidth: "45px" }}
              />
            </a>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <a href="#" target="_blank">
              <img
                src="../../../envelope-solid.svg"
                alt="mail"
                className="contact-icon"
                style={{ maxWidth: "45px" }}
              />
            </a>
          </div>
        </div>
        <button onClick={handleDownload} className="btn" style={{backgroundColor:"#DA79EE"}}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ContactEl;
