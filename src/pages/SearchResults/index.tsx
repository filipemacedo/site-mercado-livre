import React, { useEffect } from 'react';
import queryString from 'query-string';

import ProductsList from '../../components/ProductsList';
import ContainerBox from '../../components/ContainerBox';
import DefaultLayout from '../../layouts/Default';

import './search-results.styles.scss';
import { ItemsState } from '../../store/modules/items/items.types';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { RouteComponentProps } from 'react-router-dom';
import {
  searchItems,
  resetSearchItems,
		resetSearchQuery,
} from '../../store/modules/items/items.actions';

const Products: React.FC<RouteComponentProps> = ({ location }) => {
  const { items, categories }: ItemsState = useSelector(
    (state: ApplicationState) => state.items,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const { search } = queryString.parse(location.search);

    if (typeof search !== 'string') return;

    dispatch(searchItems(search));

    return () => {
						dispatch(resetSearchItems());
						dispatch(resetSearchQuery());
    };
  }, [location]);

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
