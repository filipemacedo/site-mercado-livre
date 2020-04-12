import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Main from '..';
import store from '../../../store';

describe('Main Page', () => {
  it('should render Main Page', () => {
    const app = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>,
    );

    expect(app.find("header.nav-header")).toHaveLength(1);
    expect(app.find("header .container")).toHaveLength(1);
    expect(app.find("Logo")).toHaveLength(1);
    expect(app.find("Logo Link")).toHaveLength(1);
    expect(app.find("Logo Link").prop('to')).toBe("/");
    expect(app.find("Logo Link img")).toBeDefined();
    expect(app.find("ProductsSearch")).toBeDefined();
  });
});
