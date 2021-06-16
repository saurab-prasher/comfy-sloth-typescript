import styled from "styled-components";

export const Card = styled.div``;
export const CardImage = styled.img`
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;

export const CardImageContainer = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
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
  border: 1px solid red;
`;
export const Heading = styled.h3``;
export const Price = styled.p``;
