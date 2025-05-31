import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const APIKEY = "f1babf83";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${APIKEY}`
      );
      setMovies(response.data.Search ? response.data.Search.slice(0, 6) : []);
    } catch (error) {
      setMovies([]);
    }
    setLoading(false);
    setSearchTerm("");
  };

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      getMovies();
    }
  };

  return (
    <section id="search">
      <div className="search__container">
        <div className="search__wrapper">
          <h2 className="search__container--header">
            Find your favorite movie!
          </h2>
          <input
            type="text"
            id="searchInput"
            placeholder=" Search Title"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
          />
          <button type="submit" id="searchButton" onClick={getMovies}>
            <i className="fas fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <h1 className="movies__header">Movies</h1>
      <div className="movie__container">
        <div className="movie__row">
          <div className="movie__list">
            {loading && <p>Loading...</p>}
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div className="movie__card" key={movie.imdbID}>
                  <Link to={`/movies/${movie.imdbID}`}>
                    <div className="movie__card--container">
                      <div className="movie__description">
                        <div className="movie__title">
                          <h3>{movie.Title}</h3>
                          <p>{movie.Year}</p>
                        </div>
                        <div className="movie__poster">
                          <img src={movie.Poster} alt={movie.Title} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              !loading && <p className="error-message">No movies found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
