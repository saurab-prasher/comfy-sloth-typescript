import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const AddToCartContainer = styled.div``;

export const AddToCartSection = styled.div`
  display: flex;
  align-items: baseline;
`;

const sharedCSS = css`
  background-color: transparent;
  font-size: 3rem;
  font-weight: 600;
  color: #531410;

  cursor: pointer;
  display: block;
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
  margin: 2rem;
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

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;
