import React, { useState } from "react";
import { useProductsContext } from "../../context/products_context.js";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context.js";
import { useHistory } from "react-router";
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
  const [error, setError] = useState("");
  const { currentUser, logout } = useUserContext();
  const { total_items } = useCartContext();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    console.log(error);
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
      setError("Failed to log out");
    }
  }
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

        {currentUser ? (
          <SidebarBtn
            onClick={() => {
              closeSidebar();
              handleLogout();
            }}
            to="/"
          >
            Logout
          </SidebarBtn>
        ) : (
          <SidebarBtn
            onClick={() => {
              closeSidebar();
            }}
            to="/login"
          >
            Login
            <UserLogin />
          </SidebarBtn>
        )}
      </SidebarBtnContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
