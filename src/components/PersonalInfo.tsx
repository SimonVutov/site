import React from "react";

const PersonalInfo: React.FC = () => {
  return (
    <div className="mb-5">
      <h1>Simon Vutov</h1>
      <p>
        Email: <a href="mailto:SimonVutov1@gmail.com">SimonVutov1@gmail.com</a>
      </p>
      <p>Location: Waterloo, ON</p>
      <p>
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/svutov">linkedin.com/in/svutov</a>
      </p>
      <p>
        Hi! I am a computer engineering student at the University of
        Waterloo with 6 years of coding experience.
      </p>
    </div>
  );
};

export default PersonalInfo;
