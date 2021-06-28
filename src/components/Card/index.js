import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardImage,
  CardText,
  Heading,
  Price,
  CardImageContainer,
} from "./CardElements";

import { formatPrice } from "../../utils/helper";
import { Search, SearchContainer } from "../Featured/FeaturesElements";

const Cards = ({ id, image, name, src, price }) => {
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
