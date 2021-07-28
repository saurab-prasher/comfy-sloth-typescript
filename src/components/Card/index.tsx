import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardImage,
  CardText,
  Heading,
  Price,
  CardImageContainer,
  Search,
  SearchContainer,
} from './CardElements';

import { formatPrice } from '../../utils/helper';

interface CardsProps {
  id: string;
  image: string;
  name: string;
  src: string;
  price: number;
}

const Cards: React.FC<CardsProps> = ({ id, image, name, src, price }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card>
      <CardImageContainer
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <CardImage src={image || src} />

        {hover && (
          <SearchContainer>
            <Link to={`/products/${id}`}>
              <Search />
            </Link>
          </SearchContainer>
        )}
      </CardImageContainer>
      <CardText>
        {name && <Heading>{name}</Heading>}
        {price && <Price>{formatPrice(price)}</Price>}
      </CardText>
    </Card>
  );
};

export default Cards;
