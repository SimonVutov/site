import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsivePaddingContainer from "./components/ResponsivePaddingComponent";
import "./styles/timeline.css";
import Timeline from "./components/Timeline";
import PersonalInfo from "./components/PersonalInfo";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Links from "./components/Links";
import Hobbies from "./components/Hobbies";
import { TimelineItem } from "./types";

const App: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      date: "2024 - Current",
      title: "University of Waterloo",
      description: "BASc Computer Engineering",
    },
    {
      date: "2020 - 2024",
      title: "Colonel By Secondary School",
      description: "International Baccalaureate® (IB) Diploma Programme",
    },
  ];

  return (
    <div className="container mt-5">
      <ResponsivePaddingContainer>
        <PersonalInfo />
        <Timeline items={timelineData} />
        <Overview />
        <Skills />
        <Experience />
        <Education />
        <Links />
        <Hobbies />
      </ResponsivePaddingContainer>
    </div>
  );
};

export default App;
``;
