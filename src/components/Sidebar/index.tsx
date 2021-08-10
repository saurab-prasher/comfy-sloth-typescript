import { useState } from 'react';

import { useSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import { useUserContext } from '../../context/userContext';
import { useHistory } from 'react-router';
import {
  NavBtn as SidebarBtn,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
  Logo,
} from '../Navbar/NavbarElements';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnContainer,
  SidebarHeader,
  SidebarItem,
} from './SidebarElements';

interface SidebarProps {
  totalItems: number;
}

const Sidebar: React.FC<SidebarProps> = ({ totalItems }) => {
  const [error, setError] = useState('');
  const { state: currentUser, logout  } = useUserContext();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    console.log(error);
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.log(error);
      setError('Failed to log out');
    }
  }

  const { isSidebarOpen } = useSelector((state) => state.allProducts);
  const { closeSidebar } = useActions();
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
            <SidebarLink to='/' onClick={closeSidebar}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/about' onClick={closeSidebar}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/products' onClick={closeSidebar}>
              Products
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </div>
      <SidebarBtnContainer>
        <SidebarBtn onClick={closeSidebar} to='/cart'>
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
            to='/'
          >
            Logout
          </SidebarBtn>
        ) : (
          <SidebarBtn
            onClick={() => {
              closeSidebar();
            }}
            to='/login'
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
