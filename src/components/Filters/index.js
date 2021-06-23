import React, { useState } from "react";
import { useGlobalContext } from "../../context.js";

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
  const { allFilterClickListener } = useGlobalContext();

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
        <button
          onClick={(e) => allFilterClickListener(e, "category")}
          data-name="All"
        >
          All
        </button>
        <button
          data-name="office"
          onClick={(e) => allFilterClickListener(e, "category")}
        >
          Office
        </button>
        <button
          onClick={(e) => allFilterClickListener(e, "category")}
          data-name="living room"
        >
          Living Room
        </button>
        <button
          onClick={(e) => allFilterClickListener(e, "category")}
          data-name="kitchen"
        >
          Kitchen
        </button>
        <button
          onClick={(e) => allFilterClickListener(e, "category")}
          data-name="bedroom"
        >
          Bedroom
        </button>
        <button
          onClick={(e) => allFilterClickListener(e, "category")}
          data-name="dining"
        >
          Dining
        </button>
        <button
          onClick={(e) => allFilterClickListener(e, "category")}
          data-name="kids"
        >
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
          <option data-name="marcos" value="marcos">
            marcos
          </option>
          <option data-name="liddy" value="liddy">
            liddy
          </option>
          <option data-name="ikea" value="ikea">
            ikea
          </option>
          <option data-name="caressa" value="caressa">
            caressa
          </option>
        </select>
      </FilterCompany>

      <FilterColors className="color">
        <h3>Colors</h3>
        <button
          data-name="all"
          onClick={(e) => allFilterClickListener(e, "category")}
        >
          All
        </button>
        <FilterColorBtnRed
          data-name="red"
          onClick={(e) => allFilterClickListener(e, "color")}
          // className={color === "red" ? "active-btn" : null}
        />
        <FilterColorBtnGreen
          onClick={(e) => allFilterClickListener(e, "color")}
          // className={color === "green" ? "active-btn" : null}
          data-name="green"
        />
        <FilterColorBtnBlue
          onClick={(e) => allFilterClickListener(e, "color")}
          // className={color === "blue" ? "active-btn" : null}
          data-name="blue"
        />
        <FilterColorBtnBlack
          onClick={(e) => allFilterClickListener(e, "color")}
          // className={color === "black" ? "active-btn" : null}
          data-name="black"
        />
        <FilterColorBtnYellow
          onClick={(e) => allFilterClickListener(e, "color")}
          // className={color === "yellow" ? "active-btn" : null}
          data-name="yellow"
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
