import React from "react";

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
  return (
    <FilterContainer>
      <FilterFormContainer className="form">
        <form>
          <input placeholder="Search" type="text" />
        </form>
      </FilterFormContainer>

      <FilterCategory className="category">
        <h3>Category</h3>
        <button onClick={(e) => {}} data-name="All">
          All
        </button>
        <button data-name="office" onClick={(e) => {}}>
          Office
        </button>
        <button onClick={(e) => {}} data-name="living room">
          Living Room
        </button>
        <button data-name="kitchen">Kitchen</button>
        <button data-name="bedroom">Bedroom</button>
        <button data-name="dining">Dining</button>
        <button data-name="kids">Kids</button>
      </FilterCategory>

      <FilterCompany className="company">
        <h3>Company</h3>

        <select name="company" id="company">
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
        <div>
          <FilterColorBtnRed data-name="red" />
          <FilterColorBtnGreen data-name="green" />
          <FilterColorBtnBlue data-name="blue" />
          <FilterColorBtnBlack data-name="black" />
          <FilterColorBtnYellow data-name="yellow" />
        </div>
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
