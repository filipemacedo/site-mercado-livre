import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { searchItemsLoading, searchItemsFailed, searchItemsSuccess } from './items.actions';
import { searchItems } from '../../../services/api';
import { SearchResults, ItemsSagaEffect } from './items.types';

export function* searchItemsSaga({ payload }: ItemsSagaEffect) {
	try {
		yield put(searchItemsLoading());

		const searchResults: SearchResults = yield call(searchItems, payload.query);

		yield put(searchItemsSuccess(searchResults));
		yield put(push(`/items?search=${payload.query}`));
	} catch (error) {
		yield put(searchItemsFailed());

		console.log(error);
	}
}
