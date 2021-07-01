import React from "react";
import { useProductsContext } from "../../context/products_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import {
  ProductListContainer,
  ProductListSection,
  ProductGridBtnContainer,
} from "./ProductElements";

import Header from "../Header";
import Filters from "../Filters";
import Card from "../Card/";
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
            <ProductGridBtnContainer className="btn-container">
              <div className="btn-container">
                <button>
                  <BsFillGridFill />
                </button>
                <BsList />
              </div>

              <p>{products.length} Products Found</p>

              <hr />
              <div className="sort">
                <label htmlFor="sort">Sort By</label>
                <select name="sort" id="sort">
                  <option value="lowest">Price (Lowest)</option>
                  <option value="highest">Price (Highest)</option>
                  <option value="a-z">Name (A-Z)</option>
                  <option value="z-a">Name (Z-A)</option>
                </select>
              </div>
            </ProductGridBtnContainer>
            <ProductListSection>
              {products.map((item) => {
                return <Card key={item.id} {...item} />;
              })}
            </ProductListSection>
          </section>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
