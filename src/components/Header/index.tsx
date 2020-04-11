import React from 'react';
import ProductsSearch from '../ProductsSearch';
import Logo from '../Logo';

import "./header.styles.scss"

interface HeaderProps {
  onSearchSubmit(query: string): void;
  searchText: string;
}

const Header: React.FC<HeaderProps> = ({ onSearchSubmit, searchText }) => {
  return (
    <header className="nav-header">
      <div className="container">
        <Logo />
        <ProductsSearch onSubmit={onSearchSubmit} searchText={searchText} />
      </div>
    </header>
  );
};

export default Header;