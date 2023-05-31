import { useState, useEffect } from "react";
import "../App.css";
import MovieCard from "../Components/MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
    console.log(movies);
  };

  return (
    <div className="container">
      <h1>Star Wars Movies</h1>
      <Link to="/MovieDetails">
        <div className="card-items">
          {movies.map((movie, idx) => {
            return <MovieCard movie={movie} idx={idx} />;
          })}
        </div>
      </Link>
    </div>
  );
};

export default Home;
