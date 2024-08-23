import React from "react";

const Links: React.FC = () => {
  return (
    <div className="my-5">
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/simon-vutov-7b5344228/">
            Linked In
          </a>
        </li>
        <li>
          <a href="https://github.com/SimonVutov">Github</a>
        </li>
        <li>
          <a href="https://leetcode.com/u/Simonvu/">Leetcode</a>
        </li>
        <li>
          <a href="https://dmoj.ca/user/SimonV">Dmoj</a>
        </li>
        <li>
          <a href="https://simonv.super.site/">This website</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
