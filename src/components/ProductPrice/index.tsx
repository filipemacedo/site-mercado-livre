import React from 'react';

import ShippingIcon from '../../assets/icons/ic_shipping@2x.png.png'

import "./product-price.styles.scss";

export interface ProductPriceProps {
  symbolCurrency?: string;
  value: string;
  hideShippingIcon?: boolean;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  symbolCurrency,
  value,
  hideShippingIcon = false,
}) => (
  <div className="product__price">
    <span className="product__price__symbol">
      {symbolCurrency || 'R$'}
    </span>
    <span className="product__price__value">{value}</span>

    {!hideShippingIcon && (
      <img
        className="shipping_icon"
        src={ShippingIcon}
      />
    )}
  </div>
);

export default ProductPrice;
