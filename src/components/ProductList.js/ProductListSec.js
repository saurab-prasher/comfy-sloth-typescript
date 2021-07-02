import React from "react";
import { useProductsContext } from "../../context/products_context";

import { ProductListSection } from "./ProductElements";

import Card from "../Card";

const ProductListSec = () => {
  const { products } = useProductsContext();

  return (
    <ProductListSection>
      {products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </ProductListSection>
  );
};

export default ProductListSec;
