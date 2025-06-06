import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const APIKEY = "f1babf83";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("");

  function openMenu() {
    document.body.classList += "menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

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

  let sortedMovies = [...movies];
  if (sortOption === "title-asc") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortOption === "title-desc") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (sortOption === "year-asc") {
    sortedMovies.sort((a, b) => a.Year.localeCompare(b.Year));
  } else if (sortOption === "year-desc") {
    sortedMovies.sort((a, b) => b.Year.localeCompare(a.Year));
  }

  return (
    <>
      <div className="nav__container">
        <ul className="nav__link--list">
          <li>
            <Link
              to="/"
              className="
                  nav__link 
                  nav__link--hover-effect 
                  nav__link--hover-effect--yellow"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact__form"
              className="
                  nav__link 
                  nav__link--hover-effect 
                  nav__link--hover-effect--yellow"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="movies"
              className="
                  nav__link  
                  nav__link--hover-effect
                  nav__link--hover-effect--yellow
                  nav__link--primary"
            >
              Movies
            </Link>
          </li>
        </ul>
        <button className="btn__menu" onClick={() => openMenu()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="menu__backdrop">
          <button
            className="btn__menu btn__menu--close"
            onClick={() => closeMenu()}
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={() => closeMenu()}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/contact__form" className="menu__link " onClick={() => closeMenu()}>
                Contact
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/movies" className="menu__link" onClick={() => closeMenu()}>
                Movies
              </Link>
            </li>
          </ul>
        </div>
        <div className="overlay"></div>
      </div>
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
            <select className="select__option"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
              <option value="year-asc">Year (Oldest)</option>
              <option value="year-desc">Year (Newest)</option>
            </select>
            {sortedMovies.length > 0
              ? sortedMovies.map((movie) => (
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
              : !loading && <p className="error-message">No movies found.</p>}
            <div className="movie__list">{loading && <p>Loading...</p>}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
