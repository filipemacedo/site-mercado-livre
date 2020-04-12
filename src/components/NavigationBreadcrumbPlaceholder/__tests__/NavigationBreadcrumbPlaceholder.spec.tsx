import React from 'react';
import { mount } from 'enzyme';
import NavigationBreadcrumbPlaceholder from '..';

describe('NavigationBreadcrumbPlaceholder Component', () => {
  it('should render NavigationBreadcrumbPlaceholder', () => {
    const app = mount(<NavigationBreadcrumbPlaceholder />);

    expect(app.find('PlaceholderLayout')).toHaveLength(1);
    expect(app.find('.placeholder-layout')).toHaveLength(1);
    expect(app.find('.placeholder-layout TextBlock')).toHaveLength(1);
    expect(app.find('.placeholder-layout TextBlock').prop('rows')).toBe(1);
  });
});
