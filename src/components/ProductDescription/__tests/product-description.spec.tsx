import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import ProductDescription, { ProductDescriptionProps } from '..';

describe('ProductDescritpion Component', () => {
  it('should render a ProductDescription component', () => {
    const product: ProductDescriptionProps = {
      description: faker.lorem.paragraph(),
      title: faker.lorem.slug(),
    };

    const app = mount(<ProductDescription {...product} />);

    expect(app.find(".product__description")).toHaveLength(1);
    expect(app.find(".product__description h2")).toHaveLength(1);
    expect(app.find(".product__description h2").text()).toBe(product.title);
    expect(app.find(".product__description p")).toHaveLength(1);
    expect(app.find(".product__description p").text()).toBe(product.description);
    expect(app.find(".product__description p.margin-top--32")).toHaveLength(1);
    expect(app.find(".product__description p.margin-top--32")).toHaveLength(1);
  });
});
