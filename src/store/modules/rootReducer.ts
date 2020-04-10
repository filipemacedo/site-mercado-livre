import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import items from './items/items.reducer';

export default (history: History) =>
	combineReducers({
		router: connectRouter(history),
		items
	});
