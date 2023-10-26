import React from "react";
import { NavContainer } from "../assets/styles";

const HomeNav = ({status, logout}) => {

  return (
    <NavContainer>
        <a href="/" className="brand">
          <h1>ChillTv</h1>
        </a>
    </NavContainer>
  );
};




export default HomeNav;
