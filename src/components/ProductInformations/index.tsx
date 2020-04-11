import React from 'react';
import ProductPrice, { ProductPriceProps } from '../ProductPrice';

import './product-informations.styles.scss';

interface Props {
  className?: string;
  name: string;
  condition?: string;
  hideLocation?: boolean;
  sales?: number;
  address?: string;
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
  address,
  hideLocation = false,
  size = 'default',
}) => {
  function verifyIfInformationsSalesIsVisible() {
    if (sales === undefined && !condition) return false;

    return true;
  }

  return (
    <section className={`product__informations product__informations--${size}`}>
      {verifyIfInformationsSalesIsVisible() && (
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
        {!hideLocation && <p className="product__location">{address}</p>}
      </div>
      <h1 className="product__name margin-top--16">{name}</h1>
      {children}
    </section>
  );
};

export default ProductInformations;
