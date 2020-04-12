import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBreadcrumbComponent from '../components/NavigationBreadcrumb';

export default {
  title: 'NavigationBreadcrumb',
  component: NavigationBreadcrumbComponent,
};

export const Categories = () => (
  <MemoryRouter>
    <NavigationBreadcrumbComponent
      categories={['Primeira categoria', 'Segunda categoria']}
    />
  </MemoryRouter>
);
