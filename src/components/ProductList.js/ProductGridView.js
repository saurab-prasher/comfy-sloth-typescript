import React from "react";

import { ProductGridSection } from "./ProductElements";

import Card from "../Card";

const ProductGridView = ({ products }) => {
  return (
    <ProductGridSection>
      {products?.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </ProductGridSection>
  );
};

export default ProductGridView;
