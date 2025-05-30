import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const movieListEl = document.querySelector('.movie__list');
  const APIKEY = "f1babf83"
  const searchInput = document.getElementById("searchInput")
  const searchButton = document.getElementById("searchButton")

  async function getMovies() {
    const movies = await axios.get(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=${APIKEY}`);
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).slice(0, 6).join("")
    console.log(moviesData)
    resetSearch();
  };

  function resetSearch() {
    document.getElementById('searchInput').value = '';
  };

  searchButton.addEventListener('click', getMovies);

  searchInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
  });
  
  function movieHTML(movie) {
    return `<div class="movie__card"><a href="movie.html">
    <div class="movie__card--container">
      <div class="movie__description">
        <div class="movie__title">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
        <div class="movie__poster">
          <img src=${movie.Poster}>
          <p class="movie__summary">
              
          </p>
        </div>
      </div>    
    </div>
  </a></div>`
  };
 
  return (
    <section id="search">
      <div className="search__container">
        <div className="search__wrapper">
          <h2 className="search__container--header">
            Find your favorite movie!
          </h2>
          <input type="text" id="searchInput" placeholder=" Search Title" />
          <button type="submit" id="searchButton" onClick={getMovies}>
            <i className="fas fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <h1 className="movies__header">Movies</h1>
      <div className="movie__container">
        <div className="movie__row">
          <div className="movie__list">
            <div className="movie">
              <div className="movie__card--container">
                <div className="movie__card">
                  <div className="movie__description">
                    <a href="movie.html">
                      <div className="movie__title">
                        <h3>$movie.Title</h3>
                        <p>$movie.Year</p>
                      </div>
                      <div className="movie__poster">
                        {/* <img src={movie.Poster} alt="" /> */}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
