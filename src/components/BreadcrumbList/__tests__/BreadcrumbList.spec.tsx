import React from 'react';
import { mount } from 'enzyme';
import BreadcrumbList from '..';
import { MemoryRouter } from 'react-router-dom';

describe('BreadcrumbList Component', () => {
  it('should render breadcrumb list component without categories', () => {
    const app = mount(
      <MemoryRouter>
        <BreadcrumbList categories={[]} />
      </MemoryRouter>,
    );

    expect(app.find('.navigation-breadcrumb__list')).toHaveLength(1);
    expect(app.find('.navigation-breadcrumb__list li')).toHaveLength(0);
  });

  it('should render breadcrumb list component with categories', () => {
    const app = mount(
      <MemoryRouter>
        <BreadcrumbList categories={['Categoria']} />
      </MemoryRouter>,
    );

    expect(app.find('.navigation-breadcrumb__list')).toHaveLength(1);
    expect(app.find('.navigation-breadcrumb__list li')).toHaveLength(1);
    expect(app.find('.navigation-breadcrumb__list li a')).toHaveLength(1);
    expect(app.find('.navigation-breadcrumb__list li a').text()).toEqual(
      'Categoria',
    );
  });

  it('should render breadcrumb list component with categories and define last element as active', () => {
    const app = mount(
      <MemoryRouter>
        <BreadcrumbList categories={['Categoria', 'Ultimo elemento']} />,
      </MemoryRouter>,
    );

    expect(app.find('.navigation-breadcrumb__list li')).toHaveLength(2);
    expect(
      app.find('.navigation-breadcrumb__list li').last().prop('className'),
    ).toBe('navigation-breadcrumb__list__element--active');
  });
});
