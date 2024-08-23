import React from "react";

const Hobbies: React.FC = () => {
  return (
    <div className="my-5">
      <h2>Other Hobbies / Unsorted</h2>
      <p>
        Ultimate Frisbee: Competitive Ultimate Frisbee (16th Ranked Team in
        Canada 2022 and 3rd Ranked Team in Canada 2023).
      </p>
      <p>Cycling: Road Cycling from 2021 to 2023.</p>
      <p>Climbing: Began Climbing in October 2023.</p>
      <p>
        Marathon Running:{" "}
        <a href="https://sportstats.one/results/140567/6944">
          4:01:01 Marathon 2024
        </a>
        ,{" "}
        <a href="https://sportstats.one/results/118518/3700">
          4:27:37 Marathon 2023
        </a>
        ,{" "}
        <a href="https://sportstats.one/results/114438/12421">
          2:15:01 Half Marathon 2022
        </a>
        .
      </p>
      <p>
        Other Links:{" "}
        <a href="https://www.instagram.com/simonvutov">Instagram</a>,{" "}
        <a href="https://www.goodreads.com/user/show/126264391-simon">
          Goodreads
        </a>
        , <a href="https://x.com/SimonVutov">Twitter</a>,{" "}
        <a href="https://www.youtube.com/channel/UCyROJBJ_tvnwHopbOR3IsFA">
          Youtube
        </a>
        , <a href="https://www.strava.com/athletes/52907391">Strava</a>
      </p>
    </div>
  );
};

export default Hobbies;
