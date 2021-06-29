import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryMainImg = styled.img`
  border-radius: 5px;
  width: 100%;
  display: block;
  height: 40rem;
  object-fit: cover;
  border: 1px solid #dadada;
`;

export const GalleryCardsContainer = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  align-items: center;
`;

export const GalleryCard = styled.div`
  display: flex;
  cursor: pointer;
`;
export const GalleryCardImg = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 100%;
  max-height: 8rem;
  display: block;

  border: 1px solid transparent;
`;
