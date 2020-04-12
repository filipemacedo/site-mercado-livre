import React from 'react';
import ProductsSearch from '../components/ProductsSearch';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ProductsSearch',
  component: ProductsSearch,
};

export const Search = () => <ProductsSearch onSubmit={action('Search')} />;
