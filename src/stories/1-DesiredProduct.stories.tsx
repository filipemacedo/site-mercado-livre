import React from 'react';
import { action } from '@storybook/addon-actions';
import DesiredProduct from '../components/DesiredProduct';

export default {
  title: 'DesiredProduct',
  component: DesiredProduct,
};

export const Product = () => (
  <DesiredProduct 
    picture="https://picsum.photos/1200"
    symbolCurrency="R$"
    value="1980" 
    description={"Lorem ipsum"} 
    onPurchaseClick={action('purchase')} 
    condition={"Novo"} 
    name={"Macbook Air Apple 13'' I5 8va 1.6ghz 128gb"} 
    sales={180}  />
);
