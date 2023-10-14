import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
    const [open, setOpen] = useState(false)
  return (
    <FormContainer>
      <div className="cover">
        <input type="text" onClick={()=>setOpen(true)} placeholder="Add a movie" />
        {open ?
         <>
        <input type="text" placeholder="Movie genre" />
        <input type="text" placeholder="Release Year" />
        <input type="text" placeholder="Thumbnail link" />
        <textarea name="" id="" rows="8" placeholder="Plot"></textarea>
        <input type="text" placeholder="Ratings(1 - 5)" />
        <textarea name="" id="" rows="8" placeholder="Personal note"></textarea>
        </> : "" }
        <div className="btn_Container">
        <button>Submit</button>
        </div>
    </div>
    </FormContainer>
  );
};

const FormContainer = styled.header`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .cover {
    width: 80vw;
    margin: 0 auto;
    text-align: center;
  }

  input,
  textarea {
    /* display: block; */
    font-size: 16px;
    border: 1px solid var(--mainBlue);
    border-radius: 3px;
    padding: 12px 10px;
    margin-top: 10px;
    width: 80%;
    resize: none;
  }

  button {
    width: 150px;
    margin-top: 12px;
    padding: 12px 10px;
    background: var(--mainBlue);
    border: transparent;
    border-radius: 5px;
    color: white;
    &:hover{
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
    }
  }
`;

export default Form;
