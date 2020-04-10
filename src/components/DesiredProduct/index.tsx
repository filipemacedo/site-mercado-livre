import React from 'react';
import ProductPicture from '../ProductPicture';
import ProductDescription from '../ProductDescription';
import MacbookImage from '../../assets/images/macbook.webp';
import ProductInformations from '../ProductInformations';

import './desired-product.styles.scss';

interface DesiredProductProps {
  onPurchaseClick(): void;
  condition: string;
  name: string;
  sales: number;
  value: number;
  description: string;
}

const DesiredProduct: React.FC<DesiredProductProps> = ({
  onPurchaseClick,
  condition,
  name,
  sales,
  value,
  description,
}) => (
  <div className="desired-product margin--32">
    <ProductPicture alt="" large src={MacbookImage} />
    <ProductInformations
      condition={condition}
      hideLocation
      hideShippingIcon
      name={name}
      sales={sales}
      size="medium"
      value={value}>
      <button
        className="btn btn--rounded btn--full bg--blue color--white border--none margin-top--32"
        onClick={onPurchaseClick}
        type="button">
        Comprar
      </button>
    </ProductInformations>
    <ProductDescription
      description={description}
      title="Descripción del producto"
    />
  </div>
);

export default DesiredProduct;
