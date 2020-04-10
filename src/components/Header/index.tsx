import React from 'react';
import ProductsSearch from '../ProductsSearch';
import Logo from '../Logo';

import "./header.styles.scss"

const Header: React.FC = () => {
  return (
    <header className="nav-header">
      <div className="container">
        <Logo />
        <ProductsSearch />
      </div>
    </header>
  );
};

export default Header;