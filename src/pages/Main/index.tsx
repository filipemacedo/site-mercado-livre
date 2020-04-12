import React from 'react';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { ApplicationState } from '../../store';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    ({ items }: ApplicationState) => items.searchQuery,
  );
		
  function onSearchSubmit(query: string) {
    dispatch(push(`/items?search=${query}`));
  }

  return <Header onSearchSubmit={onSearchSubmit} searchText={searchQuery} />;
};

export default Main;
