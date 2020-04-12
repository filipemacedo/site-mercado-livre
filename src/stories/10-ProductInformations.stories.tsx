import React from 'react';
import ProductInformations from '../components/ProductInformations';

export default {
  title: 'ProductInformations',
  component: ProductInformations,
};

export const Component = () => (
  <ProductInformations value="1980" name="Macbook" />
);

export const HideShippingIcon = () => (
  <ProductInformations value="1980" name="Macbook" hideShippingIcon />
);

export const CompleteProps = () => (
  <ProductInformations
    value="1980"
    name="Macbook"
    hideShippingIcon
    address="Lorem"
    condition="Nuevo"
    sales={100}
  />
);

export const HideLocation = () => (
  <ProductInformations
    value="1980"
    name="Macbook"
    hideShippingIcon
    hideLocation
    address="Lorem"
    condition="Nuevo"
    sales={100}
  />
);

export const MediumSize = () => (
  <ProductInformations
    value="1980"
    name="Macbook"
    hideShippingIcon
    hideLocation
    size="medium"
    address="Lorem"
    condition="Nuevo"
    sales={100}
  />
);