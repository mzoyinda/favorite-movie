import styled from "styled-components";

export const HomeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.cover{
    max-width: 1800px;
    width: 100%;
}
`;

export const NavContainer = styled.div`
  /* text-align: center; */
  background: var(--mainBlue);
  box-shadow: 0px 5px 15px rgba(53, 53, 53, 0.05);
  border-bottom:1px solid var(--mainWhite);
  padding-top: 15px;
  padding-bottom:  10px;
  padding-left: 25px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    font-weight: 500;
    text-align: center;
    display: inline-flex;
    text-decoration: none;
    color: var(--mainWhite);

    &:hover {
      font-weight: 600;
      cursor: pointer;
    }
  }


  h1 {
    font-size: 24px;
    margin-top: 10px;
    letter-spacing: 0.03em;
    line-height: 32px;
  }

`;

export const SingleMovieContainer = styled.section`
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

export const FormContainer = styled.header`
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
    margin-top: 10px !important;
    width: 80%;
    resize: none;

    &::placeholder {
      color: var(--mainBlue);
      font-size: 15px;
    }
  }

  /* input#number{
    width: 80%;
  } */

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
      margin: 0 auto;
      display: block;
    }
    /* input#number{
    width: 100px;
    align-self: flex-start;
  } */
  }
`;

export const SearchContainer = styled.section`
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

export const Gallery = styled.section`
margin-top: 40px;

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.wrapper {
  width: 100%;
  position: absolute;
  height: 100%;
  background: var(--mainBlack);
  opacity: 0.8;
}

.header {
  max-width: 950px;
  width: 100%;
  padding: 10px;
  color: white;
  background-color: var(--mainBlue);
  display: flex;
  justify-content: space-between;
  .searchbox {
    input,
    select {
      outline: 0;
      border: transparent;
    }
    input {
      margin-right: 20px;
      padding: 5px;
      padding-left: 12px;
      width: 250px;
      height: 30px;
    }
    select {
      padding: 5px;
      width: 150px;
    }
  }
}

.cover {
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  .card {
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    .frame {
      width: 100%;
      /* max-width: 300px; */
      margin-top: 26px;
      height: 300px;
      box-sizing: border-box;
      background-color: var(--mainBlue);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 5px solid var(--mainBlue);
      border-bottom: 0px;
    }
    footer {
      padding: 10px;
      background-color: var(--mainBlack);
      p {
        color: white;
        font-size: 14px;
        margin-top: 5px;
      }
      p.title {
        font-weight: 600;
      }
    }
  }
}

@media (min-width: 768px) {
  .card {
    .frame {
      width: 300px !important;
    }
  }
}
`;


export const FooterContainer = styled.footer`
background: var(--mainWhite);
  border-top:1px solid #E8E8E8;
  margin-top: 50vh;
  padding-top: 10px;
  text-align: center;
  width: 100%;
  a {
    color: var(--mainBlack);
    font-style: cursive;
    font-weight: 600;
    text-decoration: underline;
  }
  p {
    color: var(--mainBlack);
    font-size: 14px;
    padding: 10px 0;
    font-weight: 500;
  }
`;