import React from 'react';

import "./product-picture.styles.scss";

interface Props {
  src: string;
  alt: string;
}

const ProductPicture: React.FC<Props> = ({ src, alt }) => (
  <div className="product__picture">
    <img alt={alt} src={src} />
  </div>
);

export default ProductPicture;
