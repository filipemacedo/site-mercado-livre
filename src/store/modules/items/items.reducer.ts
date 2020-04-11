import { Reducer } from 'react';
import { ItemsState, ItemsReducerAction, ItemsTypeActions } from './items.types';

const itemsInitialState: ItemsState = {
	loading: false,
	error: false,
	searchQuery: '',
	items: [],
	categories: [],
	author: {
		name: '',
		lastname: ''
	}
};

const reducer: Reducer<ItemsState, ItemsReducerAction> = (state = itemsInitialState, action) => {
	switch (action.type) {
		case ItemsTypeActions.RESET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: ''
			};

		case ItemsTypeActions.RESET_SEARCH_ITEMS:
			return {
				...state,
				items: [],
				categories: []
			};

		case ItemsTypeActions.RESET_FIND_ITEM:
			return {
				...state,
				selectedItem: undefined
			};

		case ItemsTypeActions.DEFINE_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload.query
			};

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

		case ItemsTypeActions.FIND_ITEM_SUCCESS:
			return {
				...state,
				selectedItem: action.payload.itemResult
			};

		case ItemsTypeActions.SEARCH_ITEMS_LOADING:
		case ItemsTypeActions.FIND_ITEM_LOADING:
			return {
				...state,
				error: false,
				loading: true
			};

		case ItemsTypeActions.SEARCH_ITEMS_FAILED:
		case ItemsTypeActions.FIND_ITEM_FAILED:
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
