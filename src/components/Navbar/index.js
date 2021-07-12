import React from "react";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";

import logo from "../../assets/images/logo.svg";
import NavMenu from "./Menu";
import NavBtnContainer from "./NavBtnContainer";

import { Header, MobileIcon, Logo, Nav } from "./NavbarElements.js";

Logo.defaultProps = {
  src: logo,
};

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Header>
      <div>
        <a href="/">
          <Logo />
        </a>
      </div>

      <MobileIcon onClick={openSidebar} />

      <Nav>
        <NavMenu />
      </Nav>
      <NavBtnContainer total_items={total_items} />
    </Header>
  );
};

export default Navbar;
