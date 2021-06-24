import React from "react";
import { useProductsContext } from "../../context/products_context.js";
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
            <SidebarLink onClick={closeSidebar} to="/">
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink onClick={closeSidebar} to="about">
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink onClick={closeSidebar} to="/products">
              Products
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </div>
      <SidebarBtnContainer>
        <SidebarBtn>
          Cart
          <ShoppingCart />
          <ShoppingCartValue>0</ShoppingCartValue>
        </SidebarBtn>
        <SidebarBtn>
          Login
          <UserLogin />
        </SidebarBtn>
      </SidebarBtnContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
