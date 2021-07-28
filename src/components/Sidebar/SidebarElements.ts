import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

interface SidebarContainerProps {
  isSidebarOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  @media screen and (min-width: 48em) {
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
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'translateX(0)' : 'translateX(-110%)'};
  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? '100%' : '0')};
  padding: 3rem;
  transition: all 0.2s ease;
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
  height: 5rem;
  width: 5rem;
  cursor: pointer;
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
  padding: 1.5rem;
  font-size: 1.8rem;
  border-radius: 3px;
  font-weight: 500;
`;

export const SidebarItem = styled.li`
  width: 100%;
  margin: 0.5rem;
  margin-bottom: 2rem;
`;
export const SidebarBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
