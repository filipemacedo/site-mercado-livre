import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import ProductInformations, { ProductInformationsProps } from '..';

const product: ProductInformationsProps = {
  value: faker.random.number(),
  name: faker.name.firstName(),
  condition: faker.name.firstName(),
  sales: faker.random.number(1000),
};

describe('ProductInformations Component', () => {
  it('should render ProductInformations with required props', () => {
    const app = mount(<ProductInformations {...product} />);

    expect(
      app.find('.product__informations.product__informations--default'),
    ).toHaveLength(1);
    expect(app.find('.product__general-informations')).toHaveLength(1);
    expect(app.find('.product__general-informations')).toHaveLength(1);
    expect(
      app.find('.product__general-informations .product__location'),
    ).toHaveLength(1);
    expect(app.find('h1.product__name.margin-top--16')).toHaveLength(1);
    expect(app.find('h1.product__name.margin-top--16').text()).toBe(
      product.name,
    );
    expect(app.find('.product-informations__sales')).toHaveLength(1);
    expect(
      app
        .find('.product-informations__sales')
        .text()
        .includes(`${product.condition} - ${product.sales}`),
    ).toBe(true);
  });
});
