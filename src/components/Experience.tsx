import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="mb-5">
      <h2>Experience & Projects</h2>
      <div>
        <h3>Unity 3D Game Developer</h3>
        <ul>
          <li>
            Implemented various game mechanics in Sharn Cherwoo's Cricket Game
            to create a functional cricket game using C#, Unity 3D Engine, and
            Photon Unity Networking.
          </li>
          <li>
            Conducted extensive testing and debugging to ensure game stability
            and performance.
          </li>
          <li>
            Documented game development process and clearly communicated with
            the employer.
          </li>
        </ul>
        <h3>miniGPT - Large Language Model Project</h3>{" "}
        <p>
          <li>
            <a href="https://github.com/SimonVutov/miniGPT">
              github.com/SimonVutov/miniGPT
            </a>
          </li>
        </p>
        <ul>
          <li>
            Developed an optimized framework for training mini versions of
            state-of-the-art large language models using advanced techniques.
          </li>
          <li>
            Enabled training on larger batch sizes through gradient accumulation
            without additional memory overhead.
          </li>
        </ul>
        <h3>Fluid Simulation Project</h3>
        <p>
          <a href="https://github.com/SimonVutov/FluidSimulation">
            github.com/SimonVutov/FluidSimulation
          </a>
        </p>
        <h3>Unity Rocket Simulation Project</h3>
        <p>
          <a href="https://github.com/SimonVutov/SpacexRocketSimulation">
            github.com/SimonVutov/SpacexRocketSimulation
          </a>
        </p>
      </div>
    </div>
  );
};

export default Experience;
