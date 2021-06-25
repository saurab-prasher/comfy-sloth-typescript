import styled from "styled-components";

export const CartContainer = styled.main`
  max-width: 124rem;
  margin: 0 auto;
`;

export const CartContainerHeadings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  /* justify-items: center; */
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;
export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  margin-bottom: 1rem;
  padding: 3rem 0;
`;
export const CartItemImgContainer = styled.div`
  display: flex;

  img {
    height: 75px;
  }
`;

export const CartItemBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemTotal = styled.div`
  margin-left: auto;
  width: fit-content;
  border: 1px solid #dadada;

  padding: 1rem 2rem;
`;
