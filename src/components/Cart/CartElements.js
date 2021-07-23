import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const sharedBtn = css`
  color: #fff;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #531410;
    border: 1px solid rgb(83, 20, 16);
  }
`;

export const CartContainer = styled.main`
  max-width: 124rem;
  margin: 0 auto;
  height: 100vh;
  text-transform: capitalize;
  padding: 0 3rem;

  hr {
    height: 1px;
    border-width: 0;
    color: #dadada;
    background-color: #dadada;
  }
`;

export const CartContainerHeadings = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  justify-items: center;
  margin-bottom: 2rem;
  transform: translateX(-1rem);

  @media screen and (max-width: 37.5em) {
    grid-template-columns: repeat(4, 1fr) auto;
  }

  p {
    font-size: 1.6rem;
    display: inline-block;
  }
`;
export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  justify-items: center;
  align-items: center;
  margin: 4.5rem 0;
  font-size: 1.4rem;
  color: #531410;

  @media screen and (max-width: 37.5em) {
    grid-template-columns: repeat(4, 1fr) auto;
  }
`;

export const CartColorBtn = styled.button`
  background-color: ${({ background }) => `${background}`};
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  display: inline-block;
  margin: 0 0.5rem;
`;

export const CartItemImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;

  @media screen and (max-width: 37.5em) {
    flex-direction: column;

    div {
      margin-top: 1.5rem;
    }
  }

  p {
    display: flex;
    align-items: center;

    @media screen and (max-width: 37.5em) {
      justify-content: space-between;
    }
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    margin-right: 1.5rem;
    border-radius: 5px;
  }
`;
export const CartItemTotalContainer = styled.div`
  max-width: 33%;
  min-width: fit-content;
  margin: 5rem 0;
  margin-left: auto;

  @media screen and (max-width: 48em) {
    margin: 5rem auto;
    max-width: 50%;
  }
`;
export const CartItemTotal = styled.div`
  border: 1px solid #dadada;
  padding: 2.5rem 3.5rem;
  font-size: 1.6rem;
  border-radius: 3px;
  letter-spacing: 1px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    margin-bottom: 3rem;
  }
  & > * {
    margin-bottom: 1.6rem;
  }
  h2 {
    font-weight: 500;
  }
`;

export const CartItemTotalBtn = styled(Link)`
  ${sharedBtn}
  display: block;
  font-size: 1.6rem;
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;
  font-weight: 500;
  background-color: #531410;
`;
export const Price = styled.div``;
export const SubTotal = styled.div``;
export const Delete = styled.div``;

export const DeleteBtn = styled(RiDeleteBinLine)`
  color: #531410;
  cursor: pointer;
  font-size: 2.2rem;
`;

export const CartItemBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const BtnContinue = styled(Link)`
  ${sharedBtn}
  background-color: #531410;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const BtnClear = styled.button`
  ${sharedBtn}
  background-color: #444;

  &:hover {
    color: #444;
    border: 1px solid #444;
  }
`;

export const ChangeQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  width: ${({ singleProduct }) => (singleProduct ? "12rem" : "10rem")};
  transform: translateX(0);
  font-size: ${({ singleProduct }) => (singleProduct ? "1.8rem" : "1.6rem")};
  transform: translateX(
    ${({ singleProduct }) => (singleProduct ? "0rem" : "2rem")}
  );
  margin: ${({ singleProduct }) => (singleProduct ? "1.5rem 0" : null)};

  @media screen and (max-width: 48em) {
  }

  @media screen and (max-width: 37.5em) {
    width: ${({ singleProduct }) => (singleProduct ? "12rem" : "8rem")};
    transform: translateX(0);
  }
`;

const sharedCSS = css`
  background-color: transparent;
  font-size: 3rem;
  font-weight: 600;
  color: #531410;
  cursor: pointer;
  display: block;
`;

export const IncreaseItem = styled.button`
  ${sharedCSS}
`;
export const DecreaseItem = styled.button`
  ${sharedCSS}
`;
export const Amount = styled.p`
  ${sharedCSS}
  cursor: default;
`;
