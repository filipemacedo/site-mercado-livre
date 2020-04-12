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

  it('should render ProductPlaceholder with custom props', () => {
    const app = mount(
      <ProductPlaceholder marginLevel={16} rows={2} large={true} />,
    );

    expect(app.find('PlaceholderLayout.margin--16')).toBeDefined();
    expect(app.find('PlaceholderLayout.margin--16').prop('rows')).toBe(2);
    expect(
      app.find('.placeholder__image placeholder__image--large'),
    ).toBeDefined();

    const PlaceholderProduct = app.find(
      'PlaceholderLayout .placeholder__product',
    );

    expect(PlaceholderProduct).toHaveLength(2);
  });

  it('should render ProductPlaceholder with children and default props', () => {
    const app = mount(
      <ProductPlaceholder>
        <p className="custom">Lorem</p>
      </ProductPlaceholder>,
    );

    expect(app.find('PlaceholderLayout p.custom')).toBeDefined();
    expect(app.find('PlaceholderLayout p.custom').text()).toBe('Lorem');
  });

  it('should render ProductPlaceholder with rows eq 2', () => {
    const app = mount(
      <ProductPlaceholder rows={2}>
        <p className="custom">Lorem</p>
      </ProductPlaceholder>,
    );

    expect(app.find('PlaceholderLayout p.custom')).toBeDefined();
    expect(app.find('PlaceholderLayout p.custom')).toHaveLength(2);
    expect(app.find('PlaceholderLayout p.custom').first().text()).toBe('Lorem');
  });
});
