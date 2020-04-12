import React, { useEffect } from 'react';
import queryString from 'query-string';

import ProductsList from '../../components/ProductsList';
import ContainerBox from '../../components/ContainerBox';
import DefaultLayout from '../../layouts/Default';
import ProductPlaceholder from '../../components/ProductPlaceholder';
import ErrorBox from '../../components/ErrorBox';

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
import { HelmetMetaTagsProps } from '../../components/HelmetMetaTags';
import pascalCase from '../../utils/pascal-case';

const Products: React.FC<RouteComponentProps> = ({ location }) => {
  const {
    items,
    categories,
    loading,
    searchQuery,
    error,
  }: ItemsState = useSelector((state: ApplicationState) => state.items);

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

  function definePageMetaTags(): HelmetMetaTagsProps {
    if (!searchQuery) return {};

    return {
      title: `${pascalCase(searchQuery)} no ${process.env.REACT_APP_NAME}`,
      description: `Encontrar teléfonos ${searchQuery} en el mercado libre`,
    };
  }

  return (
    <DefaultLayout
      categories={categories}
      loading={loading}
      page={definePageMetaTags()}>
      {error ? (
        <ErrorBox description="Lo siento Ocurrio un error. Ya estamos trabajando para resolverlo." title="Desculpe!" />
      ) : (
        <section className="products padding-bottom--100">
          <ContainerBox>
            {loading ? (
              <ProductPlaceholder marginLevel={16} rows={4} />
            ) : (
              <ProductsList products={items} />
            )}
          </ContainerBox>
        </section>
      )}
    </DefaultLayout>
  );
};

export default Products;
