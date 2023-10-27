import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieAlbum";
import { HomeContainer } from "./assets/styles";

const Home = () => {
  const [Movies, setMovies] = useState([]);

  // Movies gets populated from database in useeffect
  const getMovies = () => {
    //    get all movies from server
    const URL = `${process.env.REACT_APP_MOVIE_SERVER}/api/movies/`;
    fetch(URL)
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setMovies(data);
        console.log(Movies);
      });
  };

  return (
    <HomeContainer>
      <div className="cover">
        <Navbar />
        <Form getMovies={getMovies} />
        <MovieGallery Movies={Movies} getMovies={getMovies} />
        <Footer />
      </div>
    </HomeContainer>
  );
};

export default Home;
