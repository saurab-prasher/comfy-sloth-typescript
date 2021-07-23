import React from "react";

import { ProductGridBtnContainer, BtnGrid, BtnList } from "./ProductElements";
import Sort from "./Sort";

const ProductGridBtns = ({
  products,
  view,
  handleProductView,
  updateSort,
  sort,
}) => {
  return (
    <ProductGridBtnContainer className="btn-container">
      <div className="btn-container">
        <BtnGrid onClick={() => handleProductView("grid")} background={view} />
        <BtnList onClick={() => handleProductView("list")} background={view} />
      </div>

      <p>{products.length ? products.length : null} Products Found</p>

      <hr />
      <Sort sort={sort} updateSort={updateSort} />
    </ProductGridBtnContainer>
  );
};

export default ProductGridBtns;
