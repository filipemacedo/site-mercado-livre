import React from 'react';
import { mount } from 'enzyme';
import DesiredProductPlaceholder from '..';

describe('DesiredProductPlaceholder Component', () => {
  it('should render DesiredProductPlaceHolder', () => {
    const app = mount(<DesiredProductPlaceholder />);

    expect(app.find('.placeholder-desired-product.margin--32')).toHaveLength(1);
    expect(
      app.find('.placeholder-desired-product ProductPlaceholder'),
    ).toHaveLength(1);

    expect(
      app.find('.placeholder-desired-product__description-title'),
    ).toBeDefined();
    expect(app.find('.placeholder-desired-product__description')).toBeDefined()
  });

  it('should DesiredProductPlaceholder pass correct params to Placeholder components', () => {
   const app = mount(<DesiredProductPlaceholder />);

   const { large, rows }: any = app
     .find('.placeholder-desired-product ProductPlaceholder')
     .props();

   expect({ large, rows }).toEqual({ large: true, rows: 1 });

   expect(
     app.find('.placeholder-desired-product__description').first().prop('rows'),
   ).toBe(6);
 });
});
