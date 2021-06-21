import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.svg";

import {
  Header,
  MobileIcon,
  Logo,
  Nav,
  NavMenu,
  NavBtn,
  NavLink,
  NavBtnContainer,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
} from "./NavbarElements.js";

Logo.defaultProps = {
  src: logo,
};
const Navbar = ({ toggle }) => {
  return (
    <Header>
      <div>
        <Logo />
      </div>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <Nav>
        <NavMenu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </NavMenu>
      </Nav>
      <NavBtnContainer>
        <NavBtn>
          <Link to="/cart">Cart</Link>
          <ShoppingCart />
          <ShoppingCartValue>0</ShoppingCartValue>
        </NavBtn>
        <NavBtn>
          Login
          <UserLogin />
        </NavBtn>
      </NavBtnContainer>
    </Header>
  );
};

export default Navbar;
