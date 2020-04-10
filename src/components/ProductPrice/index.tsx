import React from 'react';

import ShippingIcon from '../../assets/icons/ic_shipping@2x.png.png'

import "./product-price.styles.scss";

export interface ProductPriceProps {
  symbolCurrency?: string;
  value: number;
  hideShippingIcon?: boolean;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  symbolCurrency,
  value,
  hideShippingIcon = false,
}) => (
  <div className="product__price">
    <span className="price__symbol margin-right--5">
      {symbolCurrency || 'R$'}
    </span>
    <span className="price__value">{value}</span>

    {!hideShippingIcon && (
      <img
        alt="Frete disponível"
        className="shipping-icon margin-left--10"
        src={ShippingIcon}
      />
    )}
  </div>
);

export default ProductPrice;
