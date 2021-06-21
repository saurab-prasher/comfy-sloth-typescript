import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 1rem auto;
  padding-right: 2rem;
`;

export const Logo = styled.img`
  max-width: 12rem;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #000;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin: 0 0.75rem;

  &:hover {
    border-bottom: 2px solid #531435;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavBtn = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
`;

export const ShoppingCartValue = styled.div`
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  color: #fff;
  line-height: 1;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(83, 20, 16);
  padding: 0.35rem 0.5rem;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;

const sharedButtonStyle = css`
  font-size: 2rem;
  margin: 0 0.5rem;
`;

export const ShoppingCart = styled(FaShoppingCart)`
  ${sharedButtonStyle}
`;
export const UserLogin = styled(FaUserPlus)`
  ${sharedButtonStyle}
`;

export const NavBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
