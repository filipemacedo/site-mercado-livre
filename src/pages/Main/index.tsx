import React from 'react';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { searchItems } from '../../store/modules/items/items.actions';

const Main: React.FC = () => {
	const dispatch = useDispatch();

	function onSearchSubmit(query: string) {
		dispatch(searchItems(query));
	}

	return <Header onSearchSubmit={onSearchSubmit} />;
};

export default Main;
