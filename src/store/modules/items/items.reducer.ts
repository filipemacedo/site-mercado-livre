import { Reducer } from 'react';
import { ItemsState, ItemsReducerAction } from './items.types';

const itemsInitialState: ItemsState = {
	loading: false,
	error: false,
	items: [],
	categories: [],
	author: {
		name: '',
		lastname: ''
	}
};

const reducer: Reducer<ItemsState, ItemsReducerAction> = (state = itemsInitialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
