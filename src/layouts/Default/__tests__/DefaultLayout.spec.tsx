import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import faker from 'faker';
import DefaultLayout from '..';

describe('DefaultLayout', () => {
	it('should render DefaultLayout with Header and NavigationBreadCrumb', () => {
		const app = mount(
			<MemoryRouter>
				<DefaultLayout categories={[]} />
			</MemoryRouter>
		);

		expect(app.find('Header')).toHaveLength(1);
		expect(app.find('main NavigationBreadcrumb')).toHaveLength(1);
	});

	it('should DefaultLayout render NavigationBreadcrumb with categories', () => {
		const categories = [ faker.name.firstName(), faker.name.firstName() ];

		const app = mount(
			<MemoryRouter>
				<DefaultLayout categories={categories} />
			</MemoryRouter>
		);

		const navigationBreadCrumbProps: any = app.find('main NavigationBreadcrumb').props();
  
  expect(navigationBreadCrumbProps.categories).toEqual(categories);
	});
});
