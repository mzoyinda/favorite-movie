import React from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";

const SingleMovie = () => {
  return (
    <Container>
      <div className="flexbox">
        <img src={KOB} alt="" />
        <div className="description">
            <h1>King of Boys</h1>
            <p>Year</p>
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
width:70vw;

.flexbox{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 24px;
    /* max-width: 800px; */
    height: 100%;

    img{
        width: 400px;
        height: 450px;
        object-fit: cover;
        border: 2px solid var(--mainWhite);
    }
}

`;

export default SingleMovie;
