import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { IoGridOutline } from "react-icons/io5";
import {
  ProductListContainer,
  ProductListSection,
  ProductGridBtnContainer,
} from "./ProductElements";

import Filters from "../Filters";
import Card from "../Card/";
import Data from "../../Data";

const ProductList = () => {
  const { list } = useGlobalContext();

  return (
    <ProductListContainer>
      <Filters />
      <section>
        <ProductGridBtnContainer className="btn-container">
          <div className="btn-container">
            <button>
              <IoGridOutline />
            </button>
            <button>flex</button>
          </div>

          <p>{Data.length} Products Found</p>

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
          {list.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </ProductListSection>
      </section>
    </ProductListContainer>
  );
};

export default ProductList;
