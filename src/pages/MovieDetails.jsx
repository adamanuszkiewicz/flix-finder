import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return (
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
    // <div className="movie__details--container">
    //   <div className="movie__details--card--container">
    //     <div className="movie__row">
    //       <div className="movie__details--list">
    //         <div className="movie__card" key={movie.imdbID}>
    //           <div className="movie__card--container">
    //             <div className="movie__details--description">
    //               <div className="movie__title">
    //                 <h3 className="m-title">{movie.Title}</h3>
    //                 <p className="m-year">{movie.Year}</p>
    //                 <p className="m-plot">{movie.Plot}</p>
    //               </div>
    //               <div className="movie__poster">
    //                 <img src={movie.Poster} alt={movie.Title} />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MovieDetails;
