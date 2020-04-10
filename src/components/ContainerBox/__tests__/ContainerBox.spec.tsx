import React from 'react';
import { mount } from 'enzyme';
import ContainerBox from '..';

describe('ContainerBox component', () => {
  it('should render ContainerBox component', () => {
    const app = mount(<ContainerBox />);

    expect(app.find('.container')).toHaveLength(1);
    expect(app.find('.box')).toHaveLength(1);
  });

  it('should render ContainerBox component render a children', () => {
   const app = mount(
     <ContainerBox>
       <h1>Meu texto</h1>
     </ContainerBox>,
   );

   expect(app.find('.container')).toHaveLength(1);
   expect(app.find('.box')).toHaveLength(1);
   expect(app.find('.box h1')).toHaveLength(1);
 });
});
