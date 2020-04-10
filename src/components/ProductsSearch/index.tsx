import React from 'react';
import SearchIcon from '../../assets/icons/ic_Search.png';

import './products-search.styles.scss';

const ProductsSearch: React.FC = () => {
  return (
    <form className="products-search">
      <input placeholder="Nunca dejes de buscar" />
      <button type="submit">
        <img src={SearchIcon} />
      </button>
    </form>
  );
};

export default ProductsSearch;
