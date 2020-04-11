import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { ApplicationState } from '../../store';

interface DefaultLayoutProps {
  categories?: string[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  categories = [],
  children,
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
        <NavigationBreadcrumb categories={categories} />
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
