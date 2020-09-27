import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

// to add other projects to project page
function ProjectCards() {
  return (
    <div className="cardsProjects">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/WatchlistApp.png"
              text="Created a movie watchlist website using React and The Movie Database API. Users can search for movies to add to their watch list, delete the movies, and add them to their watched list. The movies are stored in local storage."
              label="Movie Watch List (React)"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
