import styled from "styled-components";

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