import React from "react";
import styled from "styled-components";

const HomeNav = ({status, logout}) => {


  return (
    <NavContainer>
        <a href="/" className="brand">
          <h1>MovieWorld</h1>
        </a>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  max-width: 1700px;
  background: var(--mainBlue);
  box-shadow: 0px 5px 15px rgba(53, 53, 53, 0.05);
  border-bottom:1px solid var(--mainWhite);
  padding-top: 10px;
  padding-bottom:  5px;
  padding-left: 24px;
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


export default HomeNav;
