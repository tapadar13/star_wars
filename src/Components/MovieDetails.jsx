import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "./constants/config";

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  const fetchMovieInfo = async () => {
    const response = await fetch(config.baseUrl + `films/${Math.abs(id - 3)}`);
    const data = await response.json();
    console.log(data);
    setMovieInfo(data);
  };

  return (
    <div>
      <h3>Title: {movieInfo?.title}</h3>
      <p>Released: {movieInfo?.release_date}</p>
      <p>Director: {movieInfo?.director}</p>
      <p>Producer: {movieInfo?.producer}</p>
      <p>Plot: {movieInfo?.opening_crawl}</p>
    </div>
  );
};

export default MovieDetails;
