/* eslint-disable react/jsx-max-depth */
import React from 'react';
import ProductPicture from '../ProductPicture';
import ProductInformations from '../ProductInformations';
import ProductLocation from '../ProductLocation';
import MacbookImage from '../../assets/images/macbook.webp';

import './products-list.styles.scss';

interface Props {
  products: any[];
}

const ProductsList: React.FC<Props> = () => {
  return (
    <ol className="products-list">
      <li className="products-list__product">
        <ProductPicture alt="Um macbook novo!" src={MacbookImage} />
        <ProductInformations
          description="Uma fragrância para homens únicos não poderia ser criada como as outras."
          hideShippingIcon={false}
          value="1998"
        />
        <ProductLocation location="Canada" />
      </li>
    </ol>
  );
};

export default React.memo(ProductsList);
