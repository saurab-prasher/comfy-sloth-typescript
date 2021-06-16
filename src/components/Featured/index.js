import React, { useEffect, useRef, useState } from "react";
import {
  FeaturedContainer,
  FeaturedH2,
  Line,
  FeaturedInner,
  FeaturedBtn,
  FeaturedCards,
} from "./FeaturesElements";
import Card from "../Card";
import data from "./Data";
const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedInner>
        <FeaturedH2>Featured Products</FeaturedH2>
        <Line />
        <FeaturedCards>
          {data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </FeaturedCards>
        <FeaturedBtn to="/products">All Products</FeaturedBtn>
      </FeaturedInner>
    </FeaturedContainer>
  );
};

export default Featured;
