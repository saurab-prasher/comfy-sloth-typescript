import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;

export const GalleryCard = styled.div`
  display: flex;
  cursor: pointer;
`;
export const GalleryCardImg = styled.img`
  border-radius: 5px;
  object-fit: cover;
  max-height: 8rem;
  width: 100%;
  display: block;
  border: 1px solid transparent;
`;
