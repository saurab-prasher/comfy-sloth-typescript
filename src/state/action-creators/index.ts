import {
  addToCart,
  deleteItem,
  toggleCartItem,
  clearCart,
  countCartTotals,
} from './Cart';
import { handleProductView as changeView } from './ChangeView';
import { fetchProducts, fetchSingleProduct } from './FetchProducts';
import {
  filteringProducts as filterProducts,
  loadProducts,
  settingFilters,
  resetFilters,
} from './FilterProducts';
import { openSidebar, closeSidebar } from './Sidebar';
import { updateSort, sortProducts } from './Sort';

export {
  addToCart,
  changeView,
  fetchProducts,
  filterProducts,
  openSidebar,
  loadProducts,
  closeSidebar,
  updateSort,
  sortProducts,
  settingFilters,
  resetFilters,
  fetchSingleProduct,
  deleteItem,
  toggleCartItem,
  clearCart,
  countCartTotals,
};
