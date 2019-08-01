import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import Container from "./Container";

const Wrapper = styled.header`
  margin: 0 0 4rem;
  padding: 2rem 0;
  background: #358537;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  margin-left: 1.4rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 2.2rem;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Navigation>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contacts">contacts</NavLink>
      </Navigation>
    </Container>
  </Wrapper>
);

export default Header;
