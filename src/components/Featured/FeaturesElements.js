import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

export const FeaturedContainer = styled.section`
  background-color: #f1f5f8;
`;

export const FeaturedInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FeaturedH2 = styled.h2`
  font-size: 3rem;
  color: red;
  position: relative;
  align-self: center;
  margin-bottom: 0.5rem;
`;
export const Line = styled.div`
  height: 4px;
  margin-bottom: 4rem;
  width: 8rem;
  background-color: purple;
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
  font-size: 2.5rem;
  color: #fff;
  border-radius: 10px;
  background: #00c075;
  padding: 0.5rem;
  z-index: 2;
`;

export const FeaturedBtn = styled(Link)`
  background-color: #00c075;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
  display: inline-block;
  align-self: center;
  margin-top: 3rem;
`;
