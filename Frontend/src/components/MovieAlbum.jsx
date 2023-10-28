import React, { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";
import { Gallery } from "../assets/styles";
import Loading from "../assets/loading.gif";

const Movie = ({Movies, getMovies}) => {
  const [Modal, setModal] = useState(false);
  // const [Movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  const [query, setQuery] = useState("");

  // Movies gets populated from database in useeffect
  useEffect(() => {
    getMovies();
  }, []);

  
  // onclick on a movie card, it calls getSingleMovie api
  const getSingleMovie = (id) => {
    console.log(id);
    setModal(true);
    const URL = `${process.env.REACT_APP_MOVIE_SERVER}/api/movies/${id}`;
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
        {filteredMovie.length === 0 ? (
          <img src={Loading} alt="loading gif" />
        )
         : 
        filteredMovie
       .sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
        .map((movie) => (
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
      {/* On click of a movie card, it should open the movie details component */}
      {Modal ? <SingleMovie setModal={setModal} getMovies={getMovies} SingleMovie={singleMovie} /> : ""}
    </Gallery>
  );
};


export default Movie;
