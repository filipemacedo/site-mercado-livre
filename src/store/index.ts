import { Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import rootSaga from './modules/rootSaga';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';

const sagaMiddlewares: SagaMiddleware<object> = createSagaMiddleware();

const middlewares = [ sagaMiddlewares, routerMiddleware(history) ];

const store: Store<any> = createStore(rootReducer(history), middlewares);

sagaMiddlewares.run(rootSaga);

export default store;