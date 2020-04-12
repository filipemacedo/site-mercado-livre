import React from 'react';
import HeaderComponent from '../components/Header';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Header',
  component: HeaderComponent,
};

export const SearchTextClean = () => (
  <MemoryRouter>
    <HeaderComponent onSearchSubmit={action('SearchSubmit')} searchText="" />
  </MemoryRouter>
);

export const SearchTextCompleted = () => (
  <MemoryRouter>
    <HeaderComponent onSearchSubmit={action('SearchSubmit')} searchText="My search text" />
  </MemoryRouter>
);