import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Logo from '..';

describe('Logo Component', () => {
  it('should render a logo component', () => {
    const app = mount(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

   expect(app.find(".logo")).toHaveLength(1);
   expect(app.find(".logo Link").prop("to")).toBe("/");
   expect(app.find(".logo Link img")).toHaveLength(1);
  });
});
