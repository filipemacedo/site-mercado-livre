import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { searchItemsLoading, searchItemsFailed, searchItemsSuccess } from './items.actions';
import { searchItems } from '../../../services/api';
import { SearchResults, ItemsSagaEffect } from './items.types';

export function* searchItemsSaga({ payload }: ItemsSagaEffect) {
	try {
		yield put(searchItemsLoading());
		yield put(push(`/items?search=${payload.query}`));

		const searchResults: SearchResults = yield call(searchItems, payload.query);

		yield put(searchItemsSuccess(searchResults));
	} catch (error) {
		yield put(searchItemsFailed());

		console.log(error);
	}
}
