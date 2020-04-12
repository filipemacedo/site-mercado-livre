import React from 'react';
import { mount } from 'enzyme';
import ProductPlaceholder from '..';

describe('ProductPlaceholder Component', () => {
  it('should render ProductPlaceholder with default props', () => {
    const app = mount(<ProductPlaceholder />);

    expect(app.find('PlaceholderLayout')).toBeDefined();
    expect(app.find('PlaceholderLayout.placeholder__product')).toBeDefined();
    expect(
      app.find(
        'PlaceholderLayout.placeholder__product RectShape.placeholder__image',
      ),
    ).toBeDefined();
    expect(
      app.find(
        'PlaceholderLayout.placeholder__product .placeholder__general-informations',
      ),
    ).toBeDefined();

    expect(
      app.find(
        'PlaceholderLayout.placeholder__product .placeholder__general-informations TextBlock',
      ),
    ).toBeDefined();
  });
});
