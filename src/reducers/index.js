import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  filter: filterReducer,
  user: userReducer,
});
