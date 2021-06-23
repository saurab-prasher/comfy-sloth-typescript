import React from "react";
import { useGlobalContext } from "../../context";
import {
  FeaturedContainer,
  FeaturedH2,
  Line,
  FeaturedInner,
  FeaturedBtn,
  FeaturedCards,
} from "./FeaturesElements";
import Card from "../Card";

const Featured = () => {
  const { list } = useGlobalContext();
  return (
    <FeaturedContainer>
      <FeaturedInner>
        <FeaturedH2>Featured Products</FeaturedH2>
        <Line />
        <FeaturedCards>
          {list
            .filter((item) => item.featured)
            .map((item) => {
              return <Card key={item.id} {...item} />;
            })}
        </FeaturedCards>
        <FeaturedBtn to="/products">All Products</FeaturedBtn>
      </FeaturedInner>
    </FeaturedContainer>
  );
};

export default Featured;
