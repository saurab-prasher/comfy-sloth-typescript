import React from "react";

import { connect } from "react-redux";
import { openSidebar, countCartTotals } from "../../actions";

import logo from "../../assets/images/logo.svg";
import NavMenu from "./Menu";
import NavBtnContainer from "./NavBtnContainer";
import { Header, MobileIcon, Logo, Nav } from "./NavbarElements.js";

Logo.defaultProps = {
  src: logo,
};

const Navbar = ({ openSidebar, totalItems, countCartTotals }) => {
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
      <NavBtnContainer total_items={totalItems} />
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalItems: state.cart.total_items,
    openSidebar: state.products.openSidebar,
  };
};

export default connect(mapStateToProps, { openSidebar, countCartTotals })(
  Navbar
);
