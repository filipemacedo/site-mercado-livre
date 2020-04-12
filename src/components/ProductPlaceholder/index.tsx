/* eslint-disable react/forbid-component-props */
import React from 'react';
import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';

import PlaceholderLayout from '../PlaceholderLayout';

import './product-placeholder.styles.scss';

interface ProductInformationsProps {
  rows?: number;
  marginLevel?: 16 | 32;
  large?: boolean;
}

const ProductPlaceholder: React.FC<ProductInformationsProps> = ({
  marginLevel,
  children,
  rows = 1,
  large = false,
}) => {
  return (
    <PlaceholderLayout
      className={marginLevel ? `margin--${marginLevel}` : ''}
      rows={rows}>
      <div className="placeholder__product margin-bottom--16">
        <RectShape
          className={`placeholder__image ${
            large ? 'placeholder__image--large' : ''
          }`}
        />
        <div className="placeholder__general-informations">
          <TextBlock color="" rows={3} />
          {children}
        </div>
      </div>
    </PlaceholderLayout>
  );
};

export default ProductPlaceholder;
