import { useState } from 'react';
import {
  GalleryContainer,
  GalleryCardImg,
  GalleryCardsContainer,
  GalleryMainImg,
  GalleryCard,
} from './GalleryElements';

interface GalleryProps {
  images: {
    id: number;
    url: string;
    filename?: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
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
                  className={`${item.url === main.url ? 'active' : null}`}
                  src={item.url}
                  alt={item.filename}
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

Gallery.defaultProps = {
  images: [{ id: 1, url: '', filename: '' }],
};

export default Gallery;
