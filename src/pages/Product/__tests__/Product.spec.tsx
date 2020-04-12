import React from 'react';
import { mount } from 'enzyme';
import Product from '../index';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import faker from 'faker';
import { findItem } from '../../../services/api';
import { ItemInterface } from '../../../store/modules/items/items.types';
import store from '../../../store';
import { ConnectedRouter } from 'connected-react-router';
import history from '../../../routes/history';
import numberFormatCurrency from '../../../utils/number-format-currency';

jest.mock('../../../services/api');

const mockItem: ItemInterface = {
  description: faker.lorem.paragraph(),
  sold_quantity: faker.random.number(),
  id: faker.random.uuid(),
  picture: faker.internet.avatar(),
  title: faker.lorem.word(),
  condition: faker.lorem.word(),
  address: faker.address.city(),
  free_shipping: faker.random.boolean(),
  price: {
    currency: 'BRL',
    symbol: 'R$',
    decimals: 2,
    amount: faker.random.number(),
  },
};

describe('Product Page', () => {
  beforeEach(() => {
    (findItem as jest.Mock).mockImplementation((): ItemInterface => mockItem);
  });
  it('should show a Product based from id param', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items/valid_id']}>
            <Switch>
              <Route path="/items" component={Product}></Route>
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const ProductSection = app.find('DefaultLayout main section.product');
    const DesiredProduct = ProductSection.find('DesiredProduct');

    expect(DesiredProduct).toBeDefined();

    const {
      onPurchaseClick,
      ...desiredProductProps
    }: any = DesiredProduct.props();

    expect(desiredProductProps).toEqual({
      condition: mockItem.condition,
      description: mockItem.description,
      name: mockItem.title,
      picture: mockItem.picture,
      sales: mockItem.sold_quantity,
      symbolCurrency: 'R$',
      value: numberFormatCurrency({
        ...mockItem.price,
        value: mockItem.price.amount,
      }),
    });

    console.log(ProductSection.debug());
  });
});
