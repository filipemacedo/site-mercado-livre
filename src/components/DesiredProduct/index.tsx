import React from 'react';
import ProductPicture from '../ProductPicture';
import Button from '../Button';
import ProductDescription from '../ProductDescription';
import MacbookImage from '../../assets/images/macbook.webp';

import './desired-product.styles.scss';
import ProductInformations from '../ProductInformations';

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
  <div className="desired-product">
    <ProductPicture alt="" large src={MacbookImage} />
    <ProductInformations
      condition={condition}
      hideLocation
      hideShippingIcon
      name={name}
      sales={sales}
      size="medium"
      value={value}>
      <Button onClick={onPurchaseClick} text="Comprar" />
    </ProductInformations>
    <ProductDescription
      description={description}
      title="Descripción del producto"
    />
  </div>
);

export default DesiredProduct;
