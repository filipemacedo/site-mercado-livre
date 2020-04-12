import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import ProductInformations, { ProductInformationsProps } from '..';

const product: ProductInformationsProps = {
	value: faker.random.number(),
	name: faker.name.firstName(),
	condition: faker.name.firstName(),
	sales: faker.random.number(1000)
};

describe('ProductInformations Component', () => {
	it('should render ProductInformations with required props', () => {
		const app = mount(<ProductInformations {...product} />);

		expect(app.find('.product__informations.product__informations--default')).toHaveLength(1);
		expect(app.find('.product__general-informations')).toHaveLength(1);
		expect(app.find('.product__general-informations')).toHaveLength(1);
		expect(app.find('.product__general-informations .product__location')).toHaveLength(1);
		expect(app.find('h1.product__name.margin-top--16')).toHaveLength(1);
		expect(app.find('h1.product__name.margin-top--16').text()).toBe(product.name);
		expect(app.find('.product-informations__sales')).toHaveLength(1);
		expect(
			app.find('.product-informations__sales').text().includes(`${product.condition} - ${product.sales}`)
		).toBe(true);
	});

	it('should render ProductInformations without sales information when not have condition param', () => {
		const modifiedProduct = { ...product, condition: undefined };

		const app = mount(<ProductInformations {...modifiedProduct} hideLocation />);

		expect(app.find('.product__informations .product-informations__sales')).toHaveLength(0);
	});

	it('should render ProductInformations without sales information when not have sales param', () => {
		const modifiedProduct = { ...product, sales: undefined };

		const app = mount(<ProductInformations {...modifiedProduct} hideLocation />);

		expect(app.find('.product__informations .product-informations__sales')).toHaveLength(0);
	});

	it('should render ProductInformations without location', () => {
		const app = mount(<ProductInformations {...product} hideLocation />);

		expect(app.find('.product__general-informations .product__location')).toHaveLength(0);
	});

	it('should ProductInformations render ProductPrice with default props', () => {
		const app = mount(<ProductInformations {...product} />);

		const productPrice = app.find('ProductPrice');

		expect(productPrice).toBeDefined();

		const productPriceProps = productPrice.props();

		expect(productPriceProps).toEqual({
			hideShippingIcon: undefined,
			symbolCurrency: undefined,
			value: product.value
		});
	});

	it('should ProductInformations render ProductPrice with custom props', () => {
		const app = mount(<ProductInformations {...product} hideShippingIcon symbolCurrency="$" />);

		const productPrice = app.find('ProductPrice');

		expect(productPrice).toBeDefined();

		const productPriceProps = productPrice.props();

		expect(productPriceProps).toEqual({
			hideShippingIcon: true,
			symbolCurrency: '$',
			value: product.value
		});
	});
});
