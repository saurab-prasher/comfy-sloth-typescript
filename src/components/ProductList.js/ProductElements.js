import { BsFillGridFill, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 2rem;
  min-height: 100vh;
  max-width: 124rem;
  margin: 0 auto;
  position: relative;
  padding: 1rem 3rem;
  background-color: #fdfdfd;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`;

export const ProductGridSection = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  grid-gap: 2rem;
  img {
    height: 18rem;
    object-fit: cover;
  }
`;

export const NotFoundH1 = styled.h1`
  font-size: 3rem;
  margin: 4rem 2rem;
  height: 50rem;
  font-weight: 500;
  text-align: center;
`;

export const ProductGridBtnContainer = styled.div`
  display: grid;
  padding: 1.5rem;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  grid-gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  p,
  label {
    font-size: 1.7rem;
    margin: 0 0.75rem;
    font-weight: 500;
    @media (max-width: 37.5em) {
      margin: 1rem 0;
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
    @media (max-width: 37.5em) {
      margin-bottom: 1rem;
    }
  }

  select {
    background-color: #dadada;
    background-color: #dadada;
    font-family: inherit;
    font-weight: 500;
    outline: none;
    border: none;
    padding: 0.45rem;

    &:focus {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }
`;

const sharedBtn = css`
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  padding: 0.35rem;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  background-color: transparent;
`;

export const BtnGrid = styled(BsFillGridFill)`
  ${sharedBtn}

  background-color: ${({ background }) =>
    background === "grid" ? "#000" : "#fff"};
  color: ${({ background }) => (background === "grid" ? "#fff" : "#000")};
`;

export const BtnList = styled(BsList)`
  ${sharedBtn}
  background-color: ${({ background }) =>
    background === "list" ? "#000" : "#fff"};
  color: ${({ background }) => (background === "list" ? "#fff" : "#000")};
`;

export const ProductListSection = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  align-items: center;

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const ProductListImage = styled.article`
  img {
    display: block;
    width: 30rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 3px;
  }
`;
export const ProductListText = styled.article`
  padding: 0 2rem;

  h1 {
    font-size: 2.2rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
  p {
    font-size: 1.7rem;
    margin: 1.5rem 0;
    font-weight: 500;
  }

  hr {
    border: none;
    border-bottom: 2px solid #ccc;

    margin: 2rem 0;
  }
`;

export const ProductListDetailBtn = styled(Link)`
  background-color: rgb(83, 20, 16);
  padding: 0.75rem;
  color: #fff;
  border: 1px solid transparent;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 3px;
  letter-spacing: 1px;
  display: inline-block;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
