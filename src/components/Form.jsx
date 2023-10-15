import React, { useState } from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [disableInputs, setDisableInputs] = useState(false);



  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    // set the movie object values
    setMovieDetails({
      ...movieDetails,
      [name]: value,
    });
    console.log(movieDetails);
  };

  const movieSearch = async (e) => {
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

    console.log(movieDetails);
  };

  const getSingleMovie = async (movieId) => {
    // get movie details with movie id
    const result = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await result.json();

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
    //   console.log(movieDetails);

    // disable filled inputs..
    setDisableInputs(true);
  };


  const handleSubmit = () => {
    
  }

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
          onChange={movieSearch}
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
              type="text"
              name="rating"
              value={movieDetails.myRating}
              onChange={handleChange}
              placeholder="Rate this movie from (1 - 10)"
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
          <button>Submit</button>
        </div>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.header`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .cover {
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }

  input,
  textarea {
    /* display: block; */
    font-size: 16px;
    border: 1px solid var(--mainBlue);
    border-radius: 3px;
    padding: 12px 10px;
    margin-top: 10px;
    width: 80%;
    resize: none;

    &::placeholder {
      color: var(--mainBlue);
      font-size: 15px;
    }
  }

  button {
    width: 150px;
    margin-top: 12px;
    padding: 12px 10px;
    background: var(--mainBlue);
    border: transparent;
    border-radius: 5px;
    color: white;
    &:hover {
      cursor: pointer;
      font-weight: 500;
      /* background: white;
        color: var(--mainBlue); */
      border: 1px solid var(--mainBlue);
    }
  }

  @media (min-width: 768px) {
    .cover {
      width: 80vw;
      margin: 0 auto;
      text-align: center;
    }
    input,
    textarea {
      width: 50%;
    }
  }
`;

const SearchContainer = styled.section`
  margin: 0 auto;
  max-width: 400px;
  /* text-align: center; */
  background-color: var(--mainBlack);
  .wrapper {
    padding-top: 5px;
    padding-left: 15px;
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    color: var(--mainWhite);
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }

    h3,
    p {
      text-align: left;
    }

    &:hover {
      cursor: pointer;
      background: var(--mainBlue);
      opacity: 0.8;
    }
  }
`;

export default Form;
