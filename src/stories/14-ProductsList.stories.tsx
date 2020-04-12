import React from 'react';
import ProductsList from '../components/ProductsList';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'ProductsList',
  component: ProductsList,
};

const product = {
  id: '1',
  picture: 'https://picsum.photos/200',
  title: 'Macbook',
  condition: 'Nuevo',
  address: 'Brasil',
  free_shipping: true,
  price: {
    currency: 'BRL',
    symbol: 'R$',
    amount: 100,
    decimals: 2,
  },
};

export const List = () => (
  <MemoryRouter>
    <ProductsList products={[product, product, product]} />
  </MemoryRouter>
);
