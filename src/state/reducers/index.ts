import { combineReducers } from 'redux';
import productReducer from './allProductsReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';
import singleProductReducer from './singleProductReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  cart: cartReducer,
  filter: filterReducer,
  singleProduct: singleProductReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
