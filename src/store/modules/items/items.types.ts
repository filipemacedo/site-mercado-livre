export enum ItemsTypeActions {
	'SEARCH_ITEMS' = '@items/SEARCH_ITEMS',
	'SEARCH_ITEMS_LOADING' = '@items/SEARCH_ITEMS_LOADING',
	'SEARCH_ITEMS_FAILED' = '@items/SEARCH_ITEMS_FAILED',
	'SEARCH_ITEMS_SUCCESS' = '@items/SEARCH_ITEMS_SUCCESS',

	'FIND_ITEM' = '@items/FIND_ITEM',
	'FIND_ITEM_LOADING' = '@item/FIND_ITEM_LOADING',
	'FIND_ITEM_FAILED' = '@item/FIND_ITEM_FAILED',
	'FIND_ITEM_SUCCESS' = '@item/FIND_ITEM_SUCCESS'
}

export interface AuthorInterface {
	name: string;
	lastname: string;
}

export interface ItemsInterface {
	id: string;
	title: string;
	picture: string;
	condition: string;
	free_shipping: boolean;
	price: {
		currency: string;
		amount: number;
		decimals: number;
	};
}

export interface SearchResults {
	items: ItemsInterface[];
	categories: string[];
	author: AuthorInterface;
}

export interface ItemInterface extends ItemsInterface {
	description: string;
	sold_quantity: number;
}

export interface ItemsState extends SearchResults {
	loading: boolean;
	error: boolean;
	selectedItem?: ItemInterface;
}

export interface ItemsReducerAction {
	type: string;
	payload: {
		searchResults: SearchResults;
	};
}

export interface ItemsSagaEffect {
	type: string;
	payload: {
		query: string;
	};
}
