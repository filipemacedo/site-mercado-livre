import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';

interface DefaultLayoutProps {
  categories: string[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  categories,
  children,
}) => {
  return (
    <>
      <Header />
      <main>
        <NavigationBreadcrumb categories={categories} />
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
