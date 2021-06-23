import React, { useState, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import Data from "./Data";

const AppContext = React.createContext();

const initState = {
  searchTerm: "",
  passingTags: {
    search: {
      inputTerm: "",
    },
    price: {},

    color: {
      red: false,
      green: false,
      blue: false,
      black: false,
      yellow: false,
    },
    category: {
      dining: false,
      kids: false,
      kitchen: false,
      office: false,
      bedroom: false,
    },
    company: {
      marcos: false,
      ikea: false,
      liddy: false,
      caressa: false,
    },
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initState, reducer);
  const [list, setList] = useState(Data);

  const allFilterClickListener = (e, filterProp) => {
    console.log("Filter Clicked", e.target.dataset.name);
    const name = e.target.dataset.name;

    // setState((prevState) => {
    //   console.log({
    //     ...prevState.passingTags,
    //     [filterProp]: {
    //       ...prevState.passingTags[filterProp],
    //       [name]: !prevState.passingTags[filterProp][name],
    //     },
    //   });
    // });
  };

  const filteredCollected = () => {
    const collectedTrueKeys = {
      color: [],
      company: [],
      category: [],
    };

    const { color, company, category } = state.passingTags;

    for (let colorKey in color) {
      if (color[colorKey]) collectedTrueKeys.color.push(colorKey);
    }
    for (let companyKey in company) {
      if (company[companyKey]) collectedTrueKeys.company.push(companyKey);
    }
    for (let categoryKey in category) {
      if (category[categoryKey]) collectedTrueKeys.category.push(categoryKey);
    }

    return collectedTrueKeys;
  };

  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter((product) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(product[key])) {
          return product[key].some((keyEle) => filters[key].includes(keyEle));
        }
        return filters[key].includes(product[key]);
      });
    });
  };
  return <AppContext.Provider value={{ list }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
