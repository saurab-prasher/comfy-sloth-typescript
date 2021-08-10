import { useUserContext } from '../../context/userContext';
import {
  NavBtn,
  BtnContainer,
  ShoppingCartValue,
  ShoppingCart,
  UserLogin,
} from './NavbarElements';

interface NavBtnContainerProps {
  totalItems: number;
}

const NavBtnContainer: React.FC<NavBtnContainerProps> = ({ totalItems }) => {
  const {state:{currentUser}, handleLogout } = useUserContext();


  return (
    <BtnContainer>
      <NavBtn to='/cart'>
        Cart
        <ShoppingCart />
        <ShoppingCartValue>{totalItems}</ShoppingCartValue>
      </NavBtn>
      {currentUser ? (
        <NavBtn onClick={handleLogout}  to='/'>
          Logout
        </NavBtn>
      ) : (
        <NavBtn to='/login'>
          Login
          <UserLogin />
        </NavBtn>
      )}
    </BtnContainer>
  );
};

export default NavBtnContainer;
