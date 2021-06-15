import React from "react";
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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <Logo />
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
      </SidebarHeader>
      <div>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink onClick={toggle} to="/">
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink onClick={toggle} to="about">
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink onClick={toggle} to="/products">
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
