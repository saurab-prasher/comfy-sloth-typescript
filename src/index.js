import React from "react";
import ReactDOM from "react-dom";

import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { UserProvider } from "./context/user_context";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <CartProvider>
          <ProductsProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </ProductsProvider>
        </CartProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
