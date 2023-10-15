import React, { useState } from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";
import SingleMovie from "./SingleMovie";

const Movie = () => {
  const [Modal, setModal] = useState(false);

  // Movies gets populated from database in a useeffect
  // onclick on a movie, it calls getSingleMovie api

  return (
    <Gallery>
      <div
        className={Modal ? "wrapper" : ""}
        onClick={() => setModal(false)}
      ></div>
      <div className="cover">
        <div className="frame" onClick={() => setModal(true)}>
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame" onClick={() => setModal(true)}>
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame" onClick={() => setModal(true)}>
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame" onClick={() => setModal(true)}>
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame" onClick={() => setModal(true)}>
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame" onClick={() => setModal(true)}>
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
      </div>
      {Modal ? <SingleMovie /> : ""}
    </Gallery>
  );
};

const Gallery = styled.section`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 100%;
    position: absolute;
    height: 100%;
    background: var(--mainBlack);
    opacity: 0.8;
  }
  .cover {
    max-width: 1500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    .frame {
      width: 100%;
      max-width: 350px;
      margin-top: 26px;
      height: 300px;
      box-sizing: border-box;
      background-image: url(${KOB});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 5px solid var(--mainBlue);
      /* padding-bottom: 10px; */

      footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding-left: 20px;

        height: 100%;
        background: linear-gradient(
          rgba(0, 0, 0, 0) 78.21%,
          rgba(255, 255, 255, 0.863) 96.31%
        );
        cursor: pointer;

        p {
          color: var(--mainBlack);
          font-size: 16px;
          font-weight: 600;
        }

        p.year {
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }
`;

export default Movie;
