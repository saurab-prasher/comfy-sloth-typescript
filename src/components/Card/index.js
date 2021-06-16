import React, { useEffect } from "react";
import {
  Card,
  CardImage,
  CardText,
  Heading,
  Price,
  CardImageContainer,
} from "./CardElements";
const Cards = ({ id, img, heading, price, handleSearchIcon }) => {
  const refContainer = React.useRef("");

  useEffect(() => {}, [refContainer]);
  return (
    <Card
      onMouseEnter={() => handleSearchIcon(refContainer)}
      onMouseLeave={() => handleSearchIcon(refContainer)}
    >
      <CardImageContainer ref={refContainer}>
        <CardImage src={img.default} />
      </CardImageContainer>
      <CardText>
        <Heading>{heading}</Heading>
        <Price>$ {price}</Price>
      </CardText>
    </Card>
  );
};

export default Cards;
