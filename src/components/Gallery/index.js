import React, { useState } from "react";
import {
  GalleryContainer,
  GalleryCardImg,
  GalleryCardsContainer,
  GalleryMainImg,
  GalleryCard,
} from "./GalleryElements";

const Gallery = ({ images = [{ id: 1, url: "" }] }) => {
  const mainImage = images[0];
  const [main, setMain] = useState(mainImage);
  return (
    <>
      <GalleryContainer>
        <GalleryMainImg src={main?.url || mainImage.url} />
        <GalleryCardsContainer>
          {images.map((item, index) => {
            return (
              <GalleryCard key={item.id}>
                <GalleryCardImg
                  className={`${item.url === main.url ? "active" : null}`}
                  src={item.url}
                  alt={images.filename}
                  onClick={() => setMain(images[index])}
                />
              </GalleryCard>
            );
          })}
        </GalleryCardsContainer>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
