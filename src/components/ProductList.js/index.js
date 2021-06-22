import React, { useEffect, useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import {
  ProductListContainer,
  ProductListSection,
  FilterContainer,
  FilterFormContainer,
  FilterCategory,
  FilterCompany,
  FilterColors,
  FilterPrice,
  FilterShipping,
  FilterClearBtn,
  FilterClear,
  ProductGridBtnContainer,
  FilterColorBtnBlack,
  FilterColorBtnBlue,
  FilterColorBtnGreen,
  FilterColorBtnRed,
  FilterColorBtnYellow,
} from "./ProductElements";
import Card from "../Card/";
import Data from "../../Data";

const ProductList = () => {
  const [list, setList] = useState(Data);
  const [category, setCategory] = useState("All");

  const handleCategory = (e) => {
    const category = e.target.dataset.category;
    setCategory(category);
  };

  return (
    <ProductListContainer>
      <FilterContainer>
        <FilterFormContainer className="form">
          <form>
            <input placeholder="Search" type="text" />
          </form>
        </FilterFormContainer>

        <FilterCategory className="category">
          <h3>Category</h3>
          <button onClick={handleCategory} data-category="All">
            All
          </button>
          <button onClick={handleCategory} data-category="office">
            Office
          </button>
          <button onClick={handleCategory} data-category="living room">
            Living Room
          </button>
          <button onClick={handleCategory} data-category="kitchen">
            Kitchen
          </button>
          <button onClick={handleCategory} data-category="bedroom">
            Bedroom
          </button>
          <button onClick={handleCategory} data-category="dining">
            Dining
          </button>
          <button onClick={handleCategory} data-category="kids">
            Kids
          </button>
        </FilterCategory>

        <FilterCompany className="company">
          <h3>Company</h3>

          <select name="company" id="company">
            <option value="all">all</option>
            <option value="marcos">marcos</option>
            <option value="liddy">liddy</option>
            <option value="ikea">ikea</option>
            <option value="caressa">caressa</option>
          </select>
        </FilterCompany>

        <FilterColors className="color">
          <h3>Colors</h3>
          <button>All</button>
          <FilterColorBtnRed data-color="red"></FilterColorBtnRed>
          <FilterColorBtnGreen></FilterColorBtnGreen>
          <FilterColorBtnBlue></FilterColorBtnBlue>
          <FilterColorBtnBlack></FilterColorBtnBlack>
          <FilterColorBtnYellow></FilterColorBtnYellow>
        </FilterColors>

        <FilterPrice className="price">
          <label htmlFor="price">Price</label>
          <p>$3,339.99</p>
          <input type="range" name="price" id="price" />
        </FilterPrice>

        <FilterShipping className="free-shipping">
          <label htmlFor="freeshipping">Free Shipping</label>
          <input type="checkbox" name="freeshipping" id="freeshipping" />
        </FilterShipping>
        <FilterClear className="clear">
          <FilterClearBtn>Clear Filters</FilterClearBtn>
        </FilterClear>
      </FilterContainer>

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
          {category === "All"
            ? Data.map((item) => {
                return <Card key={item.id} {...item} />;
              })
            : list
                .filter((item) => item.category === category)
                .map((item) => {
                  return <Card key={item.id} {...item} />;
                })}
        </ProductListSection>
      </section>
    </ProductListContainer>
  );
};

export default ProductList;
