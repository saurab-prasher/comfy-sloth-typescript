import React, { useState } from "react";
import { useProductsContext } from "../../context/products_context";
import { ProductListContainer } from "./ProductElements";

import Header from "../Header";
import ProductGridView from "./ProductGridView";
import ProductGridBtns from "./ProductGridBtns";
import ProductListView from "./ProductListView";
import Filters from "../Filters";
import Loading from "../Loading";
import { useFilterContext } from "../../context/filter_context";

const ProductList = () => {
  const { products_loading, products } = useProductsContext();
  const { filtered_products } = useFilterContext();

  const [productView, setProductView] = useState("grid");

  const handleProductListView = (view) => {
    setProductView(view);
  };

  return (
    <>
      <Header location="products" />

      <ProductListContainer>
        <Filters products={products} />
        {products_loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns
              handleView={handleProductListView}
              products={filtered_products}
              view={productView}
            />

            {filtered_products.length === 0 ? (
              <h1
                style={{
                  fontSize: "3rem",
                  margin: "4rem 2rem ",
                  height: "50rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Sorry, no products matched your search.
              </h1>
            ) : productView === "grid" ? (
              <ProductGridView />
            ) : (
              <ProductListView />
            )}
          </section>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
