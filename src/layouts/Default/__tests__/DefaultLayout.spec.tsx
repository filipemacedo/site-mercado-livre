import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import faker from 'faker';
import DefaultLayout from '..';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('DefaultLayout', () => {
  it('should render DefaultLayout with Header and NavigationBreadCrumb', () => {
    const app = mount(
      <Provider store={store}>
        <MemoryRouter>
          <DefaultLayout categories={[]} />
        </MemoryRouter>
      </Provider>,
    );

    expect(app.find('Header')).toHaveLength(1);
    expect(app.find('main NavigationBreadcrumb')).toHaveLength(1);
  });

  it('should DefaultLayout render NavigationBreadcrumb with categories', () => {
    const categories = [faker.name.firstName(), faker.name.firstName()];

    const app = mount(
      <Provider store={store}>
        <MemoryRouter>
          <DefaultLayout categories={categories} />
        </MemoryRouter>
      </Provider>,
    );

    const navigationBreadCrumbProps: any = app
      .find('main NavigationBreadcrumb')
      .props();

    expect(navigationBreadCrumbProps.categories).toEqual(categories);
  });
});
