import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 124rem;
  grid-gap: 5rem;
  margin: 10rem auto;
  justify-content: space-between;
  padding: 0 3rem;
  color: #444444;

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`;
export const HeroText = styled.article`
  flex-basis: 100%;
`;
export const HeroH1 = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 1.5rem;
`;
export const HeroP = styled.p`
  font-size: 1.8rem;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 2rem;
`;
export const HeroBtn = styled(Link)`
  background-color: rgb(83, 20, 16);
  padding: 0.75rem 1rem;
  color: #fff;
  border: 1px solid transparent;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
export const HeroImageContainer = styled.article`
  flex-basis: 100%;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;
export const HeroImage = styled.img``;
