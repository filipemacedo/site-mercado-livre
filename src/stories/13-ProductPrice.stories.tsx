import React from 'react';
import ProductPrice from '../components/ProductPrice';

export default {
  title: 'ProductPrice',
  component: ProductPrice,
};

export const Price = () => <ProductPrice value="1980" />;
export const HideShipping = () => <ProductPrice value="1980" hideShippingIcon />;
