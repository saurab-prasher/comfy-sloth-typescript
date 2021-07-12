import React from "react";
import { useProductsContext } from "../../context/products_context";
import { ProductListContainer, NotFoundH1 } from "./ProductElements";

import Header from "../Header";
import ProductGridView from "./ProductGridView";
import ProductGridBtns from "./ProductGridBtns";
import ProductListView from "./ProductListView";
import Filters from "../Filters";
import Loading from "../Loading";
import { useFilterContext } from "../../context/filter_context";

const ProductList = () => {
  const { products_loading, products } = useProductsContext();
  const { filtered_products, products_view } = useFilterContext();

  return (
    <>
      <Header location="products" />

      <ProductListContainer>
        <Filters products={products} />
        {products_loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns />

            {filtered_products.length < 1 ? (
              <NotFoundH1>Sorry, no products matched your search.</NotFoundH1>
            ) : products_view === "grid" ? (
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
