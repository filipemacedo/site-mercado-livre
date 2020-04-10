import React from 'react';
import { mount } from 'enzyme';
import BreadcrumbList from '..';

describe('BreadcrumbList Component', () => {
  it('should render breadcrumb list component without categories', () => {
    const app = mount(<BreadcrumbList categories={[]} />);

    expect(app.find('.navigation-breadcrumb__list')).toHaveLength(1);
    expect(app.find('.navigation-breadcrumb__list li')).toHaveLength(0);
  });
});
