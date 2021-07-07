export const filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      let maxPrice = action.payload.map((item) => item.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        filtered_products: [...action.payload],
        all_products: [...action.payload],
        max_range_value: maxPrice,
      };
    }

    case "UPDATE_SORT": {
      return { ...state, sort: action.payload };
    }

    case "SORT_PRODUCTS": {
      const { sort, filtered_products } = state;
      let tempSortedArr = [...filtered_products];

      if (sort === "price-lowest") {
        tempSortedArr = tempSortedArr.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempSortedArr = tempSortedArr.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempSortedArr = tempSortedArr.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempSortedArr = tempSortedArr.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempSortedArr };
    }

    case "SETTING_FILTERS": {
      const { filterValue, filterKey } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [filterKey]: filterValue },
      };
    }
    case "FILTERING_PRODUCTS": {
      const {
        all_products,
        filters: { category, company, color, price, search_term, freeshipping },
      } = state;
      let tempFilteredProducts = [...all_products];

      if (search_term) {
        tempFilteredProducts = tempFilteredProducts.filter((product) =>
          product.name.toLowerCase().startsWith(search_term)
        );
      }

      if (category !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (company !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.company === company
        );
      }
      if (color !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      if (price > 0) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.price <= Number(price)
        );
      }

      if (freeshipping) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.shipping
        );
      }

      return { ...state, filtered_products: tempFilteredProducts };
    }

    case "RESET_FILTERS": {
      return {
        ...state,

        filters: {
          category: "all",
          company: "all",
          colors: "all",
          maxPrice: state.filters.max_range_value,
          price: state.filters.max_range_value,
          search_term: "",
          freeshipping: false,
        },
      };
    }

    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};
