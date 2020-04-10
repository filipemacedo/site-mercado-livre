import { put, call } from 'redux-saga/effects';
import { searchItemsLoading, searchItemsFailed, searchItemsSuccess } from './items.actions';
import { searchItems } from '../../../services/api';
import { SearchResults, ItemsSagaEffect } from './items.types';

export function* searchItemsSaga({ payload }: ItemsSagaEffect) {
	try {
		yield put(searchItemsLoading());

		const searchResults: SearchResults = yield call(searchItems, payload.query);
		
		yield put(searchItemsSuccess(searchResults));
	} catch (error) {
		yield put(searchItemsFailed());

		console.log(error);
	}
}
