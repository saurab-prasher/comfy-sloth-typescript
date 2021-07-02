import React from "react";

import { Menu, NavLink } from "./NavbarElements.js";

const NavMenu = () => {
  return (
    <Menu>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
    </Menu>
  );
};

export default NavMenu;
