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
import { resetFindItem } from '../../../store/modules/items/items.actions';
import delay from '../../../utils/delay';

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

  afterEach(() => {
    jest.clearAllMocks();
    store.dispatch(resetFindItem());
  });

  it('should show a Product based from id param', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items/valid_id']}>
            <Switch>
              <Route path="/items/:id" component={Product}></Route>
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

    expect(findItem).toBeCalledWith("valid_id");

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
  });

  it('should show a DesiredProductPlaceholder when is loading', () => {
    (findItem as jest.Mock).mockImplementation(async () => {
      await delay(2000, mockItem);
    });

    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items/valid_id']}>
            <Switch>
              <Route path="/items/:id" component={Product}></Route>
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const ProductSection = app.find('DefaultLayout main section.product');

    expect(ProductSection.find('DesiredProductPlaceholder')).toBeDefined();
  });

  it('should show a DesiredProductPlaceholder when is loading eq true, but loading property receive false value show DesiredProduct', async () => {
    (findItem as jest.Mock).mockImplementation(async () =>
      delay(1000, mockItem),
    );

    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items/valid_id']}>
            <Switch>
              <Route path="/items/:id" component={Product}></Route>
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const ProductSection = app.find('DefaultLayout main section.product');

    expect(ProductSection.find('DesiredProductPlaceholder')).toBeDefined();

    await delay(1500);

    app.update();

    expect(app.find("DesiredProduct")).toHaveLength(1);
  });

  it('should reset finded item when unmount component', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items/valid_id']}>
            <Switch>
              <Route path="/items/:id" component={Product}></Route>
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const { selectedItem } = store.getState().items;

    app.unmount();

    const currentSelectedItem = store.getState().items.selectedItem;

    expect(selectedItem).not.toEqual(currentSelectedItem);
    expect(currentSelectedItem).not.toBeDefined();
  })
});
