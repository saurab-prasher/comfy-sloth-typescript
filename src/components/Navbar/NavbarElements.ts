import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaBars } from "react-icons/fa";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 124rem;
  margin: 1rem auto;
  padding: 0 3rem;
  position: relative;
  height: 8rem;
`;

export const Logo = styled.img`
  max-width: 16rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #000;
  padding: 0.5rem;
  font-size: 1.8rem;
  margin: 0 1.5rem;
  letter-spacing: 1px;

  &:hover {
    border-bottom: 2px solid #531435;
  }
`;

export const MobileIcon = styled(FaBars)`
  display: none;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  color: #531410;
  @media screen and (max-width: 48em) {
    display: block;
  }
`;
export const NavBtn = styled(Link)`
  margin-left: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  color: rgb(83, 20, 16);
  position: relative;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #531435;
  }
`;

export const ShoppingCartValue = styled.p`
  position: absolute;
  top: -1rem;
  right: -0.75rem;
  color: #fff;
  line-height: 1;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: rgb(83, 20, 16);
  padding: 0.45rem 0.75rem;
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
  height: 3.3rem;
  width: 3.3rem;
  margin: 0 0.75rem;
  color: rgb(83, 20, 16);
`;

export const ShoppingCart = styled(FaShoppingCart)`
  ${sharedButtonStyle}
`;
export const UserLogin = styled(FaUserPlus)`
  ${sharedButtonStyle}
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;
