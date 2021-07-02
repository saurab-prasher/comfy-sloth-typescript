import React from "react";
import { useProductsContext } from "../../context/products_context";

import { ProductGridSection } from "./ProductElements";

import Card from "../Card";

const ProductGridView = () => {
  const { products } = useProductsContext();

  return (
    <ProductGridSection>
      {products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </ProductGridSection>
  );
};

export default ProductGridView;
