import React from 'react';
import LogoComponent from '../components/Logo';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Logo',
  component: LogoComponent,
};

export const Logo = () => (
  <MemoryRouter>
    <LogoComponent />
  </MemoryRouter>
);
