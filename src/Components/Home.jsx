import { useState, useEffect } from "react";
import "../App.css";
import config from "./constants/config";
import MovieCard from "../Components/MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(config.baseUrl + "films/");
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
    console.log(movies);
  };

  return (
    <div className="container">
      <h1>Star Wars Movies</h1>

      <div className="card-items">
        {movies.map((movie, idx) => {
          return (
            <Link to={"/movie/" + movie.episode_id} key={movie.episode_id}>
              <MovieCard movie={movie} idx={idx} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
