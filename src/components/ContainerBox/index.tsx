import React from 'react';

const ContainerBox: React.FC = ({ children }) => (
  <div className="container container-sm--full">
    <div className="box">{children}</div>
  </div>
);

export default ContainerBox;
