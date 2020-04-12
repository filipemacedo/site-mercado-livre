import React from 'react';
import { mount } from 'enzyme';
import PlaceholderLayout from '..';

describe("PlaceholderLayout component", () => {
 it('should render PlaceholderLayout without children', () => {
  const app = mount(<PlaceholderLayout />);

  expect(app.find(".placeholder-layout")).toBeDefined();
 })
})