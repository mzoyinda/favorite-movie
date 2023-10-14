import React from "react";
import styled from "styled-components";
import KOB from "../assets/kob.jpg";

const Movie = () => {
  return (
    <Gallery>
      <div className="cover">
        <div className="frame">
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame">
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame">
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame">
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
        <div className="frame">
          <footer>
            <p>King Of Boys</p>
            <p className="year">2021</p>
          </footer>
        </div>
      </div>
    </Gallery>
  );
};

const Gallery = styled.section`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

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
      max-width: 380px;
      margin-top: 26px;
      height: 300px;
      box-sizing: border-box;
      background-image: url(${KOB});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 1px solid var(--mainBlue);
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
        }
      }
    }
  }
`;

export default Movie;
