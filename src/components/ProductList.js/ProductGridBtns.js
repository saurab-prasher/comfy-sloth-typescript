import React from "react";

import { ProductGridBtnContainer, BtnGrid, BtnList } from "./ProductElements";
import Sort from "./Sort";

import { useFilterContext } from "../../context/filter_context";
const ProductGridBtns = ({ products }) => {
  const { handleProductView, products_view, filtered_products } =
    useFilterContext();
  return (
    <ProductGridBtnContainer className="btn-container">
      <div className="btn-container">
        <BtnGrid
          onClick={() => handleProductView("grid")}
          background={products_view}
        />
        <BtnList
          onClick={() => handleProductView("list")}
          background={products_view}
        />
      </div>

      <p>{filtered_products.length} Products Found</p>

      <hr />
      <Sort />
    </ProductGridBtnContainer>
  );
};

export default ProductGridBtns;
