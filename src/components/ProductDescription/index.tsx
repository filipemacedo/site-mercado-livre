import React from 'react';

import './product-description.styles.scss';

export interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => (
  <div className="product__informations__description">
    <p>{description}</p>
  </div>
);

export default ProductDescription;
