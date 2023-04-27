import React from 'react';
import Projects from '../Project';
import Me from '../../assets/me2small.jpg'
import Jate from '../../assets/jateImg.png'
//import Resume from "../../assets/resume.pdf";

export default function Portfolio() {
  const projectsArray = [
    {
      id: 1,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: Me,
    },

    {
      id: 2,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: Me,
    },
    {
      id: 3,
      title: "string",
      description: "string",
      deployed: "string",
      repo: "string",
      image: Me,
    },
    {
      id: 4,
      title: "Jate",
      description: "Progressive Web Application",
      deployed: "https://intense-cove-43211.herokuapp.com/",
      repo: "href = https://github.com/dirtydenny/19-progressive-web-application",
      image: Jate,
    },
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Thank you for taking the time to see my work.  
      </p>
      <Projects projects={projectsArray}/>
    </div>
  );
}

