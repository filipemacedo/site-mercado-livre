import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import faker from 'faker';

import NavigationBreadcrumb from '..';

describe('NavigationBreadcrumb Component', () => {
  it('should render a NavigationBreadcrumb component without categories', () => {
    const app = mount(
      <MemoryRouter>
        <NavigationBreadcrumb categories={[]} />
      </MemoryRouter>,
    );

    expect(app.find('.container')).toHaveLength(1);
    expect(app.find('.container .navigation-breadcrumb')).toHaveLength(1);
    expect(
      app.find('.container .navigation-breadcrumb Memo(BreadcrumbList)'),
    ).toHaveLength(1);
  });

  it('should render a NavigationBreadcrumb component with categories', () => {
    const categories = [faker.name.firstName(), faker.name.firstName()];

    const app = mount(
      <MemoryRouter>
        <NavigationBreadcrumb categories={categories} />
      </MemoryRouter>,
    );

    expect(app.find('.container')).toHaveLength(1);
    expect(app.find('.container .navigation-breadcrumb')).toHaveLength(1);

    const memoBreadCrumbList = app.find(
      '.container .navigation-breadcrumb Memo(BreadcrumbList)',
    );

    expect(memoBreadCrumbList).toHaveLength(1);

    const memoBreadCrumbListProps: any = memoBreadCrumbList.props();

    expect(memoBreadCrumbListProps.categories).toBe(categories);
  });
});
