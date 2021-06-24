import React from "react";
import { useProductsContext } from "../../context/products_context";
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
  const { featured_products } = useProductsContext();
  console.log(featured_products);
  return (
    <FeaturedContainer>
      <FeaturedInner>
        <FeaturedH2>Featured Products</FeaturedH2>
        <Line />
        <FeaturedCards>
          {featured_products
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
