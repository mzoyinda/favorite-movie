import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";
import SingleMovie from "./SingleMovie";
import Swal from "sweetalert2";

const Movie = () => {
  const [Modal, setModal] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});

  // Movies gets populated from database in useeffect
  useEffect(() => {
    //    get all movies from server
    const URL = "http://localhost:5000/api/movies/";
    fetch(URL)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setMovies(data);
        console.log(Movies);
      });
  }, []);

  // onclick on a movie, it calls getSingleMovie api
  const getSingleMovie = (id) => {
    console.log(id);
    setModal(true);
    const URL = `http://localhost:5000/api/movies/${id}`;
    fetch(URL)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setSingleMovie(data);
        console.log(singleMovie);
      });
  };

  return (
    <Gallery>
      <div
        className={Modal ? "wrapper" : ""}
        onClick={() => setModal(false)}
      ></div>
      <h1>Trending Movies</h1>
      <div className="cover">
        {Movies.map((movie) => (
          <div
            className="frame"
            key={movie._id}
            style={{ backgroundImage: `url(${movie.thumbnail})` }}
            onClick={() => getSingleMovie(movie._id)}
          >
            <footer>
              <p>{movie.title}</p>
              <p className="year">{movie.year}</p>
            </footer>
          </div>
        ))}
      </div>
      {Modal ? <SingleMovie SingleMovie={singleMovie} /> : ""}
    </Gallery>
  );
};

const Gallery = styled.section`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .wrapper {
    width: 100%;
    position: absolute;
    height: 100%;
    background: var(--mainBlack);
    opacity: 0.8;
  }

  h1 {
    background-color: var(--mainBlue);
    color: white;
    padding: 10px;
    width: 100%;
    max-width: 950px;
  }

  .cover {
    max-width: 1500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    .frame {
      width: 100%;
      max-width: 300px;
      margin-top: 26px;
      height: 300px;
      box-sizing: border-box;
      background-color: var(--mainBlue);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 5px solid var(--mainBlue);
      /* padding-bottom: 10px; */

      footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding-left: 20px;

        height: 100%;
        background: linear-gradient(
          rgba(0, 0, 0, 0) 78.21%,
          rgba(255, 255, 255, 0.863) 96.31%
        );
        cursor: pointer;

        p {
          color: var(--mainBlack);
          font-size: 16px;
          font-weight: 600;
        }

        p.year {
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      /* align-self: flex-start; */
      /* margin-left: 13vw; */
    }
  }
`;

export default Movie;
