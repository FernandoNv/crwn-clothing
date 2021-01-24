import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const applyMiddlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...applyMiddlewares));

export const persistor = persistStore(store);