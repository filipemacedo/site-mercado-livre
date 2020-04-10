import React from 'react';
import ProductPicture from '../ProductPicture';
import ProductInformations from '../ProductInformations';

import './products-list.styles.scss';
import { ItemsInterface } from '../../store/modules/items/items.types';

interface Props {
  products: ItemsInterface[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ol className="products-list">
      {products.map((product) => (
        <li className="products-list__product" key={product.id}>
          <ProductPicture alt={product.title} src={product.picture} />
          <ProductInformations
            condition={product.condition}
            hideShippingIcon={!product.free_shipping}
            name={product.title}
            symbolCurrency={product.price?.currency}
            value={product?.price?.amount.toFixed(product.price.decimals)}
          />
        </li>
      ))}
    </ol>
  );
};

export default React.memo(ProductsList);
