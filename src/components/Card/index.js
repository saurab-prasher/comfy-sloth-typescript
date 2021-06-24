import React, { useState } from "react";
import { formatPrice } from "../../utils/helper";
import {
  Card,
  CardImage,
  CardText,
  Heading,
  Price,
  CardImageContainer,
} from "./CardElements";

import { Search, SearchContainer } from "../Featured/FeaturesElements";
import { Link } from "react-router-dom";
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
