import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const APIKEY = "f1babf83";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=${APIKEY}`
        );
        setMovie(response.data);
      } catch (error) {
        setMovie(null);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [imdbID]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found.</div>;

  function openMenu() {
    document.body.classList += "menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <>
      <div className="nav__container">
        {/* <h1
                      className="
                      page__title 
                      page__title--hover-effect 
                      page__title--hover-effect--yellow"
                    >
                      MovieFlix
                    </h1> */}
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
              to="/"
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
              to="/movies"
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
        <button className="btn__menu" onClick={openMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to="/"
                className="menu__link"
                onClick={() => closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to="/movies"
                className="menu__link"
                onClick={() => closeMenu}
              >
                Movies
              </Link>
            </li>
          </ul>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="movie__details--container">
        <div className="movie__details--row">
          <div className="movie__details--list">
            <div className="movie__details--card">
              <div className="movie__details--card--container">
                <div className="movie__details--description">
                  <div className="movie__title">
                    <h3 className="m-title">{movie.Title}</h3>
                    <p className="m-year">{movie.Year}</p>
                    <p className="m-plot">{movie.Plot}</p>
                  </div>
                  <div className="movie__details--poster">
                    <img src={movie.Poster} alt={movie.Title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
