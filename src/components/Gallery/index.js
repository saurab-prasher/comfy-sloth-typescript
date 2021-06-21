import React, { useRef, useState } from "react";
import img1 from "../../images/gallery-1.jpeg";
import img2 from "../../images/gallery-2.jpeg";
import img3 from "../../images/gallery-3.jpeg";
import img4 from "../../images/gallery-4.jpeg";
import {
  GalleryContainer,
  GalleryCardImg,
  GalleryCardsContainer,
  GalleryMainImg,
  GalleryCard,
} from "./GalleryElements";
const Gallery = ({ src }) => {
  const [index, setIndex] = useState(0);
  const imagesArray = [src, img1, img2, img3, img4];

  const handleCardClick = (idx) => {
    setIndex(idx);
  };

  return (
    <>
      <GalleryContainer>
        <GalleryMainImg src={imagesArray[index]} />
        <GalleryCardsContainer>
          {imagesArray.map((item, idx) => {
            return (
              <GalleryCard onClick={() => handleCardClick(idx)} key={idx}>
                <GalleryCardImg src={imagesArray[idx]} />
              </GalleryCard>
            );
          })}
        </GalleryCardsContainer>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
