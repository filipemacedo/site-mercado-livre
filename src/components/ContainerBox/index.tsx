import React from 'react';
import Box from '../Box';

const ContainerBox: React.FC = ({ children }) => (
  <div className="container">
    <Box>{children}</Box>
  </div>
);

export default ContainerBox;
