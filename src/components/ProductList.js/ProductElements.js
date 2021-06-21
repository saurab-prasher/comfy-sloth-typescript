import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 3rem;
  min-height: 100vh;
  max-width: 1240px;
  margin: 0 auto;
`;

export const ProductListSection = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  img {
    height: 200px;
  }
`;
