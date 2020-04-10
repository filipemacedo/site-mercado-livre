import React from 'react';
import { mount } from 'enzyme';
import Header from '..';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('should render a Header Component', () => {
    const app = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(app.find('.nav-header')).toHaveLength(1);
    expect(app.find('.nav-header .container')).toHaveLength(1);
    expect(app.find('.nav-header .container Logo')).toHaveLength(1);
    expect(app.find('.nav-header .container ProductsSearch')).toHaveLength(1);
  });
});
