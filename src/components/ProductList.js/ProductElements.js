import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 2rem;
  min-height: 100vh;
  max-width: 124rem;
  margin: 0 auto;
  position: relative;
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`;

export const ProductListSection = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  img {
    height: 20rem;
  }
`;

export const ProductGridBtnContainer = styled.div`
  display: grid;
  padding: 1.5rem;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  grid-gap: 1rem;

  p,
  label {
    font-size: 1.4rem;
    margin: 0 0.75rem;
    font-weight: 500;
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
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
