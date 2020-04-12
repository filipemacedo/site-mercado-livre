import { Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { routerMiddleware, RouterState } from 'connected-react-router';

import history from '../routes/history';
import rootSaga from './modules/rootSaga';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import { ItemsState } from './modules/items/items.types';

export interface ApplicationState {
	items: ItemsState;
	router: RouterState;
}

const sagaMiddlewares: SagaMiddleware<object> = createSagaMiddleware();

const middlewares = [ sagaMiddlewares, routerMiddleware(history) ];

const store: Store<ApplicationState> = createStore(rootReducer(history), middlewares);

sagaMiddlewares.run(rootSaga);

export default store;
