import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import SearchResultsPage from '../';
import {
  ItemInterface,
  SearchResults,
} from '../../../store/modules/items/items.types';
import { searchItems } from '../../../services/api';
import { Provider } from 'react-redux';
import store from '../../../store';
import { ConnectedRouter } from 'connected-react-router';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import history from '../../../routes/history';
import delay from '../../../utils/delay';
import getErrorMessage from '../../../utils/error-message';

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

const mockSearchResult: SearchResults = {
  items: [mockItem],
  categories: ['First', 'Second'],
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
};

jest.mock('../../../services/api');

describe('SearchResults Page', () => {
  beforeEach(() => {
    (searchItems as jest.Mock).mockImplementation(() => mockSearchResult);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render ProductList based from search', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items?search=Macbook']}>
            <Switch>
              <Route path="/items" component={SearchResultsPage} />
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const NavigationBreadcrumb = app.find('NavigationBreadcrumb');

    expect(NavigationBreadcrumb.prop('categories')).toEqual(
      mockSearchResult.categories,
    );

    const MemoProductsList = app.find('Memo(ProductsList)');

    expect(MemoProductsList).toBeDefined();
    expect(MemoProductsList.prop('products')).toEqual(mockSearchResult.items);
  });

  it('should ProductList in the useEffect dispatch with correct search value', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items?search=Macbook']}>
            <Switch>
              <Route path="/items" component={SearchResultsPage} />
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    expect(searchItems).toBeCalledWith('Macbook');
    expect(searchItems).toBeCalledTimes(1);
  });

  it('should define ProductsSearch input value as search query', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items?search=Macbook']}>
            <Switch>
              <Route path="/items" component={SearchResultsPage} />
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    expect(app.find('ProductsSearch form input').prop('value')).toBe('Macbook');
  });

  it('should show ProductPlaceholder when loading is true', () => {
    (searchItems as jest.Mock).mockImplementation(() =>
      delay(1000, mockSearchResult),
    );

    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items?search=Macbook']}>
            <Switch>
              <Route path="/items" component={SearchResultsPage} />
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    expect(app.find('ProductPlaceholder')).toBeDefined();
  });

  it('should reset search query and search results when component unmount', () => {
    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items?search=Macbook']}>
            <Switch>
              <Route path="/items" component={SearchResultsPage} />
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    const { searchQuery, items } = store.getState().items;

    expect(items.length).toBe(mockSearchResult.items.length);
    expect(searchQuery).toBe('Macbook');

    app.unmount();

    const itemsThenUnmount = store.getState().items;

    expect(itemsThenUnmount.items.length).not.toBe(
      mockSearchResult.items.length,
    );
    expect(itemsThenUnmount.searchQuery).not.toBe('Macbook');
  });

  it('should show BoxError when error is true', () => {
    (searchItems as jest.Mock).mockImplementation(() => {
      throw {
        status: 500,
      };
    });

    const app = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MemoryRouter initialEntries={['/items?search=Macbook']}>
            <Switch>
              <Route path="/items" component={SearchResultsPage} />
            </Switch>
          </MemoryRouter>
        </ConnectedRouter>
      </Provider>,
    );

    expect(app.find('ErrorBox')).toBeDefined();
    expect(app.find('ErrorBox').prop('description')).toBe(getErrorMessage(500));
  });
});
