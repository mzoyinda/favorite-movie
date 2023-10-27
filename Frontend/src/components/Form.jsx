import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FormContainer, SearchContainer } from "../assets/styles";

const Form = ({ getMovies }) => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [disableInputs, setDisableInputs] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    // set the movie object values
    setMovieDetails({
      ...movieDetails,
      [name]: value,
    });
    // console.log(movieDetails);
  };

  const getMovieList = async (e) => {
    const value = e.currentTarget.value;
    setDisableInputs(false);

    // reset movie list if value is empty
    if (value === "") setMovies([]);

    // set the movie title value
    setMovieDetails({
      ...movieDetails,
      title: value,
    });

    //    get movie match from imdb with the inputed value
    const URL = `https://omdbapi.com/?s=${value}&page=1&apikey=${process.env.REACT_APP_API_KEY}`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    const MovieResults = data.Search;

    if (data.Response === "True") setMovies(MovieResults);

    // console.log(movieDetails);
  };

  const getSingleMovie = async (movieId) => {
    // get movie details with movie id
    const result = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await result.json();
    console.log(data);
    if (data.Response === "True")
      // set movie object to the received details:
      setMovieDetails({
        ...movieDetails,
        title: data.Title,
        genre: data.Genre,
        plot: data.Plot,
        year: data.Year,
        thumbnail: data.Poster,
        imdbRating: data.imdbRating,
      });
    // console.log(movieDetails);

    // disable filled inputs..
    setDisableInputs(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(movieDetails);

    // check if form is empty
    if (Object.keys(movieDetails).length === 0) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Please input all fields",
        showConfirmButton: false,
        timer: 1500,
      });
    } 
    
    // else push movie to server
    else {
      const URL = `${process.env.REACT_APP_MOVIE_SERVER}/api/movies/`;
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(movieDetails),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    const data = await res.json();
    console.log(data);

    // if successful show successs screen and get latest movies
      if (data.message === "movie created") {
        Swal.fire({
          icon: "success",
          title: "Movie Created Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);

        setLoading(false);
        setMovieDetails({});
        setOpen(false);

        getMovies();
      } 

      // else show error screen
      else {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Some error occured",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  //  movie list component from search input
  const MovieList = () => {
    return (
      <SearchContainer>
        {movies.map((item) => (
          <div
            key={item.imdbID}
            className="wrapper"
            onClick={() => getSingleMovie(item.imdbID)}
          >
            <div className="thumbnail">
              <img src={item.Poster} alt=" " />
            </div>
            <div className="movie">
              <h3>{item.Title}</h3>
              <p>{item.Year}</p>
            </div>
          </div>
        ))}
      </SearchContainer>
    );
  };

  // the form component
  return (
    <FormContainer>
      <div className="cover">
        <input
          type="text"
          name="title"
          value={movieDetails.title}
          onChange={getMovieList}
          onClick={() => setOpen(true)}
          placeholder="Add a movie"
        />

        {/* Show/Hide the search list component */}
        {disableInputs ? "" : <MovieList />}

        {open ? (
          <>
            <input
              type="text"
              name="genre"
              value={movieDetails.genre}
              onChange={handleChange}
              placeholder="Movie genre"
              disabled={disableInputs}
            />
            <input
              type="text"
              name="year"
              value={movieDetails.year}
              onChange={handleChange}
              placeholder="Release Year"
              disabled={disableInputs}
            />
            <input
              type="text"
              name="thumbnail"
              value={movieDetails.thumbnail}
              onChange={handleChange}
              placeholder="Thumbnail link"
              disabled={disableInputs}
            />
            <textarea
              id="plot"
              name="plot"
              value={movieDetails.plot}
              onChange={handleChange}
              rows="8"
              placeholder="Plot"
              disabled={disableInputs}
            ></textarea>
            <input
              type="number"
              id="number"
              name="myRating"
              min="1"
              max="5"
              value={movieDetails.myRating}
              onChange={handleChange}
              placeholder="Rate this movie from (1 - 5)"
            />
            <textarea
              name="review"
              value={movieDetails.review}
              onChange={handleChange}
              id=""
              rows="8"
              placeholder="Extra Review"
            ></textarea>
          </>
        ) : (
          ""
        )}
        <div className="btn_Container">
          <button onClick={handleSubmit}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </FormContainer>
  );
};

export default Form;
