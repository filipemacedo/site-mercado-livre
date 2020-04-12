import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';

import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { ApplicationState } from '../../store';
import NavigationBreadcrumbPlaceholder from '../../components/NavigationBreadcrumbPlaceholder';
import HelmetMetaTags, {
  HelmetMetaTagsProps,
} from '../../components/HelmetMetaTags';

interface DefaultLayoutProps {
  categories?: string[];
  loading?: boolean;
  page?: HelmetMetaTagsProps;
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
      <HelmetMetaTags
        description={page?.description}
        imagePreview={page?.imagePreview}
        title={page?.title}
      />
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
