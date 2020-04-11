import { put, call } from 'redux-saga/effects';
import {
	searchItemsLoading,
	searchItemsFailed,
	searchItemsSuccess,
	findItemLoading,
	findItemSuccess,
	findItemFailed,
	defineSearchQuery,
	resetSearchQuery
} from './items.actions';
import { searchItems, findItem } from '../../../services/api';
import { SearchResults, ItemsSagaEffect, ItemInterface } from './items.types';

export function* searchItemsSaga({ payload }: ItemsSagaEffect) {
	try {
		const { query } = payload;

		yield put(defineSearchQuery(query));
		yield put(searchItemsLoading());

		const searchResults: SearchResults = yield call(searchItems, query);

		yield put(searchItemsSuccess(searchResults));
	} catch (error) {
		yield put(searchItemsFailed());

		console.log(error);
	}
}

export function* findItemSaga({ payload }: ItemsSagaEffect) {
	try {
		yield put(resetSearchQuery());
		yield put(findItemLoading());

		const itemResult: ItemInterface = yield call(findItem, payload.itemId);

		yield put(findItemSuccess(itemResult));
	} catch (error) {
		yield put(findItemFailed());
	}
}
