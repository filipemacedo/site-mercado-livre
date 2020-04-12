import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import ProductsList from '..';
import { ItemsInterface } from '../../../store/modules/items/items.types';
import { MemoryRouter } from 'react-router-dom';
import numberFormatCurrency from '../../../utils/number-format-currency';

function factoryProduct() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.slug(),
    picture: faker.internet.avatar(),
    condition: faker.lorem.word(),
    address: faker.address.city(),
    free_shipping: faker.random.boolean(),
    price: {
      currency: 'BRL',
      symbol: 'R$',
      amount: faker.random.number(),
      decimals: 2,
    },
  };
}

describe('ProductsList Component', () => {
  it('should render ProductsList without products', () => {
    const app = mount(<ProductsList products={[]} />);

    expect(app.find('Memo(ProductsList)')).toHaveLength(1);
    expect(app.find('Memo(ProductsList) ol')).toHaveLength(1);
    expect(app.find('Memo(ProductsList) ol li')).toHaveLength(0);
  });

  it('should render ProductsList with products and pass correct params', () => {
    const products: ItemsInterface[] = [factoryProduct()];
    const [firstProduct] = products;

    const app = mount(
      <MemoryRouter>
        <ProductsList products={products} />
      </MemoryRouter>,
    );

    expect(app.find('Memo(ProductsList)')).toHaveLength(1);
    expect(app.find('Memo(ProductsList) ol')).toHaveLength(1);
    expect(
      app.find('Memo(ProductsList) ol li.products-list__product'),
    ).toHaveLength(1);
    const Link = app.find(
      'Memo(ProductsList) ol li.products-list__product Link',
    );

    expect(Link).toHaveLength(1);
    expect(Link.prop('to')).toBe(`/items/${firstProduct.id}`);
    expect(app.find('ProductPicture')).toHaveLength(1);
    expect(app.find('ProductPicture').props()).toEqual({
      alt: firstProduct.title,
      src: firstProduct.picture,
    });
    expect(app.find('ProductInformations')).toHaveLength(1);
    expect(app.find('ProductInformations').props()).toEqual({
      address: firstProduct.address,
      hideShippingIcon: !firstProduct.free_shipping,
      name: firstProduct.title,
      symbolCurrency: firstProduct.price.symbol,
      value: numberFormatCurrency({
        currency: firstProduct.price.currency,
        decimals: 2,
        value: firstProduct.price.amount,
      }),
    });
  });
});
