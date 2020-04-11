import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

interface DefaultLayoutProps {
  categories?: string[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  categories = [],
  children,
}) => {
  const dispatch = useDispatch();

  function onSearchSubmit(query: string) {
		dispatch(push(`/items?search=${query}`));
	}

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} />
      <main>
        <NavigationBreadcrumb categories={categories} />
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
