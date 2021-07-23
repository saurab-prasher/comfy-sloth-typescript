import styled from "styled-components";
import { ImSearch } from "react-icons/im";

export const Card = styled.div``;
export const CardImage = styled.img`
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  object-fit: cover;
  display: block;
  width: 100%;
  height: 20rem;
`;

export const CardImageContainer = styled.div`
  position: relative;
  transition: all 0.2s ease;
  background: rgb(0, 0, 0);
  border-radius: 5px;
  display: flex;

  &:hover img {
    opacity: 0.5;
  }
`;
export const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.4rem;
  text-transform: capitalize;
`;
export const Heading = styled.h3`
  font-weight: 500;
`;
export const Price = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
`;

export const SearchContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
`;

export const Search = styled(ImSearch)`
  position: absolute;
  transition: all 0.2s ease;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3.4rem;
  border-radius: 50%;
  padding: 0.65rem 0.1rem;
  background: #531410;

  z-index: 2;
  border: 1px solid rgb(83, 20, 16);

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
