import React from "react";
import Projects from "../Project";
//import Me from "../../assets/me2small.jpg";
import Jate from "../../assets/jateImg.png";
import Trivia from "../../assets/triviaGame.png";
import Auto from "../../assets/autoSH.png";
import Reg from "../../assets/regEx.png";
import NoSQL from "../../assets/NoSQL.png";
import Password from "../../assets/passwordGen.png";

export default function Portfolio() {
  const projectsArray = [
    {
      id: 1,
      title: "Triva Game",
      description: "External API Trivia Game",
      deployed: "https://jakedish.github.io/trivia-time/",
      repo: "https://github.com/JakeDish/trivia-time",
      image: Trivia,
    },

    {
      id: 2,
      title: "Auto Self Help",
      description: "Automotive Self Help Blog",
      deployed: "https://agile-ocean-74686.herokuapp.com/",
      repo: "https://github.com/PintoDrop/autoselfhelp",
      image: Auto,
    },
    {
      id: 3,
      title: "NoSQL",
      description: "Social Network API, use Insomnia to test",
      deployed: "https://github.com/dirtydenny/NoSQL_Social_Network_API",
      repo: "https://github.com/dirtydenny/NoSQL_Social_Network_API",
      image: NoSQL,
    },
    {
      id: 4,
      title: "Jate",
      description: "Progressive Web Application",
      deployed: "https://intense-cove-43211.herokuapp.com/",
      repo: "https://github.com/dirtydenny/19-progressive-web-application",
      image: Jate,
    },
    {
      id: 5,
      title: "RegEX",
      description: "Tutorial on Email verification RegEx",
      deployed:
        "https://github.com/dirtydenny/regex-email-qualifier/blob/main/gist-regexemail.md",
      repo: "https://github.com/dirtydenny/regex-email-qualifier/blob/main/gist-regexemail.md",
      image: Reg,
    },
    {
      id: 6,
      title: "Password Generator",
      description: "Random Password Generator",
      deployed: "https://dirtydenny.github.io/passwordg/",
      repo: "https://github.com/dirtydenny/passwordg",
      image: Password,
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
