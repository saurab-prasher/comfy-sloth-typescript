import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SinglePageHeader = styled.header`
  background-color: #eaded7;
`;
export const HeaderInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: 500;
  color: #453227;
  padding: 5rem 0;
  margin-bottom: 4rem;
`;
export const HomeLink = styled(Link)``;
export const Products = styled.a``;

export const SinglePageMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
  max-width: 1240px;
  margin: 0 auto;
  margin-bottom: 4.15rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SinglePageImg = styled.article``;

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
`;
export const Star = styled(AiFillStar)`
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

export const AddToCartBtn = styled.button`
  background-color: #531410;
  padding: 1rem;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
