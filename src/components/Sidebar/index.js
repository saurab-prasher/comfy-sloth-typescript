import React, { useState } from "react";

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

import { connect } from "react-redux";
import { closeSidebar } from "../../actions/index.js";

const Sidebar = ({ isSidebarOpen, closeSidebar, totalItems }) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useUserContext();
  // const { total_items } = useCartContext();
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
          <ShoppingCartValue>{totalItems}</ShoppingCartValue>
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

const mapStateToProps = (state) => {
  return {
    totalItems: state.cart.total_items,
    isSidebarOpen: state.products.isSidebarOpen,
  };
};

export default connect(mapStateToProps, { closeSidebar })(Sidebar);
