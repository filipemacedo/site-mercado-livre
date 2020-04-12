import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Routes from '..';
import store from '../../store';

describe('Routes', () => {
  it('should define routes', () => {
    const app = mount(
      <Provider store={store}>
        <Routes />
      </Provider>,
    );

    expect(app.find('Connect(ConnectedRouterWithContext)')).toBeDefined();
    expect(app.find('ConnectedRouter')).toBeDefined();
    expect(app.find('Router')).toBeDefined();
    expect(app.find('Switch')).toBeDefined();
  });
});
