import styled from "styled-components";

export const GalleryContainer = styled.div``;

export const GalleryMainImg = styled.img`
  height: 450px;

  border-radius: 3px;
`;

export const GalleryCardsContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-gap: 0.75rem;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
`;

export const GalleryCard = styled.div`
  cursor: pointer;
`;
export const GalleryCardImg = styled.img`
  border-radius: 5px;
  height: 75px;
`;
