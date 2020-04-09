import React from 'react';

import './product-picture.styles.scss';

interface Props {
  src: string;
  alt: string;
  large?: boolean;
}

const ProductPicture: React.FC<Props> = ({ src, alt, large = false }) => (
  <img
    alt={alt}
    className={`product__picture ${large ? 'product__picture--large' : ''}`}
    src={src}
  />
);

export default ProductPicture;
