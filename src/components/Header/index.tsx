import React from 'react';
import ProductsSearch from '../ProductsSearch';
import Logo from '../Logo';

import "./header.styles.scss"

interface HeaderProps {
  onSearchSubmit(query: string): void;
}

const Header: React.FC<HeaderProps> = ({ onSearchSubmit }) => {
  return (
    <header className="nav-header">
      <div className="container">
        <Logo />
        <ProductsSearch onSubmit={onSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;