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
  const [color, setColor] = useState("All");
  const [company, setCompany] = useState("All");

  const handleFilters = (e) => {
    const category = e.target.dataset.category;
    setCategory(category);
  };

  console.log(category, company, color);
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
          <button onClick={handleFilters} data-category="All">
            All
          </button>
          <button onClick={handleFilters} data-category="office">
            Office
          </button>
          <button onClick={handleFilters} data-category="living room">
            Living Room
          </button>
          <button onClick={handleFilters} data-category="kitchen">
            Kitchen
          </button>
          <button onClick={handleFilters} data-category="bedroom">
            Bedroom
          </button>
          <button onClick={handleFilters} data-category="dining">
            Dining
          </button>
          <button onClick={handleFilters} data-category="kids">
            Kids
          </button>
        </FilterCategory>

        <FilterCompany className="company">
          <h3>Company</h3>

          <select
            onClick={(e) => setCompany(e.target.value)}
            name="company"
            id="company"
          >
            <option value={company}>all</option>
            <option data-company="marcos" value="marcos">
              marcos
            </option>
            <option data-company="liddy" value="liddy">
              liddy
            </option>
            <option data-company="ikea" value="ikea">
              ikea
            </option>
            <option data-company="caressa" value="caressa">
              caressa
            </option>
          </select>
        </FilterCompany>

        <FilterColors className="color">
          <h3>Colors</h3>
          <button>All</button>
          <FilterColorBtnRed
            data-color="red"
            className={color === "red" ? "active-btn" : null}
            onClick={(e) => setColor(e.target.dataset.color)}
          />
          <FilterColorBtnGreen
            className={color === "green" ? "active-btn" : null}
            onClick={(e) => setColor(e.target.dataset.color)}
            data-color="green"
          />
          <FilterColorBtnBlue
            className={color === "blue" ? "active-btn" : null}
            onClick={(e) => setColor(e.target.dataset.color)}
            data-color="blue"
          />
          <FilterColorBtnBlack
            className={color === "black" ? "active-btn" : null}
            onClick={(e) => setColor(e.target.dataset.color)}
            data-color="black"
          />
          <FilterColorBtnYellow
            className={color === "yellow" ? "active-btn" : null}
            onClick={(e) => setColor(e.target.dataset.color)}
            data-color="yellow"
          />
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
          {list.length === 0 ? <h1>No Items Found</h1> : ""}
          {category === "All"
            ? Data.map((item) => {
                return <Card key={item.id} {...item} />;
              })
            : list
                .filter(
                  (item) =>
                    item.category === category &&
                    item.color === color &&
                    item.company === company
                )
                .map((item) => {
                  return <Card key={item.id} {...item} />;
                })}
        </ProductListSection>
      </section>
    </ProductListContainer>
  );
};

export default ProductList;
