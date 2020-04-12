import React from 'react';
import { mount } from 'enzyme';
import ProductPrice from '..';

describe('ProductPrice Component', () => {
	it('should render ProductPrice with default props and a custom value', () => {
		const app = mount(<ProductPrice value={100} />);

		expect(app.find('.product__price')).toHaveLength(1);
		expect(app.find('.price__symbol.margin-right--5')).toHaveLength(1);
		expect(app.find('.price__symbol.margin-right--5').text()).toBe('R$');
		expect(app.find('.price__value')).toHaveLength(1);
		expect(app.find('.price__value').text()).toEqual('100');
		expect(app.find('img.shipping-icon.margin-left--10')).toHaveLength(1);
	});

	it('should render ProductPrice with custom props', () => {
		const app = mount(<ProductPrice value={100} symbolCurrency="$" />);

		expect(app.find('.price__symbol.margin-right--5').text()).toBe('$');
		expect(app.find('.price__value')).toHaveLength(1);
		expect(app.find('.price__value').text()).toEqual('100');
	});

	it('should render ProductPrice and hide the shipping icon when hideShippingIcon is true', () => {
		const app = mount(<ProductPrice value={100} hideShippingIcon />);

		expect(app.find('.price__value').text()).toEqual('100');
		expect(app.find('.price__value')).toHaveLength(1);
		expect(app.find('img.shipping-icon.margin-left--10')).toHaveLength(0);
	});
});
