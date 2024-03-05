const ProjectEl = () => {
  return (
    <div>
      <div className="card" style={{width: "18rem;"}}>
        <img
          src="../src/assets/Bootstrap-Portfolio.png"
          className="card-img-top"
          alt="Portfolio Image"
        />
        <div className="card-body">
          <h5 className="card-title">Bootrap Portfolio</h5>
          <p className="card-text">
          This project's requirement was to leverage Bootstrap elements to craft a dynamic portfolio showcasing my latest work. It builds upon the previous portfolio, which was created exclusively using HTML
          </p>
          <a href="https://nadinetsianta.github.io/Bootstrap-Portfolio/" class="btn btn-prcd ..imary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectEl;
