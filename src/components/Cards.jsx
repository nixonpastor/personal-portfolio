import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> CHECK OUT SOME OF MY PROJECTS </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/AndroidToDoList.JPG"
              text="Created a To Do List application in Android Studio with features like adding an item, deleting an item, and undoing a delete."
              label="Android To Do List (Java)"
              path="/projects"
            />
            <CardItem
              src="images/HospitalDatabase1.png"
              text="Created a hospital database with functionalities such as adding a patient, updating patient information, and more."
              label="C++ Hospital Database"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/contactApp3.png"
              text="Created a GUI contacts application where users can view contacts, add a contact, update contact information, and delete contacts."
              label="Contacts App (Java)"
              path="/projects"
            />
            <CardItem
              src="images/modifiedDrawingApp.png"
              text="Created a GUI painter application that allows users to paint on a canvas, select brush color and size, and clear the canvas."
              label="Painter App (Java)"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
