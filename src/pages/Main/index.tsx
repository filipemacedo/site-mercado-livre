import React from 'react';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Main: React.FC = () => {
	const dispatch = useDispatch();

	function onSearchSubmit(query: string) {
		dispatch(push(`/items?search=${query}`));
	}

	return <Header onSearchSubmit={onSearchSubmit} />;
};

export default Main;
