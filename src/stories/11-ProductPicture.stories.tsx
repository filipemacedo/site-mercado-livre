import React from 'react';
import ProductPicture from '../components/ProductPicture';

export default {
  title: 'ProductPicture',
  component: ProductPicture,
};

export const Default = () => (
  <ProductPicture src="https://picsum.photos/300" alt="Custom alt" />
);

export const Large = () => (
  <ProductPicture src="https://picsum.photos/300" alt="Custom alt" large />
);
