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

export const FooterContainer = styled.footer`
background: var(--mainWhite);
  border-top:1px solid #E8E8E8;
  margin-top: 200px;
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