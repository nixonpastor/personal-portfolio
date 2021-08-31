import React from "react";
import "./About.css";
import Footer from "../Footer";

export default function About() {
  return (
    <>
      <div className="about-header">
        <h1>Nixon Pastor</h1>
        <p>Programmer</p>
      </div>
      <div className="about-container">
        <h1>ABOUT ME</h1>
        <p>
          My name is Nixon Pastor and I am currently a Senior majoring in
          Computer Science at St. Mary's University in San Antonio, Texas! My
          hometown is Phoenix, Arizona but my passion for coding and technology
          has led me to study Computer Science in San Antonio. Ever since taking
          my first programming course in college, I have always been eager to
          learn and develop new applications. I have interned at Oracle as a
          Software Engineer Intern and have put my web development skills to the
          test! I have also interned at Early Warning Services as a Software
          Engineer Intern and worked on the Zelle Android application. I love
          programming and I hope to continue to learn more!
        </p>
        <p>
          I have experience building applications in Java, C++, and JavaScript.
          On my free time, I like to learn new languages and frameworks. I am
          continuing to learn more about React, Javascript, HTML and CSS.
        </p>
        <p>
          Here is a copy of my{" "}
          <a href="/images/Nixon-Pastor-Resume-2021.docx" download>
            Resume
          </a>
          .
        </p>

        <h1>LANGUAGES</h1>
        <div className="lists">
          <ul>
            <li>Java</li>
            <li>C++</li>
            <li>C#</li>
            <li>C</li>
            <li>JavaScript (ReactJS)</li>
            <li>HTML5</li>
            <li>CCS3</li>
            <li>SQL</li>
          </ul>
        </div>
        <h1>RELEVANT COURSEWORK</h1>
        <div className="lists">
          <ul>
            <li>Object Oriented Programming I and II</li>
            <li>Algorithms</li>
            <li>Data Structures</li>
            <li>Files and Databases</li>
            <li>Systems Analysis and Design</li>
            <li>Software Engineering</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
