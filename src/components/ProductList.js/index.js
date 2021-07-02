import React, { useState } from "react";
import { useProductsContext } from "../../context/products_context";
import { ProductListContainer } from "./ProductElements";

import Header from "../Header";
import ProductGridView from "./ProductGridView";
import ProductGridBtns from "./ProductGridBtns";
import ProductListView from "./ProductListView";
import Filters from "../Filters";
import Loading from "../Loading";

const ProductList = () => {
  const { products, products_loading, dispatch } = useProductsContext();

  const [productView, setProductView] = useState("grid");

  const handleProductListView = (view) => {
    setProductView(view);
  };

  return (
    <>
      <Header location="products" />
      <ProductListContainer>
        <Filters dispatch={dispatch} products={products} />
        {products_loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns
              handleView={handleProductListView}
              products={products}
              view={productView}
            />
            {productView === "grid" ? <ProductGridView /> : <ProductListView />}
          </section>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
