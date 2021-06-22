import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

export const FeaturedContainer = styled.section`
  background-color: #eae9e1;
`;

export const FeaturedInner = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 8rem;
  background-color: #531410;
  align-self: center;
`;

export const FeaturedCards = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  position: relative;
`;

export const SearchContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
`;

export const Search = styled(ImSearch)`
  position: absolute;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.3rem;
  color: #fff;
  border-radius: 50%;
  background: #531410;
  padding: 0.25rem 0.5rem;
  z-index: 2;
  border: 1px solid rgb(83, 20, 16);

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;

export const FeaturedBtn = styled(Link)`
  background-color: #531410;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
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
