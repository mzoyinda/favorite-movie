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
      <div className="header">
        <h1>Trending Movies</h1>
        <div className="searchbox">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search movie"
          />
          <select name="sort" id="sort">
            <option value="">Sort By:</option>
            <option value="">Title Ascending</option>
            <option value="">Title Descending</option>
            <option value="">Year Ascending</option>
            <option value="">Year Descending</option>
          </select>
        </div>
      </div>
      <div className="cover">
        {Movies.map((movie) => (
          <div className="card">
            <div
              className="frame"
              key={movie._id}
              style={{ backgroundImage: `url(${movie.thumbnail})` }}
              onClick={() => getSingleMovie(movie._id)}
            ></div>
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

  .header {
    max-width: 950px;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: var(--mainBlue);
    display: flex;
    justify-content: space-between;
    .searchbox {
      input,
      select {
        outline: 0;
        border: transparent;
      }
      input {
        margin-right: 20px;
        padding: 5px;
        padding-left: 12px;
        width: 250px;
        height: 20px;
      }
      select {
        padding: 5px;
        width: 150px;
      }
    }
  }

  .cover {
    max-width: 1500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    .card {
      .frame {
        width: 100%;
        /* max-width: 300px; */
        margin-top: 26px;
        height: 300px;
        box-sizing: border-box;
        background-color: var(--mainBlue);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 5px solid var(--mainBlue);
        border-bottom: 0px;
      }
      footer {
        padding: 10px;
        background-color: var(--mainBlack);
        p {
          color: white;
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .card {
      .frame {
        width: 300px !important;
      }
    }
  }
`;

export default Movie;
