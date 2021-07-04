import React, { useEffect, useState } from "react";
import { useFilterContext } from "../../context/filter_context.js";
import {
  FilterContainer,
  FilterClearBtn,
  FilterClear,
} from "./FiltersElements.js";

import { getUniqueValues } from "../../utils/helper";

import FilterForm from "./FilterForm.js";
import FilterCategory from "./FilterCategory.js";
import FilterCompany from "./FilterCompany.js";
import FilterColors from "./FilterColors.js";
import FilterPrice from "./FilterPrice.js";
import FilterShipping from "./FilterShipping.js";

const Filters = ({ products }) => {
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  const { dispatch } = useFilterContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [value, setValue] = useState(50000);

  // dispatch({
  //   type: "just_checking",
  //   payload: { company, category, color, value, searchTerm },
  // });

  const allFilterClickListener = (e, filterProp) => {
    console.log("FILTER clicked", e.target.dataset.name);
    const name = e.target.dataset.name;
    this.setState((prevState) => ({
      passingTags: {
        ...prevState.passingTags,
        [filterProp]: {
          ...prevState.passingTags[filterProp],
          [name]: !prevState.passingTags[filterProp][name],
        },
      },
    }));
  };

  const filteredCollected = () => {
    const collectedTrueKeys = {
      color: [],
      gender: [],
      material: [],
      category: [],
    };
    const { color, gender, material, category } = this.state.passingTags;
    for (let colorKey in color) {
      if (color[colorKey]) collectedTrueKeys.color.push(colorKey);
    }
    for (let genderKey in gender) {
      if (gender[genderKey]) collectedTrueKeys.gender.push(genderKey);
    }
    for (let materialKey in material) {
      if (material[materialKey]) collectedTrueKeys.material.push(materialKey);
    }
    for (let categoryKey in category) {
      if (category[categoryKey]) collectedTrueKeys.category.push(categoryKey);
    }
    return collectedTrueKeys;
  };

  return (
    <FilterContainer>
      <FilterForm searchTerm={searchTerm} />

      <FilterCategory categories={categories} />
      <FilterCompany companies={companies} />
      <FilterColors colors={colors} />

      <FilterPrice value={value} />

      <FilterShipping />

      <FilterClear className="clear">
        <FilterClearBtn>Clear Filters</FilterClearBtn>
      </FilterClear>
    </FilterContainer>
  );
};

export default Filters;
