/* eslint-disable react/forbid-component-props */
import React from 'react';

import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';
import ProductPlaceholder from '../ProductPlaceholder';

import './desired-product-placeholder.styles.scss';

const DesiredProductPlaceholder = () => (
  <div className="placeholder-layout placeholder-desired-product margin--32">
    <ProductPlaceholder large rows={1}>
      <RectShape className="placeholder-desired-product__btn" />
    </ProductPlaceholder>
    <TextBlock
      className="placeholder-desired-product__description-title"
      color=""
      rows={1}
    />
    <TextBlock
      className="placeholder-desired-product__description"
      color=""
      rows={6}
    />
  </div>
);

export default DesiredProductPlaceholder;
