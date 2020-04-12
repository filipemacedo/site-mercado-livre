import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import ProductPicture from '..';

describe('ProductPicture Component', () => {
	it('should render ProductPicture with default size', () => {
		const picture = {
			src: faker.internet.avatar(),
			alt: faker.lorem.paragraph()
		};

		const app = mount(<ProductPicture {...picture} />);

		expect(app.find('.product__picture')).toHaveLength(1);
		expect(app.find('.product__picture.product__picture--large')).toHaveLength(0);
		expect(app.find('.product__picture img')).toHaveLength(1);
		expect(app.find('.product__picture img').props()).toEqual(picture);
 });

 it('should render ProductPicture with large size', () => {
		const picture = {
			src: faker.internet.avatar(),
			alt: faker.lorem.paragraph()
		};

		const app = mount(<ProductPicture {...picture} large />);

		expect(app.find('.product__picture')).toHaveLength(1);
		expect(app.find('.product__picture.product__picture--large')).toHaveLength(1);
		expect(app.find('.product__picture img')).toHaveLength(1);
		expect(app.find('.product__picture img').props()).toEqual(picture);
 });
});
