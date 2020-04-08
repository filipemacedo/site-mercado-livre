import React from 'react';
import ProductsSearch from '../ProductsSearch';
import Logo from '../Logo';
import Container from '../Container';

import "./header.styles.scss"

const Header: React.FC = () => {
  return (
    <header className="nav-header">
      <Container>
        <Logo />
        <ProductsSearch />
      </Container>
    </header>
  );
};

export default Header;