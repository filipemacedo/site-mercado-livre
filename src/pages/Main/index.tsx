import React from 'react';
import { useSelector } from 'react-redux';

const Main: React.FC = () => {
  const state = useSelector(state => state);

  console.log({ state });

  return <h1>Pagina principal</h1>;
};

export default Main;
