/* eslint-disable react/forbid-component-props */

import React from 'react';
import { TextBlock } from 'react-placeholder/lib/placeholders';

import PlaceholderLayout from '../PlaceholderLayout';

const NavigationBreadcrumbPlaceholder = () => (
  <div className="container">
    <PlaceholderLayout className="margin-top--16 margin-bottom--16">
      <TextBlock color="" rows={1} />
    </PlaceholderLayout>
  </div>
);

export default NavigationBreadcrumbPlaceholder;
