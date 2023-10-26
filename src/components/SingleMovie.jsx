import React, { useEffect } from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";
import Swal from "sweetalert2";

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
      const URL = `http://localhost:5000/api/movies/${id}`;
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
    <Container>
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
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--mainBlue);
  color: white;
  position: fixed;
  top: 15%;
  height: 80vh;
  width: 70vw;

  .flexbox {
    img {
      width: 300px;
      height: 450px;
      object-fit: cover;
      border: 2px solid var(--mainWhite);
    }

    .description {
      h1 {
        color: #d4aa3b;
        font-family: cursive;
        line-height: 46px;
        font-size: 36px;
        margin-bottom: 20px;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;

        p {
          color: white;
        }
      }
      div + div {
        margin-top: 24px;
      }
      .btn_container {
        display: flex;
        justify-content: center;
      }

      button {
        background-color: #d4aa3b;
        padding: 10px 25px;
        outline: 0;
        font-size: 14px;
        margin-top: 4px;
        border: transparent;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .flexbox {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;

      .description {
        max-width: 330px;
      }
    }
  }
`;

export default SingleMovie;
