import React from 'react';

import ProductsList from '../../components/ProductsList';
import ContainerBox from '../../components/ContainerBox';
import DefaultLayout from '../../layouts/Default';

import './search-results.styles.scss';
import { ItemsState } from '../../store/modules/items/items.types';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const Products: React.FC = () => {
	const { items, categories }: ItemsState = useSelector((state: ApplicationState) => state.items);

	return (
		<DefaultLayout categories={categories}>
			<section className="products">
				<ContainerBox>
					<ProductsList products={items} />
				</ContainerBox>
			</section>
		</DefaultLayout>
	);
};

export default Products;
