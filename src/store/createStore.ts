import { applyMiddleware, createStore, Reducer, Middleware } from 'redux';
import { SagaMiddleware } from 'redux-saga';

export default (
  reducers: Reducer<any, any>,
  middlewares: SagaMiddleware[] | Middleware[]
) => createStore(reducers, applyMiddleware(...middlewares));
