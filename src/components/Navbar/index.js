import React from "react";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
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

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { totalItem } = useCartContext();
  return (
    <Header>
      <div>
        <a href="/">
          <Logo />
        </a>
      </div>

      <MobileIcon onClick={openSidebar}>
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
          <ShoppingCartValue>{totalItem}</ShoppingCartValue>
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
