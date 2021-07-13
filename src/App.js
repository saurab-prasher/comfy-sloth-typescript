import React from "react";
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

const App = () => {
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

export default App;
