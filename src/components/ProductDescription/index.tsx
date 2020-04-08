import React from 'react';

import './styles/product-description.styles.scss';

interface Props {
  description: string;
}

const ProductDescription: React.FC<Props> = ({ description }) => (
  <div className="product__informations__description">
    <p>{description}</p>
  </div>
);

export default ProductDescription;
