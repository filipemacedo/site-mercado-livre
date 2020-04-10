import React, { useState } from 'react';
import SearchIcon from '../../assets/icons/ic_Search.png';

import './products-search.styles.scss';

interface ProductsSearchProps {
	onSubmit(query: string): void;
}

const ProductsSearch: React.FC<ProductsSearchProps> = ({ onSubmit }) => {
	const [ searchText, setSearchText ] = useState<string>('');

	return (
		<form
			className="products-search"
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(searchText);
			}}
		>
			<input onChange={({ target }) => setSearchText(target.value)} placeholder="Nunca dejes de buscar" />
			<button type="submit">
				<img src={SearchIcon} />
			</button>
		</form>
	);
};

export default ProductsSearch;
