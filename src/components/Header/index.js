import React from "react";
import { Link as link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #f3f2f0;
  position: relative;
`;
const HeaderInner = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 500;
  color: #531410;
  padding: 3rem;
  margin-bottom: 4rem;
  letter-spacing: 2px;
`;

const HomeLink = styled(link)`
  color: inherit;
`;
const Link = styled.a`
  text-transform: capitalize;
  cursor: pointer;
  margin-left: 1rem;
`;

const Header = ({ location, children }) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HomeLink to="/">Home/</HomeLink>
        <Link to="location">{location}</Link>
        {children && <Link>/{children}</Link>}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
