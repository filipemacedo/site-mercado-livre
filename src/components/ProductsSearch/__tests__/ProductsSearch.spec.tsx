import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductsSearch from '..';

describe('ProductsSearch', () => {
  it('should render ProductsSearch', () => {
    const app = shallow(<ProductsSearch onSubmit={() => ({})} />);

    expect(app).toMatchSnapshot();
  });

  it('should call method with search when user submit', () => {
    const submitSpy = jest.fn();

    const app = mount(<ProductsSearch onSubmit={submitSpy} />);

    const SearchForm = app.find('form.products-search');
    const SearchInput = SearchForm.find('input');

    SearchInput.simulate('change', { target: { value: 'Macbook' } });
    SearchForm.simulate('submit');

    expect(submitSpy).toBeCalledTimes(1);
    expect(submitSpy).toBeCalledWith('Macbook');
  });

  it('should not call method onSubmit when search is empty when user submit', () => {
    const submitSpy = jest.fn();

    const app = mount(<ProductsSearch onSubmit={submitSpy} />);

    const SearchForm = app.find('form.products-search');

    SearchForm.simulate('submit');

    expect(submitSpy).toBeCalledTimes(0);
  });
});
