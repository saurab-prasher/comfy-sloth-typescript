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
const Cards = ({ id, img, heading, price }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card>
      <CardImageContainer
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <CardImage src={img.default} />

        {hover && (
          <SearchContainer>
            <Link to={`/products/${id}`}>
              <Search />
            </Link>
          </SearchContainer>
        )}
      </CardImageContainer>
      <CardText>
        <Heading>{heading}</Heading>
        <Price>$ {price}</Price>
      </CardText>
    </Card>
  );
};

export default Cards;
