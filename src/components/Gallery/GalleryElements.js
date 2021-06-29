import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GalleryMainImg = styled.img`
  border-radius: 3px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const GalleryCardsContainer = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-gap: 1.5rem;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  overflow: hidden;
`;

export const GalleryCard = styled.div`
  cursor: pointer;
`;
export const GalleryCardImg = styled.img`
  border-radius: 5px;
  height: 75px;
  width: 100%;
  border: 1px solid transparent;
`;
