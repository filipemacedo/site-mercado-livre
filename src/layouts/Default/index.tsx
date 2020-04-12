import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { ApplicationState } from '../../store';
import NavigationBreadcrumbPlaceholder from '../../components/NavigationBreadcrumbPlaceholder';

interface DefaultLayoutProps {
  categories?: string[];
  loading?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  categories = [],
  children,
  loading,
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
