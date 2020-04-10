import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import DesiredProduct from '..';

describe('DesiredProduct Component', () => {
	it('should render DesiredProduct with informations', () => {
		const productInformations = {
			condition: 'Nuevo',
			name: faker.name.firstName(),
			sales: faker.random.number(1000),
			value: faker.random.number(1000),
			description: faker.lorem.paragraph(),
			onPurchaseClick: () => ({})
		};

		const app = mount(<DesiredProduct {...productInformations} />);

		expect(app.find('.desired-product.margin--32')).toHaveLength(1);

		const productPictureComponentProps = app.find('ProductPicture').props();
		const productInformationsComponentProps: any = app.find('ProductInformations').props();

		expect(productPictureComponentProps).toBeDefined();
		expect(productInformationsComponentProps).toBeDefined();
		expect(productInformationsComponentProps.condition).toBe(productInformations.condition);
		expect(productInformationsComponentProps.name).toBe(productInformations.name);
		expect(productInformationsComponentProps.sales).toBe(productInformations.sales);
		expect(productInformationsComponentProps.value).toBe(productInformations.value);

		expect(
			app.find('button.btn.btn--rounded.btn--full.bg--blue.color--white.border--none.margin-top--32')
		).toHaveLength(1);

		expect(app.find('ProductDescription')).toBeDefined();
	});

	it('should render DesiredProduct with informations but hide location and shipping icon', () => {
		const productInformations = {
			condition: 'Nuevo',
			name: faker.name.firstName(),
			sales: faker.random.number(1000),
			value: faker.random.number(1000),
			description: faker.lorem.paragraph(),
			onPurchaseClick: () => ({})
		};

		const app = mount(<DesiredProduct {...productInformations} />);

		expect(app.find('.desired-product.margin--32')).toHaveLength(1);

		const productInformationsComponentProps: any = app.find('ProductInformations').props();

		expect(productInformationsComponentProps).toBeDefined();
		expect(productInformationsComponentProps.hideLocation).toBe(true);
		expect(productInformationsComponentProps.hideShippingIcon).toBe(true);
		expect(productInformationsComponentProps.size).toBe("medium");
	});

	it('should render DesiredProduct with informations and large picture', () => {
		const productInformations = {
			condition: 'Nuevo',
			name: faker.name.firstName(),
			sales: faker.random.number(1000),
			value: faker.random.number(1000),
			description: faker.lorem.paragraph(),
			onPurchaseClick: () => ({})
		};

		const app = mount(<DesiredProduct {...productInformations} />);

		expect(app.find('.desired-product.margin--32')).toHaveLength(1);

		const productPictureComponentProps: any = app.find('ProductPicture').props();

		expect(productPictureComponentProps).toBeDefined();
		expect(productPictureComponentProps.large).toBe(true);
	});

	it('should render DesiredProduct with informations and description ', () => {
		const productInformations = {
			condition: 'Nuevo',
			name: faker.name.firstName(),
			sales: faker.random.number(1000),
			value: faker.random.number(1000),
			description: faker.lorem.paragraph(),
			onPurchaseClick: () => ({})
		};

		const app = mount(<DesiredProduct {...productInformations} />);

		expect(app.find('.desired-product.margin--32')).toHaveLength(1);

		const productDescriptionComponentProps: any = app.find('ProductDescription').props();

		expect(productDescriptionComponentProps).toBeDefined();
		expect(productDescriptionComponentProps.description).toBe(productInformations.description);
	});
});
