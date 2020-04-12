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
import getErrorMessage from '../../utils/error-message';
import applicationConfig from '../../config/application';

const Products: React.FC<RouteComponentProps> = ({ location }) => {
  const {
    items,
    categories,
    loading,
    searchQuery,
    error,
    errorDetails,
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
      title: `${pascalCase(searchQuery)} no ${applicationConfig.name}`,
      description: `Encontrar teléfonos ${searchQuery} en el mercado libre`,
    };
  }

  const productListOrNotFoundError =
    !loading && items.length ? (
      <ProductsList products={items} />
    ) : (
      <ErrorBox description={getErrorMessage(404)} title="¡Perdon!" />
    );

  return (
    <DefaultLayout
      categories={categories}
      loading={loading}
      page={definePageMetaTags()}>
      {error ? (
        <ErrorBox description={errorDetails?.message} title="¡Perdon!" />
      ) : (
        <section className="products padding-bottom--100">
          <ContainerBox>
            {loading ? (
              <ProductPlaceholder marginLevel={16} rows={4} />
            ) : (
              productListOrNotFoundError
            )}
          </ContainerBox>
        </section>
      )}
    </DefaultLayout>
  );
};

export default Products;
