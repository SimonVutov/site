import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="mt-5 text-center">
      <h1>Portfolio</h1>
      <p>Here are some projects I've worked on:</p>
      <div className="d-flex justify-content-center mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Project"
          />
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">
              This project involves building a responsive web application using
              React and Redux.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
