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

  hr {
    height: 1px;
    border-width: 0;
    color: #dadada;
    background-color: #dadada;
  }
`;

export const CartContainerHeadings = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) auto;
  justify-items: start;
  margin-bottom: 2.5rem;

  p {
    font-size: 1.6rem;
  }
`;
export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) auto;
  align-items: center;
  margin: 4.5rem 0;
  font-size: 1.4rem;
  color: #531410;
  letter-spacing: 1px;
  align-items: center;
  justify-items: start;
`;
export const CartItemImgContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  img {
    width: 150px;
    height: 100px;
    margin-right: 1.5rem;
    border-radius: 5px;
  }
`;
export const CartItemTotalContainer = styled.div`
  max-width: 33%;
  min-width: fit-content;
  margin: 5rem 0;
  margin-left: auto;
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

export const CartItemTotalBtn = styled.button`
  ${sharedBtn}
  width:100%;
  margin-top: 1.5rem;
  background-color: #531410;
`;
export const Price = styled.div`
  p {
    margin-left: 2rem;
  }
`;
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
  width: 100px;
  margin-right: -5rem;
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
