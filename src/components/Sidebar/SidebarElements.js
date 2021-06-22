import styled from "styled-components";
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
  height: 100%;
  width: 100%;
  z-index: 99;
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
  color: #531410;
  font-size: 2.3rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #531410;
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const SidebarLink = styled(Link)`
  color: #531410;
  border: 1px solid rgb(83, 20, 16);
  width: 90%;
  margin: 0 auto;
  display: block;
  padding: 1rem;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #531410;
    color: #fff;
  }
`;

export const SidebarItem = styled.li`
  width: 100%;
  margin: 0.5rem;
`;
export const SidebarBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
