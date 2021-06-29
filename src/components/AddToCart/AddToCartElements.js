import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5em;
  width: fit-content;
`;

export const AddToCartSection = styled.div`
  display: flex;
  justify-content: baseline;
`;

const sharedCSS = css`
  background-color: transparent;
  font-size: 3rem;
  font-weight: 600;
  color: #531410;

  cursor: pointer;
  display: block;
`;

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: capitalize;
`;
export const AddToCartIncBtn = styled.button`
  ${sharedCSS}
`;
export const AddToCartDecBtn = styled.button`
  ${sharedCSS}
`;
export const AddToCartAmount = styled.p`
  ${sharedCSS}
  cursor: default;
  margin: 1.5rem;
`;
export const ColorsBtn = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-block;
  margin-left: 0.75rem;
  cursor: pointer;
  opacity: 0.5;
  background-color: ${({ background }) => `${background}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
`;

export const AddToCartBtn = styled(Link)`
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
  display: inline-block;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
