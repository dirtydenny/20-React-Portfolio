import React from "react";
import Projects from "../Project";
import Me from "../../assets/me2small.jpg";
import Jate from "../../assets/jateImg.png";
import Trivia from "../../assets/triviaGame.png";
import Auto from "../../assets/autoSH.png";
import Reg from "../../assets/regEx.png";
import NoSQL from "../../assets/NoSQL.png";

export default function Portfolio() {
  const projectsArray = [
    {
      id: 1,
      title: "Triva Game",
      description: "External API Trivia Game",
      deployed: "string",
      repo: "string",
      image: Trivia,
    },

    {
      id: 2,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: Auto,
    },
    {
      id: 3,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: NoSQL,
    },
    {
      id: 4,
      title: "Jate",
      description: "Progressive Web Application",
      deployed: "https://intense-cove-43211.herokuapp.com/",
      repo: "href = https://github.com/dirtydenny/19-progressive-web-application",
      image: Jate,
    },
    {
      id: 5,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: Reg,
    },
    {
      id: 6,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: Me,
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Portfolio Page</h1>
      {/* 
      <h4 className="text-center mt-4 mb-4">
        Thank you for taking the time to see my work
      </h4> */}
      <Projects projects={projectsArray} />
    </div>
  );
}
