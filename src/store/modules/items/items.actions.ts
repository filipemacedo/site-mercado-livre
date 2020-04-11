import { action } from 'typesafe-actions';
import { ItemsTypeActions, SearchResults, ItemInterface } from './items.types';

export const searchItems = (query: string) => action(ItemsTypeActions.SEARCH_ITEMS, { query });
export const searchItemsFailed = () => action(ItemsTypeActions.SEARCH_ITEMS_FAILED);
export const searchItemsLoading = () => action(ItemsTypeActions.SEARCH_ITEMS_LOADING);
export const searchItemsSuccess = (searchResults: SearchResults) =>
	action(ItemsTypeActions.SEARCH_ITEMS_SUCCESS, { searchResults });

export const findItem = (itemId: string) => action(ItemsTypeActions.FIND_ITEM, { itemId });
export const findItemSuccess = (itemResult: ItemInterface) =>
	action(ItemsTypeActions.FIND_ITEM_SUCCESS, { itemResult });
export const findItemFailed = () => action(ItemsTypeActions.FIND_ITEM_FAILED);
export const findItemLoading = () => action(ItemsTypeActions.FIND_ITEM_LOADING);

export const defineSearchQuery = (query: string) => action(ItemsTypeActions.DEFINE_SEARCH_QUERY, { query });

export const resetFindItem = () => action(ItemsTypeActions.RESET_FIND_ITEM);
export const resetSearchItems = () => action(ItemsTypeActions.RESET_SEARCH_ITEMS);
export const resetSearchQuery = () => action(ItemsTypeActions.RESET_SEARCH_QUERY);
