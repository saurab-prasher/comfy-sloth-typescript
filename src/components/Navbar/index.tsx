import logo from '../../assests/images/logo.svg';
import NavMenu from './Menu';
import NavBtnContainer from './NavBtnContainer';
import { Header, MobileIcon, Logo, Nav } from './NavbarElements';

import { useActions } from '../../hooks/useActions';

Logo.defaultProps = {
  src: logo,
};
interface NavbarProps {
  totalItems: number;
}

const Navbar: React.FC<NavbarProps> = ({ totalItems }) => {
  const { openSidebar } = useActions();
  return (
    <Header>
      <div>
        <a href='/'>
          <Logo />
        </a>
      </div>

      <MobileIcon onClick={openSidebar} />

      <Nav>
        <NavMenu />
      </Nav>
      <NavBtnContainer totalItems={totalItems} />
    </Header>
  );
};

export default Navbar;
