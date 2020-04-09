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
    <span className="price__symbol">
      {symbolCurrency || 'R$'}
    </span>
    <span className="price__value">{value}</span>

    {!hideShippingIcon && (
      <img
        className="shipping-icon"
        src={ShippingIcon}
      />
    )}
  </div>
);

export default ProductPrice;
