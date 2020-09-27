import React from "react";
import Cards from "../Cards";
import "./Projects.css";
import ProjectCards from "../ProjectCards";
import Footer from "../Footer";

export default function Projects() {
  return (
    <>
      <div>
        <Cards />
        <ProjectCards />
        <h1 className="githubHeader">
          Check out more on my{" "}
          <a className="githubLink" href="https://github.com/nixonpastor">
            Github
          </a>
          ! Also check out my {""}
          <a
            className="githubLink"
            href="https://watchlist-website.netlify.app/"
          >
            movie watchlist website
          </a>
          !
        </h1>
      </div>
      <Footer />
    </>
  );
}
