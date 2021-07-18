import React, { useEffect } from "react";

import { ProductListContainer, NotFoundH1 } from "./ProductElements";

import Header from "../Header";
import ProductGridView from "./ProductGridView";
import ProductGridBtns from "./ProductGridBtns";
import ProductListView from "./ProductListView";
import Filters from "../Filters";
import Loading from "../Loading";
import { useFilterContext } from "../../context/filter_context";

import { fetchProducts } from "../../actions";
import { connect } from "react-redux";

const ProductList = ({ products, loading, fetchProducts }) => {
  const { filtered_products, products_view } = useFilterContext();

  useEffect(() => {
    fetchProducts(process.env.REACT_APP_PRODUCTS_URL);
  }, []);

  return (
    <>
      <Header location="products" />

      <ProductListContainer>
        {/* <Filters products={products} /> */}
        {loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns />

            {/* {filtered_products.length < 1 ? (
              <NotFoundH1>Sorry, no products matched your search.</NotFoundH1>
            ) : products_view === "grid" ? (
              <ProductGridView />
            ) : (
              <ProductListView />
            )} */}

            {products_view === "grid" ? (
              <ProductGridView products={products} />
            ) : (
              <ProductListView products={products} />
            )}
          </section>
        )}
      </ProductListContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    loading: state.products.products_loading,
  };
};
export default connect(mapStateToProps, { fetchProducts })(ProductList);
