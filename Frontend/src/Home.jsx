import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Movie from "./components/MovieAlbum";
import { HomeContainer } from "./assets/styles";

const Home = () => {
  return (
    <HomeContainer>
      <div className="cover">
        <Navbar />
        <Form />
       <Movie/>
        <Footer />
      </div>
    </HomeContainer>
  );
};


export default Home;
