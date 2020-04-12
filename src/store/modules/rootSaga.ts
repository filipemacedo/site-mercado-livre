import { all, takeLatest } from 'redux-saga/effects';
import { ItemsTypeActions } from './items/items.types';
import { searchItemsSaga, findItemSaga } from './items/items.sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest(ItemsTypeActions.SEARCH_ITEMS, searchItemsSaga),
		takeLatest(ItemsTypeActions.FIND_ITEM, findItemSaga)
	]);
}
