import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Main from '..';
import store from '../../../store';
import { ConnectedRouter } from 'connected-react-router';
import history from '../../../routes/history';

describe('Main Page', () => {
  it('should render Main Page', () => {
    const app = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>,
    );

    expect(app.find('header.nav-header')).toHaveLength(1);
    expect(app.find('header .container')).toHaveLength(1);
    expect(app.find('Logo')).toHaveLength(1);
    expect(app.find('Logo Link')).toHaveLength(1);
    expect(app.find('Logo Link').prop('to')).toBe('/');
    expect(app.find('Logo Link img')).toBeDefined();
    expect(app.find('ProductsSearch')).toBeDefined();
  });

  it('should navigate to /items?search when submit search form', async () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter>
            <Main />
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const ProductsSearchInput = app.find('ProductsSearch input');
    const ProductsSearchForm = app.find('ProductsSearch form');

    ProductsSearchInput.simulate('change', { target: { value: 'Macbook' } });
    ProductsSearchForm.simulate('submit');

    const { location } = store.getState().router;

    expect(location.search).toBe('?search=Macbook');
  });
});
