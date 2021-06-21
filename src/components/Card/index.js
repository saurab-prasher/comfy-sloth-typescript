import React, { useState } from "react";
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
const Cards = ({ id, img, heading, src, price }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card>
      <CardImageContainer
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <CardImage src={img?.default || src} />

        {hover && (
          <SearchContainer>
            <Link to={`/products/${id}`}>
              <Search />
            </Link>
          </SearchContainer>
        )}
      </CardImageContainer>
      <CardText>
        {heading && <Heading>{heading}</Heading>}
        {price && <Price>$ {price}</Price>}
      </CardText>
    </Card>
  );
};

export default Cards;
