import React from 'react';
import ContainerBox from '../components/ContainerBox';

import '../styles/global.scss';

export default {
  title: 'ContainerBox',
  component: ContainerBox,
};

export const ContainerBoxWithoutChildren = () => <ContainerBox />;
export const ContainerBoxWithChildren = () => (
  <ContainerBox>
    <div className="padding--16">
      <h1>Title</h1>
    </div>
  </ContainerBox>
);

// ContainerWithoutChildren.
