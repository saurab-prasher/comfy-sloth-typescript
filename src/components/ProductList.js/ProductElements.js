import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 3rem;
  min-height: 100vh;
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
`;

export const ProductListSection = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  img {
    height: 200px;
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
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
  }
`;
