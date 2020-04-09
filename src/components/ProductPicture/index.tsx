import React from 'react';

import './product-picture.styles.scss';

interface Props {
  src: string;
  alt: string;
  large?: boolean;
}

const ProductPicture: React.FC<Props> = ({ src, alt, large = false }) => (
  <div className={`product__picture ${large ? 'product__picture--large' : ''}`}>
    <img alt={alt} src={src} />
  </div>
);

export default ProductPicture;
