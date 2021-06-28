import styled from "styled-components";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SinglePageMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
  max-width: 124rem;
  margin: 4rem auto;
  min-height: calc(80vh - 11.1rem);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SinglePageImg = styled.article``;

export const ProductName = styled.h1`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  display: inline-block;
`;

export const SinglePageText = styled.article`
  & li {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 1rem 0;
    text-transform: capitalize;
  }
`;
export const SinglePageH1 = styled.h1`
  font-size: 2.5rem;
  text-transform: capitalize;
`;
export const Star = styled(BsStar)`
  color: #ffb900;
  font-size: 1.2rem;
`;
export const StarFill = styled(BsStarFill)`
  color: #ffb900;
  font-size: 1.2rem;
`;

export const StarHalf = styled(BsStarHalf)`
  color: #ffb900;
  font-size: 1.2rem;
`;
export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;

  p {
    margin-left: 0.5rem;
  }
`;
export const Price = styled.p`
  font-weight: 600;
  margin: 1rem 0;
`;
export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1rem;
`;
