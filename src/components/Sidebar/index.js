import React from "react";
import { useProductsContext } from "../../context/products_context.js";
import { useCartContext } from "../../context/cart_context";
import {
  NavBtn as SidebarBtn,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
  Logo,
} from "../Navbar/NavbarElements.js";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnContainer,
  SidebarHeader,
  SidebarItem,
} from "./SidebarElements";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarHeader>
        <Logo />
        <Icon>
          <CloseIcon onClick={closeSidebar} />
        </Icon>
      </SidebarHeader>
      <div>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/" onClick={closeSidebar}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/about" onClick={closeSidebar}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/products" onClick={closeSidebar}>
              Products
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </div>
      <SidebarBtnContainer>
        <SidebarBtn onClick={closeSidebar} to="/cart">
          Cart
          <ShoppingCart />
          <ShoppingCartValue>{total_items}</ShoppingCartValue>
        </SidebarBtn>
        <SidebarBtn onClick={closeSidebar} to="/login">
          Login
          <UserLogin />
        </SidebarBtn>
      </SidebarBtnContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
