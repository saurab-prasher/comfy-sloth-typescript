import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
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
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
