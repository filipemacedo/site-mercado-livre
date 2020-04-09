import React from 'react';
import ProductPrice, { ProductPriceProps } from '../ProductPrice';

import './product-informations.styles.scss';

interface Props {
  className?: string;
  name: string;
  condition?: string;
  hideLocation?: boolean;
  sales?: number;
  size?: 'default' | 'medium';
}

export type ProductInformationsProps = ProductPriceProps & Props;

const ProductInformations: React.FC<ProductInformationsProps> = ({
  value,
  symbolCurrency,
  hideShippingIcon,
  name,
  condition,
  sales,
  children,
  hideLocation = false,
  size = 'default',
}) => (
  <section className={`product__informations product__informations--${size}`}>
    {condition && sales && (
      <span className="product-informations__sales">
        {condition} - {sales} vendidos
      </span>
    )}
    <div className="product__general-informations">
      <ProductPrice
        hideShippingIcon={hideShippingIcon}
        symbolCurrency={symbolCurrency}
        value={value}
      />
      {!hideLocation && <p className="product__location">Canada</p>}
    </div>
    <h1 className="product__name">{name}</h1>
    {children}
  </section>
);

export default ProductInformations;
