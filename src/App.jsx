import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import logo from './assets/logo.png'

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5d668a4e55e28292714d6fdd2fd67935&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=5d668a4e55e28292714d6fdd2fd67935&query=";

function App() {
  // Set up state hooks to store movies and search term
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load featured movies when the component mounts
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      // Search for movies using the search API and the user's search term
      fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

      // Clear the search term
      setSearchTerm("");
    }
  };

  // Handle changes to the search input
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src={logo} alt="logo" />
          Movie Time
        </div>

        {/* Search form */}
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Get your popcorn...."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>

      {/* Movie tiles */}
      <div className="tiles" >
        <div className="movie-container">
          {/* Render each movie */}
          {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} data={movie} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
