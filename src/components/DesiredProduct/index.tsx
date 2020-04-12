import React from 'react';
import ProductPicture from '../ProductPicture';
import ProductDescription from '../ProductDescription';
import ProductInformations from '../ProductInformations';

import './desired-product.styles.scss';

export interface DesiredProductProps {
  onPurchaseClick(): void;
  condition: string;
  name: string;
  sales: number;
  value: string;
  description: string;
  symbolCurrency: string;
  picture: string;
}

const DesiredProduct: React.FC<DesiredProductProps> = ({
  onPurchaseClick,
  condition,
  name,
  sales,
  value,
  description,
  symbolCurrency,
  picture,
}) => (
  <div className="desired-product margin--32">
    <ProductPicture alt={name} large src={picture} />
    <ProductInformations
      condition={condition}
      hideLocation
      hideShippingIcon
      name={name}
      sales={sales}
      size="medium"
      symbolCurrency={symbolCurrency}
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
