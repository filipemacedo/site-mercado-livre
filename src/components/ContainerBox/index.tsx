import React from 'react';
import Container from '../Container';
import Box from '../Box';

const ContainerBox: React.FC = ({ children }) => (
  <Container>
    <Box>{children}</Box>
  </Container>
);

export default ContainerBox;
