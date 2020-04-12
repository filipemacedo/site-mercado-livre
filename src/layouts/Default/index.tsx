import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';
import { Helmet } from 'react-helmet';

import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { ApplicationState } from '../../store';
import NavigationBreadcrumbPlaceholder from '../../components/NavigationBreadcrumbPlaceholder';

const { REACT_APP_NAME, REACT_APP_DESCRIPTION } = process.env;

interface DefaultLayoutProps {
  categories?: string[];
  loading?: boolean;
  page?: {
    title?: string;
    description?: string;
    imagePreview?: string;
  };
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  categories = [],
  children,
  loading,
  page,
}) => {
  const searchQuery = useSelector(
    ({ items }: ApplicationState) => items.searchQuery,
  );

  const dispatch = useDispatch();

  function onSearchSubmit(query: string) {
    dispatch(push(`/items?search=${query}`));
  }

  return (
    <>
      <Helmet>
        <title>{page?.title || REACT_APP_NAME}</title>
      </Helmet>
      <Header onSearchSubmit={onSearchSubmit} searchText={searchQuery} />
      <main>
        {loading ? (
          <NavigationBreadcrumbPlaceholder />
        ) : (
          <NavigationBreadcrumb categories={categories} />
        )}
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
