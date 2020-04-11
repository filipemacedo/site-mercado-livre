import React, { useState } from 'react';
import SearchIcon from '../../assets/icons/ic_Search.png';

import './products-search.styles.scss';

interface ProductsSearchProps {
  onSubmit(query: string): void;
  searchText?: string;
}

const ProductsSearch: React.FC<ProductsSearchProps> = ({
  onSubmit,
  searchText = '',
}) => {
  const [search, setSearch] = useState<string>('');

  return (
    <form
      className="products-search"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}>
      <input
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Nunca dejes de buscar"
        value={search.length ? search : searchText}
      />
      <button type="submit">
        <img alt="Search items" src={SearchIcon} />
      </button>
    </form>
  );
};

export default ProductsSearch;
