import React from "react";
import { useFilterContext } from "../../context/filter_context";

import { ProductGridSection } from "./ProductElements";

import Card from "../Card";

const ProductGridView = () => {
  const { filtered_products } = useFilterContext();

  return (
    <ProductGridSection>
      {filtered_products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </ProductGridSection>
  );
};

export default ProductGridView;
