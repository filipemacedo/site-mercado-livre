import { Reducer } from 'react';
import { ItemsState, ItemsReducerAction, ItemsTypeActions } from './items.types';

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
		case ItemsTypeActions.SEARCH_ITEMS_SUCCESS:
			const { searchResults } = action.payload;

			return {
				...state,
				loading: false,
				error: false,
				categories: searchResults.categories,
				author: searchResults.author,
				items: searchResults.items.slice(0, 4)
			};

		case ItemsTypeActions.SEARCH_ITEMS_LOADING:
			return {
				...state,
				error: false,
				loading: true
			};

		case ItemsTypeActions.SEARCH_ITEMS_FAILED:
			return {
				...state,
				loading: false,
				error: true
			};

		default:
			return state;
	}
};

export default reducer;
