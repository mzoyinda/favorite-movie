import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import styled from "styled-components";
import Movie from "./components/Movie";

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

const HomeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.cover{
    max-width: 1800px;
    width: 100%;
}
`;

export default Home;
