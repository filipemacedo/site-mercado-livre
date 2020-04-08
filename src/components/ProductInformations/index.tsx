import React from 'react';
import ProductPrice, { ProductPriceProps } from '../ProductPrice';
import ProductDescription, {
  ProductDescriptionProps,
} from '../ProductDescription';

import "./product-informations.styles.scss"

interface ProductInformationsProps {
  className?: string;
}

type Props = ProductDescriptionProps &
  ProductInformationsProps &
  ProductPriceProps;

const ProductInformations: React.FC<Props> = ({
  className,
  description,
  value,
  symbolCurrency,
}) => (
  <div className={`product__informations ${className}`}>
    <ProductPrice symbolCurrency={symbolCurrency} value={value} />
    <ProductDescription description={description} />
  </div>
);

export default ProductInformations;
