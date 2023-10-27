import React, { useEffect } from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";
import Swal from "sweetalert2";
import {SingleMovieContainer} from "../assets/styles"

const SingleMovie = ({ SingleMovie }) => {
  useEffect(() => {
    console.log(SingleMovie);
  }, []);

  const DeleteMovie = async (id) => {
    console.log("hey");
    const { value: code } = await Swal.fire({
      input: "text",
      inputLabel: "Authorize Delete",
      inputPlaceholder: "Enter Code to Authorize Delete",
    });

    if (code) {
      const URL = `${process.env.REACT_APP_MOVIE_SERVER}/api/movies/${id}`;
      fetch(URL, {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
          code: code,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          const message = data.message;
          if(message === "success"){
            Swal.fire("Movie Deleted Successfully!");
          }else{
            Swal.fire("Unauthorized User!");
          }
        });
    }
  };

  return (
    <SingleMovieContainer>
      <div className="flexbox">
        <img src={SingleMovie.thumbnail} alt="" />
        <div className="description">
          <h1>{SingleMovie.title}</h1>
          <div>
            <h3>Release Year: </h3>
            <p>{SingleMovie.year}</p>
          </div>
          <div>
            <h3>Genre: </h3>
            <p>{SingleMovie.genre}</p>
          </div>
          <div>
            <h3>Plot: </h3>
            <p>{SingleMovie.plot}</p>
          </div>
          <div>
            <h3>IMDB Rating: </h3>
            <p>{SingleMovie.imdbRating}</p>
          </div>
          <div>
            <h3>My Rating: </h3>
            <p>{SingleMovie.myRating}</p>
          </div>
          <div>
            <h3>Personal Note: </h3>
            <p>{SingleMovie.review}</p>
          </div>
          <div className="btn_container">
            <button onClick={() => DeleteMovie(SingleMovie._id)}>
              Delete Movie
            </button>
          </div>
        </div>
      </div>
    </SingleMovieContainer>
  );
};



export default SingleMovie;
