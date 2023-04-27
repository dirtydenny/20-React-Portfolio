import React from "react";
import Me from "../../assets/me2small.jpg";

export default function About() {
  return (
    <div className="container">
      <h1 className="title">About Page</h1>

      <div className="row">
        <div className="col col-md-4 col-xs-12  text-center">
          <img src={Me} alt="me" />
        </div>

        <div className="col col-md-8 col-xs-12">
          <p>
            Thank you for visiting my portfolio of work. My name is Denny Allen.
            Since I was a kid, I had a passion for electronics and computers. I
            spent most of my professional life in management and sales roles.
            When the company I worked for decided to enter the E-Commerce
            market, I had the unique skill set to get the project off the
            ground. I learned how to run a successful E-Commerce platform. As I
            progressed as the leader of Tirecrawler.com, I acquired digital
            marketing skills such as email marketing and SEO. Unfortunately,
            when the company decided to sell its retail operations, the site had
            to close.
          </p>
          <br></br>
          <p>
            I had to get surgery and found myself with the perfect opportunity
            to take a coding bootcamp while I recovered. I jumped at the
            opportunity to learn something new and do something entirely
            different in the webspace by learning to become a full stack web
            developer.
          </p>
          <br></br>
          <p>
            In addition to the new skills I learned in the bootcamp, I have
            practical UX experience, SEO, Digital marketing, management, team
            building skills, training, and sales.
          </p>
        </div>
      </div>
    </div>
  );
}
