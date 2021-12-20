import {
  Middleware,
  StoreEnhancer,
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistedReducer from './modules/persistReducer';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import type { WeatherAction, WeatherState } from './modules/weather/types';

export interface StoreState {
  weather: WeatherState;
}

export type StoreAction = WeatherAction;

const middlewares: Middleware[] = [ReduxThunk];

const sagaMiddlewares = createSagaMiddleware();

middlewares.push(sagaMiddlewares);

const composer: StoreEnhancer = compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer(rootReducer), composer);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSaga);

export { store, persistor };
