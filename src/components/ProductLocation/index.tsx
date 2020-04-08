import React from 'react';

import "./product-location.styles.scss"

export interface ProductLocationProps {
 location: string;
}

const ProductLocation: React.FC<ProductLocationProps> = ({ location }) => (
  <div className="product__location-container">
    <span>{location}</span>
  </div>
);

export default ProductLocation;
