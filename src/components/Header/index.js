import React from "react";
import { Link as link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #eaded7;
  position: relative;
`;
const HeaderInner = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: 500;
  color: #453227;
  padding: 5rem 0;
  margin-bottom: 4rem;
  letter-spacing: 0.5rem;
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
