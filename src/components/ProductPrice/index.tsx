import React from 'react';

import HighShippingIcon from '../../assets/icons/ic_shipping@2x.png.png';
import LowShippingIcon from '../../assets/icons/ic_shipping.png';

import './product-price.styles.scss';

export interface ProductPriceProps {
  symbolCurrency?: string;
  value: number | string;
  hideShippingIcon?: boolean;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  value,
  symbolCurrency = 'R$',
  hideShippingIcon = false,
}) => (
  <div className="product__price">
    <span className="price__symbol margin-right--5">{symbolCurrency}</span>
    <span className="price__value">{value}</span>

    {!hideShippingIcon && (
      <img
        alt="Frete disponível"
        className="shipping-icon margin-left--10"
        src={LowShippingIcon}
        srcSet={`${LowShippingIcon} 500w, ${HighShippingIcon} 768w`}
      />
    )}
  </div>
);

export default ProductPrice;
