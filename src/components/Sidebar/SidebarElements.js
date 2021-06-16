import styled, { css } from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  @media screen and (min-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: #fff;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  padding: 1rem;
  transition: all 0.3s ease-in-out;
`;
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Icon = styled.div``;

export const CloseIcon = styled(RiCloseLine)`
  color: #bb2525;
  font-size: 3rem;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const SidebarLink = styled(Link)`
  color: #000;
`;

export const SidebarItem = styled.li`
  width: 100%;
  padding: 1rem;
  &:hover {
    background-color: red;
  }
`;
export const SidebarBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
