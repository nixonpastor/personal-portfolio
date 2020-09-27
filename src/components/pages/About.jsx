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
          My name is Nixon Pastor and I am currently a Junior majoring in
          Computer Science at St. Mary's University in San Antonio, Texas! My
          hometown is Phoenix, Arizona but my passion for coding and technology
          has led me to study Computer Science in San Antonio. Ever since taking
          my first programming course in college, I have always been eager to
          learn and develop new applications.
        </p>
        <p>
          I have experience building applications in Java, C++, and C. On my
          free time, I like to learn new languages and frameworks. I am
          currently learning ReactJS and Javascript along with HTML and CSS. I
          am also in the process of learning C# and SQL with Microsoft SQL
          Server.
        </p>
        <p>
          Here is a copy of my{" "}
          <a href="/images/Nixon-Pastor-Resume2020.docx" download>
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
            <li>Game Development</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
