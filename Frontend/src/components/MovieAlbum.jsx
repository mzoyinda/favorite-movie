import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleMovie from "./SingleMovie";
import { Gallery } from "../assets/styles";

const Movie = () => {
  const [Modal, setModal] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  const [query, setQuery] = useState("");

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

  
  // onclick on a movie card, it calls getSingleMovie api
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


  // search for a movie from the movies list
  const filteredMovie = Movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.year.toLowerCase().includes(query.toLowerCase())
      );
    } 
  );

  // const SortMovies = (e) => {
  //   // setSortType(e.target.value);
  //   if (sortType === "title-asc") {
  //     filteredMovie.sort((a, b) => (a["title"] < b["title"] ? -1 : 1));
  //   } else if (sortType === "title-dsc") {
  //     filteredMovie.sort((a, b) => (b["title"] > a["title"] ? 1 : -1));
  //   }
  //   return filteredMovie;
  // };

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
            type="search"
            name="search"
            id="search"
            placeholder="search movie"
            value={query}
            onChange={(e)=>  setQuery(e.target.value)}
          />
          {/* <select onChange={SortMovies} name="sort" id="sort">
            <option value="">Sort By:</option>
            <option value="title-asc">Title </option>
            <option value="">Year </option>
          </select> */}
        </div>
      </div>
      <div className="cover">
        {filteredMovie.map((movie) => (
          <div className="card">
            <div
              className="frame"
              key={movie._id}
              style={{ backgroundImage: `url(${movie.thumbnail})` }}
              onClick={() => getSingleMovie(movie._id)}
            ></div>
            <footer>
              <p className="title">{movie.title}</p>
              <p className="year">{movie.year}</p>
            </footer>
          </div>
        ))}
      </div>
      {Modal ? <SingleMovie SingleMovie={singleMovie} /> : ""}
    </Gallery>
  );
};


export default Movie;
