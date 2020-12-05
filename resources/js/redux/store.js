import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger,sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default {store, persistor};