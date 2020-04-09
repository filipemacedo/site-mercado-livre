import React from 'react';
import ProductPrice, { ProductPriceProps } from '../ProductPrice';

import './product-informations.styles.scss';

interface ProductInformationsProps {
  className?: string;
  name: string;
}

type Props = ProductPriceProps & ProductInformationsProps;

const ProductInformations: React.FC<Props> = ({
  value,
  symbolCurrency,
  hideShippingIcon,
  name,
}) => (
  <div className="product__informations">
    <ProductPrice
      hideShippingIcon={hideShippingIcon}
      symbolCurrency={symbolCurrency}
      value={value}
    />
    <p className="product__location">Canada</p>
    <h1 className="product__name">{name}</h1>
  </div>
);

export default ProductInformations;
