import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// Pages
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUp";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";

// Private route
import PrivateRoute from "./PrivateRoute";
import PrivateRoute1 from "./PrivateRoute1";

// Redux
import { connect } from "react-redux";

// actions
import {
  countCartTotals,
  fetchProducts,
  filteringProducts,
  sortProducts,
  loadProducts,
} from "./actions";

const App = ({
  cart,
  filters,
  sort,
  products,
  fetchProducts,
  countCartTotals,
  loadProducts,
  sortProducts,
  filteringProducts,
}) => {
  useEffect(() => {
    fetchProducts(process.env.REACT_APP_PRODUCTS_URL);
  }, [fetchProducts]);

  useEffect(() => {
    loadProducts();
  }, [products, loadProducts]);

  useEffect(() => {
    sortProducts();
    filteringProducts();
  }, [filters, sort, sortProducts, filteringProducts]);

  useEffect(() => {
    countCartTotals();
  }, [cart.cart, countCartTotals]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.cart));
  }, [cart]);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart" component={CartPage} />
        <PrivateRoute1 path="/login" component={Login} />
        <PrivateRoute1 path="/signup" component={SignUpPage} />
        <PrivateRoute exact path="/checkout" component={CheckOut} />
        <PrivateRoute1 path="/forgotpassword" component={ForgotPassword} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cart: state.cart,
    filters: state.filter.filters,
    sort: state.filter.sort,
  };
};
export default connect(mapStateToProps, {
  countCartTotals,
  fetchProducts,
  filteringProducts,
  sortProducts,
  loadProducts,
})(App);
