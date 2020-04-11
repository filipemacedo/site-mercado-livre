import React, { useState, useEffect } from 'react';
import LowSearchIcon from '../../assets/icons/ic_Search.png';
import HighSearchIcon from '../../assets/icons/ic_Search@2x.png.png';

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

  useEffect(() => {
    setSearch(searchText);
  }, [searchText]);

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
        value={search}
      />
      <button type="submit">
        <img
          alt="Search items"
          src={LowSearchIcon}
          srcSet={`${LowSearchIcon} 500w, ${HighSearchIcon} 768w`}
        />
      </button>
    </form>
  );
};

export default ProductsSearch;
