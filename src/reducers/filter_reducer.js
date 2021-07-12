export const filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      let maxPrice = action.payload.map((item) => item.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        filtered_products: [...action.payload],
        all_products: [...action.payload],

        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
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
      const { all_products } = state;
      const { category, company, color, price, search_term, freeshipping } =
        state.filters;

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
      // price
      tempFilteredProducts = tempFilteredProducts.filter(
        (product) => product.price <= Number(price)
      );

      if (freeshipping) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.shipping
        );
      }

      return { ...state, filtered_products: tempFilteredProducts };
    }

    case "SET_PRODUCTS_VIEW": {
      return { ...state, products_view: action.payload };
    }
    case "RESET_FILTERS":
      return {
        ...state,
        max_range_value: state.max_range_value,
        products_view: "grid",
        sort: "price-lowest",
        filters: {
          ...state.filters,
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.max_price,
          search_term: "",
          freeshipping: false,
        },
      };
    default:
      throw new Error(`No matching "${action.type}" - action type `);
  }
};
