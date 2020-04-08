import React from 'react';

import "./product-price.styles.scss";

interface Props {
  symbolCurrency?: string;
  value: string;
  hideShippingIcon?: boolean;
}

const ProductPrice: React.FC<Props> = ({
  symbolCurrency,
  value,
  hideShippingIcon = false,
}) => (
  <div className="product__informations__price">
    <span className="product__informations__price__symbol">
      {symbolCurrency || 'R$'}
    </span>
    <span className="product__informations__price__value">{value}</span>

    {hideShippingIcon && (
      <img
        className="shipping_icon"
        src="./assets/icons/ic_shipping@2x.png.png"
      />
    )}
  </div>
);

export default ProductPrice;
