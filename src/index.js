import React from "react";
import ReactDOM from "react-dom";

import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
