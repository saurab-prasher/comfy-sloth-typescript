import styled from "styled-components";

// background-image: linear-gradient(to right, #642b28, #6d3734, #76433f, #7f4f4c, #875b58);

export const SignUpContainer = styled.main`
  height: 82.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;
export const FormContainer = styled.div`
  padding: 4rem 2rem;
  border-radius: 1rem;
  text-align: center;
  /* height: 50rem; */
  width: 45rem;
  border: 1px solid #ccc;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem auto;
  width: 90%;

  input {
    padding: 0.75rem 1rem;
    border: 1px solid #a4a39e;
    border-radius: 3px;

    font-family: inherit;
    outline: none;
    width: 100%;
    text-transform: capitalize;
    &:focus {
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    }
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  width: 90%;
  background-color: rgb(83, 20, 16);
  padding: 0.75rem 1rem;
  color: #fff;
  border: 1px solid transparent;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  span {
    display: inline-block;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }

  &:hover span {
    transform: translateX(0.5rem);
  }
`;
