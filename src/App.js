import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
`;

const App = () => {
  const [isOpen, setisOpen] = React.useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
        </>

        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="*" component={Error} />
          </Switch>
        </Wrapper>
        <Footer />
      </Router>
    </>
  );
};

export default App;
