import { action } from 'typesafe-actions';
import { ItemsTypeActions, SearchResults } from './items.types';

export const searchItems = (query: string) => action(ItemsTypeActions.SEARCH_ITEMS, { query });
export const searchItemsFailed = () => action(ItemsTypeActions.SEARCH_ITEMS_FAILED);
export const searchItemsLoading = () => action(ItemsTypeActions.SEARCH_ITEMS_LOADING);
export const searchItemsSuccess = (searchResults: SearchResults) =>
	action(ItemsTypeActions.SEARCH_ITEMS_SUCCESS, { searchResults });
