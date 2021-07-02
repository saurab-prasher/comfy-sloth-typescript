import React from "react";
import { useProductsContext } from "../../context/products_context";
import { ProductListContainer } from "./ProductElements";

import Header from "../Header";
import ProductListSec from "./ProductListSec";
import ProductGridBtns from "./ProductGridBtns";
import Filters from "../Filters";
import Loading from "../Loading";

const ProductList = () => {
  const { products, products_loading, dispatch } = useProductsContext();

  return (
    <>
      <Header location="products" />
      <ProductListContainer>
        <Filters dispatch={dispatch} products={products} />
        {products_loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns products={products} />
            <ProductListSec />
          </section>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
