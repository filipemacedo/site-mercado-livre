import React from 'react';
import { mount } from 'enzyme';
import PlaceholderLayout from '..';

describe('PlaceholderLayout component', () => {
  it('should render PlaceholderLayout without children', () => {
    const app = mount(<PlaceholderLayout />);

    expect(app.find('.placeholder-layout')).toBeDefined();
  });

  it('should render PlaceholderLayout with children and 2 rows', () => {
    const app = mount(
      <PlaceholderLayout rows={2}>
        <p>Lorem ipsum</p>
      </PlaceholderLayout>,
    );

    expect(app.find('.placeholder-layout')).toBeDefined();
    expect(app.find('.placeholder-layout p')).toHaveLength(2);
    expect(app.find('.placeholder-layout p').first().text()).toEqual(
      'Lorem ipsum',
    );
  });
});
