import React from "react";

import { ProductListContainer, NotFoundH1 } from "./ProductElements";

import Header from "../Header";
import ProductGridView from "./ProductGridView";
import ProductGridBtns from "./ProductGridBtns";
import ProductListView from "./ProductListView";
import Filters from "../Filters";
import Loading from "../Loading";

import {
  fetchProducts,
  handleProductView,
  updateSort,
  filteringProducts,
} from "../../actions";
import { connect } from "react-redux";

const ProductList = ({
  products,
  sort,
  loading,
  view,
  handleProductView,
  updateSort,
}) => {
  console.log(products);
  return (
    <>
      <Header location="products" />
      <ProductListContainer>
        <Filters />
        {loading ? (
          <Loading productList={true} />
        ) : (
          <section>
            <ProductGridBtns
              products={products}
              updateSort={updateSort}
              sort={sort}
              handleProductView={handleProductView}
              view={view}
            />

            {products.length < 1 ? (
              <NotFoundH1>Sorry, no products matched your search.</NotFoundH1>
            ) : view === "grid" ? (
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
    products: state.filter.filtered_products,
    loading: state.products.products_loading,
    view: state.filter.products_view,
    sort: state.filter.sort,
    filters: state.filter.filters,
  };
};
export default connect(mapStateToProps, {
  fetchProducts,
  handleProductView,
  updateSort,
  filteringProducts,
})(ProductList);
