import React from "react";

import { ProductGridBtnContainer, BtnGrid, BtnList } from "./ProductElements";
import Sort from "./Sort";

const ProductGridBtns = ({ products, handleView, view }) => {
  return (
    <ProductGridBtnContainer className="btn-container">
      <div className="btn-container">
        <BtnGrid onClick={() => handleView("grid")} background={view} />
        <BtnList onClick={() => handleView("list")} background={view} />
      </div>

      <p>{products.length} Products Found</p>

      <hr />
      <Sort />
    </ProductGridBtnContainer>
  );
};

export default ProductGridBtns;
