import React from 'react';

import './product-picture.styles.scss';

interface Props {
  src: string;
  alt: string;
  large?: boolean;
}

const ProductPicture: React.FC<Props> = ({ src, alt, large = false }) => (
  <figure className={`product__picture ${large ? 'product__picture--large' : ''}`}>
    <img alt={alt} src={src} />
  </figure>
);

export default ProductPicture;
