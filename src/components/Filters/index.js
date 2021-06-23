import React, { useState } from "react";

import {
  FilterContainer,
  FilterFormContainer,
  FilterCategory,
  FilterCompany,
  FilterColors,
  FilterPrice,
  FilterShipping,
  FilterClearBtn,
  FilterClear,
  FilterColorBtnBlack,
  FilterColorBtnBlue,
  FilterColorBtnGreen,
  FilterColorBtnRed,
  FilterColorBtnYellow,
} from "./FiltersElements.js";

const Filters = () => {
  const handleFilters = (e) => {
    const category = e.target.dataset.category;
  };
  return (
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
        <button onClick={handleFilters}>Office</button>
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
          // onClick={(e) => setCompany(e.target.value)}
          name="company"
          id="company"
        >
          <option>all</option>
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
          // className={color === "red" ? "active-btn" : null}
        />
        <FilterColorBtnGreen
          // className={color === "green" ? "active-btn" : null}
          data-color="green"
        />
        <FilterColorBtnBlue
          // className={color === "blue" ? "active-btn" : null}
          data-color="blue"
        />
        <FilterColorBtnBlack
          // className={color === "black" ? "active-btn" : null}
          data-color="black"
        />
        <FilterColorBtnYellow
          // className={color === "yellow" ? "active-btn" : null}
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
  );
};

export default Filters;
