import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeaturedContainer = styled.section`
  background-color: #eae9e1;
  max-height: fit-content;
  min-height: 50rem;
  position: relative;
`;

export const FeaturedInner = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FeaturedH2 = styled.h2`
  font-size: 3rem;
  color: #444444;
  position: relative;
  align-self: center;
  margin-bottom: 0.5rem;
`;
export const Line = styled.div`
  height: 4px;
  margin-bottom: 4rem;
  width: 12rem;
  background-color: #531410;
  align-self: center;
`;

export const FeaturedCards = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const FeaturedBtn = styled(Link)`
  background-color: #531410;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 3px;
  display: inline-block;
  align-self: center;
  margin-top: 3rem;
  border: 1px solid transparent;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
