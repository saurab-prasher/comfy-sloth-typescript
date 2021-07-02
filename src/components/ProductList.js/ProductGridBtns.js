import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { ProductGridBtnContainer } from "./ProductElements";
import Sort from "./Sort";

const ProductGridBtns = ({ products }) => {
  return (
    <ProductGridBtnContainer className="btn-container">
      <div className="btn-container">
        <button>
          <BsFillGridFill />
        </button>
        <BsList />
      </div>

      <p>{products.length} Products Found</p>

      <hr />
      <Sort />
    </ProductGridBtnContainer>
  );
};

export default ProductGridBtns;
