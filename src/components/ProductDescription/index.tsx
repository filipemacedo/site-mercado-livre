import React from 'react';

import './product-description.styles.scss';

export interface ProductDescriptionProps {
  description: string;
  title: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  title,
}) => (
  <div className="product__description">
    <h2>{title}</h2>
    <p className="margin-top--32">{description}</p>
  </div>
);

export default ProductDescription;
