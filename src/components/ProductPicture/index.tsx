import React from 'react';

import './product-picture.styles.scss';

interface Props {
  src: string;
  alt: string;
}

const ProductPicture: React.FC<Props> = ({ src, alt }) => (
  <img alt={alt} className="product__picture" src={src} />
);

export default ProductPicture;
