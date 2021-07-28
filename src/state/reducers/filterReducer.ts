import { ActionTypes } from '../action-types';
interface FilterState {
  filterProducts: any[];
  allProducts: any[];
  sort: string;
  productsView: string;
  filters: Filters;
}

interface Filters {
  category: string;
  company: string;
  color: string;
  maxPrice: number;
  minPrice: number;
  price: number;
  searchTerm: string;
  freeshipping: boolean;
}

const initialState = {
  filterProducts: [],
  allProducts: [],
  sort: 'price-lowest',

  productsView: 'grid',
  filters: {
    category: 'all',
    company: 'all',
    color: 'all',
    maxPrice: 0,
    minPrice: 0,
    price: 0,
    searchTerm: '',
    freeshipping: false,
  },
};

const filterReducer = (state: FilterState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((item: any) => item.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };
    }

    case ActionTypes.UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }

    case ActionTypes.SORT_PRODUCTS: {
      const { sort, filterProducts } = state;
      let tempSortedArr = [...filterProducts];

      if (sort === 'price-lowest') {
        tempSortedArr = tempSortedArr.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempSortedArr = tempSortedArr.sort((a, b) => b.price - a.price);
      }
      if (sort === 'name-a') {
        tempSortedArr = tempSortedArr.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === 'name-z') {
        tempSortedArr = tempSortedArr.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filterProducts: tempSortedArr };
    }

    case ActionTypes.SETTING_FILTERS: {
      const { filterValue, filterKey } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [filterKey]: filterValue },
      };
    }
    case ActionTypes.FILTERING_PRODUCTS: {
      const { allProducts } = state;

      const { category, company, color, price, searchTerm, freeshipping } =
        state.filters;

      let tempFilteredProducts = [...allProducts];
      if (searchTerm) {
        tempFilteredProducts = tempFilteredProducts.filter((product) =>
          product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
      }

      if (category !== 'all') {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (company !== 'all') {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.company === company
        );
      }
      if (color !== 'all') {
        tempFilteredProducts = tempFilteredProducts.filter((product) =>
          product.colors.find((c: any) => c === color)
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

      return { ...state, filterProducts: tempFilteredProducts };
    }

    case ActionTypes.SET_PRODUCTS_VIEW: {
      return { ...state, productsView: action.payload };
    }
    case ActionTypes.RESET_FILTERS:
      return {
        ...state,
        productsView: 'grid',
        sort: 'price-lowest',
        filters: {
          ...state.filters,
          category: 'all',
          company: 'all',
          color: 'all',
          price: state.filters.maxPrice,
          searchTerm: '',
          freeshipping: false,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
