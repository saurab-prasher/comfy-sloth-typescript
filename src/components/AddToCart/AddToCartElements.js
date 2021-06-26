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
