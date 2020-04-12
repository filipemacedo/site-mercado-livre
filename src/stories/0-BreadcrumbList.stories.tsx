import React from 'react';
import BreadcrumbList from '../components/BreadcrumbList';
import { MemoryRouter } from 'react-router-dom';

import "../styles/global.scss";

export default {
  title: 'BreadcrumbList',
  component: BreadcrumbList,
};

export const Categories = () => (
  <MemoryRouter>
    <BreadcrumbList categories={['Primeira Categoria', 'Segunda Categoria']} />
  </MemoryRouter>
);
