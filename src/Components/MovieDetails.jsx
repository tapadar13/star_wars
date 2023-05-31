import React, { useState, useEffect } from "react";
import { images } from "../utils/images";

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  const fetchMovieInfo = async () => {
    const response = await fetch("http https://swapi.dev/api/people/");
    const data = await response.json();
    console.log(data);
    setMovieInfo(data);
  };

  return (
    <div>
      <h3>{movieInfo.title}</h3>
      <p>{movieInfo.release_date}</p>
      <p>{movieInfo.director}</p>
      <p>{movieInfo.producer}</p>
      <p>{movieInfo.opening_crawl}</p>
    </div>
  );
};

export default MovieDetails;
